import React, { useState } from 'react';
import { ResourceAsset } from '../types';
import { INITIAL_RESOURCES } from '../data/mockData';

interface ResourcesPageProps {
  onOpenResourceModal: (resource: ResourceAsset) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onOpenResourceModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Toolkits');

  const filteredResources = activeCategory === 'All Toolkits'
    ? INITIAL_RESOURCES
    : INITIAL_RESOURCES.filter((r) => r.type.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">
              Legal Guides & <span className="text-[#e040a0] dark:text-[#f25cb8]">Leadership Toolkits</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#604868] dark:text-[#d2b8cf] mt-2 max-w-2xl font-medium">
              Free, verified legal handbooks, business pitch templates, health guides, and emergency directory resources produced with official Batswana organizations.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {['All Toolkits', 'Guidebook', 'Template', 'Handbook', 'Directory', 'Toolkit'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#e040a0] dark:bg-[#f25cb8] text-white shadow-md shadow-pink-500/20'
                  : 'bg-white dark:bg-[#281427] text-[#604868] dark:text-[#d2b8cf] border border-[#f2e8f2] dark:border-[#381f35] hover:bg-[#fce8f5] dark:hover:bg-[#3a1a38] hover:text-[#e040a0] dark:hover:text-[#f25cb8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8">
          {filteredResources.map((asset) => (
            <div
              key={asset.id}
              onClick={() => onOpenResourceModal(asset)}
              className={`bg-white dark:bg-[#1e0f1d] rounded-2xl sm:rounded-3xl border border-[#f2e8f2] dark:border-[#381f35] overflow-hidden hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between ${
                asset.wide ? 'sm:col-span-2' : ''
              }`}
            >
              {/* Media Preview Container */}
              <div className="relative overflow-hidden h-32 sm:h-64 bg-[#fcf7fc] dark:bg-[#281427] flex items-center justify-center">
                <img
                  src={asset.image}
                  alt={asset.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex gap-1.5">
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-[#7c52aa] text-white text-[8px] sm:text-[10px] font-bold rounded-full uppercase">
                    {asset.type}
                  </span>
                  {asset.isNew && (
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-[#e040a0] text-white text-[8px] sm:text-[10px] font-bold rounded-full uppercase">
                      NEW
                    </span>
                  )}
                </div>

                {/* Quick Action overlay */}
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3">
                  <span className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#e040a0] dark:bg-[#f25cb8] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-sm sm:text-lg">download</span>
                  </span>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="p-3 sm:p-6 space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xs sm:text-lg font-bold text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#e040a0] dark:group-hover:text-[#f25cb8] transition-colors line-clamp-1">{asset.title}</h3>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#7c52aa] dark:text-[#b08cc9] uppercase bg-[#f0e5ff] dark:bg-[#2b172a] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shrink-0">{asset.format}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#604868] dark:text-[#d2b8cf] line-clamp-2 leading-relaxed">
                  {asset.description}
                </p>

                {asset.officialPublisher && (
                  <p className="text-[11px] font-semibold text-[#7c52aa] dark:text-[#b08cc9] flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    <span className="truncate">{asset.officialPublisher}</span>
                  </p>
                )}

                <div className="pt-3 border-t border-[#f2e8f2] dark:border-[#381f35] flex items-center justify-between text-xs font-bold text-[#e040a0] dark:text-[#f25cb8]">
                  <span>Preview & Download Pack {asset.fileSize ? `(${asset.fileSize})` : ''}</span>
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
