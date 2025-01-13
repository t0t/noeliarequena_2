import { NextResponse } from 'next/server';

// Eliminamos la API route ya que no es compatible con static export
export async function POST() {
  return NextResponse.json({ error: 'API routes not supported in static export' }, { status: 404 });
}