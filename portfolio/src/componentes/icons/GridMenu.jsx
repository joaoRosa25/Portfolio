import React from "react";

export default function MenuGridIcon({ open, className = "" }) {
  const base =
    "fill-white transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]";

  return (
    <svg
      viewBox="0 0 64 64"
      className={`w-8 h-8 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="8"
        width="18"
        height="18"
        rx="7"
        className={base}
        style={{
          transform: open
            ? "translate(14px,10px) rotate(45deg)"
            : "none",
          transformOrigin: "center",
        }}
      />

      <rect
        x="38"
        y="8"
        width="18"
        height="18"
        rx="7"
        className={base}
        style={{
          transform: open
            ? "translate(-14px,10px) rotate(-45deg)"
            : "none",
          transformOrigin: "center",
        }}
      />

      <rect
        x="8"
        y="38"
        width="18"
        height="18"
        rx="7"
        className={base}
        style={{
          transform: open
            ? "translate(14px,-10px) rotate(-45deg)"
            : "none",
          transformOrigin: "center",
        }}
      />

      <rect
        x="38"
        y="38"
        width="18"
        height="18"
        rx="7"
        className={base}
        style={{
          transform: open
            ? "translate(-14px,-10px) rotate(45deg)"
            : "none",
          transformOrigin: "center",
        }}
      />
    </svg>
  );
}
