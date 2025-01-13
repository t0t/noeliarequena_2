const fs = require('fs');
const path = require('path');

// Función para escanear el directorio de imágenes
function scanGalleryImages() {
  const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');
  
  try {
    if (!fs.existsSync(galleryDir)) {
      fs.mkdirSync(galleryDir, { recursive: true });
      return [];
    }
    
    return fs.readdirSync(galleryDir)
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => ({
        path: `/images/gallery/${file}`,
        name: file
      }));
  } catch (error) {
    console.error('Error al escanear directorio de imágenes:', error);
    return [];
  }
}

// Función para guardar los datos
function saveGalleryData(items) {
  try {
    // Crear directorio si no existe
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Guardar todos los items en un solo archivo
    fs.writeFileSync(
      path.join(dataDir, 'gallery.json'),
      JSON.stringify({ items }, null, 2)
    );
    
    return true;
  } catch (error) {
    console.error('Error al guardar datos:', error);
    return false;
  }
}

// Función principal
async function syncGallery() {
  try {
    // Verificar que existan las imágenes
    const images = scanGalleryImages();
    console.log(`📸 Encontradas ${images.length} imágenes en /public/images/gallery/`);
    
    // Leer datos del localStorage
    const localStorageFile = path.join(process.cwd(), '.temp', 'localStorage.json');
    let galleryItems = [];
    
    if (fs.existsSync(localStorageFile)) {
      const localStorageData = fs.readFileSync(localStorageFile, 'utf8');
      galleryItems = JSON.parse(localStorageData);
      
      if (!Array.isArray(galleryItems)) {
        throw new Error('Formato de datos inválido');
      }
    }
    
    // Guardar datos
    const success = saveGalleryData(galleryItems);
    
    if (success) {
      console.log('✅ Datos de la galería actualizados correctamente');
      console.log(`📊 Total de obras: ${galleryItems.length}`);
    } else {
      console.error('❌ Error al actualizar los datos');
    }
  } catch (error) {
    console.error('❌ Error en la sincronización:', error.message);
  }
}

// Ejecutar sincronización
syncGallery();