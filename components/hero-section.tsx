"use client";

import { Palette } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.3]"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1547891654-e66ed7ebb968)'
        }}
      />
      <div className="relative z-10 text-center text-white">
        <div className="flex items-center justify-center mb-6">
          <Palette className="w-12 h-12 mr-4" />
          <h1 className="text-5xl font-bold">Galería de Arte</h1>
        </div>
        <p className="text-xl max-w-2xl mx-auto">
          Explorando la belleza del arte a través de pinturas al óleo únicas y expresivas
        </p>
      </div>
    </div>
  );
}