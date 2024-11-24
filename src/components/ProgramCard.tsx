import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  duration: string;
  category: string;
  image: string;
}

export function ProgramCard({ title, description, duration, category, image }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-emerald-600">{duration}</span>
          <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors">
            Learn more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}