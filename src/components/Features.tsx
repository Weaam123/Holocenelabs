import React from 'react';
import { Sprout, Users, Shield, BarChart3, BookOpen, Leaf } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Sprout,
    title: "Sustainable Supply Chain",
    description: "Track products from farm to consumer while ensuring fair trade and environmental conservation."
  },
  {
    icon: Users,
    title: "Community Governance",
    description: "Decentralized decision-making through our DAO structure empowers all stakeholders."
  },
  {
    icon: Shield,
    title: "Verified Authentication",
    description: "Blockchain-enabled verification ensures product authenticity and quality."
  },
  {
    icon: BarChart3,
    title: "Token Economics",
    description: "Innovative dual-token system incentivizing sustainable practices and knowledge sharing."
  },
  {
    icon: BookOpen,
    title: "Knowledge Preservation",
    description: "Digital herbarium preserving traditional healing wisdom for future generations."
  },
  {
    icon: Leaf,
    title: "Regenerative Farming",
    description: "Supporting practices that enhance biodiversity and soil health."
  }
];

export function Features() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
        Our Ecosystem Components
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}