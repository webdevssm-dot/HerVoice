import React, { useState } from 'react';
import { TabType } from '../types';

interface AboutPageProps {
  setActiveTab: (tab: TabType) => void;
  onOpenJoinUs: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab, onOpenJoinUs }) => {
  const [activeSection, setActiveSection] = useState<'pillars' | 'partners'>('pillars');

  return (
    <div className="space-y-3 sm:space-y-4 pb-4">
      {/* Compact Hero Banner Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-2 sm:pt-4">
        <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-sky-500/10 dark:from-pink-950/30 dark:via-purple-950/30 dark:to-sky-950/30 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-[#ebd8eb] dark:border-[#381f35] relative overflow-hidden shadow-xs">
          <div className="max-w-2xl space-y-1.5 sm:space-y-2.5 relative z-10">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#e040a0] text-white text-[9px] font-black uppercase rounded-full tracking-wider shadow-xs">
                <span className="material-symbols-outlined text-[11px]">auto_awesome</span>
                <span>Our Mission</span>
              </span>
              <span className="text-[10px] text-[#7c52aa] dark:text-[#b08cc9] font-bold">Botswana Youth Empowerment</span>
            </div>
            <h1 className="text-lg sm:text-2xl font-black text-[#2e1a28] dark:text-[#f8f0f7] tracking-tight leading-snug">
              Empowering Batswana Women Through <span className="text-[#e040a0] dark:text-[#f25cb8]">Knowledge & Unity</span>
            </h1>
            <p className="text-[11px] sm:text-xs text-[#604868] dark:text-[#d2b8cf] leading-relaxed font-medium line-clamp-2 sm:line-clamp-none">
              HerVoice translates legal rights into everyday language, highlights inspiring local female leaders, and supports youth initiatives across Botswana.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <button
                onClick={() => setActiveTab('rights')}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-[#e040a0] hover:bg-[#c82f8c] dark:bg-[#f25cb8] text-white rounded-full font-bold text-[11px] shadow-xs transition-all flex items-center gap-1"
              >
                <span>Know Your Rights</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>

              <button
                onClick={onOpenJoinUs}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-white dark:bg-[#281427] border border-[#7c52aa] text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-[#f0e5ff] rounded-full font-bold text-[11px] transition-all flex items-center gap-1"
              >
                <span>Join Movement</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Pills */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-1.5 pb-1 border-b border-[#f2e8f2] dark:border-[#381f35]">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveSection('pillars')}
              className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all shrink-0 flex items-center gap-1 ${
                activeSection === 'pillars'
                  ? 'bg-[#e040a0] text-white shadow-xs'
                  : 'text-[#604868] dark:text-[#d2b8cf] hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <span className="material-symbols-outlined text-xs">view_column</span>
              <span>Key Pillars</span>
            </button>
            <button
              onClick={() => setActiveSection('partners')}
              className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all shrink-0 flex items-center gap-1 ${
                activeSection === 'partners'
                  ? 'bg-[#e040a0] text-white shadow-xs'
                  : 'text-[#604868] dark:text-[#d2b8cf] hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <span className="material-symbols-outlined text-xs">handshake</span>
              <span>Partners & Support Network</span>
            </button>
          </div>
          <span className="text-[10px] text-[#7c52aa] dark:text-[#b08cc9] font-bold hidden sm:inline-block">Ages 14–28</span>
        </div>
      </section>

      {/* Dynamic Content View */}
      {activeSection === 'pillars' && (
        <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-4">
            {/* Pillar 1 */}
            <div className="bg-white dark:bg-[#1e0f1d] p-3 sm:p-4 rounded-xl border border-[#f2e8f2] dark:border-[#381f35] shadow-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#fce8f5] dark:bg-[#341832] text-[#e040a0] dark:text-[#f25cb8] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base font-bold">gavel</span>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-[#2e1a28] dark:text-[#f8f0f7]">Accessible Legal Rights</h3>
              </div>
              <p className="text-[11px] text-[#604868] dark:text-[#d2b8cf] leading-relaxed font-medium">
                Plain-language breakdown of constitutional protection frameworks, marital laws, and GBV procedures with interactive quizzes.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white dark:bg-[#1e0f1d] p-3 sm:p-4 rounded-xl border border-[#f2e8f2] dark:border-[#381f35] shadow-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#f0e5ff] dark:bg-[#2b172a] text-[#7c52aa] dark:text-[#b08cc9] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base font-bold">award_star</span>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-[#2e1a28] dark:text-[#f8f0f7]">Batswana Role Models</h3>
              </div>
              <p className="text-[11px] text-[#604868] dark:text-[#d2b8cf] leading-relaxed font-medium">
                Amplifying real stories of female leaders in STEM, law, traditional administration (Kgosi), agriculture, and fine arts.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white dark:bg-[#1e0f1d] p-3 sm:p-4 rounded-xl border border-[#f2e8f2] dark:border-[#381f35] shadow-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#e0f2fe] dark:bg-[#152a38] text-[#0096cc] dark:text-[#38bdf8] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base font-bold">rocket_launch</span>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-[#2e1a28] dark:text-[#f8f0f7]">Community Action</h3>
              </div>
              <p className="text-[11px] text-[#604868] dark:text-[#d2b8cf] leading-relaxed font-medium">
                Our interactive Dream Canvas lets youth propose coding clubs, safehouses, and local co-ops while tracking community impact.
              </p>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'partners' && (
        <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            <div className="p-3 bg-white dark:bg-[#1e0f1d] rounded-xl border border-[#f2e8f2] dark:border-[#381f35] shadow-xs flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#e040a0] text-lg">diversity_1</span>
              <div>
                <h4 className="font-bold text-xs text-[#2e1a28] dark:text-[#f8f0f7]">Emang Basadi</h4>
                <p className="text-[10px] text-[#604868] dark:text-[#d2b8cf]">Women's Rights Association</p>
              </div>
            </div>

            <div className="p-3 bg-white dark:bg-[#1e0f1d] rounded-xl border border-[#f2e8f2] dark:border-[#381f35] shadow-xs flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#0096cc] text-lg">call</span>
              <div>
                <h4 className="font-bold text-xs text-[#2e1a28] dark:text-[#f8f0f7]">Childline Botswana</h4>
                <p className="text-[10px] text-[#604868] dark:text-[#d2b8cf]">Toll-Free Helpline 116</p>
              </div>
            </div>

            <div className="p-3 bg-white dark:bg-[#1e0f1d] rounded-xl border border-[#f2e8f2] dark:border-[#381f35] shadow-xs flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#7c52aa] text-lg">gavel</span>
              <div>
                <h4 className="font-bold text-xs text-[#2e1a28] dark:text-[#f8f0f7]">UB Law Clinic</h4>
                <p className="text-[10px] text-[#604868] dark:text-[#d2b8cf]">Legal Counseling & Advice</p>
              </div>
            </div>

            <div className="p-3 bg-white dark:bg-[#1e0f1d] rounded-xl border border-[#f2e8f2] dark:border-[#381f35] shadow-xs flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#e040a0] text-lg">lightbulb</span>
              <div>
                <h4 className="font-bold text-xs text-[#2e1a28] dark:text-[#f8f0f7]">CEDA & LEA</h4>
                <p className="text-[10px] text-[#604868] dark:text-[#d2b8cf]">Youth Innovation Grants</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

