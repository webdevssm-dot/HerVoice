import React from 'react';
import { RightPillar } from '../types';

interface RightsDetailModalProps {
  pillar: RightPillar | null;
  onClose: () => void;
}

export const RightsDetailModal: React.FC<RightsDetailModalProps> = ({ pillar, onClose }) => {
  if (!pillar) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#f2e8f2] flex flex-col relative text-[#2e1a28]">
        <div className="bg-[#fce8f5] p-6 text-[#2e1a28] relative border-b border-pink-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white hover:bg-pink-50 flex items-center justify-center text-[#2e1a28] transition-colors border border-pink-200 shadow-sm"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl p-2.5 bg-[#e040a0] text-white rounded-2xl shadow-md">{pillar.icon}</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#7c52aa]">RIGHTS & PROTECTION</p>
              <h2 className="text-2xl font-black text-[#2e1a28]">{pillar.title} Rights</h2>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-[#2e1a28]">
          <p className="text-base font-semibold leading-relaxed text-[#2e1a28]">
            {pillar.description}
          </p>

          <div className="p-5 bg-[#f0e5ff] rounded-2xl border border-purple-100 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#7c52aa] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">verified</span>
              <span>Key Legal Protections</span>
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#2e1a28]">
              {pillar.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#e040a0] font-bold mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7c52aa]">FRAMEWORK DETAILS</h4>
            <p className="text-xs text-[#604868] leading-relaxed whitespace-pre-line font-medium">
              {pillar.fullDetails}
            </p>
          </div>

          <div className="p-4 bg-[#fce8f5] border border-pink-100 rounded-2xl flex items-center gap-3 text-xs text-[#2e1a28]">
            <span className="material-symbols-outlined text-2xl text-[#e040a0] shrink-0">gavel</span>
            <div>
              <p className="font-bold text-[#2e1a28] uppercase">LEGAL HELP HOTLINE</p>
              <p className="text-[#604868] mt-0.5">Contact the Gender & Youth Support Hotline at 0800 600 444.</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#fcf7fc] border-t border-[#f2e8f2] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#e040a0] text-white text-xs font-bold rounded-full hover:bg-[#c82f8c] transition-colors shadow-md"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
