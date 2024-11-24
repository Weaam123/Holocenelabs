import React from 'react';
import { ProgramCard } from './ProgramCard';

const programs = [
  {
    title: "Traditional Knowledge Preservation",
    description: "Learn from community elders and document traditional healing practices using modern technology.",
    duration: "6 months",
    category: "Education",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Sustainable Farming Certification",
    description: "Master regenerative farming techniques and earn blockchain-verified credentials.",
    duration: "3 months",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Community Leadership Training",
    description: "Develop skills in DAO governance, community management, and digital literacy.",
    duration: "4 months",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
  }
];

export function Programs() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Community Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our initiatives to preserve traditional knowledge while building sustainable futures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}