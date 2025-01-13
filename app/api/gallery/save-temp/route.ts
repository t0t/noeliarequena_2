import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Crear directorio .temp si no existe
    const tempDir = join(process.cwd(), '.temp');
    await writeFile(
      join(tempDir, 'localStorage.json'),
      JSON.stringify(data, null, 2)
    );

    // Ejecutar script de sincronización
    const { exec } = require('child_process');
    exec('npm run sync', (error: any) => {
      if (error) {
        console.error('Error al sincronizar:', error);
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al guardar datos temporales:', error);
    return NextResponse.json({ error: 'Error al guardar datos' }, { status: 500 });
  }
}