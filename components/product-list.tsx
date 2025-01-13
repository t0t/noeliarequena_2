"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useGallery } from "@/lib/gallery-context";

export function ProductList() {
  const { items: galleryItems } = useGallery();

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Obras Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}