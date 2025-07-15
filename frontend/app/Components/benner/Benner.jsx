"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RobloxPromoBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://placehold.co/600x400?text=1",
    "https://placehold.co/600x400?text=2",
    "https://placehold.co/600x400?text=3"
  ];

  // Auto-advance every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Next & Prev handlers
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-84 rounded-3xl overflow-hidden shadow-2xl">
      {/* Image */}
      <motion.img
        key={currentSlide}
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 text-black px-3 py-2 rounded-full"
      >
        ←
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 text-black px-3 py-2 rounded-full"
      >
        →
      </button>
    </div>
  );
};

export default RobloxPromoBanner;
