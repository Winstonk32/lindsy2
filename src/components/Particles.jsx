const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  x: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 12 + 8,
  opacity: Math.random() * 0.5 + 0.1,
}));

export default function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: "-20px",
            background: `radial-gradient(circle, rgba(216,180,254,${p.opacity}), rgba(167,139,250,${p.opacity * 0.5}))`,
            animation: `floatUp ${p.duration}s ${p.delay}s infinite ease-in-out`,
            boxShadow: `0 0 ${p.size * 3}px rgba(216,180,254,0.3)`,
          }}
        />
      ))}

      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-110vh) scale(0.3); opacity: 0; }
        }
      `}</style>
    </div>
  );
}