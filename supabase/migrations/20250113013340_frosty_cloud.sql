/*
  # Crear tabla de obras

  1. Nueva Tabla
    - `gallery_items`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `year` (integer)

  2. Seguridad
    - Habilitar RLS
    - Políticas para lectura pública
    - Políticas para escritura autenticada
*/

CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image text NOT NULL,
  year integer NOT NULL DEFAULT EXTRACT(YEAR FROM CURRENT_DATE),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;

-- Política de lectura pública
CREATE POLICY "Gallery items are viewable by everyone"
  ON gallery_items
  FOR SELECT
  TO public
  USING (true);

-- Política de escritura para usuarios autenticados
CREATE POLICY "Gallery items can be modified by authenticated users"
  ON gallery_items
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Trigger para actualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_gallery_items_updated_at
  BEFORE UPDATE ON gallery_items
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();