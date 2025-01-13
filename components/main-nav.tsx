"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <svg 
            className="h-8 w-8" 
            viewBox="0 0 408 409" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="204" cy="204.5" r="200" className="stroke-current" strokeWidth="8"/>
            <circle cx="204" cy="204.5" r="133.333" className="stroke-current" strokeWidth="8"/>
            <circle cx="204" cy="204.5" r="66.667" className="stroke-current" strokeWidth="8"/>
            <circle cx="204" cy="271.167" r="133.333" className="stroke-current" strokeWidth="8"/>
          </svg>
        </Link>
        <nav className="flex items-center space-x-6 ml-6">
          <Link
            href="/artworks"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/artworks"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Artworks
          </Link>
          <Link
            href="/bio"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/bio"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Bio
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          {isDevelopment && (
            <Link href="/admin">
              <Button variant="outline" size="sm">
                Admin
              </Button>
            </Link>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}