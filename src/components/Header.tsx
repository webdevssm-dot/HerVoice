import React, { useState } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  const navItems: { id: TabType; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'rights', label: 'Rights', icon: 'balance' },
    { id: 'spotlights', label: 'Spotlights', icon: 'award_star' },
    { id: 'dream-board', label: 'Dream Board', icon: 'auto_fix_high' },
    { id: 'resources', label: 'Resources', icon: 'folder_zip' },
    { id: 'brief', label: 'A4 Brief', icon: 'assignment' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#f2e8f2] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-2 text-left focus:outline-none group py-1"
          id="brand-logo-btn"
        >
          <span className="text-2xl sm:text-3xl font-black text-[#e040a0] tracking-tight group-hover:opacity-90 transition-opacity">
            HerVoice
          </span>
        </button>

        {/* Desktop Navigation Links (Visible on lg and up for optimal spacing) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              id={`nav-${item.id}-btn`}
              className={`text-sm font-semibold transition-all relative py-2 ${
                activeTab === item.id
                  ? 'text-[#e040a0] font-bold border-b-2 border-[#e040a0]'
                  : 'text-[#604868] hover:text-[#e040a0]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSearch}
            id="header-search-btn"
            aria-label="Search"
            className="w-10 h-10 rounded-full text-[#2e1a28] hover:text-[#e040a0] hover:bg-[#fce8f5] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenJoinUs();
            }}
            id="header-join-us-btn"
            className="px-5 sm:px-6 py-2.5 bg-[#e040a0] hover:bg-[#c82f8c] text-white rounded-full text-xs sm:text-sm font-bold shadow-md shadow-pink-500/20 transition-all bouncy-hover hidden sm:inline-flex items-center gap-1.5"
          >
            Join Us
          </button>

          {/* Hamburger / Close Menu Button for Mobile & Tablets */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="header-mobile-toggle-btn"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="lg:hidden w-10 h-10 rounded-full text-[#2e1a28] hover:text-[#e040a0] hover:bg-[#fce8f5] flex items-center justify-center transition-colors border border-[#f2e8f2]"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Drawer at top */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-[#f2e8f2] shadow-xl animate-fadeIn px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left text-sm font-bold transition-all ${
                  activeTab === item.id
                    ? 'bg-[#fce8f5] text-[#e040a0] shadow-sm'
                    : 'text-[#604868] hover:bg-[#fcf7fc] hover:text-[#e040a0]'
                }`}
              >
                <span className={`material-symbols-outlined text-xl ${activeTab === item.id ? 'text-[#e040a0]' : 'text-[#7c52aa]'}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#f2e8f2] flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenJoinUs();
              }}
              className="w-full py-3 bg-[#e040a0] hover:bg-[#c82f8c] text-white rounded-2xl text-sm font-bold shadow-md shadow-pink-500/20 text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">favorite</span>
              <span>Join HerVoice Movement</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

