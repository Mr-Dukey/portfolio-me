import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "assests/img1.svg",
  "assests/img2.svg",
  "assests/img3.svg",
  "assests/img4.svg",
];

export default function RightSideCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    const rect = carouselRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 20; // -10 to 10 deg
    const rotateX = ((y / rect.height) - 0.5) * -20; // -10 to 10 deg
    carouselRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };

  const handleMouseLeave = () => {
    if (!carouselRef.current) return;
    carouselRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <div
      ref={carouselRef}
      className="relative w-80 h-80 perspective-1000 mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glowing Morphing Blob */}
      <div className="absolute inset-0 rounded-full blur-2xl opacity-50 animate-blob bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300"></div>

      {/* Carousel Images */}
      {images.map((src, index) => {
        const offset = index - currentIndex;
        const zIndex = index === currentIndex ? 20 : 10;
        const scale = index === currentIndex ? 1 : 0.7;
        const opacity = index === currentIndex ? 1 : 0.5;
        const rotateY = offset * 30;

        return (
          <div
            key={index}
            className="absolute transition-all duration-1000 transform origin-center"
            style={{
              transform: `translateX(${offset * 60}%) rotateY(${rotateY}deg) scale(${scale})`,
              zIndex,
              opacity,
            }}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={250}
              height={250}
              className="object-contain rounded-xl shadow-xl"
            />
          </div>
        );
      })}
    </div>
  );
}
