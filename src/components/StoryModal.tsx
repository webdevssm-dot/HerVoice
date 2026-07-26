import React, { useState, useEffect, useRef } from 'react';
import { Spotlight } from '../types';
import { SPOTLIGHTS_LIST, FEATURED_SPOTLIGHT } from '../data/mockData';
import { downloadA4Brief } from '../utils/downloadA4Brief';

interface StoryModalProps {
  spotlight: Spotlight | null;
  onClose: () => void;
  onSelectSpotlight?: (s: Spotlight) => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  spotlight,
  onClose,
  onSelectSpotlight
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [imgError, setImgError] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Reset scroll position and video player state whenever a new spotlight is selected
  useEffect(() => {
    setIsPlayingVideo(false);
    setImgError(false);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [spotlight?.id]);

  if (!spotlight) return null;

  // All spotlights combined for prev/next navigation
  const allSpotlights = [FEATURED_SPOTLIGHT, ...SPOTLIGHTS_LIST];
  const currentIndex = allSpotlights.findIndex((s) => s.id === spotlight.id);
  const prevSpotlight = currentIndex > 0 ? allSpotlights[currentIndex - 1] : allSpotlights[allSpotlights.length - 1];
  const nextSpotlight = currentIndex < allSpotlights.length - 1 ? allSpotlights[currentIndex + 1] : allSpotlights[0];

  const handleNavigate = (target: Spotlight) => {
    if (onSelectSpotlight) {
      onSelectSpotlight(target);
    }
  };

  const handleDownloadBrief = () => {
    downloadA4Brief({
      title: `${spotlight.name} - Leader Biography & Impact Brief`,
      subtitle: spotlight.quoteOrHeadline,
      category: spotlight.category,
      publisherOrCountry: spotlight.country || 'Botswana',
      bodyText: spotlight.fullStory || spotlight.description,
      highlights: spotlight.achievements,
      officialCitation: spotlight.officialSource,
      sourceUrl: spotlight.sourceUrl
    });
  };

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn"
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-3xl w-full my-auto shadow-2xl border border-[#f2e8f2] flex flex-col relative text-[#2e1a28] overflow-hidden max-h-[92vh] sm:max-h-[90vh]"
      >
        
        {/* Sticky Top Navigation Bar */}
        <div className="bg-white/95 backdrop-blur-md px-4 py-3 border-b border-[#f2e8f2] flex items-center justify-between gap-2 z-20 shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-[#7c52aa] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
              {spotlight.category}
            </span>
            <span className="text-xs font-bold text-[#e040a0] hidden sm:inline">
              HerVoice Leader Series
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Download A4 Brief */}
            <button
              onClick={handleDownloadBrief}
              title="Download A4 Brief"
              className="px-2.5 py-1.5 rounded-full bg-[#fce8f5] hover:bg-[#e040a0] text-[#e040a0] hover:text-white text-xs font-bold transition-all flex items-center gap-1 border border-pink-200 shadow-sm"
            >
              <span className="material-symbols-outlined text-base">download</span>
              <span className="hidden sm:inline">A4 Brief</span>
            </button>

            {/* Prev / Next Story Buttons */}
            <button
              onClick={() => handleNavigate(prevSpotlight)}
              title={`Previous: ${prevSpotlight.name}`}
              className="px-2.5 py-1.5 rounded-full bg-[#fcf7fc] hover:bg-[#fce8f5] text-[#2e1a28] hover:text-[#e040a0] text-xs font-bold transition-colors flex items-center gap-1 border border-[#f2e8f2]"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              <span className="hidden md:inline">Prev</span>
            </button>

            <button
              onClick={() => handleNavigate(nextSpotlight)}
              title={`Next: ${nextSpotlight.name}`}
              className="px-2.5 py-1.5 rounded-full bg-[#fcf7fc] hover:bg-[#fce8f5] text-[#2e1a28] hover:text-[#e040a0] text-xs font-bold transition-colors flex items-center gap-1 border border-[#f2e8f2]"
            >
              <span className="hidden md:inline">Next</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Story"
              className="w-9 h-9 rounded-full bg-[#fce8f5] hover:bg-[#e040a0] hover:text-white flex items-center justify-center text-[#e040a0] font-bold transition-colors ml-1 border border-pink-200 shadow-sm"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Unified Scrollable Container */}
        <div ref={contentRef} className="overflow-y-auto flex-1 scroll-smooth space-y-6 pb-6">
          
          {/* Header Media stage with full picture visibility */}
          <div className="relative min-h-[300px] sm:min-h-[380px] w-full overflow-hidden bg-[#1f121d] shrink-0 flex items-center justify-center p-4">
            {isPlayingVideo ? (
              <div className="w-full h-full bg-[#f0e5ff] flex flex-col items-center justify-center p-6 text-center text-[#2e1a28] relative rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-[#e040a0] text-white flex items-center justify-center animate-pulse mb-3 shadow-md">
                  <span className="material-symbols-outlined text-3xl">play_circle</span>
                </div>
                <h3 className="text-xl font-black">Official Keynote & Interview</h3>
                <p className="text-xs text-[#604868] max-w-md mt-1 font-medium">
                  {spotlight.name} — Speeches, Court Rulings & Leadership Conversations.
                </p>
                <button
                  onClick={() => setIsPlayingVideo(false)}
                  className="mt-4 px-5 py-2 bg-white text-[#7c52aa] hover:bg-purple-50 text-xs font-bold rounded-full shadow-sm border border-[#7c52aa]/30"
                >
                  Return to Text Story
                </button>
              </div>
            ) : (
              <>
                {!imgError ? (
                  <div className="relative w-full h-[280px] sm:h-[350px] flex items-center justify-center overflow-hidden rounded-2xl">
                    {/* Ambient blurred background fill */}
                    <img
                      src={spotlight.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
                    />
                    {/* Full uncropped picture of person */}
                    <img
                      src={spotlight.image}
                      alt={spotlight.imageAlt || spotlight.name}
                      onError={() => setImgError(true)}
                      className="relative z-10 max-h-full max-w-full object-contain mx-auto drop-shadow-2xl rounded-xl"
                    />
                  </div>
                ) : (
                  <div className="w-full h-[280px] sm:h-[350px] bg-gradient-to-br from-[#2e1a28] via-[#7c52aa] to-[#e040a0] flex flex-col items-center justify-center p-6 text-white text-center rounded-2xl">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl font-black border-2 border-white/40 mb-2">
                      {spotlight.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#fce8f5]">BOTSWANA LEADER</span>
                    <h3 className="text-2xl font-black">{spotlight.name}</h3>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Full Profile Header Banner */}
          <div className="px-5 sm:px-8 -mt-2">
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#2e1a28] via-[#482842] to-[#7c52aa] text-white rounded-2xl shadow-md space-y-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#fce8f5]">
                  OFFICIAL BOTSWANA LEADER PROFILE
                </span>
                <span className="px-2.5 py-0.5 bg-[#e040a0] text-white text-[10px] font-bold rounded-full uppercase">
                  {spotlight.country || 'Botswana'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black leading-tight text-white">{spotlight.name}</h1>
              <p className="text-xs sm:text-sm text-[#fce8f5]/90 font-medium">{spotlight.quoteOrHeadline}</p>
            </div>
          </div>

          {/* Body Content */}
          <div className="px-5 sm:px-8 space-y-6 text-[#2e1a28]">
            
            {/* Header Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#fce8f5] rounded-2xl border border-pink-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e040a0] text-white flex items-center justify-center font-bold shrink-0">
                  <span className="material-symbols-outlined text-xl">verified</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-[#7c52aa]">VERIFIED BOTSWANA PROFILE</p>
                  <p className="text-sm font-bold text-[#2e1a28]">{spotlight.name} {spotlight.country ? `(${spotlight.country})` : '(Botswana)'}</p>
                </div>
              </div>

              <button
                onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                className="px-4 py-2 bg-[#e040a0] hover:bg-[#c82f8c] text-white text-xs font-bold rounded-full shadow-md shadow-pink-500/20 transition-all bouncy-hover flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">
                  {isPlayingVideo ? 'description' : 'play_circle'}
                </span>
                <span>{isPlayingVideo ? 'Read Article' : 'Watch Interview'}</span>
              </button>
            </div>

            {/* Quote */}
            <blockquote className="p-4 bg-[#fcf7fc] border-l-4 border-[#e040a0] rounded-r-2xl italic text-sm text-[#2e1a28] font-semibold leading-relaxed shadow-sm">
              "{spotlight.quoteOrHeadline}"
            </blockquote>

            {/* Full Story */}
            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-[#604868]">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#7c52aa] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">menu_book</span>
                <span>BIOGRAPHY & HISTORIC CONTRIBUTION</span>
              </h2>
              <div className="whitespace-pre-line font-medium text-[#2e1a28] space-y-3 leading-relaxed">
                {spotlight.fullStory || spotlight.description}
              </div>
            </div>

            {/* Achievements & Highlights */}
            {spotlight.achievements && spotlight.achievements.length > 0 && (
              <div className="p-5 bg-[#f0e5ff] rounded-2xl border border-purple-100 space-y-3">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#7c52aa] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">workspace_premium</span>
                  <span>Impact & Milestones</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {spotlight.achievements.map((ach, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl flex items-center gap-2 border border-purple-100 shadow-sm">
                      <span className="text-base text-[#e040a0]">✓</span>
                      <span className="font-semibold text-[#2e1a28]">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Official Source Citation Box */}
            <div className="p-4 bg-[#fcf7fc] rounded-2xl border border-[#f2e8f2] space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#7c52aa]">
                <span className="material-symbols-outlined text-base text-[#e040a0]">verified_user</span>
                <span>Official Source Citation</span>
              </div>
              <p className="text-xs text-[#604868] font-mono leading-normal">
                {spotlight.officialSource || 'Official High Court & Government Records of the Republic of Botswana.'}
              </p>
              {spotlight.sourceUrl && (
                <a
                  href={spotlight.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#e040a0] hover:underline pt-1"
                >
                  <span>View Official Records</span>
                  <span className="material-symbols-outlined text-xs">open_in_new</span>
                </a>
              )}
            </div>

            {/* Bottom Controls & Easy Exit Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#f2e8f2]">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={scrollToTop}
                  className="text-xs font-bold text-[#7c52aa] hover:text-[#e040a0] flex items-center gap-1 transition-colors px-2 py-1"
                >
                  <span className="material-symbols-outlined text-base">arrow_upward</span>
                  <span>Scroll to Top</span>
                </button>

                <button
                  onClick={handleDownloadBrief}
                  className="px-3.5 py-2 bg-[#f0e5ff] text-[#7c52aa] hover:bg-[#e040a0] hover:text-white font-bold rounded-full text-xs transition-all flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">download</span>
                  <span>Download A4 Brief</span>
                </button>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => handleNavigate(nextSpotlight)}
                  className="flex-1 sm:flex-none px-4 py-2.5 bg-[#fcf7fc] text-[#2e1a28] hover:bg-[#fce8f5] hover:text-[#e040a0] font-bold rounded-full text-xs transition-all flex items-center justify-center gap-1 border border-[#f2e8f2]"
                >
                  <span>Next ({nextSpotlight.name})</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>

                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-[#e040a0] text-white hover:bg-[#c82f8c] font-bold rounded-full text-xs transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                  <span>Exit Story</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

