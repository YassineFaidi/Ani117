import React from 'react';
import { Star, Play } from 'lucide-react';

const animeList = [
  {
    id: 1,
    title: "Attack on Titan",
    image: "https://images.unsplash.com/photo-1612487528505-d2338264c821?auto=format&fit=crop&w=500&q=80",
    rating: 9.5,
    episodes: 75,
  },
  {
    id: 2,
    title: "My Hero Academia",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=500&q=80",
    rating: 8.9,
    episodes: 113,
  },
  {
    id: 3,
    title: "One Punch Man",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=500&q=80",
    rating: 9.0,
    episodes: 24,
  },
  // Add more anime entries as needed
];

export default function AnimeGrid() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Trending Now</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {animeList.map((anime) => (
            <div 
              key={anime.id}
              className="group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 p-4 w-full">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-white">{anime.rating}</span>
                    </div>
                    <p className="text-sm text-gray-200">{anime.episodes} Episodes</p>
                    <button className="mt-3 w-full flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-semibold transition">
                      <Play className="h-4 w-4" />
                      <span>Watch Now</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                  {anime.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}