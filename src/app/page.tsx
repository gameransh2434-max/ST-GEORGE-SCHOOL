import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Academics } from "@/components/academics";
import { Gallery } from "@/components/gallery";
import { Admissions } from "@/components/admissions";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academics />
        <Gallery />
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}
