"use client";

import { createContext, useContext, useState, useEffect } from "react";
import galleryData from "@/data/gallery.json";
import { GalleryItem } from "@/types/gallery";

interface GalleryContextType {
  items: GalleryItem[];
  addItem: (item: Omit<GalleryItem, "id">) => void;
  updateItem: (id: string, item: Partial<GalleryItem>) => void;
  deleteItem: (id: string) => void;
}

const GalleryContext = createContext<GalleryContextType>({
  items: [],
  addItem: () => {},
  updateItem: () => {},
  deleteItem: () => {}
});

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<GalleryItem[]>(galleryData.items);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const savedItems = localStorage.getItem("galleryItems");
      if (savedItems) {
        setItems(JSON.parse(savedItems));
      } else {
        localStorage.setItem("galleryItems", JSON.stringify(items));
      }
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      localStorage.setItem("galleryItems", JSON.stringify(items));
    }
  }, [items]);

  const addItem = (item: Omit<GalleryItem, "id">) => {
    if (process.env.NODE_ENV === "development") {
      const newId = crypto.randomUUID();
      setItems(prevItems => [...prevItems, { ...item, id: newId }]);
    }
  };

  const updateItem = (id: string, updatedFields: Partial<GalleryItem>) => {
    if (process.env.NODE_ENV === "development") {
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, ...updatedFields } : item
        )
      );
    }
  };

  const deleteItem = (id: string) => {
    if (process.env.NODE_ENV === "development") {
      setItems(prevItems => prevItems.filter(item => item.id !== id));
    }
  };

  return (
    <GalleryContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
}