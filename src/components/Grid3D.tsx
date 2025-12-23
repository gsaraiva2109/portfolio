import { useState, useEffect } from 'react';

interface Particle {
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export const Grid3DBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setParticles([...Array(20)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2,
      })));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* CSS Grid Background */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
        
        {/* Animated scan lines */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(0deg, transparent 0%, rgba(0, 255, 65, 0.1) 50%, transparent 100%)',
            animation: 'scanline 8s linear infinite',
          }}
        />
        
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-500 rounded-full opacity-30"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
