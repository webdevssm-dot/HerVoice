import React from 'react';
import { TabType, Spotlight } from '../types';
import { FEATURED_SPOTLIGHT, SPOTLIGHTS_LIST } from '../data/mockData';

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
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fce8f5] dark:bg-[#341832] rounded-full">
                <span className="material-symbols-outlined text-sm text-[#d12b8d] dark:text-[#f25cb8]">target</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#d12b8d] dark:text-[#f25cb8]">
                  FUTURE LEADERS OF BOTSWANA
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#2e1a28] dark:text-[#f8f0f7] leading-[1.1]">
                Empowering the <br className="hidden sm:inline" />
                <span className="text-[#e040a0] dark:text-[#f25cb8]">Next Generation</span> <br className="hidden sm:inline" />
                of Botswana's <br className="hidden sm:inline" />
                Leaders
              </h1>

              <p className="text-sm sm:text-base text-[#604868] dark:text-[#d2b8cf] max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                A joyful digital space where young women find their voice, learn their rights, and connect with mentors who have paved the way for a brighter future.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setActiveTab('rights')}
                  id="hero-explore-rights-btn"
                  className="px-7 py-3.5 bg-[#e040a0] dark:bg-[#f25cb8] hover:bg-[#c82f8c] dark:hover:bg-[#e040a0] text-white rounded-full font-bold text-sm shadow-lg shadow-pink-500/20 transition-all bouncy-hover flex items-center gap-2"
                >
                  <span>Explore Platform</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>

                <button
                  onClick={onOpenJoinUs}
                  id="hero-join-community-btn"
                  className="px-7 py-3.5 bg-white dark:bg-[#281427] border border-[#7c52aa] dark:border-[#b08cc9] text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-[#f0e5ff] dark:hover:bg-[#3d223a] rounded-full font-bold text-sm transition-all bouncy-hover flex items-center gap-2"
                >
                  <span>Platform Vision</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative rounded-2xl sm:rounded-[2.5rem] bg-white dark:bg-[#1e0f1d] p-2.5 sm:p-3 shadow-2xl border border-pink-100/60 dark:border-[#381f35] rotate-2 transform hover:rotate-0 transition-transform duration-300 max-w-md w-full">
                <div className="rounded-xl sm:rounded-[2rem] overflow-hidden relative">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdlk4RqAC_vlOia9RB09BQ1usKzXFpu5mHiAMYF_amVLJAUGRP-v8YlqO8UjVCwbuFvbyGYPGuVRKofjEJ94Uq301wUwQPIB_K7SfzED3FYqZpyhrHQtkrQ5lxgWt4nEAKZAdPtO6PND3TisGq7vSnpVK7TOZTmvbHFe2Ku9pPC1UEOIMDrHfKc_tIKfMxceRaHqgBpTdZqswbiMolj29sQSssXkgnG9h6ogb0HlM4F_W0ilXpp0X4pW89pvww1HQaOOMXIcP1tgg4"
                    alt="Group of young African women standing together in laughter"
                    className="w-full h-[260px] sm:h-[380px] object-cover"
                  />
                </div>

                {/* Overlapping blue badge pill */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-[#0096cc] text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex flex-col max-w-[170px] sm:max-w-[200px]">
                  <span className="text-xl sm:text-2xl font-black leading-none">10k+</span>
                  <span className="text-[10px] sm:text-[11px] font-bold mt-1 leading-tight text-white/90">Sisters connected across the nation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Journey Starts Here Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Your Journey Starts Here</h2>
          <p className="text-sm text-[#604868] dark:text-[#d2b8cf]">
            Click through our key pillars designed to uplift, educate, and inspire every young woman in Botswana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {/* Pillar 1: Rights */}
          <div
            onClick={() => setActiveTab('rights')}
            className="p-5 sm:p-8 bg-white dark:bg-[#1e0f1d] rounded-2xl sm:rounded-3xl border border-[#f2e8f2] dark:border-[#381f35] hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group flex flex-col justify-between space-y-4 sm:space-y-6"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#fce8f5] dark:bg-[#341832] text-[#e040a0] dark:text-[#f25cb8] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl sm:text-2xl font-bold">edit_note</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Know Your Rights</h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] leading-relaxed">
                Understanding legal protections, gender equality, and your voice in society starts with the right information.
              </p>
            </div>
            <span className="text-xs font-bold text-[#e040a0] dark:text-[#f25cb8] flex items-center gap-1 group-hover:gap-2 transition-all">
              <span>Learn More</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>

          {/* Pillar 2: Spotlights */}
          <div
            onClick={() => setActiveTab('spotlights')}
            className="p-5 sm:p-8 bg-white dark:bg-[#1e0f1d] rounded-2xl sm:rounded-3xl border border-[#f2e8f2] dark:border-[#381f35] hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group flex flex-col justify-between space-y-4 sm:space-y-6"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#f0e5ff] dark:bg-[#2b172a] text-[#7c52aa] dark:text-[#b08cc9] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl sm:text-2xl font-bold">auto_awesome</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Inspirational Women</h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] leading-relaxed">
                Meet the trailblazers of Botswana. From tech leaders to human rights activists, find your role model.
              </p>
            </div>
            <span className="text-xs font-bold text-[#7c52aa] dark:text-[#b08cc9] flex items-center gap-1 group-hover:gap-2 transition-all">
              <span>See Stories</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>

          {/* Pillar 3: Dream Board */}
          <div
            onClick={() => setActiveTab('dream-board')}
            className="p-5 sm:p-8 bg-white dark:bg-[#1e0f1d] rounded-2xl sm:rounded-3xl border border-[#f2e8f2] dark:border-[#381f35] hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group flex flex-col justify-between space-y-4 sm:space-y-6"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#e0f2fe] dark:bg-[#152a38] text-[#0096cc] dark:text-[#38bdf8] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl sm:text-2xl font-bold">cloud</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Dream Board</h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] leading-relaxed">
                Visualize your future. Set goals, share your aspirations, and find the resources to make them a reality.
              </p>
            </div>
            <span className="text-xs font-bold text-[#0096cc] dark:text-[#38bdf8] flex items-center gap-1 group-hover:gap-2 transition-all">
              <span>Start Dreaming</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>
        </div>
      </section>

      {/* Latest Spotlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Latest Spotlights</h2>
            <p className="text-xs text-[#604868] dark:text-[#d2b8cf] mt-1">Shining a light on the incredible achievements of women in our community.</p>
          </div>
          <button
            onClick={() => setActiveTab('spotlights')}
            className="text-xs font-bold text-[#e040a0] dark:text-[#f25cb8] hover:text-[#c82f8c] flex items-center gap-1"
          >
            <span>View All Spotlights</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Spotlight 1 */}
          <div
            onClick={() => onOpenStory(SPOTLIGHTS_LIST[0])}
            className="bg-white dark:bg-[#1e0f1d] rounded-2xl sm:rounded-3xl border border-[#f2e8f2] dark:border-[#381f35] overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col group"
          >
            <div className="h-44 sm:h-64 overflow-hidden relative">
              <img
                src={SPOTLIGHTS_LIST[0].image}
                alt={SPOTLIGHTS_LIST[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#e040a0] text-white text-[9px] sm:text-[10px] font-bold rounded-full uppercase">
                INNOVATION
              </span>
            </div>
            <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
              <h3 className="font-bold text-sm sm:text-base text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#e040a0] dark:group-hover:text-[#f25cb8] transition-colors">
                Pioneering Tech in Gaborone
              </h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] line-clamp-2">
                How Thato Moloi is revolutionizing education through her new digital literacy platform for girls.
              </p>
            </div>
          </div>

          {/* Spotlight 2 */}
          <div
            onClick={() => onOpenStory(SPOTLIGHTS_LIST[3])}
            className="bg-white dark:bg-[#1e0f1d] rounded-2xl sm:rounded-3xl border border-[#f2e8f2] dark:border-[#381f35] overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col group"
          >
            <div className="h-44 sm:h-64 overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF1wLDaYLUEd3LJ3LcA1F6PQn1PBiGqIdWhn-_FIBK62DYUud2YLLg4KZJAhOXZ0zFv8hodTNWhRdjEEGOn1uGKZs1XT8thzl1Y_vkYAlzkFJ-2-PEJLkH33jE6l_GzuODYfpoqRpvriqyoie1rtBXxP3yNp9stR6hIZjv4-XCcj4obASn8USzsw7BIBCOvgGqFYqrqz3Zfy2pDLtGJdqDjxp8Zzbe5k3WWncjpH4k5bkXmwit9oeh98Ref9QDFV3i8Le2hpW8loXy"
                alt="Voices of the Kalahari"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#7c52aa] text-white text-[9px] sm:text-[10px] font-bold rounded-full uppercase">
                LEADERSHIP
              </span>
            </div>
            <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
              <h3 className="font-bold text-sm sm:text-base text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#7c52aa] dark:group-hover:text-[#b08cc9] transition-colors">
                Voices of the Kalahari
              </h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] line-clamp-2">
                The grassroots movement empowering young indigenous women to protect their heritage.
              </p>
            </div>
          </div>

          {/* Spotlight 3 */}
          <div
            onClick={() => onOpenStory(SPOTLIGHTS_LIST[2])}
            className="bg-white dark:bg-[#1e0f1d] rounded-2xl sm:rounded-3xl border border-[#f2e8f2] dark:border-[#381f35] overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col group"
          >
            <div className="h-44 sm:h-64 overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRXDU3WjVNqhr4gJBxkxb9y_pKKSS0vXjQ2GezAXrXVVR1M-mqI9Jt76YJaLs1SC-XC9qMaQvGlonFnP5FP3vcqKNRDqPvn6JyszygXRfGP1X3_yaPrDWjryLk--HKgqUJfMbzYxHMRfLAaD9IVeXhvNf4XTlxAJ9wC6AYiGsB4VMv5vVPqLKUKnZSJixY62RizJQbex5lUI8OtE7_r390VWWJhOqVPDQdDpuwJ-syp5N2qb-vuxn50TdXABgKy2Vf1JLE1lUOrgtn"
                alt="Canvas for Change"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#0096cc] text-white text-[9px] sm:text-[10px] font-bold rounded-full uppercase">
                ART & CULTURE
              </span>
            </div>
            <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
              <h3 className="font-bold text-sm sm:text-base text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#0096cc] dark:group-hover:text-[#38bdf8] transition-colors">
                Canvas for Change
              </h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] line-clamp-2">
                Using mural art to spark conversations about domestic safety and female empowerment.
              </p>
            </div>
          </div>

          {/* Spotlight 4 */}
          <div
            onClick={() => onOpenStory(SPOTLIGHTS_LIST[1])}
            className="bg-white dark:bg-[#1e0f1d] rounded-2xl sm:rounded-3xl border border-[#f2e8f2] dark:border-[#381f35] overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col group"
          >
            <div className="h-44 sm:h-64 overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp2bWf0zMw1qPYn6xCNr21kmNo-79UXvu2WQGltynfcW1MtkH0P_OriNgqAy4H445ikQeKUY933yElgh69pCspBfdbJcm68TkKsbAhT8NfXyI-zA_OnNivu9-UsNF7r5lRSOtGwQzot1u9uVHkS9Z90mx1MJztGCDnDPJi8JXhRDUSRtgh7wyuE74ql94mtj-wgAZr8hMoIkz3frJD-hM3CPQjXrQYuXUWosgCKXffD-C9iF-dXHkLfdb60Tnhojc-ieSp-YM8YD3T"
                alt="Defending Her Future"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#e040a0] text-white text-[9px] sm:text-[10px] font-bold rounded-full uppercase">
                RIGHTS
              </span>
            </div>
            <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
              <h3 className="font-bold text-sm sm:text-base text-[#2e1a28] dark:text-[#f8f0f7] group-hover:text-[#e040a0] dark:group-hover:text-[#f25cb8] transition-colors">
                Defending Her Future
              </h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] line-clamp-2">
                Meet the legal team working pro-bono to ensure every girl in Botswana has access to justice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Light / Dark Banner Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#fce8f5] via-[#f8e8f8] to-[#f0e5ff] dark:from-[#2a1329] dark:via-[#221021] dark:to-[#1e1026] p-6 sm:p-14 rounded-2xl sm:rounded-3xl text-[#2e1a28] dark:text-[#f8f0f7] text-center shadow-lg border border-pink-200/80 dark:border-[#3d233c] space-y-4 sm:space-y-6 relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-black max-w-3xl mx-auto tracking-tight text-[#2e1a28] dark:text-[#f8f0f7]">
            Ready to add your voice?
          </h2>
          <p className="text-sm text-[#604868] dark:text-[#d2b8cf] max-w-xl mx-auto font-medium leading-relaxed">
            Join thousands of young women across Botswana who are already building a more equitable and joyful future together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenJoinUs}
              id="cta-join-now-btn"
              className="px-8 py-3.5 bg-[#e040a0] hover:bg-[#c82f8c] dark:bg-[#f25cb8] dark:hover:bg-[#e040a0] text-white font-bold rounded-full text-sm shadow-lg shadow-pink-500/20 transition-all bouncy-hover"
            >
              Create Your Account
            </button>
            <button
              onClick={onOpenJoinUs}
              id="cta-volunteer-btn"
              className="px-8 py-3.5 bg-white dark:bg-[#2b172a] hover:bg-pink-50 dark:hover:bg-[#3d223a] text-[#7c52aa] dark:text-[#d8bdd5] font-bold rounded-full text-sm border border-[#7c52aa] dark:border-[#3d233c] transition-all bouncy-hover"
            >
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
