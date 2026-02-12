import { useState } from "react";
import AnimatedHeart from "../components/AnimatedHeart";
import SpinRing from "../components/SpinRing";

// ── Hero ──────────────────────────────────────────────────────────────────────
// Full-screen opening section with spinning rings, animated heart, her name
// in a shimmer gradient, and a floating scroll indicator.
//
// Props:
//   name – string – her name, displayed as the giant hero heading
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero({ name }) {
  const [heartClicks, setHeartClicks] = useState(0);

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        id="section-0"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-10 overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        {/* Spinning rings + clickable heart */}
        <div
          className="relative flex items-center justify-center mb-10"
          style={{ width: 260, height: 260 }}
        >
          <SpinRing size={180} />
          <SpinRing size={240} reverse opacity={0.4} />
          <div className="relative z-10">
            <AnimatedHeart
              size={100}
              onClick={() => setHeartClicks((c) => c + 1)}
            />
          </div>
        </div>

        {/* Click counter */}
        {heartClicks > 0 && (
          <p
            className="text-purple-300/60 text-xs tracking-widest mb-4"
            style={{ animation: "fadeSlideUp 0.3s both" }}
          >
            {heartClicks === 1
              ? "❤️ You felt it too"
              : heartClicks < 5
              ? `❤️ × ${heartClicks}`
              : `💜 Infinite love × ${heartClicks}`}
          </p>
        )}

        {/* Eyebrow label */}
        <p
          className="text-purple-400/60 text-xs tracking-[0.4em] uppercase mb-5"
          style={{ animation: "fadeSlideUp 0.6s 0.2s both" }}
        >
          A love letter to
        </p>

        {/* Her name — giant shimmer heading */}
        <h1
          className="font-thin mb-6 leading-[1.1]"
          style={{
            fontSize: "clamp(3rem, 15vw, 8rem)",
            background: "linear-gradient(135deg, #fae8ff, #d946ef, #7c3aed, #c084fc)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 5s linear infinite, fadeSlideUp 0.8s 0.4s both",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          {name}
        </h1>

        {/* Tagline */}
        <p
          className="text-purple-200/60 text-lg md:text-xl font-thin max-w-lg leading-relaxed"
          style={{ animation: "fadeSlideUp 0.8s 0.8s both", fontStyle: "italic" }}
        >
          Some things are too deep for words, yet here I am — trying to pour
          every star in my sky into letters, just for you.
        </p>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex flex-col items-center gap-2"
          style={{ animation: "fadeSlideUp 0.8s 1.2s both" }}
        >
          <span className="text-purple-400/40 text-xs tracking-widest">
            Scroll to discover
          </span>
          <div className="w-px h-12 bg-linear-to-b from-purple-400/40 to-transparent" />
        </div>

        {/* Watermark background text */}
        <div
          className="absolute bottom-8 left-0 right-0 text-center select-none pointer-events-none overflow-hidden"
          style={{
            fontSize: "clamp(80px, 20vw, 220px)",
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "rgba(88,28,135,0.07)",
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          LOVE
        </div>
      </section>
    </>
  );
}