// ── SpinRing ──────────────────────────────────────────────────────────────────
// A slowly rotating dashed circle used as a decorative ring around the hero heart.
//
// Props:
//   size    – number  – diameter in px           (default: 120)
//   reverse – bool    – spin counter-clockwise   (default: false)
//   opacity – number  – 0–1 opacity              (default: 1)
//
// Usage:
//   <SpinRing size={180} />
//   <SpinRing size={240} reverse opacity={0.4} />
// ─────────────────────────────────────────────────────────────────────────────

export default function SpinRing({ size = 120, reverse = false, opacity = 1 }) {
  return (
    <>
      <style>{`
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <div
        className="absolute rounded-full border border-purple-400/20"
        style={{
          width: size,
          height: size,
          borderStyle: "dashed",
          opacity,
          animation: `rotateSlow ${reverse ? 30 : 20}s linear infinite ${
            reverse ? "reverse" : "normal"
          }`,
        }}
      />
    </>
  );
}