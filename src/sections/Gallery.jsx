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
      // max-w-6xl keeps the whole gallery block centered and compact
      className="relative z-10 py-32 px-6 w-full max-w-6xl mx-auto flex flex-col items-center"
    >
      <div className="mb-16">
        <SectionTitle subtitle="the beauty in the everyday">
          Her Gallery
        </SectionTitle>
      </div>

      {/* 3 columns on desktop, 2 on tablet, 1 on mobile */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-12 w-full px-4">
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