// src/components/Footer.jsx

import AnimatedHeart from "./AnimatedHeart";

// Make sure the "export default" is right here!
export default function Footer({ name }) {
  return (
    <footer className="relative z-10 py-16 text-center border-t border-purple-900/40">
      <div className="flex justify-center mb-4">
        <AnimatedHeart size={36} />
      </div>
      <p className="text-purple-400/50 text-xs tracking-widest uppercase">
        Made with love, just for {name}
      </p>
      <p className="text-purple-600/30 text-xs mt-2">Always &amp; forever ✦</p>
    </footer>
  );
}