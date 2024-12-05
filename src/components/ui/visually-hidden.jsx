import React from "react";
import { cn } from "@/lib/utils";

export const VisuallyHidden = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "absolute h-px w-px overflow-hidden border-0 p-0",
        "[clip:rect(0,0,0,0)]",
        className
      )}
      {...props}
    />
  );
};
