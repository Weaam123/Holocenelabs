import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export function Testimonial({ quote, author, role, image }: TestimonialProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
      <img
        src={image}
        alt={author}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
      />
      <blockquote className="text-gray-700 text-lg mb-4 italic">"{quote}"</blockquote>
      <div className="text-center">
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-emerald-600">{role}</div>
      </div>
    </div>
  );
}