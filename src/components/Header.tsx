import React, { useState } from 'react';
import { Search, Menu, Moon, Sun, User, Bell } from 'lucide-react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              AnimeVerse
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="nav-link">Home</a>
            <a href="/browse" className="nav-link">Browse</a>
            <a href="/genres" className="nav-link">Genres</a>
            <a href="/trending" className="nav-link">Trending</a>
            <a href="/new" className="nav-link">New Releases</a>
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search anime..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <Bell className="h-5 w-5" />
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <User className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="mobile-nav-link">Home</a>
            <a href="/browse" className="mobile-nav-link">Browse</a>
            <a href="/genres" className="mobile-nav-link">Genres</a>
            <a href="/trending" className="mobile-nav-link">Trending</a>
            <a href="/new" className="mobile-nav-link">New Releases</a>
          </div>
        </div>
      )}
    </header>
  );
}