import { useState, useEffect } from "react"; // Added useEffect
import AnimatedHeart from "./AnimatedHeart";

export default function Navbar() {
  // 1. Define the missing 'scrolled' state
  const [scrolled, setScrolled] = useState(false);
  
  // 2. Define the missing 'NAME'
 

  // 3. Define the missing 'navItems' array
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Gallery", href: "#section-2" },
    { label: "Message", href: "#section-3" }
  ];

  // Logic to handle the scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,0,30,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(167,139,250,0.1)" : "none",
      }}
    >
      <div className="flex items-center gap-2">
        <AnimatedHeart size={26} />
        <span
          className="text-base font-thin tracking-widest"
          style={{
            background: "linear-gradient(90deg, #f0abfc, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="text-xs font-light tracking-widest uppercase transition-colors duration-200"
            style={{ color: "rgba(216,180,254,0.55)" }}
            onMouseEnter={(e) => (e.target.style.color = "#c084fc")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(216,180,254,0.55)")}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}