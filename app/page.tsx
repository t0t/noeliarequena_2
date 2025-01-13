"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image: "/images/slideshow/slide1.jpg",
    alt: "Arte abstracto 1",
    text: "La existencia se desnuda, una pregunta en el vacío..."
  },
  {
    image: "/images/slideshow/slide2.jpg",
    alt: "Arte abstracto 2",
    text: "El cuerpo como un temblor en el tiempo, como un proceso de luz y sombra."
  },
  {
    image: "/images/slideshow/slide3.jpg",
    alt: "Arte abstracto 3",
    text: "El cuerpo como un templo de tensiones, como un templo hermético abierto y cerrado al mismo tiempo..."
  },
  {
    image: "/images/slideshow/slide4.jpg",
    alt: "Arte abstracto 4",
    text: "La belleza del horror y el horror de la belleza. Necesitamos el contraste."
  },
  {
    image: "/images/slideshow/slide5.jpg",
    alt: "Arte abstracto 5",
    text: "En este espacio celebramos el misterio de la vida."
  },
  {
    image: "/images/slideshow/slide6.jpg",
    alt: "Arte abstracto 6",
    text: "La existencia como un proceso continuo de transformación."
  },
  {
    image: "/images/slideshow/slide7.jpg",
    alt: "Arte abstracto 7",
    text: "Entre la luz y la sombra, habitamos el misterio."
  },
  {
    image: "/images/slideshow/slide8.jpg",
    alt: "Arte abstracto 8",
    text: "El cuerpo como lienzo, como territorio de exploración."
  },
  {
    image: "/images/slideshow/slide9.jpg",
    alt: "Arte abstracto 9",
    text: "En el silencio de la forma, encontramos la verdad del ser."
  }
];

// Background image path
const backgroundImage = "/images/bg4.jpg";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    if (isScrolling) return;
    setIsScrolling(true);
    
    window.scrollTo({
      top: window.innerHeight + 160,
      behavior: "smooth"
    });

    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <main className="min-h-screen">
      <section className="relative h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl font-light tracking-wider mb-16 text-white">Noelia Requena</h1>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <button
            onClick={handleScroll}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-8 w-8 animate-bounce" />
          </button>
        </div>
      </section>

      <section className="h-[40vh] flex items-center justify-center bg-background border-y">
        <p className="text-4xl font-light tracking-widest">☽□♇</p>
      </section>

      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <p className="text-2xl font-light text-white text-center max-w-xl px-4">
            {slides[currentSlide].text}
          </p>
        </div>
        
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </section>
    </main>
  );
}