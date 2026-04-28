"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full bg-white border border-zinc-300 px-3 py-2 text-sm",
        "placeholder:text-muted-foreground",
        "focus:outline-none focus:border-school-gold focus:ring-1 focus:ring-school-gold",
        "disabled:cursor-not-allowed disabled:opacity-50 rounded-none",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[80px] w-full bg-white border border-zinc-300 px-3 py-2 text-sm resize-none",
        "placeholder:text-muted-foreground",
        "focus:outline-none focus:border-school-gold focus:ring-1 focus:ring-school-gold",
        "disabled:cursor-not-allowed disabled:opacity-50 rounded-none",
        className,
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-sm font-medium text-foreground block mb-1.5", className)}
      {...props}
    />
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-xs text-red-600 mt-1">{message}</p>;
}
