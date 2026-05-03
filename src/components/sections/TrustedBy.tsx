"use client";

import { useEffect, useRef, useState } from "react";

const LOGOS = [
    { id: 1, name: "The Estée Lauder Companies Inc.", image: "/logos/esteelauder.png", scale: 1 },
    { id: 2, name: "FlowSec AI", image: "/logos/flowsec.png", scale: 0.75 },
    { id: 3, name: "LiveFlow", image: "/logos/liveflow.png", scale: 0.75 },
    { id: 4, name: "Redmax", image: "/logos/redmax.webp", scale: 0.75 },
    { id: 5, name: "Lazard", image: "/logos/lazard.svg", scale: 0.75 },
    { id: 6, name: "White Hat Growth Partners", image: "/logos/whgp.svg", scale: 1 },
    { id: 7, name: "Shauna Moran", image: "/logos/shaunamoran.webp", scale: 0.5 },
    { id: 8, name: "Vacutek", image: "/logos/vacutek.webp", scale: 0.5 },
    { id: 10, name: "Ziff Davis", image: "/logos/ziffdavis.svg", scale: 0.5 },
];

const GRID_COLS = 4;
const GRID_ROWS = 3;
const GRID_SIZE = GRID_COLS * GRID_ROWS; // 12
const ANIM_MS = 550;
const HOLD_MS = 3000;
const MAX_LOGO_DUPLICATES = 2;
const MAX_SIMULTANEOUS_FLIPS = 3;

// ── Helpers ──────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/** Returns the indices of orthogonal neighbors of a cell in the 4×3 grid. */
function getNeighborIndices(cellIdx: number): number[] {
    const row = Math.floor(cellIdx / GRID_COLS);
    const col = cellIdx % GRID_COLS;
    const neighbors: number[] = [];
    if (row > 0)              neighbors.push((row - 1) * GRID_COLS + col);
    if (row < GRID_ROWS - 1)  neighbors.push((row + 1) * GRID_COLS + col);
    if (col > 0)              neighbors.push(row * GRID_COLS + (col - 1));
    if (col < GRID_COLS - 1)  neighbors.push(row * GRID_COLS + (col + 1));
    return neighbors;
}

/**
 * Returns true if placing `logoId` at `cellIdx` would put two identical logos
 * next to each other (given the working `ids` array).
 */
function wouldBeAdjacent(logoId: number, cellIdx: number, ids: number[]): boolean {
    return getNeighborIndices(cellIdx).some((ni) => ids[ni] === logoId);
}

/**
 * Build an initial 4×3 logo assignment where:
 *  - no logo appears > MAX_LOGO_DUPLICATES times
 *  - no two identical logos are orthogonally adjacent
 */
function buildInitialGrid(): number[] {
    const result: number[] = new Array(GRID_SIZE).fill(-1);

    for (let i = 0; i < GRID_SIZE; i++) {
        const valid = shuffle(
            LOGOS.filter((logo) => {
                // count so far
                const count = result.slice(0, i).filter((id) => id === logo.id).length;
                if (count >= MAX_LOGO_DUPLICATES) return false;
                // if adding here would make 2, neither this cell nor its already-placed
                // neighbors may already show this logo adjacently
                if (count === 1 && wouldBeAdjacent(logo.id, i, result)) return false;
                return true;
            }),
        );
        result[i] = valid[0]?.id ?? LOGOS[0].id;
    }
    return result;
}

/**
 * Pick a valid next logo for `cellIdx` from the working `effectiveIds` array.
 * Constraints are relaxed progressively so a result is always guaranteed:
 *   1. Full rules: not current, ≤ MAX_LOGO_DUPLICATES, no adjacent twin
 *   2. Relax adjacency: allow adjacent twin if needed
 *   3. Last resort: any logo that differs from the current one
 */
function pickNextLogo(cellIdx: number, effectiveIds: number[]): number {
    const currentId = effectiveIds[cellIdx];

    const isValid = (logoId: number, checkAdjacency: boolean): boolean => {
        if (logoId === currentId) return false;
        const otherCells = effectiveIds
            .map((id, j) => ({ id, j }))
            .filter(({ id, j }) => id === logoId && j !== cellIdx);
        if (otherCells.length >= MAX_LOGO_DUPLICATES) return false;
        if (checkAdjacency && otherCells.length === 1 && wouldBeAdjacent(logoId, cellIdx, effectiveIds)) return false;
        return true;
    };

    // Pass 1: full constraints
    let valid = shuffle(LOGOS.filter((l) => isValid(l.id, true)));
    // Pass 2: relax adjacency
    if (valid.length === 0) valid = shuffle(LOGOS.filter((l) => isValid(l.id, false)));
    // Pass 3: anything different
    if (valid.length === 0) valid = shuffle(LOGOS.filter((l) => l.id !== currentId));
    // Absolute fallback
    if (valid.length === 0) return LOGOS[0].id;

    return valid[0].id;
}

// ── Cell state ────────────────────────────────────────────────────────────────

type CellState = {
    currentLogoId: number;
    nextLogoId: number | null; // non-null while animating
    animating: boolean;
};

// ── LogoCell component ────────────────────────────────────────────────────────

function LogoCell({ state, row, col }: { state: CellState; row: number; col: number }) {
    const curr = LOGOS.find((l) => l.id === state.currentLogoId);
    const next = state.nextLogoId != null ? LOGOS.find((l) => l.id === state.nextLogoId) : null;

    const borderRight = col < GRID_COLS - 1 ? "1px solid rgba(156,163,175,0.15)" : "none";
    const borderBottom = row < GRID_ROWS - 1 ? "1px solid rgba(156,163,175,0.15)" : "none";

    return (
        <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{ borderRight, borderBottom, height: "140px", perspective: "600px" }}
        >
            {/* Outgoing logo — rotates up and fades */}
            <div
                className="absolute inset-0 flex items-center justify-center px-8"
                style={{
                    transition: state.animating
                        ? `transform ${ANIM_MS}ms cubic-bezier(0.4,0,0.2,1), opacity ${ANIM_MS}ms ease`
                        : "none",
                    transform: state.animating ? "rotateX(90deg) translateY(-16px)" : "rotateX(0deg)",
                    opacity: state.animating ? 0 : 1,
                    transformOrigin: "top center",
                    backfaceVisibility: "hidden",
                }}
            >
                {curr && (
                    <img
                        src={curr.image}
                        alt={curr.name}
                        className="max-w-full max-h-full object-contain opacity-90 transition-opacity duration-300"
                        style={{ maxWidth: "160px", maxHeight: "72px", transform: `scale(${curr.scale ?? 1})` }}
                        draggable={false}
                    />
                )}
            </div>

            {/* Incoming logo — rises up from below */}
            {state.animating && next && (
                <div
                    className="absolute inset-0 flex items-center justify-center px-8"
                    style={{
                        animation: `trustedRiseIn ${ANIM_MS}ms cubic-bezier(0.4,0,0.2,1) forwards`,
                        transformOrigin: "bottom center",
                    }}
                >
                    <img
                        src={next.image}
                        alt={next.name}
                        className="max-w-full max-h-full object-contain opacity-90"
                        style={{ maxWidth: "160px", maxHeight: "72px", transform: `scale(${next.scale ?? 1})` }}
                        draggable={false}
                    />
                </div>
            )}
        </div>
    );
}

// ── Main component ────────────────────────────────────────────────────────────

export function TrustedBy() {
    const [grid, setGrid] = useState<CellState[]>(() =>
        buildInitialGrid().map((id) => ({ currentLogoId: id, nextLogoId: null, animating: false })),
    );

    // Keep a ref so the interval closure always sees the latest grid
    const gridRef = useRef(grid);
    gridRef.current = grid;

    useEffect(() => {
        function tick() {
            const current = gridRef.current;

            // Candidates: non-animating cells
            const available = shuffle(
                current.map((_, i) => i).filter((i) => !current[i].animating),
            );

            if (available.length === 0) return;

            // Pick 1–3 cells randomly
            const flipCount = MAX_SIMULTANEOUS_FLIPS;
            const toFlip = available.slice(0, Math.min(flipCount, available.length));

            // Plan: pick a valid next logo for each cell.
            // effectiveIds is updated as we plan each flip so subsequent cells
            // in the same round see the already-committed choices.
            const effectiveIds = current.map((c) => c.currentLogoId);
            const flips: Array<{ cellIdx: number; nextLogoId: number }> = [];

            for (const cellIdx of toFlip) {
                const nextId = pickNextLogo(cellIdx, effectiveIds);
                effectiveIds[cellIdx] = nextId; // commit to working array
                flips.push({ cellIdx, nextLogoId: nextId });
            }

            if (flips.length === 0) return;

            // Start animations
            setGrid((prev) => {
                const next = [...prev];
                for (const { cellIdx, nextLogoId } of flips) {
                    next[cellIdx] = { ...next[cellIdx], nextLogoId, animating: true };
                }
                return next;
            });

            // Commit after animation completes
            setTimeout(() => {
                setGrid((prev) => {
                    const next = [...prev];
                    for (const { cellIdx, nextLogoId } of flips) {
                        next[cellIdx] = { currentLogoId: nextLogoId, nextLogoId: null, animating: false };
                    }
                    return next;
                });
            }, ANIM_MS);
        }

        const interval = setInterval(tick, HOLD_MS);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style>{`
                @keyframes trustedRiseIn {
                    from { transform: rotateX(-90deg) translateY(16px); opacity: 0; }
                    to   { transform: rotateX(0deg)   translateY(0);    opacity: 1; }
                }
            `}</style>

            <section id="trusted-by" className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <p className="text-center text-foreground text-lg mb-12 font-medium">
                        Trusted by industry leaders
                    </p>

                    {/* 4 × 3 grid */}
                    <div
                        className="grid"
                        style={{ gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)` }}
                    >
                        {grid.map((cellState, i) => (
                            <LogoCell
                                key={i}
                                state={cellState}
                                row={Math.floor(i / GRID_COLS)}
                                col={i % GRID_COLS}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
