import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { GalleryProvider } from "@/lib/gallery-context";
import { Instagram } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Galería de Arte - Pinturas al Óleo',
  description: 'Galería de pinturas al óleo con obras únicas y expresivas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GalleryProvider>
            <div className="flex flex-col min-h-screen">
              <MainNav />
              <div className="flex-grow">
                {children}
              </div>
              <footer className="border-t py-4">
                <div className="container flex items-center justify-center space-x-2">
                  <span className="text-sm text-muted-foreground">follow me:</span>
                  <Link 
                    href="https://www.instagram.com/noelia__requena/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </footer>
            </div>
          </GalleryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}