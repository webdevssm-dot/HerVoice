import React from 'react';
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
    <div className="space-y-6 sm:space-y-8 pb-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-2 pb-3 sm:pt-4 sm:pb-6">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3.5 lg:space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 lg:px-4 lg:py-1.5 bg-[#fce8f5] dark:bg-[#341832] rounded-full border border-pink-200/50 dark:border-[#4a2347]">
                <span className="material-symbols-outlined text-[11px] lg:text-sm text-[#d12b8d] dark:text-[#f25cb8]">auto_awesome</span>
                <span className="text-[9px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-wider lg:tracking-widest text-[#d12b8d] dark:text-[#f25cb8]">
                  BOTSWANA YOUTH NETWORK
                </span>
              </div>

              <h1 className="text-xl sm:text-3xl lg:text-5xl font-black tracking-tight text-[#2e1a28] dark:text-[#f8f0f7] leading-tight lg:leading-[1.1]">
                Your Voice. Your Rights. <br className="hidden sm:inline" />
                <span className="text-[#e040a0] dark:text-[#f25cb8]">Your Future.</span>
              </h1>

              <p className="text-xs lg:text-base text-[#604868] dark:text-[#d2b8cf] max-w-md lg:max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                A warm, empowering space for young women across Botswana. Learn your legal rights in plain language, discover inspiring mentors, and turn your big ideas into real community impact.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-3 pt-0.5 lg:pt-2">
                <button
                  onClick={() => setActiveTab('rights')}
                  id="hero-explore-rights-btn"
                  className="px-4 py-2 sm:px-5 sm:py-2 lg:px-6 lg:py-3 bg-[#e040a0] dark:bg-[#f25cb8] hover:bg-[#c82f8c] dark:hover:bg-[#e040a0] text-white rounded-full font-bold text-[11px] sm:text-xs lg:text-sm shadow-xs lg:shadow-md transition-all hover:scale-[1.02] flex items-center gap-1.5"
                >
                  <span>Explore Your Rights</span>
                  <span className="material-symbols-outlined text-xs lg:text-base">arrow_forward</span>
                </button>

                <button
                  onClick={() => setActiveTab('about')}
                  id="hero-join-community-btn"
                  className="px-4 py-2 sm:px-5 sm:py-2 lg:px-6 lg:py-3 bg-white dark:bg-[#281427] border border-[#7c52aa] dark:border-[#b08cc9] text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-[#f0e5ff] dark:hover:bg-[#3d223a] rounded-full font-bold text-[11px] sm:text-xs lg:text-sm transition-all hover:scale-[1.02] flex items-center gap-1.5"
                >
                  <span>Our Story & Mission</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative rounded-xl lg:rounded-2xl bg-white dark:bg-[#1e0f1d] p-1.5 lg:p-2.5 shadow-md lg:shadow-xl border border-pink-100/80 dark:border-[#381f35] max-w-[280px] sm:max-w-xs lg:max-w-md w-full">
                <div className="rounded-lg lg:rounded-xl overflow-hidden relative">
                  <img
                    src={heroMarchImg}
                    alt="Young Batswana women marching with NO to Gender Based Violence banner"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-[140px] sm:h-[180px] lg:h-[280px] object-cover"
                  />
                </div>

                {/* Overlapping blue badge pill */}
                <div className="absolute -bottom-1.5 -left-1.5 lg:-bottom-3 lg:-left-3 bg-[#0096cc] text-white px-2.5 py-1.5 lg:px-4 lg:py-2.5 rounded-lg lg:rounded-xl shadow-md lg:shadow-lg flex items-center gap-1.5 lg:gap-2.5 max-w-[160px] lg:max-w-[210px]">
                  <span className="text-sm sm:text-base lg:text-2xl font-black leading-none">10k+</span>
                  <span className="text-[8px] sm:text-[9px] lg:text-xs font-bold leading-tight text-white/90">Sisters connected nationwide</span>
                </div>
              </div>
            </div>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-4">
          {/* Pillar 1: Rights */}
          <div
            onClick={() => setActiveTab('rights')}
            className="p-3 sm:p-4 bg-white dark:bg-[#1e0f1d] rounded-xl border border-[#f2e8f2] dark:border-[#381f35] hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group flex flex-col justify-between space-y-2"
          >
            <div className="space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#fce8f5] dark:bg-[#341832] text-[#e040a0] dark:text-[#f25cb8] flex items-center justify-center">
                <span className="material-symbols-outlined text-base font-bold">gavel</span>
              </div>
              <h3 className="text-xs sm:text-sm font-black text-[#2e1a28] dark:text-[#f8f0f7]">Know Your Rights</h3>
              <p className="text-[11px] text-[#604868] dark:text-[#d2b8cf] leading-relaxed">
                Understand constitutional protections, domestic safety laws, and free helpline options in easy terms.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#e040a0] dark:text-[#f25cb8] flex items-center gap-1 group-hover:gap-1.5 transition-all pt-1">
              <span>Explore Rights & Quizzes</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </span>
          </div>

          {/* Pillar 2: Spotlights */}
          <div
            onClick={() => setActiveTab('spotlights')}
            className="p-3 sm:p-4 bg-white dark:bg-[#1e0f1d] rounded-xl border border-[#f2e8f2] dark:border-[#381f35] hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group flex flex-col justify-between space-y-2"
          >
            <div className="space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#f0e5ff] dark:bg-[#2b172a] text-[#7c52aa] dark:text-[#b08cc9] flex items-center justify-center">
                <span className="material-symbols-outlined text-base font-bold">auto_awesome</span>
              </div>
              <h3 className="text-xs sm:text-sm font-black text-[#2e1a28] dark:text-[#f8f0f7]">Discover Mentors</h3>
              <p className="text-[11px] text-[#604868] dark:text-[#d2b8cf] leading-relaxed">
                Read inspiring stories of Batswana women breaking barriers in tech, law, arts, agriculture, and leadership.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#7c52aa] dark:text-[#b08cc9] flex items-center gap-1 group-hover:gap-1.5 transition-all pt-1">
              <span>Read Leader Stories</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </span>
          </div>

          {/* Pillar 3: Dream Board */}
          <div
            onClick={() => setActiveTab('dream-board')}
            className="p-3 sm:p-4 bg-white dark:bg-[#1e0f1d] rounded-xl border border-[#f2e8f2] dark:border-[#381f35] hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group flex flex-col justify-between space-y-2"
          >
            <div className="space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#e0f2fe] dark:bg-[#152a38] text-[#0096cc] dark:text-[#38bdf8] flex items-center justify-center">
                <span className="material-symbols-outlined text-base font-bold">rocket_launch</span>
              </div>
              <h3 className="text-xs sm:text-sm font-black text-[#2e1a28] dark:text-[#f8f0f7]">Bring Dreams to Life</h3>
              <p className="text-[11px] text-[#604868] dark:text-[#d2b8cf] leading-relaxed">
                Share personal goals, propose local youth initiatives, and connect with fellow changemakers across Botswana.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#0096cc] dark:text-[#38bdf8] flex items-center gap-1 group-hover:gap-1.5 transition-all pt-1">
              <span>Open Action Board</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </span>
          </div>
        </div>
      </section>

      {/* Latest Spotlights Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
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

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {/* Spotlight 1 */}
          <div
            onClick={() => onOpenStory(SPOTLIGHTS_LIST[0])}
            className="bg-white dark:bg-[#1e0f1d] rounded-xl border border-[#f2e8f2] dark:border-[#381f35] overflow-hidden hover:shadow-md transition-all cursor-pointer flex flex-col group"
          >
            <div className="h-24 sm:h-32 overflow-hidden relative">
              <img
                src={SPOTLIGHTS_LIST[0].image}
                alt={SPOTLIGHTS_LIST[0].name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-1.5 left-1.5 px-2 py-0.5 bg-[#e040a0] text-white text-[8px] font-bold rounded-full uppercase">
                INNOVATION
              </span>
            </div>
            <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between space-y-1">
              <h3 className="font-bold text-xs text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#e040a0] dark:group-hover:text-[#f25cb8] transition-colors leading-snug">
                Pioneering Tech in Gaborone
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#604868] dark:text-[#d2b8cf] line-clamp-2">
                How Thato Moloi is revolutionizing education through her new digital literacy platform for girls.
              </p>
            </div>
          </div>

          {/* Spotlight 2 */}
          <div
            onClick={() => onOpenStory(SPOTLIGHTS_LIST[3])}
            className="bg-white dark:bg-[#1e0f1d] rounded-xl border border-[#f2e8f2] dark:border-[#381f35] overflow-hidden hover:shadow-md transition-all cursor-pointer flex flex-col group"
          >
            <div className="h-24 sm:h-32 overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF1wLDaYLUEd3LJ3LcA1F6PQn1PBiGqIdWhn-_FIBK62DYUud2YLLg4KZJAhOXZ0zFv8hodTNWhRdjEEGOn1uGKZs1XT8thzl1Y_vkYAlzkFJ-2-PEJLkH33jE6l_GzuODYfpoqRpvriqyoie1rtBXxP3yNp9stR6hIZjv4-XCcj4obASn8USzsw7BIBCOvgGqFYqrqz3Zfy2pDLtGJdqDjxp8Zzbe5k3WWncjpH4k5bkXmwit9oeh98Ref9QDFV3i8Le2hpW8loXy"
                alt="Voices of the Kalahari"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-1.5 left-1.5 px-2 py-0.5 bg-[#7c52aa] text-white text-[8px] font-bold rounded-full uppercase">
                LEADERSHIP
              </span>
            </div>
            <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between space-y-1">
              <h3 className="font-bold text-xs text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#7c52aa] dark:group-hover:text-[#b08cc9] transition-colors leading-snug">
                Voices of the Kalahari
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#604868] dark:text-[#d2b8cf] line-clamp-2">
                The grassroots movement empowering young indigenous women to protect their heritage.
              </p>
            </div>
          </div>

          {/* Spotlight 3 */}
          <div
            onClick={() => onOpenStory(SPOTLIGHTS_LIST[2])}
            className="bg-white dark:bg-[#1e0f1d] rounded-xl border border-[#f2e8f2] dark:border-[#381f35] overflow-hidden hover:shadow-md transition-all cursor-pointer flex flex-col group"
          >
            <div className="h-24 sm:h-32 overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRXDU3WjVNqhr4gJBxkxb9y_pKKSS0vXjQ2GezAXrXVVR1M-mqI9Jt76YJaLs1SC-XC9qMaQvGlonFnP5FP3vcqKNRDqPvn6JyszygXRfGP1X3_yaPrDWjryLk--HKgqUJfMbzYxHMRfLAaD9IVeXhvNf4XTlxAJ9wC6AYiGsB4VMv5vVPqLKUKnZSJixY62RizJQbex5lUI8OtE7_r390VWWJhOqVPDQdDpuwJ-syp5N2qb-vuxn50TdXABgKy2Vf1JLE1lUOrgtn"
                alt="Canvas for Change"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-1.5 left-1.5 px-2 py-0.5 bg-[#0096cc] text-white text-[8px] font-bold rounded-full uppercase">
                ART & CULTURE
              </span>
            </div>
            <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between space-y-1">
              <h3 className="font-bold text-xs text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#0096cc] dark:group-hover:text-[#38bdf8] transition-colors leading-snug">
                Canvas for Change
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#604868] dark:text-[#d2b8cf] line-clamp-2">
                Using mural art to spark conversations about domestic safety and female empowerment.
              </p>
            </div>
          </div>

          {/* Spotlight 4 */}
          <div
            onClick={() => onOpenStory(SPOTLIGHTS_LIST[1])}
            className="bg-white dark:bg-[#1e0f1d] rounded-xl border border-[#f2e8f2] dark:border-[#381f35] overflow-hidden hover:shadow-md transition-all cursor-pointer flex flex-col group"
          >
            <div className="h-24 sm:h-32 overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp2bWf0zMw1qPYn6xCNr21kmNo-79UXvu2WQGltynfcW1MtkH0P_OriNgqAy4H445ikQeKUY933yElgh69pCspBfdbJcm68TkKsbAhT8NfXyI-zA_OnNivu9-UsNF7r5lRSOtGwQzot1u9uVHkS9Z90mx1MJztGCDnDPJi8JXhRDUSRtgh7wyuE74ql94mtj-wgAZr8hMoIkz3frJD-hM3CPQjXrQYuXUWosgCKXffD-C9iF-dXHkLfdb60Tnhojc-ieSp-YM8YD3T"
                alt="Defending Her Future"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-1.5 left-1.5 px-2 py-0.5 bg-[#e040a0] text-white text-[8px] font-bold rounded-full uppercase">
                RIGHTS
              </span>
            </div>
            <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between space-y-1">
              <h3 className="font-bold text-xs text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#e040a0] dark:group-hover:text-[#f25cb8] transition-colors leading-snug">
                Defending Her Future
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#604868] dark:text-[#d2b8cf] line-clamp-2">
                Meet the legal team working pro-bono to ensure every girl in Botswana has access to justice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Light / Dark Banner Callout */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#fce8f5] via-[#f8e8f8] to-[#f0e5ff] dark:from-[#2a1329] dark:via-[#221021] dark:to-[#1e1026] p-4 sm:p-8 rounded-xl sm:rounded-2xl text-[#2e1a28] dark:text-[#f8f0f7] text-center shadow-xs border border-pink-200/80 dark:border-[#3d233c] space-y-2.5 sm:space-y-4 relative overflow-hidden">
          <h2 className="text-xl sm:text-3xl font-black max-w-2xl mx-auto tracking-tight text-[#2e1a28] dark:text-[#f8f0f7]">
            Ready to Make Your Voice Heard?
          </h2>
          <p className="text-xs sm:text-sm text-[#604868] dark:text-[#d2b8cf] max-w-lg mx-auto font-medium leading-relaxed">
            Join a supportive community of young women across Botswana. Get inspired, learn your rights, and make a real difference in your community today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <button
              onClick={onOpenJoinUs}
              id="cta-join-now-btn"
              className="px-5 py-2 sm:px-6 sm:py-2.5 bg-[#e040a0] hover:bg-[#c82f8c] dark:bg-[#f25cb8] dark:hover:bg-[#e040a0] text-white font-bold rounded-full text-xs shadow-xs transition-all hover:scale-[1.01]"
            >
              Get Involved Today
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              id="cta-volunteer-btn"
              className="px-5 py-2 sm:px-6 sm:py-2.5 bg-white dark:bg-[#2b172a] hover:bg-pink-50 dark:hover:bg-[#3d223a] text-[#7c52aa] dark:text-[#d8bdd5] font-bold rounded-full text-xs border border-[#7c52aa] dark:border-[#3d233c] transition-all hover:scale-[1.01]"
            >
              Explore Free Toolkits
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
