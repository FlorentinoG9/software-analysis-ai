"use client";

import { cn } from "@workspace/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import { Switch as SwitchPrimitive } from "radix-ui";
import type * as React from "react";

const switchVariants = cva(
  "data-[state=unchecked]:[&_span]:rtl:-translate-x-0.5 data-[state=unchecked]:border-input data-[state=unchecked]:bg-transparent [&_span]:transition-all data-[state=unchecked]:[&_span]:size-4 data-[state=unchecked]:[&_span]:translate-x-0.5 data-[state=unchecked]:[&_span]:bg-input data-[state=unchecked]:[&_span]:shadow-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      },
      size: {
        default: "h-6 w-10",
        sm: "h-5 w-9",
        lg: "h-7 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const switchThumbVariants = cva(
  "data-[state=checked]:rtl:-translate-x-4 pointer-events-none block size-5 rounded-full bg-background shadow-xs ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        default: "size-5",
        sm: "size-4",
        lg: "size-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

function Switch({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>) {
  return (
    <SwitchPrimitive.Root
      className={cn(switchVariants({ variant, size, className }))}
      {...props}
    >
      <SwitchPrimitive.Thumb
        asChild
        className={cn(switchThumbVariants({ size }))}
        data-slot="switch-thumb"
      >
        <motion.span
          animate={{ x: 1 }}
          layoutId="switch-thumb"
          transition={{
            type: "spring",
            duration: 0.05,
          }}
          whileInView={{ x: 0 }}
        />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
