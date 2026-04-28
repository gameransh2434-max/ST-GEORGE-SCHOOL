"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { VisitorBadge } from "./visitor-badge";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-school-navy">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-building.png"
          alt="St. George School Building"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-school-navy via-school-navy/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <VisitorBadge />

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Excellence in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-school-gold to-yellow-200">
              Education & Character
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            A trusted century-old institution in Banda, nurturing students from
            Nursery to Class 12 with academic rigor, disciplined values, and
            genuine warmth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="xl"
              className="w-full sm:w-auto group font-semibold"
              onClick={() =>
                document
                  .getElementById("admissions")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Apply for Admission
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-white bg-transparent w-full sm:w-auto group"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Discover Our Heritage
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
