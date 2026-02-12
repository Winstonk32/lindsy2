import ReasonPill from "../components/ReasonPill";
import SectionTitle from "../components/SectionTitle";

const REASONS = [
  "The way you laugh at everything",
  "Your kindness that fills every room",
  "How you make ordinary days feel magical",
  "Your strength in the hardest moments",
  "The light in your eyes when you're happy",
  "The way you care for everyone around you",
  "Your voice — it's my favourite sound",
  "How you always know what I need",
  "Every little thing you do without thinking",
  "The way you make me feel at home",
  "Your dreams that inspire me daily",
  "Simply everything you are",
];

export default function Reasons() {
  return (
    <section
      id="reasons"
      // Same logic as Hero: flex-col, items-center, justify-center
      className="relative z-10 py-32 px-6 min-h-[80vh] flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto"
    >
      <div className="w-full flex flex-col items-center">
        <SectionTitle subtitle="a thousand reasons, here are some">
          Why I Love You
        </SectionTitle>
      </div>

      {/* Pill Cloud: max-w ensures it doesn't stretch too wide, mx-auto centers the block */}
      {/* In Reasons.jsx */}
<div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-8 px-2 max-w-full">
  {REASONS.map((reason, i) => (
    <ReasonPill key={i} text={reason} index={i} />
  ))}
</div>

      {/* Quote Card: mx-auto is the key here */}
      <div
        className="mt-24 relative flex flex-col items-center justify-center px-10 py-20 rounded-[3rem] w-full max-w-4xl mx-auto"
        style={{
          background: "linear-gradient(135deg, rgba(88,28,135,0.15), rgba(109,40,217,0.05))",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(167,139,250,0.2)",
          animation: "glow 6s ease-in-out infinite",
        }}
      >
        <span className="text-purple-400/20 text-[5rem] font-serif mb-4 leading-none">“</span>
        <p className="text-2xl md:text-3xl text-purple-100/90 font-light italic max-w-2xl mx-auto">
          In you, I found someone who gets my crazy
        </p>
        <span className="text-purple-400/20 text-[5rem] font-serif mt-4 leading-none">”</span>
      </div>
    </section>
  );
}