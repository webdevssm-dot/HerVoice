import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SPOTLIGHTS_LIST, INITIAL_RESOURCES, RIGHT_PILLARS, FEATURED_SPOTLIGHT } from '../data/mockData';
import { TabType } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: TabType) => void;
  onSelectSpotlight: (id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  setActiveTab,
  onSelectSpotlight
}) => {
  const [query, setQuery] = useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Focus search input instantly on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Close modal on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const allSpotlights = [FEATURED_SPOTLIGHT, ...SPOTLIGHTS_LIST];

  const matchedSpotlights = query.trim()
    ? allSpotlights.filter(
        (s) =>
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.category.toLowerCase().includes(query.toLowerCase()) ||
          s.quoteOrHeadline.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const matchedResources = query.trim()
    ? INITIAL_RESOURCES.filter(
        (r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.type.toLowerCase().includes(query.toLowerCase()) ||
          (r.description && r.description.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const matchedRights = query.trim()
    ? RIGHT_PILLARS.filter(
        (rp) =>
          rp.title.toLowerCase().includes(query.toLowerCase()) ||
          rp.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelectSpotlightClick = (id: string) => {
    onClose();
    setActiveTab('spotlights');
    onSelectSpotlight(id);
  };

  const handleSelectTab = (tab: TabType) => {
    onClose();
    setActiveTab(tab);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-20 px-3 sm:px-4 bg-black/60 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -12 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel rounded-3xl max-w-2xl w-full shadow-2xl border border-white/80 dark:border-white/10 overflow-hidden relative text-[#2e1a28] dark:text-[#f8f0f7] flex flex-col max-h-[85vh]"
          >
            {/* Search Header */}
            <div className="p-4 border-b border-pink-200/50 dark:border-white/10 bg-white/40 dark:bg-[#251223]/60 backdrop-blur-md flex items-center gap-3 shrink-0">
              <span className="material-symbols-outlined text-[#e040a0] dark:text-[#f25cb8] text-2xl ml-2">search</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search rights, leaders, resources, or goals..."
                className="w-full bg-transparent text-base font-semibold text-[#2e1a28] dark:text-[#f8f0f7] focus:outline-none placeholder:text-[#886690] dark:placeholder:text-[#a886a5]"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="text-xs text-[#7c52aa] dark:text-[#d8bdd5] hover:text-[#e040a0] dark:hover:text-[#f25cb8] font-bold px-3 py-1 glass-pill rounded-full"
                >
                  CLEAR
                </button>
              )}
              <button
                onClick={onClose}
                aria-label="Close search"
                className="w-9 h-9 rounded-full glass-panel hover:bg-pink-100/80 dark:hover:bg-[#3d223a] flex items-center justify-center text-[#2e1a28] dark:text-[#f8f0f7] font-bold transition-colors border border-pink-200/60 dark:border-white/10 shadow-sm shrink-0"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Results Body */}
            <div className="p-5 sm:p-6 max-h-[60vh] overflow-y-auto space-y-6">
              {!query.trim() ? (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-3">POPULAR SEARCHES</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setQuery('Education')}
                      className="px-4 py-2 glass-pill rounded-full text-xs font-bold text-[#604868] dark:text-[#d2b8cf] hover:text-[#e040a0] dark:hover:text-[#f25cb8] hover:bg-pink-100/60 dark:hover:bg-[#341832] border border-pink-200/50 dark:border-white/10 transition-all hover:scale-[1.02]"
                    >
                      🎓 Education Rights
                    </button>
                    <button
                      onClick={() => setQuery('Leadership')}
                      className="px-4 py-2 glass-pill rounded-full text-xs font-bold text-[#604868] dark:text-[#d2b8cf] hover:text-[#e040a0] dark:hover:text-[#f25cb8] hover:bg-pink-100/60 dark:hover:bg-[#341832] border border-pink-200/50 dark:border-white/10 transition-all hover:scale-[1.02]"
                    >
                      👑 Women in Leadership
                    </button>
                    <button
                      onClick={() => setQuery('Template')}
                      className="px-4 py-2 glass-pill rounded-full text-xs font-bold text-[#604868] dark:text-[#d2b8cf] hover:text-[#e040a0] dark:hover:text-[#f25cb8] hover:bg-pink-100/60 dark:hover:bg-[#341832] border border-pink-200/50 dark:border-white/10 transition-all hover:scale-[1.02]"
                    >
                      📁 Pitch Deck Templates
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Rights Match */}
                  {matchedRights.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-3 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base">balance</span>
                        <span>Rights & Guides ({matchedRights.length})</span>
                      </h4>
                      <div className="space-y-2">
                        {matchedRights.map((r) => (
                          <div
                            key={r.id}
                            onClick={() => handleSelectTab('rights')}
                            className="p-3.5 glass-panel rounded-2xl hover:bg-white/80 dark:hover:bg-[#341832] cursor-pointer border border-pink-100/80 dark:border-white/10 transition-all flex items-center justify-between shadow-xs hover:shadow-md"
                          >
                            <div>
                              <p className="font-bold text-sm text-[#2e1a28] dark:text-[#f8f0f7]">{r.title}</p>
                              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] line-clamp-1">{r.description}</p>
                            </div>
                            <span className="material-symbols-outlined text-sm text-[#e040a0] dark:text-[#f25cb8]">chevron_right</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Spotlights Match */}
                  {matchedSpotlights.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-3 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base">award_star</span>
                        <span>Inspirational Women ({matchedSpotlights.length})</span>
                      </h4>
                      <div className="space-y-2">
                        {matchedSpotlights.map((s) => (
                          <div
                            key={s.id}
                            onClick={() => handleSelectSpotlightClick(s.id)}
                            className="p-3.5 glass-panel rounded-2xl hover:bg-white/80 dark:hover:bg-[#341832] cursor-pointer border border-pink-100/80 dark:border-white/10 transition-all flex items-center gap-3 shadow-xs hover:shadow-md"
                          >
                            <img src={s.image} alt={s.imageAlt || s.name} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-sm text-[#2e1a28] dark:text-[#f8f0f7]">{s.name}</p>
                              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] line-clamp-1">{s.quoteOrHeadline}</p>
                            </div>
                            <span className="text-[10px] font-bold px-2.5 py-1 bg-[#e040a0] dark:bg-[#f25cb8] text-white rounded-full uppercase shadow-xs">
                              {s.category}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Resources Match */}
                  {matchedResources.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-3 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base">folder_zip</span>
                        <span>Resources & Assets ({matchedResources.length})</span>
                      </h4>
                      <div className="space-y-2">
                        {matchedResources.map((res) => (
                          <div
                            key={res.id}
                            onClick={() => handleSelectTab('resources')}
                            className="p-3.5 glass-panel rounded-2xl hover:bg-white/80 dark:hover:bg-[#341832] cursor-pointer border border-pink-100/80 dark:border-white/10 transition-all flex items-center gap-3 shadow-xs hover:shadow-md"
                          >
                            <img src={res.image} alt={res.imageAlt || res.title} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-sm text-[#2e1a28] dark:text-[#f8f0f7]">{res.title}</p>
                              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] line-clamp-1">{res.format}</p>
                            </div>
                            <span className="text-[10px] font-bold px-2.5 py-1 glass-pill text-[#7c52aa] dark:text-[#d8bdd5] rounded-full uppercase">
                              {res.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {matchedRights.length === 0 && matchedSpotlights.length === 0 && matchedResources.length === 0 && (
                    <div className="text-center py-8 text-[#604868] dark:text-[#d2b8cf]">
                      <span className="material-symbols-outlined text-4xl text-[#e040a0] dark:text-[#f25cb8] mb-2">search_off</span>
                      <p className="text-sm font-bold text-[#2e1a28] dark:text-[#f8f0f7]">No results found for "{query}"</p>
                      <p className="text-xs mt-1">Try searching for keywords like "Education", "Leadership", or "Templates".</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Exit Bar */}
            <div className="p-3.5 bg-white/40 dark:bg-[#251223]/60 backdrop-blur-md border-t border-pink-200/50 dark:border-white/10 flex items-center justify-between shrink-0">
              <span className="text-[11px] text-[#604868] dark:text-[#d2b8cf] font-medium px-2">
                Press <kbd className="px-1.5 py-0.5 bg-white/70 dark:bg-[#381f35] border border-pink-200/60 dark:border-white/10 rounded text-[10px] font-mono dark:text-[#f8f0f7]">Esc</kbd> or click outside to exit
              </span>

              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#e040a0] text-white text-xs font-bold rounded-full hover:bg-[#c82f8c] transition-all shadow-md flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-base">close</span>
                <span>Close Search</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

