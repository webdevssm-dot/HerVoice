import React, { useState } from 'react';
import { Spotlight } from '../types';
import { FEATURED_SPOTLIGHT, SPOTLIGHTS_LIST } from '../data/mockData';

interface SpotlightsPageProps {
  onOpenStory: (spotlight: Spotlight) => void;
  onOpenNominate: () => void;
  selectedSpotlightId?: string;
}

export const SpotlightsPage: React.FC<SpotlightsPageProps> = ({
  onOpenStory,
  onOpenNominate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredList = selectedCategory === 'All'
    ? SPOTLIGHTS_LIST
    : SPOTLIGHTS_LIST.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="space-y-12 pb-16">
      {/* Top Hero Featured Spotlight Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-white dark:bg-[#1e0f1d] rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-[#f2e8f2] dark:border-[#381f35] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative rounded-xl sm:rounded-2xl overflow-hidden h-[220px] sm:h-[360px] bg-[#1a0f18] flex items-center justify-center p-2">
            <img
              src={FEATURED_SPOTLIGHT.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110 pointer-events-none"
            />
            <img
              src={FEATURED_SPOTLIGHT.image}
              alt={FEATURED_SPOTLIGHT.name}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              className="max-h-full max-w-full object-contain relative z-10 drop-shadow-xl rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#2e1a28] via-[#7c52aa] to-[#e040a0] flex flex-col items-center justify-center p-6 text-white text-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl font-black border border-white/30 mb-2">
                UD
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#fce8f5]">FEATURED LEADER</span>
              <p className="text-xl font-black mt-1">Hon. Unity Dow</p>
            </div>
            <div className="absolute top-4 left-4 flex gap-2 z-20">
              <span className="px-3 py-1 bg-[#e040a0] text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-md">
                FEATURED SPOTLIGHT
              </span>
              <span className="px-3 py-1 bg-[#7c52aa] text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-md">
                BOTSWANA
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9]">
              LEADERSHIP & INNOVATION
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">
              {FEATURED_SPOTLIGHT.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#604868] dark:text-[#d2b8cf] leading-relaxed font-medium">
              Pioneering sustainable technology solutions in rural communities and inspiring the next generation of women coders across Botswana.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenStory(FEATURED_SPOTLIGHT)}
                className="px-6 py-2.5 bg-[#e040a0] dark:bg-[#f25cb8] hover:bg-[#c82f8c] dark:hover:bg-[#e040a0] text-white text-xs font-bold rounded-full shadow-md shadow-pink-500/20 transition-all bouncy-hover flex items-center gap-1.5"
              >
                <span>Read Full Story</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>

              <button
                onClick={() => onOpenStory(FEATURED_SPOTLIGHT)}
                className="px-6 py-2.5 bg-white dark:bg-[#281427] border border-[#7c52aa] dark:border-[#b08cc9] text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-[#f0e5ff] dark:hover:bg-[#3d223a] text-xs font-bold rounded-full transition-all bouncy-hover flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">play_circle</span>
                <span>Watch Interview</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Header & Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Voices of Tomorrow</h2>
            <p className="text-xs text-[#604868] dark:text-[#d2b8cf] mt-1">
              Explore stories of young women breaking barriers in science, art, sports, and leadership.
            </p>
          </div>

          {/* Nominate Role Model Button */}
          <button
            onClick={onOpenNominate}
            id="nominate-role-model-btn"
            className="px-6 py-2.5 bg-[#e040a0] dark:bg-[#f25cb8] hover:bg-[#c82f8c] dark:hover:bg-[#e040a0] text-white font-bold rounded-full text-xs shadow-md shadow-pink-500/20 transition-all bouncy-hover flex items-center gap-1.5 self-start md:self-auto"
          >
            <span className="material-symbols-outlined text-base">add</span>
            <span>Nominate a Role Model</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'All', label: 'All Stories' },
            { id: 'Science', label: 'Science' },
            { id: 'Business', label: 'Business' },
            { id: 'Sports', label: 'Sports' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#e040a0] dark:bg-[#f25cb8] text-white shadow-md shadow-pink-500/20'
                  : 'bg-white dark:bg-[#281427] text-[#604868] dark:text-[#d2b8cf] border border-[#f2e8f2] dark:border-[#381f35] hover:bg-[#fce8f5] dark:hover:bg-[#3a1a38] hover:text-[#e040a0] dark:hover:text-[#f25cb8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Spotlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredList.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenStory(item)}
              className="bg-white dark:bg-[#1e0f1d] rounded-2xl sm:rounded-3xl border border-[#f2e8f2] dark:border-[#381f35] overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col group"
            >
              <div className="h-44 sm:h-64 overflow-hidden relative bg-[#1a0f18] flex items-center justify-center p-2">
                {/* Ambient blur background */}
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110 pointer-events-none"
                />
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    // Hide broken image and reveal parent fallback
                    e.currentTarget.style.display = 'none';
                  }}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 relative z-10 drop-shadow-md rounded-md"
                />
                {/* Fallback visual if image fails */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2e1a28] via-[#7c52aa] to-[#e040a0] flex flex-col items-center justify-center p-4 text-white text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-black border border-white/30 mb-1">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#fce8f5]">BOTSWANA LEADER</span>
                  <p className="text-base font-black leading-tight mt-0.5">{item.name}</p>
                </div>

                <span className="absolute top-3 left-3 z-20 px-3 py-1 bg-[#7c52aa] text-white text-[10px] font-bold rounded-full uppercase shadow-md">
                  {item.category}
                </span>
              </div>
              <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-bold text-lg text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#e040a0] dark:group-hover:text-[#f25cb8] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#604868] dark:text-[#d2b8cf] line-clamp-2 mt-1 font-medium">
                    {item.quoteOrHeadline}
                  </p>
                </div>

                {item.officialSource && (
                  <p className="text-[10px] text-[#7c52aa] dark:text-[#b08cc9] font-mono line-clamp-1 border-t border-[#f2e8f2] dark:border-[#381f35] pt-2">
                    Source: {item.officialSource}
                  </p>
                )}

                <div className="pt-2 text-xs font-bold text-[#e040a0] dark:text-[#f25cb8] flex items-center gap-1">
                  <span>Read Full Profile</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center pt-10">
          <button className="px-8 py-3.5 bg-[#f0e5ff] dark:bg-[#2b172a] text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-[#ebd8ff] dark:hover:bg-[#3d223a] font-bold rounded-full text-xs transition-all bouncy-hover inline-flex items-center gap-2">
            <span>Load More Spotlights</span>
            <span className="material-symbols-outlined text-base">expand_more</span>
          </button>
        </div>
      </section>
    </div>
  );
};
