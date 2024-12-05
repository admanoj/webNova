import React from "react";
import { cn } from "@/lib/utils";

export const VisuallyHidden = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 bg-black",
        "[clip:rect(0,0,0,0)]",
        className
      )}
      {...props}
    />
  );
};
