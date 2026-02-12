import SectionTitle from "../components/SectionTitle";

export default function Letter({ name }) {
  return (
    <section
      id="section-3"
      // Added flex flex-col items-center to center the letter card itself
      className="relative z-10 py-32 px-6 max-w-4xl mx-auto flex flex-col items-center"
    >
      <div className="w-full text-center">
        <SectionTitle subtitle="straight from my heart">
          A Message For You
        </SectionTitle>
      </div>

      {/* Letter card - Added text-center and items-center */}
      <div
        className="relative rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 flex flex-col items-center text-center w-full"
        style={{
          background: "linear-gradient(135deg, rgba(59,7,100,0.3), rgba(30,0,60,0.5))",
          border: "1px solid rgba(167,139,250,0.2)",
          backdropFilter: "blur(24px)",
          boxShadow: "0 0 80px rgba(109,40,217,0.1), inset 0 0 80px rgba(88,28,135,0.05)",
          animation: "fadeSlideUp 1s both 0.4s"
        }}
      >
        {/* Corner decorations - Adjusted for the larger rounded corners */}
        {["top-8 left-8", "top-8 right-8", "bottom-8 left-8", "bottom-8 right-8"].map(
          (pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} text-purple-500/30 select-none animate-pulse`}
              style={{ fontSize: "1.2rem" }}
            >
              ✦
            </div>
          )
        )}

        {/* Salutation - Centered */}
        <p
          className="text-purple-100/90 text-lg md:text-2xl italic mb-6">
          My dearest {name},
        </p>

        {/* Letter body - Centered with max-width for readability */}
        <div
          className="space-y-4 md:space-y-8 text-purple-200/80 text-base md:text-xl font-thin italic"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          <p>
            Happy Valentine's! After thinking about our friendship, I’ve concluded that you’re irreplaceable. I’m incredibly grateful for our 2 AM analysis sessions and the fact that you never tell me I’m 'overthinking it.'
          </p>
          <p>
            I wouldn't change a single thing about you—not even the parts that make us both look slightly unhinged to outsiders.
          </p>
          <p>
            Even though you’d probably find a flaw in a diamond, I wouldn’t change a single thing about you.
          </p>
        </div>

        {/* Sign-off - Centered */}
        <div className="mt-12 flex flex-col items-center">
           <div className="w-12 h-1px bg-purple-500/30 mb-6" />
           <p
            className="text-purple-100/90 text-xl font-thin italic"
          >
           
          </p>
          <span className="text-2xl mt-4 animate-bounce">💜</span>
        </div>
      </div>
    </section>
  );
}