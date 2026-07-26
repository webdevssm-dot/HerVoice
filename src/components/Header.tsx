import React from 'react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenJoinUs: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenJoinUs,
  onOpenSearch
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#f2e8f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2 text-left focus:outline-none"
          id="brand-logo-btn"
        >
          <span className="text-2xl font-black text-[#e040a0] tracking-tight">
            HerVoice
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => setActiveTab('home')}
            id="nav-home-btn"
            className={`text-sm font-semibold transition-all relative py-1 ${
              activeTab === 'home'
                ? 'text-[#e040a0] font-bold border-b-2 border-[#e040a0]'
                : 'text-[#604868] hover:text-[#e040a0]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('rights')}
            id="nav-rights-btn"
            className={`text-sm font-semibold transition-all relative py-1 ${
              activeTab === 'rights'
                ? 'text-[#e040a0] font-bold border-b-2 border-[#e040a0]'
                : 'text-[#604868] hover:text-[#e040a0]'
            }`}
          >
            Rights
          </button>
          <button
            onClick={() => setActiveTab('spotlights')}
            id="nav-spotlights-btn"
            className={`text-sm font-semibold transition-all relative py-1 ${
              activeTab === 'spotlights'
                ? 'text-[#e040a0] font-bold border-b-2 border-[#e040a0]'
                : 'text-[#604868] hover:text-[#e040a0]'
            }`}
          >
            Spotlights
          </button>
          <button
            onClick={() => setActiveTab('dream-board')}
            id="nav-dreamboard-btn"
            className={`text-sm font-semibold transition-all relative py-1 ${
              activeTab === 'dream-board'
                ? 'text-[#e040a0] font-bold border-b-2 border-[#e040a0]'
                : 'text-[#604868] hover:text-[#e040a0]'
            }`}
          >
            Dream Board
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            id="nav-resources-btn"
            className={`text-sm font-semibold transition-all relative py-1 ${
              activeTab === 'resources'
                ? 'text-[#e040a0] font-bold border-b-2 border-[#e040a0]'
                : 'text-[#604868] hover:text-[#e040a0]'
            }`}
          >
            Resources
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenSearch}
            id="header-search-btn"
            aria-label="Search"
            className="w-9 h-9 rounded-full text-[#2e1a28] hover:text-[#e040a0] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>

          <button
            onClick={onOpenJoinUs}
            id="header-join-us-btn"
            className="px-6 py-2.5 bg-[#e040a0] hover:bg-[#c82f8c] text-white rounded-full text-sm font-bold shadow-md shadow-pink-500/20 transition-all bouncy-hover hidden sm:inline-flex items-center gap-1.5"
          >
            Join Us
          </button>
        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="md:hidden flex items-center justify-around bg-white border-t border-[#f2e8f2] px-2 py-2 text-xs font-semibold text-[#604868]">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl ${
            activeTab === 'home' ? 'text-[#e040a0] font-bold' : ''
          }`}
        >
          <span className="material-symbols-outlined text-xl">home</span>
          <span>Home</span>
        </button>
        <button
          onClick={() => setActiveTab('rights')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl ${
            activeTab === 'rights' ? 'text-[#e040a0] font-bold' : ''
          }`}
        >
          <span className="material-symbols-outlined text-xl">balance</span>
          <span>Rights</span>
        </button>
        <button
          onClick={() => setActiveTab('spotlights')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl ${
            activeTab === 'spotlights' ? 'text-[#e040a0] font-bold' : ''
          }`}
        >
          <span className="material-symbols-outlined text-xl">award_star</span>
          <span>Spotlights</span>
        </button>
        <button
          onClick={() => setActiveTab('dream-board')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl ${
            activeTab === 'dream-board' ? 'text-[#e040a0] font-bold' : ''
          }`}
        >
          <span className="material-symbols-outlined text-xl">auto_fix_high</span>
          <span>Board</span>
        </button>
        <button
          onClick={() => setActiveTab('resources')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl ${
            activeTab === 'resources' ? 'text-[#e040a0] font-bold' : ''
          }`}
        >
          <span className="material-symbols-outlined text-xl">folder_zip</span>
          <span>Resources</span>
        </button>
      </div>
    </header>
  );
};
