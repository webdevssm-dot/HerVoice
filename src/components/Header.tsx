import React, { useState, useRef, useEffect } from 'react';
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
  const headerRef = useRef<HTMLElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
    { id: 'about', label: 'Mission', icon: 'auto_awesome' },
  ];

  return (
    <header ref={headerRef} className="sticky top-0 z-40 bg-white/95 dark:bg-[#1a0e19]/95 backdrop-blur-md border-b border-[#f2e8f2] dark:border-[#381f35] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-12 sm:h-14 lg:h-16 flex items-center justify-between gap-2 sm:gap-4 relative">
        {/* Brand Logo */}
        <button
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-1.5 text-left focus:outline-none group py-1"
          id="brand-logo-btn"
        >
          <span className="text-xl sm:text-2xl font-black text-[#e040a0] dark:text-[#f25cb8] tracking-tight group-hover:opacity-90 transition-opacity">
            HerVoice
          </span>
        </button>

        {/* Desktop Navigation Links (Compact pills) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#fcf7fc] dark:bg-[#231222] p-1 rounded-full border border-[#f2e8f2] dark:border-[#381f35]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              id={`nav-${item.id}-btn`}
              className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                activeTab === item.id
                  ? 'bg-[#e040a0] text-white shadow-sm shadow-pink-500/20'
                  : 'text-[#604868] dark:text-[#d2b8cf] hover:text-[#e040a0] dark:hover:text-[#f25cb8] hover:bg-white/60 dark:hover:bg-[#2c162a]'
              }`}
            >
              <span className="material-symbols-outlined text-sm">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Right Actions & Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Dark Mode Toggle Button */}
          {onToggleDarkMode && (
            <button
              onClick={onToggleDarkMode}
              id="header-theme-toggle-btn"
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full text-[#2e1a28] dark:text-[#f8f0f7] hover:text-[#e040a0] dark:hover:text-[#f25cb8] hover:bg-[#fce8f5] dark:hover:bg-[#2c182b] flex items-center justify-center transition-all border border-transparent dark:border-[#381f35]"
            >
              <span className="material-symbols-outlined text-lg sm:text-xl">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          )}

          <button
            onClick={onOpenSearch}
            id="header-search-btn"
            aria-label="Search"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full text-[#2e1a28] dark:text-[#f8f0f7] hover:text-[#e040a0] dark:hover:text-[#f25cb8] hover:bg-[#fce8f5] dark:hover:bg-[#2c182b] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-lg sm:text-xl">search</span>
          </button>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenJoinUs();
            }}
            id="header-join-us-btn"
            className="px-3 sm:px-4 py-1.5 bg-[#e040a0] hover:bg-[#c82f8c] dark:bg-[#f25cb8] dark:hover:bg-[#e040a0] text-white rounded-full text-xs font-bold shadow-sm shadow-pink-500/20 transition-all hidden sm:inline-flex items-center gap-1"
          >
            Join Us
          </button>

          {/* Minimalist Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="header-mobile-toggle-btn"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full text-[#2e1a28] dark:text-[#f8f0f7] hover:text-[#e040a0] dark:hover:text-[#f25cb8] hover:bg-[#fce8f5] dark:hover:bg-[#2c182b] flex items-center justify-center transition-colors border border-[#f2e8f2] dark:border-[#381f35]"
          >
            <span className="material-symbols-outlined text-lg sm:text-xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Minimalist Compact Dropdown Popover (div:nth-of-type(2) inside header) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute right-3 sm:right-6 top-[100%] mt-1 w-56 sm:w-60 bg-white/98 dark:bg-[#1a0e19]/98 border border-[#f2e8f2] dark:border-[#381f35] shadow-2xl rounded-2xl p-2 z-50 animate-fadeIn space-y-1">
          <div className="px-2 py-1 text-[10px] font-black uppercase text-[#7c52aa] dark:text-[#b08cc9] tracking-wider flex items-center justify-between">
            <span>Navigation</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#e040a0]"></span>
          </div>

          <div className="space-y-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-left text-xs font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-[#fce8f5] dark:bg-[#341832] text-[#e040a0] dark:text-[#f25cb8] font-bold'
                    : 'text-[#2e1a28] dark:text-[#f8f0f7] hover:bg-[#fcf7fc] dark:hover:bg-[#281427] hover:text-[#e040a0] dark:hover:text-[#f25cb8]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`material-symbols-outlined text-base ${activeTab === item.id ? 'text-[#e040a0] dark:text-[#f25cb8]' : 'text-[#7c52aa] dark:text-[#b08cc9]'}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {activeTab === item.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e040a0] dark:bg-[#f25cb8]"></span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-1.5 border-t border-[#f2e8f2] dark:border-[#381f35] flex items-center px-0.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenJoinUs();
              }}
              className="w-full py-2 px-3 bg-[#e040a0] hover:bg-[#c82f8c] dark:bg-[#f25cb8] text-white rounded-xl text-xs font-bold shadow-sm text-center flex items-center justify-center gap-1.5"
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


