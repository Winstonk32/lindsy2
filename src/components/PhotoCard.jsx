import { useState } from "react";

export default function PhotoCard({ index, caption, imageSrc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      // Size reduced further to 320px for a "precious/curated" feel
      className="group relative w-full max-w-[320px] mx-auto"
      style={{
        animation: `fadeSlideUp 1s ${index * 0.15}s both ease-out`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          boxShadow: hovered 
            ? "0 40px 80px -15px rgba(139, 92, 246, 0.4), 0 20px 40px -20px rgba(0, 0, 0, 0.6)" 
            : "0 15px 35px -12px rgba(0, 0, 0, 0.5)",
          transform: hovered ? "translateY(-12px) scale(1.05)" : "translateY(0) scale(1)",
          border: "1px solid rgba(167, 139, 250, 0.1)",
        }}
      >
        <div className="relative w-full aspect-[4/5] bg-[#1a0b2e]">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={caption}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
              style={{
                filter: hovered ? "brightness(1) contrast(1.05)" : "brightness(0.7) saturate(0.8)",
                transform: hovered ? "scale(1.15)" : "scale(1)",
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-purple-500/10 text-2xl">✦</div>
          )}

          {/* Immersive Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090015] via-transparent to-transparent opacity-80" />

          {/* Compact Glass Caption */}
          <div
            className="absolute bottom-4 left-4 right-4 p-3 rounded-xl backdrop-blur-lg border border-white/10 bg-white/5 transition-all duration-700"
            style={{
              transform: hovered ? "translateY(0)" : "translateY(15px)",
              opacity: hovered ? 1 : 0,
            }}
          >
            <p className="text-white text-[11px] md:text-xs font-light tracking-wide text-center italic leading-relaxed">
              {caption}
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle Aura Glow */}
      <div className="absolute -inset-4 bg-purple-600/10 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </div>
  );
}