"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { formatNumber } from "@/lib/utils";
import {
  VISITOR_COUNTER_KEY,
  VISITOR_COUNTER_NAMESPACE,
} from "@/lib/site-config";

const SESSION_KEY = "sg_visitor_counted";

export function VisitorBadge() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function bumpAndFetch() {
      try {
        const alreadyCounted =
          typeof window !== "undefined" &&
          window.sessionStorage.getItem(SESSION_KEY) === "1";

        const endpoint = alreadyCounted
          ? `https://abacus.jasoncameron.dev/get/${VISITOR_COUNTER_NAMESPACE}/${VISITOR_COUNTER_KEY}`
          : `https://abacus.jasoncameron.dev/hit/${VISITOR_COUNTER_NAMESPACE}/${VISITOR_COUNTER_KEY}`;

        const res = await fetch(endpoint, { cache: "no-store" });
        if (!res.ok) return;

        const data = (await res.json()) as { value?: number };
        if (!cancelled && typeof data.value === "number") {
          setCount(data.value);
          if (!alreadyCounted) {
            try {
              window.sessionStorage.setItem(SESSION_KEY, "1");
            } catch {}
          }
        }
      } catch {
        // network error — silently keep placeholder
      }
    }

    bumpAndFetch();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-school-gold/30 bg-school-navy/50 backdrop-blur-sm text-school-gold text-sm font-medium uppercase tracking-widest mb-8 animate-fade-in-up">
      <Eye size={14} className="text-school-gold" />
      <span>Visitors</span>
      <span className="inline-flex items-center justify-center min-w-[3ch] px-2 py-0.5 bg-school-gold text-school-navy font-bold tracking-normal text-xs rounded-sm">
        {count === null ? "…" : formatNumber(count)}
      </span>
    </div>
  );
}
