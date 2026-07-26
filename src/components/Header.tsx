import React, { useState } from 'react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenJoinUs: () => void;
  onOpenSearch: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenJoinUs,
  onOpenSearch,
  isDarkMode = false,
  onToggleDarkMode
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
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#1a0e19]/95 backdrop-blur-md border-b border-[#f2e8f2] dark:border-[#381f35] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-12 sm:h-16 lg:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-1.5 text-left focus:outline-none group py-1"
          id="brand-logo-btn"
        >
          <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#e040a0] dark:text-[#f25cb8] tracking-tight group-hover:opacity-90 transition-opacity">
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
                  ? 'text-[#e040a0] dark:text-[#f25cb8] font-bold border-b-2 border-[#e040a0] dark:border-[#f25cb8]'
                  : 'text-[#604868] dark:text-[#d2b8cf] hover:text-[#e040a0] dark:hover:text-[#f25cb8]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Dark Mode Toggle Button */}
          {onToggleDarkMode && (
            <button
              onClick={onToggleDarkMode}
              id="header-theme-toggle-btn"
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full text-[#2e1a28] dark:text-[#f8f0f7] hover:text-[#e040a0] dark:hover:text-[#f25cb8] hover:bg-[#fce8f5] dark:hover:bg-[#2c182b] flex items-center justify-center transition-all border border-transparent dark:border-[#381f35]"
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          )}

          <button
            onClick={onOpenSearch}
            id="header-search-btn"
            aria-label="Search"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full text-[#2e1a28] dark:text-[#f8f0f7] hover:text-[#e040a0] dark:hover:text-[#f25cb8] hover:bg-[#fce8f5] dark:hover:bg-[#2c182b] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-xl sm:text-2xl">search</span>
          </button>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenJoinUs();
            }}
            id="header-join-us-btn"
            className="px-3.5 sm:px-6 py-1.5 sm:py-2.5 bg-[#e040a0] hover:bg-[#c82f8c] dark:bg-[#f25cb8] dark:hover:bg-[#e040a0] text-white rounded-full text-xs sm:text-sm font-bold shadow-md shadow-pink-500/20 transition-all bouncy-hover hidden sm:inline-flex items-center gap-1.5"
          >
            Join Us
          </button>

          {/* Hamburger / Close Menu Button for Mobile & Tablets */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="header-mobile-toggle-btn"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full text-[#2e1a28] dark:text-[#f8f0f7] hover:text-[#e040a0] dark:hover:text-[#f25cb8] hover:bg-[#fce8f5] dark:hover:bg-[#2c182b] flex items-center justify-center transition-colors border border-[#f2e8f2] dark:border-[#381f35]"
          >
            <span className="material-symbols-outlined text-xl sm:text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Drawer at top */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#1a0e19]/98 border-b border-[#f2e8f2] dark:border-[#381f35] shadow-xl animate-fadeIn px-2.5 sm:px-4 py-1.5 sm:py-2.5 space-y-1.5">
          <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-left text-[11px] sm:text-xs font-bold transition-all ${
                  activeTab === item.id
                    ? 'bg-[#fce8f5] dark:bg-[#341832] text-[#e040a0] dark:text-[#f25cb8] shadow-sm'
                    : 'text-[#604868] dark:text-[#d2b8cf] hover:bg-[#fcf7fc] dark:hover:bg-[#281427] hover:text-[#e040a0] dark:hover:text-[#f25cb8]'
                }`}
              >
                <span className={`material-symbols-outlined text-base ${activeTab === item.id ? 'text-[#e040a0] dark:text-[#f25cb8]' : 'text-[#7c52aa] dark:text-[#b08cc9]'}`}>
                  {item.icon}
                </span>
                <span className="truncate">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-1.5 border-t border-[#f2e8f2] dark:border-[#381f35] flex flex-col gap-1">
            {onToggleDarkMode && (
              <button
                onClick={onToggleDarkMode}
                className="w-full py-1.5 px-2.5 bg-[#f0e5ff] dark:bg-[#2b172a] text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-[#e040a0] hover:text-white rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 border border-purple-100 dark:border-[#3d233c]"
              >
                <span className="material-symbols-outlined text-sm">
                  {isDarkMode ? 'light_mode' : 'dark_mode'}
                </span>
                <span>{isDarkMode ? 'Switch to Light Appearance' : 'Switch to Dark Appearance'}</span>
              </button>
            )}

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenJoinUs();
              }}
              className="w-full py-1.5 sm:py-2 bg-[#e040a0] hover:bg-[#c82f8c] dark:bg-[#f25cb8] dark:hover:bg-[#e040a0] text-white rounded-lg text-[11px] sm:text-xs font-bold shadow-md shadow-pink-500/20 text-center flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">favorite</span>
              <span>Join HerVoice Movement</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


