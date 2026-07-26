import React from 'react';
import { TabType } from '../types';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
  onOpenJoinUs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenJoinUs }) => {
  return (
    <footer className="bg-[#f5eaf4] dark:bg-[#180a17] text-[#2e1a28] dark:text-[#f8f0f7] border-t border-[#ebd8eb] dark:border-[#381f35] mt-auto transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand Info */}
          <div className="space-y-1">
            <span className="text-xl font-black text-[#e040a0] dark:text-[#f25cb8]">
              HerVoice
            </span>
            <p className="text-xs text-[#604868] dark:text-[#d2b8cf] max-w-sm">
              Empowering voices, sharing stories, and building a more equitable future for every woman, everywhere.
            </p>
            <p className="text-[11px] text-[#886690] dark:text-[#a882a5] pt-1">
              © {new Date().getFullYear()} HerVoice Empowerment. All rights reserved.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#604868] dark:text-[#d2b8cf]">
            <button onClick={() => setActiveTab('brief')} className="hover:text-[#e040a0] dark:hover:text-[#f25cb8] transition-colors font-bold text-[#e040a0] dark:text-[#f25cb8]">
              WCAG 2.1 A4 Brief
            </button>
            <button onClick={() => setActiveTab('rights')} className="hover:text-[#e040a0] dark:hover:text-[#f25cb8] transition-colors">
              Safety Center
            </button>
            <button onClick={() => setActiveTab('rights')} className="hover:text-[#e040a0] dark:hover:text-[#f25cb8] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => setActiveTab('rights')} className="hover:text-[#e040a0] dark:hover:text-[#f25cb8] transition-colors">
              Get Help Now
            </button>
            <button onClick={onOpenJoinUs} className="hover:text-[#e040a0] dark:hover:text-[#f25cb8] transition-colors">
              Contact Us
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full bg-white/80 dark:bg-[#2b172a] hover:bg-white dark:hover:bg-[#3d223a] text-[#7c52aa] dark:text-[#f055b3] flex items-center justify-center shadow-sm transition-transform hover:scale-105 border border-transparent dark:border-[#381f35]">
              <span className="material-symbols-outlined text-lg">language</span>
            </button>
            <button className="w-9 h-9 rounded-full bg-white/80 dark:bg-[#2b172a] hover:bg-white dark:hover:bg-[#3d223a] text-[#7c52aa] dark:text-[#f055b3] flex items-center justify-center shadow-sm transition-transform hover:scale-105 border border-transparent dark:border-[#381f35]">
              <span className="material-symbols-outlined text-lg">share</span>
            </button>
            <button className="w-9 h-9 rounded-full bg-white/80 dark:bg-[#2b172a] hover:bg-white dark:hover:bg-[#3d223a] text-[#7c52aa] dark:text-[#f055b3] flex items-center justify-center shadow-sm transition-transform hover:scale-105 border border-transparent dark:border-[#381f35]">
              <span className="material-symbols-outlined text-lg">groups</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
