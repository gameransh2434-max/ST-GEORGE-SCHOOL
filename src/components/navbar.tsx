"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/#" },
  { name: "About", href: "/#about" },
  { name: "Academics", href: "/#academics" },
  { name: "Admissions", href: "/#admissions" },
  { name: "Campus Life", href: "/#campus" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-school-navy text-white py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              "flex flex-col leading-tight",
              isScrolled ? "text-school-navy" : "text-white",
            )}
          >
            <span className="font-serif font-bold text-xl md:text-2xl">
              St. George School
            </span>
            <span className="text-[0.65rem] md:text-xs uppercase tracking-wider font-medium text-school-gold">
              Affiliated to C.B.S.E., New Delhi
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-school-gold transition-colors",
                  isScrolled ? "text-foreground" : "text-white/90",
                )}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant={isScrolled ? "default" : "gold"}
              className="ml-1"
              onClick={() =>
                document
                  .getElementById("admissions")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Apply Now
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X
                className={isScrolled ? "text-school-navy" : "text-white"}
                size={24}
              />
            ) : (
              <Menu
                className={isScrolled ? "text-school-navy" : "text-white"}
                size={24}
              />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-3 border-t border-zinc-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground font-medium py-2 border-b border-zinc-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            className="mt-2 w-full"
            onClick={() => {
              setMobileMenuOpen(false);
              document
                .getElementById("admissions")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Apply Now
          </Button>
        </div>
      )}
    </header>
  );
}
