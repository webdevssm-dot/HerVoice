import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

  const handleDownloadBrief = () => {
    if (!pillar) return;
    downloadA4Brief({
      title: `${pillar.title} - Rights & Legal Framework Guide`,
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
    <AnimatePresence>
      {pillar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/80 dark:border-white/10 flex flex-col relative text-[#2e1a28] dark:text-[#f8f0f7]"
          >
            {/* Sticky Top Header Bar */}
            <div className="bg-white/70 dark:bg-[#2c152a]/80 backdrop-blur-md p-5 text-[#2e1a28] dark:text-[#f8f0f7] relative border-b border-pink-200/50 dark:border-white/10 flex items-center justify-between gap-2 shrink-0">
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
                  title="Download Rights Guide"
                  className="px-3.5 py-1.5 glass-pill hover:bg-[#e040a0] text-[#e040a0] dark:text-[#f25cb8] hover:text-white rounded-full text-xs font-bold transition-all border border-pink-200/60 dark:border-white/10 shadow-xs flex items-center gap-1 shrink-0"
                >
                  <span className="material-symbols-outlined text-base">download</span>
                  <span className="hidden sm:inline">Download Guide</span>
                </button>

                <button
                  onClick={onClose}
                  aria-label="Close Modal"
                  className="w-9 h-9 rounded-full glass-panel hover:bg-pink-100 dark:hover:bg-[#3d223a] flex items-center justify-center text-[#2e1a28] dark:text-[#f8f0f7] font-bold transition-all border border-pink-200/60 dark:border-white/10 shadow-xs shrink-0"
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

              <div className="p-5 glass-panel bg-gradient-to-r from-pink-50/70 to-purple-50/70 dark:from-[#2a1329]/70 dark:to-[#1e1026]/70 rounded-2xl border border-pink-200/60 dark:border-white/10 space-y-3">
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
              <div className="p-4 glass-panel border border-pink-100/80 dark:border-white/10 rounded-2xl space-y-2 text-xs">
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
                      className="px-2.5 py-1 glass-pill hover:bg-[#e040a0] hover:text-white text-[#7c52aa] dark:text-[#d8bdd5] text-[10px] font-bold rounded-lg transition-all flex items-center gap-1"
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

              <div className="p-4 glass-panel bg-pink-50/50 dark:bg-pink-950/20 border border-pink-200/50 dark:border-white/10 rounded-2xl flex items-center gap-3 text-xs text-[#2e1a28] dark:text-[#f8f0f7]">
                <span className="material-symbols-outlined text-2xl text-[#e040a0] dark:text-[#f25cb8] shrink-0">gavel</span>
                <div>
                  <p className="font-bold text-[#2e1a28] dark:text-[#f8f0f7] uppercase">LEGAL HELP HOTLINE</p>
                  <p className="text-[#604868] dark:text-[#d2b8cf] mt-0.5">Contact the Gender & Youth Support Hotline at 0800 600 444.</p>
                </div>
              </div>
            </div>

            {/* Sticky Bottom Footer Exit Bar */}
            <div className="p-4 bg-white/70 dark:bg-[#1a0c1a]/80 backdrop-blur-md border-t border-pink-200/50 dark:border-white/10 flex items-center justify-between gap-3 shrink-0">
              <button
                onClick={handleDownloadBrief}
                className="px-4 py-2.5 glass-panel text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-white/90 dark:hover:bg-[#3d223a] text-xs font-bold rounded-full transition-all flex items-center gap-1.5 border border-pink-200/50 dark:border-white/10"
              >
                <span className="material-symbols-outlined text-base">download</span>
                <span>Download Legal Guide</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#e040a0] dark:bg-[#f25cb8] text-white text-xs font-bold rounded-full hover:bg-[#c82f8c] transition-all active:scale-95 shadow-md flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">close</span>
                <span>Exit Modal</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

