import Image from "next/image";
import { useEffect, useRef } from "react";

const GlitchImageReveal: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const container = containerRef.current;
      if (container) {
        for (let i = 0; i < 100; i++) {
          const div = document.createElement('div');
          div.classList.add('reveal-item');
          const delay = `${(Math.random() * 1).toFixed(2)}s`;
          div.style.animationDelay = delay;
          container.appendChild(div);
        }
      }
    }, []);
  
    return (
      <div className="relative w-80 h-60 mx-auto overflow-hidden rounded-2xl">
        {/* Main Image using next/image */}
        <Image
          src="/anas-profile-pic1.png"
          alt="Anas's Profile Picture"
          width={800}
          height={600}
          className="rounded-lg object-cover"
          priority
        />
  
        {/* Glitch Overlay Container */}
        <div
          ref={containerRef}
          className="absolute inset-0 grid grid-cols-10 grid-rows-10 pointer-events-none"
        ></div>
      </div>
    );
  };
  
  export default GlitchImageReveal;