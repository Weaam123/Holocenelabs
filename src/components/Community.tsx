import React from 'react';
import { Testimonial } from './Testimonial';

const testimonials = [
  {
    quote: "Holocene Herbs has transformed our community's ability to share traditional knowledge while ensuring sustainable practices.",
    author: "Sarah Ndlovu",
    role: "Traditional Healer",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    quote: "The blockchain integration has opened new markets for our herbs while preserving our ancestral farming methods.",
    author: "John Mwangi",
    role: "Organic Farmer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    quote: "Being part of this ecosystem has helped us maintain our traditions while embracing modern technology.",
    author: "Grace Okafor",
    role: "Community Leader",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export function Community() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Our Community Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}