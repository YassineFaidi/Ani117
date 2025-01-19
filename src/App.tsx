import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AnimeGrid from './components/AnimeGrid';
import GenreSection from './components/GenreSection';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />
        <AnimeGrid />
        <GenreSection />
      </main>
    </div>
  );
}

export default App;