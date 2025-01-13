"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGallery } from "@/lib/gallery-context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Gallery() {
  const { items: galleryItems } = useGallery();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const currentImage = selectedImage !== null ? galleryItems[selectedImage] : null;

  const showPrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const showNext = () => {
    if (selectedImage !== null && selectedImage < galleryItems.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') showPrevious();
    if (e.key === 'ArrowRight') showNext();
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Galería de Obras</h2>
        
        {galleryItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No hay obras disponibles en este momento.</p>
          </div>
        ) : (
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <Card 
                  key={item.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative aspect-square bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="en" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-[200px] mx-auto mb-8">
                  <TabsTrigger value="en">English</TabsTrigger>
                  <TabsTrigger value="es">Español</TabsTrigger>
                </TabsList>
                
                <TabsContent value="en" className="prose prose-lg dark:prose-invert mx-auto">
                  <h3 className="text-2xl font-semibold mb-6">Review</h3>
                  <blockquote className="text-lg italic space-y-4">
                    <p>"A body in space. A tremor in time. A process of light and shade. Once revealed, the body disintegrates and is deconstructed. A spontaneous crystallisation of dynamic contrasts. A chiaroscuro of fragility and power, cold and heat. The body is a temple of tensions; hermetic, open and shut at the same time, existing only in the logic of membranes. Light that passes through, reflected like the nervous shade of something more. The ornament of the oils captures it like an insect in amber. Frozen but at the same time fluttering. An encrypted longing, like a puzzle in multiple dimensions. The precise and graceful line (a calligraphy of mysteries), unravelling the inexhaustible mystery of beauty. Ariadne's thread entangling. A dark profession. The beauty of horror and the horror of beauty. We need the contrast. The balance in the contradiction. Always the light and the shade, the chiaroscuro...</p>
                    <p>As in the Japanese technique, kintsugi, the lacquer repairs the cracks in the broken ceramic, which is the body. There is a beauty in the crack, like a latent sign of its interior life: vortex of a wound made manifest on the outside. Cloth covers the shape like a gauze a mould. Skin as impasto. Life as a continuous moment of uncertainty. Are we free or are we confined within the coordinates of chance? This is the mystery of a body in a room, a body inhabiting a space, of a body being space. Existence is naked like a question in the void, spilling over the morning air, reflected in the light coming through the window. In this frame, in this space we celebrate the mystery of life."</p>
                    <footer className="text-right mt-4">— Román Bayarri</footer>
                  </blockquote>
                </TabsContent>
                
                <TabsContent value="es" className="prose prose-lg dark:prose-invert mx-auto">
                  <h3 className="text-2xl font-semibold mb-6">Reseña</h3>
                  <blockquote className="text-lg italic space-y-4">
                    <p>"Un cuerpo en el espacio. Un temblor en el tiempo. Un proceso de luz y sombra. Una vez revelado, el cuerpo se desintegra y se deconstruye. Una cristalización espontánea de contrastes dinámicos. Un claroscuro de fragilidad y poder, frío y calor. El cuerpo es un templo de tensiones; hermético, abierto y cerrado al mismo tiempo, existiendo solo en la lógica de las membranas. Luz que atraviesa, reflejada como la sombra nerviosa de algo más. El ornamento de los óleos lo captura como un insecto en ámbar. Congelado pero al mismo tiempo revoloteando. Un anhelo encriptado, como un rompecabezas en múltiples dimensiones. La línea precisa y grácil (una caligrafía de misterios), desentrañando el misterio inagotable de la belleza. El hilo de Ariadna enredándose. Un oficio oscuro. La belleza del horror y el horror de la belleza. Necesitamos el contraste. El equilibrio en la contradicción. Siempre la luz y la sombra, el claroscuro...</p>
                    <p>Como en la técnica japonesa, kintsugi, la laca repara las grietas en la cerámica rota, que es el cuerpo. Hay una belleza en la grieta, como un signo latente de su vida interior: vórtice de una herida que se manifiesta en el exterior. La tela cubre la forma como una gasa un molde. La piel como empaste. La vida como un momento continuo de incertidumbre. ¿Somos libres o estamos confinados dentro de las coordenadas del azar? Este es el misterio de un cuerpo en una habitación, un cuerpo habitando un espacio, de un cuerpo siendo espacio. La existencia está desnuda como una pregunta en el vacío, derramándose sobre el aire de la mañana, reflejada en la luz que entra por la ventana. En este marco, en este espacio celebramos el misterio de la vida."</p>
                    <footer className="text-right mt-4">— Román Bayarri</footer>
                  </blockquote>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent 
          className="max-w-4xl"
          onKeyDown={handleKeyDown}
        >
          {currentImage && (
            <>
              <DialogTitle className="text-xl font-semibold mb-4">
                {currentImage.title}
              </DialogTitle>
              <div className="relative aspect-square bg-muted">
                <Image
                  src={currentImage.image}
                  alt={currentImage.title}
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                    onClick={(e) => {
                      e.stopPropagation();
                      showPrevious();
                    }}
                    disabled={selectedImage === 0}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                    onClick={(e) => {
                      e.stopPropagation();
                      showNext();
                    }}
                    disabled={selectedImage === galleryItems.length - 1}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground">{currentImage.description}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {selectedImage + 1} de {galleryItems.length}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}