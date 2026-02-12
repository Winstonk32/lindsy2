import { useState } from "react";

export default function EnvelopeEntry({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    // Wait for the animation to finish before switching screens
    setTimeout(onOpen, 1200);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#090015] transition-opacity duration-1000 ${isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Starry Background for the entry */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: Math.random() * 3 + 'px',
                height: Math.random() * 3 + 'px',
                animationDelay: `${Math.random() * 5}s`
              }}
            />
         ))}
      </div>

      <div 
        onClick={handleClick}
        className={`relative cursor-pointer transition-transform duration-700 ${isOpening ? 'scale-150 rotate-12' : 'hover:scale-110 active:scale-95'}`}
      >
        {/* The Envelope Body */}
        <div className="relative w-64 h-44 bg-purple-200 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Envelope Flap Look */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-purple-300 clip-path-polygon-[0_0,50%_100%,100%_0]" 
               style={{ clipPath: 'polygon(0 0, 50% 80%, 100% 0)' }}></div>
          
          <div className="z-10 flex flex-col items-center">
            <span className="text-4xl animate-heartbeat">✉️</span>
            <p className="mt-2 text-purple-900 font-serif italic text-sm">For You</p>
          </div>

          {/* Wax Seal */}
          <div className="absolute bottom-12 z-20 w-10 h-10 bg-red-600 rounded-full shadow-md flex items-center justify-center border-2 border-red-700">
            <span className="text-white text-xs">❤️</span>
          </div>
        </div>
        
        <p className="text-purple-300/60 text-center mt-8 tracking-[0.3em] uppercase text-xs animate-pulse">
          Tap to open
        </p>
      </div>
    </div>
  );
}