import PhotoCard from "../components/PhotoCard";
import SectionTitle from "../components/SectionTitle";

// ── Add her photos here ───────────────────────────────────────────────────────
// Each entry maps to one card in the grid.
//
// To add a real photo:
//   1. Drop the image file into /public/images/
//   2. Set `src` to "/images/your-filename.jpg"
//
// Leave `src` as undefined (or remove it) to show the placeholder.
// ─────────────────────────────────────────────────────────────────────────────
const PHOTOS = [
  { caption: "That moment in the golden hour",      src: "/images/1.jpeg" },
  { caption: "Candid and completely beautiful",   src: "/images/2.jpeg" },
  { caption: "Just being perfectly you",            src: "/images/3.jpeg" },

];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative z-10 py-32 px-6 w-full max-w-5xl mx-auto flex flex-col items-center"
    >
      <div className="text-center mb-16">
        <span className="text-purple-400/30 text-[9px] tracking-[0.8em] uppercase mb-4 block">
          Visual Memories
        </span>
        <h2 className="text-3xl md:text-4xl font-thin italic text-purple-100 tracking-wide">
          YOU❤️
        </h2>
        <div className="mt-4 w-8 h-px bg-purple-500/30 mx-auto" />
      </div>

      {/* Grid refined:
          - max-w-5xl keeps the 3 columns tighter together
          - gap-8 for mobile, gap-14 for desktop to emphasize the smaller cards
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 w-full justify-items-center">
        {PHOTOS.map((photo, i) => (
          <PhotoCard
            key={i}
            index={i}
            caption={photo.caption}
            imageSrc={photo.src}
          />
        ))}
      </div>
    </section>
  );
}