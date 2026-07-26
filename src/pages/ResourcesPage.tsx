import React, { useState } from 'react';
import { ResourceAsset } from '../types';
import { INITIAL_RESOURCES } from '../data/mockData';

interface ResourcesPageProps {
  onOpenResourceModal: (resource: ResourceAsset) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onOpenResourceModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Assets');

  const categories = ['All Assets', 'Illustration', 'Template', 'Icon Set', 'Photo', 'Sketches'];

  const filteredResources = activeCategory === 'All Assets'
    ? INITIAL_RESOURCES
    : INITIAL_RESOURCES.filter((r) => r.type.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#2e1a28]">
              Resources & <span className="text-[#e040a0]">Assets</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#604868] mt-2 max-w-2xl font-medium">
              Free, open-license design assets, toolkits, and guides crafted to empower young women leaders across Botswana.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#e040a0] text-white shadow-md shadow-pink-500/20'
                  : 'bg-white text-[#604868] border border-[#f2e8f2] hover:bg-[#fce8f5] hover:text-[#e040a0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((asset) => (
            <div
              key={asset.id}
              onClick={() => onOpenResourceModal(asset)}
              className={`bg-white rounded-3xl border border-[#f2e8f2] overflow-hidden hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between ${
                asset.wide ? 'sm:col-span-2' : ''
              }`}
            >
              {/* Media Preview Container */}
              <div className="relative overflow-hidden h-64 bg-[#fcf7fc] flex items-center justify-center">
                <img
                  src={asset.image}
                  alt={asset.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-3 py-1 bg-[#7c52aa] text-white text-[10px] font-bold rounded-full uppercase">
                    {asset.type}
                  </span>
                  {asset.isNew && (
                    <span className="px-3 py-1 bg-[#e040a0] text-white text-[10px] font-bold rounded-full uppercase">
                      NEW
                    </span>
                  )}
                </div>

                {/* Quick Action overlay */}
                <div className="absolute bottom-3 right-3">
                  <span className="w-10 h-10 rounded-full bg-[#e040a0] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-lg">download</span>
                  </span>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#2e1a28] group-hover:text-[#e040a0] transition-colors">{asset.title}</h3>
                  <span className="text-[10px] font-bold text-[#7c52aa] uppercase bg-[#f0e5ff] px-2.5 py-1 rounded-full">{asset.format}</span>
                </div>
                <p className="text-xs text-[#604868] line-clamp-2 leading-relaxed">
                  {asset.description}
                </p>

                <div className="pt-3 border-t border-[#f2e8f2] flex items-center justify-between text-xs font-bold text-[#e040a0]">
                  <span>Preview & Download</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
