import React from 'react';
import { Play, Plus } from 'lucide-react';

const featuredAnime = {
  title: "Demon Slayer: Kimetsu no Yaiba",
  description: "In a world filled with demons, a young boy trains to become a demon slayer after his family is slaughtered and his sister turned into a demon.",
  image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1920&q=80",
  rating: "9.8",
};

export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${featuredAnime.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {featuredAnime.title}
          </h1>
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-semibold">
              {featuredAnime.rating} Rating
            </span>
            <span className="px-3 py-1 bg-gray-800/80 text-white rounded-full text-sm">
              Trending #1
            </span>
          </div>
          <p className="text-lg text-gray-200 mb-8">
            {featuredAnime.description}
          </p>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition">
              <Play className="h-5 w-5" />
              <span>Watch Now</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-full font-semibold transition">
              <Plus className="h-5 w-5" />
              <span>Add to List</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cherry-blossoms" />
      </div>
    </div>
  );
}