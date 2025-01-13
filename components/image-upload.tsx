"use client";

import { useState } from "react";
import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
  currentImage?: string;
}

export function ImageUpload({ onImageUpload, currentImage }: ImageUploadProps) {
  const [error, setError] = useState<string>("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Por favor, sube solo archivos de imagen.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("La imagen no debe superar los 5MB");
      return;
    }

    // En desarrollo, usamos una URL de placeholder
    const imageUrl = `https://source.unsplash.com/random/800x600?art,painting&${Date.now()}`;
    onImageUpload(imageUrl);

    // Mostrar mensaje informativo
    setError("⚠️ En desarrollo: La imagen se reemplazará con una temporal. En producción, deberás colocar las imágenes en /public/images/gallery/");
  };

  return (
    <div className="space-y-4">
      <label
        className={`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
          transition-colors duration-200 block
          hover:border-primary hover:bg-primary/5
          ${currentImage ? 'border-primary bg-primary/5' : 'border-muted'}
        `}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="flex flex-col items-center space-y-2">
          <ImagePlus className="h-8 w-8 text-muted-foreground" />
          <div className="text-sm text-muted-foreground">
            <p>Haz clic para {currentImage ? 'cambiar' : 'seleccionar'} la imagen</p>
            <p className="text-xs mt-1">PNG, JPG o WEBP (max. 5MB)</p>
          </div>
        </div>
      </label>

      {currentImage && (
        <div className="relative aspect-video w-full bg-muted rounded-lg overflow-hidden">
          <Image
            src={currentImage}
            alt="Vista previa"
            fill
            className="object-contain"
          />
        </div>
      )}

      {error && (
        <Alert variant={error.startsWith("⚠️") ? "default" : "destructive"}>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}