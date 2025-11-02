import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-6 bg-black/30 backdrop-blur-lg border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Matthew McLeod. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="GitHub">
            <Github className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
