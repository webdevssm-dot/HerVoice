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
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#f2e8f2] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-[300px] sm:h-[360px]">
            <img
              src={FEATURED_SPOTLIGHT.image}
              alt={FEATURED_SPOTLIGHT.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 bg-[#e040a0] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                FEATURED SPOTLIGHT
              </span>
              <span className="px-3 py-1 bg-[#7c52aa] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                BOTSWANA
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7c52aa]">
              LEADERSHIP & INNOVATION
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#2e1a28]">
              {FEATURED_SPOTLIGHT.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#604868] leading-relaxed font-medium">
              Pioneering sustainable technology solutions in rural communities and inspiring the next generation of women coders across Botswana.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenStory(FEATURED_SPOTLIGHT)}
                className="px-6 py-2.5 bg-[#e040a0] hover:bg-[#c82f8c] text-white text-xs font-bold rounded-full shadow-md shadow-pink-500/20 transition-all bouncy-hover flex items-center gap-1.5"
              >
                <span>Read Full Story</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>

              <button
                onClick={() => onOpenStory(FEATURED_SPOTLIGHT)}
                className="px-6 py-2.5 bg-white border border-[#7c52aa] text-[#7c52aa] hover:bg-[#f0e5ff] text-xs font-bold rounded-full transition-all bouncy-hover flex items-center gap-1.5"
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
            <h2 className="text-3xl font-black text-[#2e1a28]">Voices of Tomorrow</h2>
            <p className="text-xs text-[#604868] mt-1">
              Explore stories of young women breaking barriers in science, art, sports, and leadership.
            </p>
          </div>

          {/* Nominate Role Model Button */}
          <button
            onClick={onOpenNominate}
            id="nominate-role-model-btn"
            className="px-6 py-2.5 bg-[#e040a0] hover:bg-[#c82f8c] text-white font-bold rounded-full text-xs shadow-md shadow-pink-500/20 transition-all bouncy-hover flex items-center gap-1.5 self-start md:self-auto"
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
                  ? 'bg-[#e040a0] text-white shadow-md shadow-pink-500/20'
                  : 'bg-white text-[#604868] border border-[#f2e8f2] hover:bg-[#fce8f5] hover:text-[#e040a0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Spotlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredList.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenStory(item)}
              className="bg-white rounded-3xl border border-[#f2e8f2] overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-[#7c52aa] text-white text-[10px] font-bold rounded-full uppercase">
                  {item.category}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-bold text-lg text-[#2e1a28] group-hover:text-[#e040a0] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#604868] line-clamp-2 mt-1">
                    {item.quoteOrHeadline}
                  </p>
                </div>
                <div className="pt-2 text-xs font-bold text-[#e040a0] flex items-center gap-1">
                  <span>Read Story</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center pt-10">
          <button className="px-8 py-3.5 bg-[#f0e5ff] text-[#7c52aa] hover:bg-[#ebd8ff] font-bold rounded-full text-xs transition-all bouncy-hover inline-flex items-center gap-2">
            <span>Load More Spotlights</span>
            <span className="material-symbols-outlined text-base">expand_more</span>
          </button>
        </div>
      </section>
    </div>
  );
};
