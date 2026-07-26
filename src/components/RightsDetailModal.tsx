import React, { useEffect } from 'react';
import { RightPillar } from '../types';
import { downloadA4Brief } from '../utils/downloadA4Brief';

interface RightsDetailModalProps {
  pillar: RightPillar | null;
  onClose: () => void;
}

export const RightsDetailModal: React.FC<RightsDetailModalProps> = ({ pillar, onClose }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!pillar) return null;

  const handleDownloadBrief = () => {
    downloadA4Brief({
      title: `${pillar.title} - Rights & Legal Framework Brief`,
      subtitle: pillar.description,
      category: 'Legal Rights',
      publisherOrCountry: 'Republic of Botswana',
      bodyText: `${pillar.description}\n\n${pillar.fullDetails}`,
      highlights: pillar.points,
      officialCitation: `${pillar.legalReference || ''} ${pillar.officialCitation || ''}`,
      sourceUrl: pillar.sourceUrl
    });
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#1a0c1a] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#f2e8f2] dark:border-[#381f35] flex flex-col relative text-[#2e1a28] dark:text-[#f8f0f7]"
      >
        {/* Sticky Top Header Bar */}
        <div className="bg-[#fce8f5] dark:bg-[#2c152a] p-5 text-[#2e1a28] dark:text-[#f8f0f7] relative border-b border-pink-100 dark:border-[#381f35] flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl p-2.5 bg-[#e040a0] text-white rounded-2xl shadow-md shrink-0">{pillar.icon}</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9]">RIGHTS & PROTECTION</p>
              <h2 className="text-xl sm:text-2xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">{pillar.title} Rights</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadBrief}
              title="Download A4 Brief"
              className="px-3 py-1.5 bg-white dark:bg-[#1a0c1a] text-[#e040a0] dark:text-[#f25cb8] hover:bg-[#e040a0] hover:text-white rounded-full text-xs font-bold transition-all border border-pink-200 dark:border-pink-900 shadow-sm flex items-center gap-1 shrink-0"
            >
              <span className="material-symbols-outlined text-base">download</span>
              <span className="hidden sm:inline">A4 Brief</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close Modal"
              className="w-9 h-9 rounded-full bg-white dark:bg-[#1a0c1a] hover:bg-pink-100 dark:hover:bg-pink-950 flex items-center justify-center text-[#2e1a28] dark:text-[#f8f0f7] font-bold transition-colors border border-pink-200 dark:border-pink-900 shadow-sm shrink-0"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#2e1a28] dark:text-[#f8f0f7] flex-1">
          <p className="text-base font-semibold leading-relaxed text-[#2e1a28] dark:text-[#f8f0f7]">
            {pillar.description}
          </p>

          <div className="p-5 bg-[#f0e5ff] dark:bg-[#28132c] rounded-2xl border border-purple-100 dark:border-[#381f35] space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">verified</span>
              <span>Key Legal Protections</span>
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#2e1a28] dark:text-[#f8f0f7]">
              {pillar.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#e040a0] dark:text-[#f25cb8] font-bold mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9]">FRAMEWORK DETAILS</h4>
            <p className="text-xs text-[#604868] dark:text-[#d2b8cf] leading-relaxed whitespace-pre-line font-medium">
              {pillar.fullDetails}
            </p>
          </div>

          {/* Official Citation / Legal Reference Box */}
          <div className="p-4 bg-[#fcf7fc] dark:bg-[#281427] border border-[#f2e8f2] dark:border-[#381f35] rounded-2xl space-y-2 text-xs">
            <div className="flex items-center justify-between gap-2 font-bold text-[#7c52aa] dark:text-[#b08cc9]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-[#e040a0] dark:text-[#f25cb8]">menu_book</span>
                <span>Official Legal References & Statutes</span>
              </div>
              {pillar.sourceUrl && (
                <a
                  href={pillar.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-[#f0e5ff] dark:bg-[#341832] hover:bg-[#e040a0] hover:text-white text-[#7c52aa] dark:text-[#d8bdd5] text-[10px] font-bold rounded-lg transition-all flex items-center gap-1"
                >
                  <span>Official Portal</span>
                  <span className="material-symbols-outlined text-xs">open_in_new</span>
                </a>
              )}
            </div>
            {pillar.legalReference && (
              <p className="text-[#2e1a28] dark:text-[#f8f0f7] font-semibold text-[11px] leading-relaxed">
                <span className="text-[#7c52aa] dark:text-[#b08cc9]">Statute/Policy:</span> {pillar.legalReference}
              </p>
            )}
            {pillar.officialCitation && (
              <p className="text-[#604868] dark:text-[#d2b8cf] font-mono text-[10px]">
                <span className="font-bold text-[#2e1a28] dark:text-[#f8f0f7]">Citation:</span> {pillar.officialCitation}
              </p>
            )}
          </div>

          <div className="p-4 bg-[#fce8f5] dark:bg-[#2c152a] border border-pink-100 dark:border-[#381f35] rounded-2xl flex items-center gap-3 text-xs text-[#2e1a28] dark:text-[#f8f0f7]">
            <span className="material-symbols-outlined text-2xl text-[#e040a0] dark:text-[#f25cb8] shrink-0">gavel</span>
            <div>
              <p className="font-bold text-[#2e1a28] dark:text-[#f8f0f7] uppercase">LEGAL HELP HOTLINE</p>
              <p className="text-[#604868] dark:text-[#d2b8cf] mt-0.5">Contact the Gender & Youth Support Hotline at 0800 600 444.</p>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Footer Exit Bar */}
        <div className="p-4 bg-[#fcf7fc] dark:bg-[#1a0c1a] border-t border-[#f2e8f2] dark:border-[#381f35] flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleDownloadBrief}
            className="px-4 py-2 bg-[#f0e5ff] dark:bg-[#2c152a] text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-[#e040a0] hover:text-white text-xs font-bold rounded-full transition-all flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base">download</span>
            <span>Download A4 Brief</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#e040a0] dark:bg-[#f25cb8] text-white text-xs font-bold rounded-full hover:bg-[#c82f8c] transition-colors shadow-md flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base">close</span>
            <span>Exit Modal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
