"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-school-gold disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default: "bg-school-navy text-white hover:bg-school-navy/90",
        gold: "bg-school-gold text-school-navy hover:bg-yellow-500",
        outline:
          "border border-current bg-transparent hover:bg-school-navy hover:text-white hover:border-school-navy",
        ghost: "bg-transparent hover:bg-zinc-100",
      },
      size: {
        default: "h-10 px-5 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-8 text-lg",
        sm: "h-9 px-3 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), "rounded-none", className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
