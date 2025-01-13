"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Edit, Trash2, Plus, Copy } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ImageUpload } from "@/components/image-upload";
import { useGallery } from "@/lib/gallery-context";
import { GalleryItem } from "@/types/gallery";

// Tipos
interface GalleryFormData {
  title: string;
  description: string;
  image: string;
}

const INITIAL_FORM_STATE: GalleryFormData = {
  title: "",
  description: "",
  image: ""
};

export default function AdminPanel() {
  const { items: galleryItems, addItem, updateItem, deleteItem } = useGallery();
  const [isAddingGallery, setIsAddingGallery] = useState(false);
  const [editingGalleryItem, setEditingGalleryItem] = useState<GalleryItem | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [galleryForm, setGalleryForm] = useState<GalleryFormData>(INITIAL_FORM_STATE);

  const showSuccessMessage = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const resetGalleryForm = () => {
    setGalleryForm(INITIAL_FORM_STATE);
    setEditingGalleryItem(null);
  };

  const handleEditGallery = (item: GalleryItem) => {
    setEditingGalleryItem(item);
    setGalleryForm({
      title: item.title,
      description: item.description,
      image: item.image
    });
    setIsAddingGallery(true);
  };

  const handleCloneGallery = (item: GalleryItem) => {
    const clonedItem = {
      title: `${item.title} (copia)`,
      description: item.description,
      image: item.image
    };
    addItem(clonedItem);
    showSuccessMessage("Obra clonada correctamente");
  };

  const handleDeleteGallery = (id: number) => {
    deleteItem(id);
    showSuccessMessage("Obra eliminada correctamente");
  };

  const handleGallerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingGalleryItem) {
      updateItem(editingGalleryItem.id, galleryForm);
      showSuccessMessage("Obra actualizada correctamente");
    } else {
      addItem(galleryForm);
      showSuccessMessage("Obra añadida correctamente");
    }

    setIsAddingGallery(false);
    resetGalleryForm();
  };

  const handleFormChange = (
    field: keyof GalleryFormData,
    value: string
  ) => {
    setGalleryForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>
        
        {successMessage && (
          <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}
        
        <GalleryGrid
          items={galleryItems}
          onEdit={handleEditGallery}
          onClone={handleCloneGallery}
          onDelete={handleDeleteGallery}
          onAdd={() => {
            resetGalleryForm();
            setIsAddingGallery(true);
          }}
        />

        <GalleryDialog
          isOpen={isAddingGallery}
          onOpenChange={(open) => {
            if (!open) resetGalleryForm();
            setIsAddingGallery(open);
          }}
          formData={galleryForm}
          onFormChange={handleFormChange}
          onSubmit={handleGallerySubmit}
          isEditing={!!editingGalleryItem}
        />
      </div>
    </div>
  );
}

// Componentes
interface GalleryGridProps {
  items: GalleryItem[];
  onEdit: (item: GalleryItem) => void;
  onClone: (item: GalleryItem) => void;
  onDelete: (id: number) => void;
  onAdd: () => void;
}

function GalleryGrid({ items, onEdit, onClone, onDelete, onAdd }: GalleryGridProps) {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Gestionar Obras</h2>
        <Button onClick={onAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Agregar Obra
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <GalleryCard
            key={item.id}
            item={item}
            onEdit={() => onEdit(item)}
            onClone={() => onClone(item)}
            onDelete={() => onDelete(item.id)}
          />
        ))}
      </div>
    </Card>
  );
}

interface GalleryCardProps {
  item: GalleryItem;
  onEdit: () => void;
  onClone: () => void;
  onDelete: () => void;
}

function GalleryCard({ item, onEdit, onClone, onDelete }: GalleryCardProps) {
  return (
    <Card className="p-4">
      <div className="relative aspect-square">
        {item.image && (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded-md"
          />
        )}
      </div>
      <div className="space-y-2">
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-sm text-muted-foreground">{item.description}</p>
        <div className="flex justify-end space-x-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={onEdit}
            title="Editar obra"
          >
            <Edit className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={onClone}
            title="Clonar obra"
          >
            <Copy className="w-4 h-4" />
          </Button>
          <Button 
            variant="destructive" 
            size="icon"
            onClick={onDelete}
            title="Eliminar obra"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

interface GalleryDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  formData: GalleryFormData;
  onFormChange: (field: keyof GalleryFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isEditing: boolean;
}

function GalleryDialog({
  isOpen,
  onOpenChange,
  formData,
  onFormChange,
  onSubmit,
  isEditing
}: GalleryDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Editar Obra" : "Agregar Nueva Obra"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => onFormChange("title", e.target.value)}
              placeholder="Título de la obra"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => onFormChange("description", e.target.value)}
              placeholder="Descripción de la obra"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Imagen</Label>
            <ImageUpload 
              onImageUpload={(imageUrl) => onFormChange("image", imageUrl)}
              currentImage={formData.image}
            />
            {formData.image && (
              <div className="mt-2 relative aspect-video">
                <Image
                  src={formData.image}
                  alt="Vista previa"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="submit">
              {isEditing ? "Guardar Cambios" : "Agregar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}