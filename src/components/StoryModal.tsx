import React, { useState } from 'react';
import { Spotlight } from '../types';

interface StoryModalProps {
  spotlight: Spotlight | null;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ spotlight, onClose }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  if (!spotlight) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#f2e8f2] flex flex-col relative text-[#2e1a28]">
        {/* Header Media */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#fcf7fc] shrink-0">
          {isPlayingVideo ? (
            <div className="w-full h-full bg-[#f0e5ff] flex flex-col items-center justify-center p-6 text-center text-[#2e1a28] relative">
              <div className="w-16 h-16 rounded-full bg-[#e040a0] text-white flex items-center justify-center animate-pulse mb-3 shadow-md">
                <span className="material-symbols-outlined text-3xl">play_circle</span>
              </div>
              <h3 className="text-xl font-black">Video Interview: {spotlight.name}</h3>
              <p className="text-xs text-[#604868] max-w-md mt-1 font-medium">
                "Leadership & Innovation in Botswana" — Recorded live for HerVoice Spotlight Series.
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
              <img
                src={spotlight.image}
                alt={spotlight.imageAlt || spotlight.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e1a28]/80 via-transparent to-transparent" />
            </>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#2e1a28] transition-colors z-10 shadow-md border border-pink-100"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          {/* Category Tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3.5 py-1 bg-[#7c52aa] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
              {spotlight.category}
            </span>
          </div>

          {!isPlayingVideo && (
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#fce8f5] mb-1">
                HERVOICE LEADER SPOTLIGHT
              </p>
              <h2 className="text-2xl sm:text-3xl font-black leading-tight">{spotlight.name}</h2>
              <p className="text-xs font-medium text-white/90 line-clamp-1">{spotlight.quoteOrHeadline}</p>
            </div>
          )}
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#2e1a28]">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#fce8f5] rounded-2xl border border-pink-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e040a0] text-white flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl">person_pin</span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-[#7c52aa]">FEATURED LEADER</p>
                <p className="text-sm font-bold text-[#2e1a28]">{spotlight.name} {spotlight.country ? `(${spotlight.country})` : '(Botswana)'}</p>
              </div>
            </div>

            <button
              onClick={() => setIsPlayingVideo(!isPlayingVideo)}
              className="px-5 py-2.5 bg-[#e040a0] hover:bg-[#c82f8c] text-white text-xs font-bold rounded-full shadow-md shadow-pink-500/20 transition-all bouncy-hover flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">
                {isPlayingVideo ? 'description' : 'play_circle'}
              </span>
              <span>{isPlayingVideo ? 'Read Article' : 'Watch Interview'}</span>
            </button>
          </div>

          <blockquote className="p-4 bg-[#fcf7fc] border-l-4 border-[#e040a0] rounded-r-2xl italic text-sm text-[#2e1a28] font-medium leading-relaxed">
            "{spotlight.quoteOrHeadline}"
          </blockquote>

          <div className="space-y-3 text-sm leading-relaxed text-[#604868]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#7c52aa]">BIOGRAPHY & IMPACT</h3>
            <p className="whitespace-pre-line font-medium">
              {spotlight.fullStory || spotlight.description}
            </p>
          </div>

          {/* Key Achievements */}
          <div className="p-5 bg-[#f0e5ff] rounded-2xl border border-purple-100 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#7c52aa] flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">workspace_premium</span>
              <span>Impact Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl flex items-center gap-2 border border-purple-100 shadow-sm">
                <span className="text-lg">🌟</span>
                <span className="font-semibold text-[#2e1a28]">Over 4,000 young women mentored</span>
              </div>
              <div className="p-3 bg-white rounded-xl flex items-center gap-2 border border-purple-100 shadow-sm">
                <span className="text-lg">🚀</span>
                <span className="font-semibold text-[#2e1a28]">3 Social Enterprises Founded</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#fcf7fc] border-t border-[#f2e8f2] flex items-center justify-between">
          <p className="text-xs text-[#604868] font-medium">Inspired by {spotlight.name}?</p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#7c52aa] hover:bg-[#683f96] text-white text-xs font-bold rounded-full transition-colors"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};
