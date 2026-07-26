import React, { useState, useEffect } from 'react';

interface NominateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NominateModal: React.FC<NominateModalProps> = ({ isOpen, onClose }) => {
  const [nomineeName, setNomineeName] = useState('');
  const [nomineeCategory, setNomineeCategory] = useState<'Science' | 'Business' | 'Sports' | 'Leadership'>('Leadership');
  const [nomineeStory, setNomineeStory] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomineeName || !nomineeStory) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setNomineeName('');
    setNomineeStory('');
    setYourEmail('');
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#1a0c1a] rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#f2e8f2] dark:border-[#381f35] relative text-[#2e1a28] dark:text-[#f8f0f7] flex flex-col"
      >
        <div className="bg-[#fce8f5] dark:bg-[#2c152a] p-5 sm:p-6 text-[#2e1a28] dark:text-[#f8f0f7] text-center relative border-b border-pink-100 dark:border-[#381f35] shrink-0">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white dark:bg-[#1a0c1a] hover:bg-pink-100 dark:hover:bg-pink-950 flex items-center justify-center text-[#2e1a28] dark:text-[#f8f0f7] font-bold transition-colors border border-pink-200 dark:border-pink-900 shadow-sm"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          <div className="w-12 h-12 rounded-2xl bg-[#e040a0] text-white mx-auto flex items-center justify-center shadow-md mb-2">
            <span className="material-symbols-outlined text-2xl font-bold">star</span>
          </div>
          <h2 className="text-2xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Nominate A Leader</h2>
          <p className="text-xs text-[#604868] dark:text-[#d2b8cf] mt-1 font-medium">Know an inspirational mentor or innovator in Botswana?</p>
        </div>

        <div className="p-6 flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#fce8f5] dark:bg-[#341832] text-[#e040a0] dark:text-[#f25cb8] mx-auto flex items-center justify-center text-3xl animate-bounce">
                👏
              </div>
              <h3 className="text-2xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Nomination Received!</h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] max-w-xs mx-auto font-medium">
                Thank you for shining a light on <strong className="text-[#e040a0] dark:text-[#f25cb8]">{nomineeName}</strong>. Our team will review her story for our monthly spotlight feature.
              </p>
              <button
                onClick={handleReset}
                className="w-full py-3 bg-[#e040a0] dark:bg-[#f25cb8] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:bg-[#c82f8c] transition-all bouncy-hover mt-4"
              >
                Back to Spotlights
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">NOMINEE'S FULL NAME</label>
                <input
                  type="text"
                  required
                  value={nomineeName}
                  onChange={(e) => setNomineeName(e.target.value)}
                  placeholder="e.g. Amantle Montsho"
                  className="w-full px-4 py-3 bg-[#fcf7fc] dark:bg-[#281427] text-[#2e1a28] dark:text-[#f8f0f7] rounded-2xl border border-pink-200 dark:border-[#381f35] focus:outline-none focus:border-[#e040a0] text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">IMPACT CATEGORY</label>
                <select
                  value={nomineeCategory}
                  onChange={(e) => setNomineeCategory(e.target.value as any)}
                  className="w-full px-3 py-3 bg-[#fcf7fc] dark:bg-[#281427] text-[#2e1a28] dark:text-[#f8f0f7] rounded-2xl border border-pink-200 dark:border-[#381f35] focus:outline-none focus:border-[#e040a0] text-xs font-bold"
                >
                  <option value="Leadership" className="dark:bg-[#1a0c1a]">Leadership & Community Advocacy</option>
                  <option value="Science" className="dark:bg-[#1a0c1a]">Science, Tech & Innovation</option>
                  <option value="Business" className="dark:bg-[#1a0c1a]">Business & Entrepreneurship</option>
                  <option value="Sports" className="dark:bg-[#1a0c1a]">Sports, Culture & Arts</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">WHY SHOULD SHE BE FEATURED?</label>
                <textarea
                  required
                  rows={3}
                  value={nomineeStory}
                  onChange={(e) => setNomineeStory(e.target.value)}
                  placeholder="Share a short paragraph about her achievements and community impact..."
                  className="w-full px-4 py-3 bg-[#fcf7fc] dark:bg-[#281427] text-[#2e1a28] dark:text-[#f8f0f7] rounded-2xl border border-pink-200 dark:border-[#381f35] focus:outline-none focus:border-[#e040a0] text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  value={yourEmail}
                  onChange={(e) => setYourEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-[#fcf7fc] dark:bg-[#281427] text-[#2e1a28] dark:text-[#f8f0f7] rounded-2xl border border-pink-200 dark:border-[#381f35] focus:outline-none focus:border-[#e040a0] text-sm font-medium"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3.5 bg-[#e040a0] dark:bg-[#f25cb8] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md shadow-pink-500/20 hover:bg-[#c82f8c] transition-all bouncy-hover flex items-center justify-center gap-2"
                >
                  <span>Submit Nomination</span>
                  <span className="material-symbols-outlined text-lg">send</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-3.5 bg-[#f0e5ff] dark:bg-[#2c152a] text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-[#e040a0] hover:text-white font-bold text-xs rounded-full transition-all flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                  <span className="hidden sm:inline">Cancel</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
