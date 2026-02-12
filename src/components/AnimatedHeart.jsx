// ── AnimatedHeart ────────────────────────────────────────────────────────────
// A pulsing SVG heart with a purple gradient and glow drop-shadow.
//
// Props:
//   size    – number  – width & height in px (default: 80)
//   onClick – func    – optional click handler
//
// Usage:
//   <AnimatedHeart />
//   <AnimatedHeart size={120} onClick={() => console.log("loved!")} />
// ─────────────────────────────────────────────────────────────────────────────

export default function AnimatedHeart({ size = 80, onClick }) {
  return (
    <>
      {/* Inject the keyframe once — safe to include in every instance */}
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15%       { transform: scale(1.25); }
          30%       { transform: scale(1); }
          45%       { transform: scale(1.15); }
        }
      `}</style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 90"
        width={size}
        height={size}
        onClick={onClick}
        style={{
          animation: "heartbeat 1.5s ease-in-out infinite",
          filter: "drop-shadow(0 0 18px rgba(167,139,250,0.8))",
          cursor: onClick ? "pointer" : "default",
          display: "block",
        }}
      >
        <defs>
          {/* Unique gradient ID so multiple instances don't clash */}
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#e879f9" /> {/* fuchsia-400  */}
            <stop offset="50%"  stopColor="#a855f7" /> {/* purple-500   */}
            <stop offset="100%" stopColor="#6d28d9" /> {/* violet-700   */}
          </linearGradient>
        </defs>

        <path
          d="M50 85
             C50 85 5 55 5 28
             C5 12 17 3 30 3
             C38 3 45 8 50 15
             C55 8 62 3 70 3
             C83 3 95 12 95 28
             C95 55 50 85 50 85Z"
          fill="url(#heartGradient)"
        />
      </svg>
    </>
  );
}