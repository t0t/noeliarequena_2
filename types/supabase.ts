export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      gallery_items: {
        Row: {
          id: string
          title: string
          description: string
          image: string
          year: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image: string
          year?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image?: string
          year?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}