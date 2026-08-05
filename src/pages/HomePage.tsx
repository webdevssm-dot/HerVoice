import React from 'react';
import { motion } from 'motion/react';
import { TabType, Spotlight } from '../types';
import { FEATURED_SPOTLIGHT } from '../data/mockData';
import heroMarchImg from '../assets/images/gbv_march_botswana_1785265375439.jpg';

interface HomePageProps {
  setActiveTab: (tab: TabType) => void;
  onOpenStory: (spotlight: Spotlight) => void;
  onOpenJoinUs: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onOpenStory,
  onOpenJoinUs
}) => {
  const scrollToPathways = () => {
    const el = document.getElementById('pathways-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('rights');
    }
  };

  return (
    <div className="space-y-10 sm:space-y-14 pb-12 relative">
      {/* Background Liquid Glass Ambient Glowing Orbs with deep blur */}
      <div className="absolute top-10 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-pink-400/10 dark:bg-pink-600/10 rounded-full blur-[120px] pointer-events-none liquid-orb -z-10" />
      <div className="absolute top-80 right-10 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none liquid-orb -z-10" style={{ animationDelay: '3s' }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-3 sm:pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 glass-pill rounded-full border border-pink-200/60 dark:border-white/10 shadow-xs">
                <span className="material-symbols-outlined text-sm text-[#e040a0] dark:text-[#f25cb8]">auto_awesome</span>
                <span className="text-xs font-black uppercase tracking-wider text-[#e040a0] dark:text-[#f25cb8]">
                  HERVOICE BOTSWANA
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#2e1a28] dark:text-[#f8f0f7] leading-tight lg:leading-[1.1]">
                Empowering the Next Generation of <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e040a0] via-[#b042a0] to-[#f25cb8]">
                  Botswana's Leaders
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#604868] dark:text-[#d2b8cf] max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Welcome! HerVoice is your safe digital home to learn your legal rights in simple terms, discover inspiring female mentors, share community dreams, and download verified handbooks.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <button
                  onClick={scrollToPathways}
                  id="hero-get-started-btn"
                  className="px-6 py-3.5 bg-[#e040a0] dark:bg-[#f25cb8] hover:bg-[#c82f8c] dark:hover:bg-[#e040a0] text-white rounded-full font-bold text-sm shadow-md shadow-pink-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
                >
                  <span>Explore Pathways</span>
                  <span className="material-symbols-outlined text-base">arrow_downward</span>
                </button>

                <button
                  onClick={() => setActiveTab('rights')}
                  id="hero-explore-rights-btn"
                  className="px-6 py-3.5 glass-panel text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-white/90 dark:hover:bg-[#3d223a] rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 border border-pink-200/50 dark:border-white/10"
                >
                  <span className="material-symbols-outlined text-base">gavel</span>
                  <span>Know Your Rights</span>
                </button>
              </div>
            </motion.div>

            {/* Right Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative rounded-3xl glass-panel p-3 shadow-2xl max-w-sm lg:max-w-md w-full border border-white/80 dark:border-white/10">
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src={heroMarchImg}
                    alt="Young Batswana women marching with NO to Gender Based Violence banner"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 text-white">
                    <p className="text-xs font-bold leading-snug drop-shadow-md">
                      🇧🇼 Championing equality, legal protection & youth innovation across Botswana.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Core Pathways Section */}
      <section id="pathways-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 glass-pill rounded-full border border-purple-200/50 dark:border-white/10 text-[10px] font-black uppercase text-[#7c52aa] dark:text-[#b08cc9]">
            <span>WHERE WOULD YOU LIKE TO START?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">
            Choose Your Learning & Action Path
          </h2>
          <p className="text-xs sm:text-sm text-[#604868] dark:text-[#d2b8cf] font-medium">
            Select any of the four core features below to begin exploring HerVoice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Pathway 1: Know Your Rights */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setActiveTab('rights')}
            className="p-6 glass-panel rounded-3xl border border-white/80 dark:border-white/10 shadow-lg hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 dark:bg-[#341832] text-[#e040a0] dark:text-[#f25cb8] flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-2xl font-bold">gavel</span>
              </div>
              <h3 className="text-base font-black text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#e040a0] dark:group-hover:text-[#f25cb8] transition-colors">
                Know Your Rights
              </h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] leading-relaxed font-medium">
                Plain-language breakdowns of Botswana statutes on education, property, domestic safety, and healthcare rights.
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab('rights');
              }}
              className="w-full py-2.5 bg-pink-50 dark:bg-[#2e152d] text-[#e040a0] dark:text-[#f25cb8] group-hover:bg-[#e040a0] group-hover:text-white dark:group-hover:bg-[#f25cb8] dark:group-hover:text-white text-xs font-bold rounded-full transition-all flex items-center justify-center gap-1.5"
            >
              <span>Explore Rights</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </motion.div>

          {/* Pathway 2: Role Model Spotlights */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setActiveTab('spotlights')}
            className="p-6 glass-panel rounded-3xl border border-white/80 dark:border-white/10 shadow-lg hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-[#2b172a] text-[#7c52aa] dark:text-[#b08cc9] flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-2xl font-bold">stars</span>
              </div>
              <h3 className="text-base font-black text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#7c52aa] dark:group-hover:text-[#b08cc9] transition-colors">
                Inspiring Mentors
              </h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] leading-relaxed font-medium">
                Read authentic stories of Batswana women breaking barriers in law, tech, arts, agriculture, and leadership.
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab('spotlights');
              }}
              className="w-full py-2.5 bg-purple-50 dark:bg-[#241328] text-[#7c52aa] dark:text-[#b08cc9] group-hover:bg-[#7c52aa] group-hover:text-white dark:group-hover:bg-[#b08cc9] dark:group-hover:text-[#1a0e19] text-xs font-bold rounded-full transition-all flex items-center justify-center gap-1.5"
            >
              <span>Meet Mentors</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </motion.div>

          {/* Pathway 3: Community Dream Board */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setActiveTab('dream-board')}
            className="p-6 glass-panel rounded-3xl border border-white/80 dark:border-white/10 shadow-lg hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-[#152a38] text-[#0077b6] dark:text-[#38bdf8] flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-2xl font-bold">rocket_launch</span>
              </div>
              <h3 className="text-base font-black text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#0077b6] dark:group-hover:text-[#38bdf8] transition-colors">
                Vision Board
              </h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] leading-relaxed font-medium">
                Share your personal aspirations, propose local youth initiatives, and cheer on fellow changemakers.
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab('dream-board');
              }}
              className="w-full py-2.5 bg-sky-50 dark:bg-[#10222e] text-[#0077b6] dark:text-[#38bdf8] group-hover:bg-[#0077b6] group-hover:text-white dark:group-hover:bg-[#38bdf8] dark:group-hover:text-[#0e1d26] text-xs font-bold rounded-full transition-all flex items-center justify-center gap-1.5"
            >
              <span>View Action Board</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </motion.div>

          {/* Pathway 4: Free Resource Handbooks */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setActiveTab('resources')}
            className="p-6 glass-panel rounded-3xl border border-white/80 dark:border-white/10 shadow-lg hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-[#332514] text-[#d97706] dark:text-[#fbbf24] flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-2xl font-bold">library_books</span>
              </div>
              <h3 className="text-base font-black text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#d97706] dark:group-hover:text-[#fbbf24] transition-colors">
                Resource Handbooks
              </h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] leading-relaxed font-medium">
                Download verified guides from Emang Basadi, CEDA, LEA, BOFWA, and Childline Botswana.
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab('resources');
              }}
              className="w-full py-2.5 bg-amber-50 dark:bg-[#281b0e] text-[#d97706] dark:text-[#fbbf24] group-hover:bg-[#d97706] group-hover:text-white dark:group-hover:bg-[#fbbf24] dark:group-hover:text-[#1c1208] text-xs font-bold rounded-full transition-all flex items-center justify-center gap-1.5"
            >
              <span>Download Guides</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Leader Spotlight (Clean, Uncrowded Single Highlight) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/80 dark:border-white/10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-md border-2 border-white dark:border-white/10 shrink-0">
                <img
                  src={FEATURED_SPOTLIGHT.image}
                  alt={FEATURED_SPOTLIGHT.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#e040a0]/10 dark:bg-[#f25cb8]/20 rounded-full text-[10px] font-black uppercase text-[#e040a0] dark:text-[#f25cb8]">
                <span className="material-symbols-outlined text-xs">grade</span>
                <span>FEATURED ROLE MODEL</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">
                  {FEATURED_SPOTLIGHT.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#7c52aa] dark:text-[#b08cc9] mt-0.5">
                  {FEATURED_SPOTLIGHT.subCategory || FEATURED_SPOTLIGHT.category}
                </p>
              </div>

              <blockquote className="text-sm sm:text-base italic text-[#2e1a28] dark:text-[#f8f0f7] font-semibold border-l-4 border-[#e040a0] pl-4 py-1 max-w-2xl mx-auto lg:mx-0">
                "{FEATURED_SPOTLIGHT.quoteOrHeadline}"
              </blockquote>

              <p className="text-xs sm:text-sm text-[#604868] dark:text-[#d2b8cf] leading-relaxed font-medium line-clamp-3">
                {FEATURED_SPOTLIGHT.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={() => onOpenStory(FEATURED_SPOTLIGHT)}
                  className="px-6 py-3 bg-[#e040a0] dark:bg-[#f25cb8] text-white hover:bg-[#c82f8c] dark:hover:bg-[#e040a0] font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Read Her Full Story</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>

                <button
                  onClick={() => setActiveTab('spotlights')}
                  className="px-5 py-3 glass-pill text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-white/90 dark:hover:bg-[#3d223a] font-bold text-xs rounded-full transition-all border border-pink-200/50 dark:border-white/10"
                >
                  View All Mentors
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Quick Bar (Reassuring & Clean) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-pink-200/60 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left bg-gradient-to-r from-pink-50/80 via-white/80 to-purple-50/80 dark:from-[#2a1329]/80 dark:via-[#1e0f1e]/80 dark:to-[#1e1026]/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e040a0] text-white flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-xl">phone_in_talk</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-black text-[#2e1a28] dark:text-[#f8f0f7] uppercase tracking-wide">
                Need Legal Advice or Crisis Support in Botswana?
              </p>
              <p className="text-[11px] sm:text-xs text-[#604868] dark:text-[#d2b8cf] font-semibold mt-0.5">
                Childline: <strong className="text-[#e040a0] dark:text-[#f25cb8]">116</strong> | Police GBV: <strong className="text-[#e040a0] dark:text-[#f25cb8]">0800 600 144</strong> | Emergency: <strong className="text-[#e040a0] dark:text-[#f25cb8]">999</strong>
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('rights')}
            className="px-5 py-2.5 bg-white dark:bg-[#341832] text-[#e040a0] dark:text-[#f25cb8] hover:bg-[#e040a0] hover:text-white dark:hover:bg-[#f25cb8] dark:hover:text-white text-xs font-bold rounded-full transition-all border border-pink-200/60 dark:border-white/10 shadow-xs shrink-0"
          >
            Access Emergency Guide
          </button>
        </div>
      </section>

      {/* Join Community Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl text-center shadow-xl border border-white/80 dark:border-white/10 space-y-4 relative overflow-hidden bg-gradient-to-r from-[#fce8f5]/80 via-[#f8e8f8]/70 to-[#f0e5ff]/80 dark:from-[#2a1329]/80 dark:via-[#221021]/70 dark:to-[#1e1026]/80">
          <h2 className="text-2xl sm:text-3xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">
            Ready to Join the Movement?
          </h2>
          <p className="text-xs sm:text-sm text-[#604868] dark:text-[#d2b8cf] max-w-lg mx-auto font-medium leading-relaxed">
            Become a volunteer, mentor, or local chapter leader with HerVoice across Botswana.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenJoinUs}
              id="cta-join-now-btn"
              className="px-7 py-3.5 bg-[#e040a0] hover:bg-[#c82f8c] dark:bg-[#f25cb8] dark:hover:bg-[#e040a0] text-white font-bold rounded-full text-xs uppercase tracking-wider shadow-md shadow-pink-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Involved Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


