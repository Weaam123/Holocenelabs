import React from 'react';

const stats = [
  { value: "1000+", label: "Verified Farmers" },
  { value: "50+", label: "Traditional Healers" },
  { value: "100K+", label: "Trees Planted" }
];

export function Stats() {
  return (
    <section className="bg-emerald-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-emerald-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}