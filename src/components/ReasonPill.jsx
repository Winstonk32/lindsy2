import { useState } from "react";

export default function ReasonPill({ text, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      // 1. Changed to inline-flex so they sit side-by-side in a "cloud"
      // 2. Added whitespace-nowrap so reasons don't break awkwardly into two lines
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full cursor-default whitespace-nowrap"
      style={{
        background: hovered 
          ? "rgba(109, 40, 217, 0.4)" 
          : "rgba(88, 28, 135, 0.15)", // Slightly more transparent for that glass look
        border: `1px solid ${
          hovered ? "rgba(167, 139, 250, 0.6)" : "rgba(167, 139, 250, 0.2)"
        }`,
        boxShadow: hovered 
          ? "0 0 25px rgba(139, 92, 246, 0.3)" 
          : "0 4px 12px rgba(0, 0, 0, 0.1)",
        // Staggered animation based on the index
        animation: `fadeSlideUp 0.6s ${index * 0.05}s both cubic-bezier(0.16, 1, 0.3, 1)`,
        backdropFilter: "blur(12px)",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Small decorative star */}
      <span 
        style={{ 
          color: hovered ? "#e9d5ff" : "#c084fc", 
          fontSize: "0.8rem",
          transition: "color 0.3s ease" 
        }}
      >
        ✦
      </span>

      {/* The Text */}
      
<span className="text-purple-100 text-xs md:text-sm font-light whitespace-normal text-center">
  {text}
</span>
    </div>
  );
}