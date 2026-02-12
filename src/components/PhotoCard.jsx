import { useState } from "react";

const gradients = [
  "from-purple-900/20 to-violet-800/20",
  "from-fuchsia-900/20 to-purple-800/20",
  "from-violet-900/20 to-purple-700/20",
];

export default function PhotoCard({ index, caption, imageSrc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      // 1. PERFECT SIZE: We cap it at 420px so it never gets "massive"
      // 2. INTEGRATION: Added a subtle border and shadow to "seat" it in the UI
      className="group relative overflow-hidden rounded-[2rem] w-full max-w-[420px] mx-auto"
      style={{
        animation: `fadeSlideUp 0.8s ${index * 0.1}s both ease-out`,
        border: "1px solid rgba(167, 139, 250, 0.15)",
        boxShadow: hovered 
          ? "0 20px 40px rgba(0,0,0,0.6)" 
          : "0 10px 20px rgba(0,0,0,0.3)",
        transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
        transform: hovered ? "scale(1.02) translateY(-5px)" : "scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Aspect Ratio 4:5 - The most balanced portrait ratio */}
      <div className={`relative w-full aspect-[4/5] bg-gradient-to-br ${gradients[index % gradients.length]}`}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={caption}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
            style={{
              filter: hovered ? "brightness(0.9)" : "brightness(0.75)",
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-20">✦</div>
        )}

        {/* Soft overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

        {/* Caption: Elegant and integrated */}
        <div
          className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 flex flex-col items-center"
          style={{
            transform: hovered ? "translateY(0)" : "translateY(10px)",
            opacity: hovered ? 1 : 0,
          }}
        >
          <p className="text-purple-100 text-sm font-light italic text-center px-2 leading-relaxed">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}