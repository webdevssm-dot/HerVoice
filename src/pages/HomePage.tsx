import React from 'react';
import { motion } from 'motion/react';
import { TabType, Spotlight } from '../types';
import { FEATURED_SPOTLIGHT, SPOTLIGHTS_LIST } from '../data/mockData';
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
  return (
    <div className="space-y-6 sm:space-y-10 pb-10 relative">
      {/* Background Liquid Glass Ambient Glowing Orbs with deep blur */}
      <div className="absolute top-10 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-pink-400/10 dark:bg-pink-600/10 rounded-full blur-[100px] pointer-events-none liquid-orb -z-10" />
      <div className="absolute top-60 right-10 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none liquid-orb -z-10" style={{ animationDelay: '3s' }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-2 pb-3 sm:pt-4 sm:pb-6">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/70 dark:bg-[#341832]/80 backdrop-blur-md rounded-full border border-pink-200/60 dark:border-[#4a2347] shadow-xs">
                <span className="material-symbols-outlined text-xs lg:text-sm text-[#d12b8d] dark:text-[#f25cb8]">auto_awesome</span>
                <span className="text-[9px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-wider lg:tracking-widest text-[#d12b8d] dark:text-[#f25cb8]">
                  BOTSWANA YOUTH NETWORK
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2e1a28] dark:text-[#f8f0f7] leading-tight lg:leading-[1.1]">
                Your Voice. Your Rights. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e040a0] to-[#f25cb8]">Your Future.</span>
              </h1>

              <p className="text-xs lg:text-base text-[#604868] dark:text-[#d2b8cf] max-w-md lg:max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                A warm, empowering space for young women across Botswana. Learn your legal rights in plain language, discover inspiring mentors, and turn your big ideas into real community impact.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 lg:gap-3.5 pt-1 lg:pt-2">
                <button
                  onClick={() => setActiveTab('rights')}
                  id="hero-explore-rights-btn"
                  className="px-4.5 py-2.5 sm:px-6 sm:py-3 lg:px-7 lg:py-3.5 bg-[#e040a0] dark:bg-[#f25cb8] hover:bg-[#c82f8c] dark:hover:bg-[#e040a0] text-white rounded-full font-bold text-xs lg:text-sm shadow-md shadow-pink-500/20 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2"
                >
                  <span>Explore Your Rights</span>
                  <span className="material-symbols-outlined text-xs lg:text-base">arrow_forward</span>
                </button>

                <button
                  onClick={() => setActiveTab('about')}
                  id="hero-join-community-btn"
                  className="px-4.5 py-2.5 sm:px-6 sm:py-3 lg:px-7 lg:py-3.5 glass-panel text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-white/90 dark:hover:bg-[#3d223a] rounded-full font-bold text-xs lg:text-sm transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2 border border-pink-200/50 dark:border-[#381f35]"
                >
                  <span>Our Story & Mission</span>
                </button>
              </div>
            </motion.div>

            {/* Right Hero Image Glass Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative rounded-2xl lg:rounded-3xl glass-panel p-2 lg:p-3 shadow-2xl max-w-[280px] sm:max-w-xs lg:max-w-md w-full border border-white/80 dark:border-white/10">
                <div className="rounded-xl lg:rounded-2xl overflow-hidden relative">
                  <img
                    src={heroMarchImg}
                    alt="Young Batswana women marching with NO to Gender Based Violence banner"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-[150px] sm:h-[190px] lg:h-[290px] object-cover"
                  />
                </div>

                {/* Overlapping liquid glass badge pill */}
                <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 glass-pill text-white px-3 py-2 lg:px-4.5 lg:py-3 rounded-xl lg:rounded-2xl shadow-xl flex items-center gap-2 lg:gap-3 max-w-[170px] lg:max-w-[220px] border border-cyan-300/40 bg-gradient-to-r from-[#0096cc]/90 to-[#00b4d8]/90">
                  <span className="text-base sm:text-lg lg:text-2xl font-black leading-none">10k+</span>
                  <span className="text-[8px] sm:text-[9px] lg:text-xs font-bold leading-tight text-white/95">Sisters connected nationwide</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Journey Starts Here Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-4 sm:mb-6 space-y-1">
          <h2 className="text-lg sm:text-2xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Everything You Need to Rise & Lead</h2>
          <p className="text-[11px] sm:text-xs text-[#604868] dark:text-[#d2b8cf]">
            Four simple ways HerVoice supports your growth, safety, and community ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5">
          {/* Pillar 1: Rights */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            onClick={() => setActiveTab('rights')}
            className="p-4 sm:p-5 glass-panel rounded-2xl border border-white/70 dark:border-white/10 shadow-lg hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-pink-100/80 dark:bg-[#341832] text-[#e040a0] dark:text-[#f25cb8] flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-lg font-bold">gavel</span>
              </div>
              <h3 className="text-xs sm:text-sm font-black text-[#2e1a28] dark:text-[#f8f0f7]">Know Your Rights</h3>
              <p className="text-[11px] sm:text-xs text-[#604868] dark:text-[#d2b8cf] leading-relaxed">
                Understand constitutional protections, domestic safety laws, and free helpline options in easy terms.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#e040a0] dark:text-[#f25cb8] flex items-center gap-1 group-hover:gap-2 transition-all pt-1">
              <span>Explore Rights & Quizzes</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </span>
          </motion.div>

          {/* Pillar 2: Spotlights */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            onClick={() => setActiveTab('spotlights')}
            className="p-4 sm:p-5 glass-panel rounded-2xl border border-white/70 dark:border-white/10 shadow-lg hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-100/80 dark:bg-[#2b172a] text-[#7c52aa] dark:text-[#b08cc9] flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-lg font-bold">auto_awesome</span>
              </div>
              <h3 className="text-xs sm:text-sm font-black text-[#2e1a28] dark:text-[#f8f0f7]">Discover Mentors</h3>
              <p className="text-[11px] sm:text-xs text-[#604868] dark:text-[#d2b8cf] leading-relaxed">
                Read inspiring stories of Batswana women breaking barriers in tech, law, arts, agriculture, and leadership.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#7c52aa] dark:text-[#b08cc9] flex items-center gap-1 group-hover:gap-2 transition-all pt-1">
              <span>Read Leader Stories</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </span>
          </motion.div>

          {/* Pillar 3: Dream Board */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            onClick={() => setActiveTab('dream-board')}
            className="p-4 sm:p-5 glass-panel rounded-2xl border border-white/70 dark:border-white/10 shadow-lg hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sky-100/80 dark:bg-[#152a38] text-[#0096cc] dark:text-[#38bdf8] flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-lg font-bold">rocket_launch</span>
              </div>
              <h3 className="text-xs sm:text-sm font-black text-[#2e1a28] dark:text-[#f8f0f7]">Bring Dreams to Life</h3>
              <p className="text-[11px] sm:text-xs text-[#604868] dark:text-[#d2b8cf] leading-relaxed">
                Share personal goals, propose local youth initiatives, and connect with fellow changemakers across Botswana.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#0096cc] dark:text-[#38bdf8] flex items-center gap-1 group-hover:gap-2 transition-all pt-1">
              <span>Open Action Board</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Latest Spotlights Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3.5 gap-2">
          <div>
            <h2 className="text-base sm:text-xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Latest Spotlights</h2>
            <p className="text-[10px] sm:text-xs text-[#604868] dark:text-[#d2b8cf]">Shining a light on the achievements of women in our community.</p>
          </div>
          <button
            onClick={() => setActiveTab('spotlights')}
            className="text-[11px] font-bold text-[#e040a0] dark:text-[#f25cb8] hover:text-[#c82f8c] flex items-center gap-1"
          >
            <span>View All Spotlights</span>
            <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Spotlight 1 */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            onClick={() => onOpenStory(SPOTLIGHTS_LIST[0])}
            className="glass-panel rounded-2xl border border-white/70 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col group"
          >
            <div className="h-28 sm:h-36 overflow-hidden relative">
              <img
                src={SPOTLIGHTS_LIST[0].image}
                alt={SPOTLIGHTS_LIST[0].name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2.5 py-0.5 bg-[#e040a0] text-white text-[8px] font-bold rounded-full uppercase shadow-xs">
                INNOVATION
              </span>
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between space-y-1">
              <h3 className="font-bold text-xs sm:text-sm text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#e040a0] dark:group-hover:text-[#f25cb8] transition-colors leading-snug">
                Pioneering Tech in Gaborone
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#604868] dark:text-[#d2b8cf] line-clamp-2">
                How Thato Moloi is revolutionizing education through her new digital literacy platform for girls.
              </p>
            </div>
          </motion.div>

          {/* Spotlight 2 */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            onClick={() => onOpenStory(SPOTLIGHTS_LIST[3])}
            className="glass-panel rounded-2xl border border-white/70 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col group"
          >
            <div className="h-28 sm:h-36 overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF1wLDaYLUEd3LJ3LcA1F6PQn1PBiGqIdWhn-_FIBK62DYUud2YLLg4KZJAhOXZ0zFv8hodTNWhRdjEEGOn1uGKZs1XT8thzl1Y_vkYAlzkFJ-2-PEJLkH33jE6l_GzuODYfpoqRpvriqyoie1rtBXxP3yNp9stR6hIZjv4-XCcj4obASn8USzsw7BIBCOvgGqFYqrqz3Zfy2pDLtGJdqDjxp8Zzbe5k3WWncjpH4k5bkXmwit9oeh98Ref9QDFV3i8Le2hpW8loXy"
                alt="Voices of the Kalahari"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2.5 py-0.5 bg-[#7c52aa] text-white text-[8px] font-bold rounded-full uppercase shadow-xs">
                LEADERSHIP
              </span>
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between space-y-1">
              <h3 className="font-bold text-xs sm:text-sm text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#7c52aa] dark:group-hover:text-[#b08cc9] transition-colors leading-snug">
                Voices of the Kalahari
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#604868] dark:text-[#d2b8cf] line-clamp-2">
                The grassroots movement empowering young indigenous women to protect their heritage.
              </p>
            </div>
          </motion.div>

          {/* Spotlight 3 */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            onClick={() => onOpenStory(SPOTLIGHTS_LIST[2])}
            className="glass-panel rounded-2xl border border-white/70 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col group"
          >
            <div className="h-28 sm:h-36 overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRXDU3WjVNqhr4gJBxkxb9y_pKKSS0vXjQ2GezAXrXVVR1M-mqI9Jt76YJaLs1SC-XC9qMaQvGlonFnP5FP3vcqKNRDqPvn6JyszygXRfGP1X3_yaPrDWjryLk--HKgqUJfMbzYxHMRfLAaD9IVeXhvNf4XTlxAJ9wC6AYiGsB4VMv5vVPqLKUKnZSJixY62RizJQbex5lUI8OtE7_r390VWWJhOqVPDQdDpuwJ-syp5N2qb-vuxn50TdXABgKy2Vf1JLE1lUOrgtn"
                alt="Canvas for Change"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2.5 py-0.5 bg-[#0096cc] text-white text-[8px] font-bold rounded-full uppercase shadow-xs">
                ART & CULTURE
              </span>
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between space-y-1">
              <h3 className="font-bold text-xs sm:text-sm text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#0096cc] dark:group-hover:text-[#38bdf8] transition-colors leading-snug">
                Canvas for Change
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#604868] dark:text-[#d2b8cf] line-clamp-2">
                Using mural art to spark conversations about domestic safety and female empowerment.
              </p>
            </div>
          </motion.div>

          {/* Spotlight 4 */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            onClick={() => onOpenStory(SPOTLIGHTS_LIST[1])}
            className="glass-panel rounded-2xl border border-white/70 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col group"
          >
            <div className="h-28 sm:h-36 overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp2bWf0zMw1qPYn6xCNr21kmNo-79UXvu2WQGltynfcW1MtkH0P_OriNgqAy4H445ikQeKUY933yElgh69pCspBfdbJcm68TkKsbAhT8NfXyI-zA_OnNivu9-UsNF7r5lRSOtGwQzot1u9uVHkS9Z90mx1MJztGCDnDPJi8JXhRDUSRtgh7wyuE74ql94mtj-wgAZr8hMoIkz3frJD-hM3CPQjXrQYuXUWosgCKXffD-C9iF-dXHkLfdb60Tnhojc-ieSp-YM8YD3T"
                alt="Defending Her Future"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2.5 py-0.5 bg-[#e040a0] text-white text-[8px] font-bold rounded-full uppercase shadow-xs">
                RIGHTS
              </span>
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between space-y-1">
              <h3 className="font-bold text-xs sm:text-sm text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#e040a0] dark:group-hover:text-[#f25cb8] transition-colors leading-snug">
                Defending Her Future
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#604868] dark:text-[#d2b8cf] line-clamp-2">
                Meet the legal team working pro-bono to ensure every girl in Botswana has access to justice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Light / Dark Banner Callout */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="glass-panel p-5 sm:p-10 rounded-2xl sm:rounded-3xl text-[#2e1a28] dark:text-[#f8f0f7] text-center shadow-xl border border-white/80 dark:border-white/10 space-y-3 sm:space-y-5 relative overflow-hidden bg-gradient-to-r from-[#fce8f5]/80 via-[#f8e8f8]/70 to-[#f0e5ff]/80 dark:from-[#2a1329]/80 dark:via-[#221021]/70 dark:to-[#1e1026]/80">
          <h2 className="text-xl sm:text-3xl font-black max-w-2xl mx-auto tracking-tight text-[#2e1a28] dark:text-[#f8f0f7]">
            Ready to Make Your Voice Heard?
          </h2>
          <p className="text-xs sm:text-sm text-[#604868] dark:text-[#d2b8cf] max-w-lg mx-auto font-medium leading-relaxed">
            Join a supportive community of young women across Botswana. Get inspired, learn your rights, and make a real difference in your community today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <button
              onClick={onOpenJoinUs}
              id="cta-join-now-btn"
              className="px-5 py-2.5 sm:px-7 sm:py-3 bg-[#e040a0] hover:bg-[#c82f8c] dark:bg-[#f25cb8] dark:hover:bg-[#e040a0] text-white font-bold rounded-full text-xs shadow-md shadow-pink-500/20 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Get Involved Today
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              id="cta-volunteer-btn"
              className="px-5 py-2.5 sm:px-7 sm:py-3 glass-panel text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-white/90 dark:hover:bg-[#3d223a] font-bold rounded-full text-xs border border-[#7c52aa]/40 dark:border-[#3d233c] transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Explore Free Toolkits
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

