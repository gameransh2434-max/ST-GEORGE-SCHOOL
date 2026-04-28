"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "flex h-11 w-full bg-white border border-zinc-300 px-3 py-2 text-sm appearance-none",
          "bg-[length:14px] bg-no-repeat bg-[center_right_0.75rem]",
          "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%230E2046%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>')]",
          "pr-10 focus:outline-none focus:border-school-gold focus:ring-1 focus:ring-school-gold",
          "disabled:cursor-not-allowed disabled:opacity-50 rounded-none",
          className,
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  },
);
Select.displayName = "Select";
