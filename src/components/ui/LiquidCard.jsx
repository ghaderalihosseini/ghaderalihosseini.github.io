import React, { useRef, useState, useEffect } from 'react';

export const LiquidCard = ({
  children,
  className = '',
  glowColor = 'rgba(255, 255, 255, 0.08)',
  tiltIntensity = 6
}) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isFine = useRef(false);

  useEffect(() => {
    isFine.current = typeof window !== 'undefined' && window.matchMedia?.('(pointer: fine)').matches;
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !isFine.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({
      x: -((y - centerY) / centerY) * tiltIntensity,
      y: ((x - centerX) / centerX) * tiltIntensity
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => isFine.current && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0px)`,
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 overflow-hidden backdrop-blur-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.2)] hover:border-white/[0.22] hover:shadow-[0_30px_70px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-300 max-w-full box-border ${className}`}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, ${glowColor}, transparent 50%)`,
          opacity: isHovered ? 1 : 0
        }}
      />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
      <div className="relative z-10 w-full max-w-full">
        {children}
      </div>
    </div>
  );
};
