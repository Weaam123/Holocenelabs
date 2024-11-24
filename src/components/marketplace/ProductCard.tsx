import React from 'react';
import { Star, ShoppingCart, Info } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  origin: string;
  stock: number;
  category: string;
  onAddToCart: () => void;
}

export function ProductCard({
  name,
  description,
  price,
  rating,
  image,
  origin,
  stock,
  category,
  onAddToCart
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </div>
        {stock < 10 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            Low Stock
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="text-sm text-emerald-600 mb-4 flex items-center gap-2">
          <Info className="w-4 h-4" />
          Origin: {origin}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-800">${price}</span>
          <button
            onClick={onAddToCart}
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}