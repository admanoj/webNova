// src/components/ui/scroll-area.js
export function ScrollArea({ children }) {
  return <div style={{ overflowY: "auto", maxHeight: "100%" }}>{children}</div>;
}
