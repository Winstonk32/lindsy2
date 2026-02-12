export default function MusicControl({ isPlaying, toggleMusic }) {
  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-12 h-12 rounded-full bg-purple-900/40 border border-purple-400/30 backdrop-blur-lg shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Toggle Music"
    >
      {/* Animated Sound Bars (Visible when playing) */}
      {isPlaying ? (
        <div className="flex gap-1 items-end h-4">
          <div className="w-1 bg-purple-300 animate-[musicBar_0.8s_ease-in-out_infinite]" />
          <div className="w-1 bg-purple-300 animate-[musicBar_1.2s_ease-in-out_infinite]" />
          <div className="w-1 bg-purple-300 animate-[musicBar_0.9s_ease-in-out_infinite]" />
        </div>
      ) : (
        /* Mute Icon (Visible when paused) */
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-200/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      )}
    </button>
  );
}