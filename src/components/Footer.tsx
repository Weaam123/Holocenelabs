import React from 'react';
import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-200 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Leaf className="w-8 h-8 mx-auto mb-4 text-emerald-400" />
        <p className="mb-4">Empowering communities through sustainable herbal trade</p>
        <div className="text-sm text-emerald-400">
          © {new Date().getFullYear()} Holocene Herbs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}