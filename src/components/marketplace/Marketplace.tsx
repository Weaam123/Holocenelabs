import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { ProductCard } from './ProductCard';

const products = [
  {
    id: 1,
    name: "Kanna (Sceletium tortuosum)",
    description: "Traditional Khoi stress-relief and mood enhancement herb, ethically harvested",
    price: 39.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1509735903590-7bd1f6c3d1f8?auto=format&fit=crop&q=80&w=800",
    origin: "Western Cape, South Africa",
    stock: 15,
    category: "Dried Herbs"
  },
  {
    id: 2,
    name: "Rooibos & Honeybush Blend",
    description: "Antioxidant-rich traditional tea blend with calming properties",
    price: 24.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=800",
    origin: "Cederberg Mountains, South Africa",
    stock: 8,
    category: "Tea Blends"
  },
  {
    id: 3,
    name: "African Wormwood Tincture",
    description: "Traditional immune support tincture (Artemisia afra)",
    price: 44.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?auto=format&fit=crop&q=80&w=800",
    origin: "Eastern Cape, South Africa",
    stock: 20,
    category: "Tinctures"
  },
  {
    id: 4,
    name: "Devil's Claw Root Capsules",
    description: "Traditional San remedy for joint health (Harpagophytum procumbens)",
    price: 34.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    origin: "Kalahari Desert",
    stock: 25,
    category: "Capsules"
  },
  {
    id: 5,
    name: "Buchu Wellness Tonic",
    description: "Traditional Khoi digestive and urinary health blend (Agathosma betulina)",
    price: 49.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1550172268-9a48af98ac5f?auto=format&fit=crop&q=80&w=800",
    origin: "Cape Floral Region",
    stock: 12,
    category: "Tinctures"
  },
  {
    id: 6,
    name: "Wild Dagga Dried Flowers",
    description: "Traditional relaxation herb (Leonotis leonurus)",
    price: 29.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1503431760783-91f2569f6802?auto=format&fit=crop&q=80&w=800",
    origin: "KwaZulu-Natal, South Africa",
    stock: 18,
    category: "Dried Herbs"
  },
  {
    id: 7,
    name: "African Potato Extract",
    description: "Immune support blend (Hypoxis hemerocallidea)",
    price: 54.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=800",
    origin: "Mpumalanga, South Africa",
    stock: 10,
    category: "Tinctures"
  },
  {
    id: 8,
    name: "Aloe Ferox Healing Balm",
    description: "Traditional skin healing ointment",
    price: 27.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1601220467006-c7a1c1189ab4?auto=format&fit=crop&q=80&w=800",
    origin: "Little Karoo, South Africa",
    stock: 30,
    category: "Ointments"
  },
  {
    id: 9,
    name: "Khoi Digestive Blend",
    description: "Traditional digestive support with wild mint and pelargonium",
    price: 32.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1611242320536-f12d3541249b?auto=format&fit=crop&q=80&w=800",
    origin: "Northern Cape, South Africa",
    stock: 15,
    category: "Tea Blends"
  }
];

const categories = [
  "All",
  "Dried Herbs",
  "Tea Blends",
  "Tinctures",
  "Capsules",
  "Ointments"
];

export function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const handleAddToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'All' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Traditional South African Herbal Market
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search traditional herbs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <SlidersHorizontal className="w-5 h-5" />
                Filters
              </button>
            </div>
            {showFilters && (
              <div className="flex flex-wrap gap-2 p-4 bg-white rounded-lg shadow-sm">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}