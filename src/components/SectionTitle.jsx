export default function SectionTitle({ children, subtitle }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}} />

      {/* Changed to flex flex-col items-center to force horizontal centering */}
      <div
        className="flex flex-col items-center justify-center text-center mb-16 w-full"
        style={{ animation: "fadeSlideUp 0.7s both ease-out" }}
      >
        {/* Shimmer heading */}
        <h2
          className="text-4xl md:text-5xl font-thin mb-4 w-full"
          style={{
            background: "linear-gradient(135deg, #f0abfc, #a855f7, #7c3aed)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 4s linear infinite",
            fontFamily: "'Playfair Display', Georgia, serif",
            letterSpacing: "0.02em",
            display: "inline-block" // Helps with text-clipping on some browsers
          }}
        >
          {children}
        </h2>

        {/* Optional subtitle */}
        {subtitle && (
          <p className="text-purple-400/70 text-sm tracking-[0.3em] uppercase font-light max-w-md">
            {subtitle}
          </p>
        )}

        {/* Decorative divider - perfectly centered */}
        <div className="flex items-center justify-center gap-4 mt-8 w-full">
          <div
            style={{
              width: 60, // Made slightly wider for a more premium look
              height: "1px",
              background: "linear-gradient(to right, transparent, rgba(167,139,250,0.5))",
            }}
          />
          <span className="text-purple-300/60 text-[0.7rem] animate-pulse">✦</span>
          <div
            style={{
              width: 60,
              height: "1px",
              background: "linear-gradient(to left, transparent, rgba(167,139,250,0.5))",
            }}
          />
        </div>
      </div>
    </>
  );
}