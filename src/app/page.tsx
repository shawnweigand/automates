import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Bios } from "@/components/sections/Bios";
import { Faq } from "@/components/sections/Faq";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <TrustedBy />
        <Testimonials />
        <Bios />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
