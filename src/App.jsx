import { useState, useRef } from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Reasons from "./sections/Reasons";
import Gallery from "./sections/Gallery";
import Letter from "./sections/Letter";
import Footer from "./components/Footer";
import EnvelopeEntry from "./components/EnvelopeEntry";
import MusicControl from "./components/MusicControl";

const NAME = "RHIAN";

export default function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  /**
   * handleOpen
   * Triggered when the user taps the envelope.
   * Starts the music and reveals the main content.
   */
  const handleOpen = () => {
    setHasOpened(true);
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio playback was blocked or failed:", err));
    }
  };

  /**
   * toggleMusic
   * Allows the user to mute/unmute at any time.
   */
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090015] text-white overflow-x-hidden selection:bg-purple-500/30">
      
      {/* ── Audio Source ── */}
      {/* Path: public/music/love-theme.mp3 */}
      <audio ref={audioRef} src="/music/song.mp3" loop />

      {/* ── Global Background Glow ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-900/10 blur-[120px] rounded-full" />
      </div>

      {!hasOpened ? (
        /* ── Step 1: Entry Portal ── */
        <EnvelopeEntry onOpen={handleOpen} />
      ) : (
        /* ── Step 2: Main Website ── */
        <div className="animate-site-reveal relative z-10">
          
          {/* Floating Music Control */}
          <MusicControl isPlaying={isPlaying} toggleMusic={toggleMusic} />
          
          <Nav name={NAME} />

          <main className="flex flex-col items-center w-full">
            {/* Each section is wrapped in a container to ensure 
                perfect centering across all screen sizes. 
            */}
            <Hero name={NAME} />
            
            <div className="w-full flex flex-col items-center">
               <Reasons />
            </div>

            <div className="w-full flex flex-col items-center">
               <Gallery />
            </div>

            <div className="w-full flex flex-col items-center">
               <Letter name={NAME} />
            </div>
          </main>

          <Footer name={NAME} />
        </div>
      )}
    </div>
  );
}