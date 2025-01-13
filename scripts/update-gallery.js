const fs = require('fs');
const path = require('path');

// Función para agrupar items por año
function groupByYear(items) {
  return items.reduce((acc, item) => {
    const year = item.year || new Date().getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {});
}

// Leer datos del localStorage
try {
  const localStorageFile = path.join(__dirname, '../.temp/localStorage.json');
  
  if (fs.existsSync(localStorageFile)) {
    const localStorageData = fs.readFileSync(localStorageFile, 'utf8');
    const galleryItems = JSON.parse(localStorageData);
    
    if (Array.isArray(galleryItems)) {
      const itemsByYear = groupByYear(galleryItems);
      
      // Crear directorio si no existe
      const galleryDir = path.join(__dirname, '../data/gallery');
      if (!fs.existsSync(galleryDir)) {
        fs.mkdirSync(galleryDir, { recursive: true });
      }
      
      // Crear un archivo JSON por año
      Object.entries(itemsByYear).forEach(([year, items]) => {
        const galleryData = {
          year: parseInt(year),
          items: items.map(({ year, ...item }) => item) // Eliminar el campo year de cada item
        };
        
        fs.writeFileSync(
          path.join(galleryDir, `${year}.json`),
          JSON.stringify(galleryData, null, 2)
        );
      });
      
      console.log('✅ Datos de la galería actualizados correctamente');
    } else {
      console.error('❌ El formato de los datos no es válido');
    }
  } else {
    console.error('❌ No se encontró el archivo de datos temporales');
  }
} catch (error) {
  console.error('❌ Error al actualizar los datos:', error.message);
}