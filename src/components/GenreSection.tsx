import React from 'react';

const genres = [
  { id: 1, name: 'Action', color: 'from-red-500 to-orange-500' },
  { id: 2, name: 'Romance', color: 'from-pink-500 to-rose-500' },
  { id: 3, name: 'Fantasy', color: 'from-purple-500 to-indigo-500' },
  { id: 4, name: 'Sci-Fi', color: 'from-blue-500 to-cyan-500' },
  { id: 5, name: 'Comedy', color: 'from-yellow-500 to-amber-500' },
  { id: 6, name: 'Drama', color: 'from-emerald-500 to-teal-500' },
];

export default function GenreSection() {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Popular Genres</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {genres.map((genre) => (
            <button
              key={genre.id}
              className={`relative overflow-hidden rounded-lg aspect-video group transition-transform hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {genre.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}