import React, { useState, useEffect } from 'react';

interface JoinUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinUsModal: React.FC<JoinUsModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Student');
  const [location, setLocation] = useState('Gaborone');
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
    if (!fullName || !email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#1c0f1b] rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#f2e8f2] dark:border-[#381f35] relative text-[#2e1a28] dark:text-[#f8f0f7] flex flex-col transition-colors"
      >
        {/* Top Header */}
        <div className="bg-[#fce8f5] dark:bg-[#2c152a] p-5 sm:p-6 text-[#2e1a28] dark:text-[#f8f0f7] text-center relative border-b border-pink-100 dark:border-[#381f35] shrink-0">
          <button
            onClick={onClose}
            id="close-join-modal-btn"
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white dark:bg-[#341832] hover:bg-pink-100 dark:hover:bg-[#3d223a] flex items-center justify-center text-[#2e1a28] dark:text-[#f8f0f7] font-bold transition-colors border border-pink-200 dark:border-[#381f35] shadow-sm"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          <div className="w-12 h-12 rounded-2xl bg-[#e040a0] dark:bg-[#f25cb8] text-white mx-auto flex items-center justify-center shadow-md mb-2">
            <span className="material-symbols-outlined text-2xl font-bold">auto_awesome</span>
          </div>
          <h2 className="text-2xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Join The Movement</h2>
          <p className="text-xs text-[#604868] dark:text-[#d2b8cf] mt-1 font-medium">Connect with mentors, access rights toolkits, and build your future</p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#fce8f5] dark:bg-[#341832] text-[#e040a0] dark:text-[#f25cb8] mx-auto flex items-center justify-center text-3xl animate-bounce">
                🎉
              </div>
              <h3 className="text-2xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Ke a leboga, {fullName}!</h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] max-w-xs mx-auto font-medium">
                Welcome to HerVoice! We've sent a confirmation link and digital rights guide to <strong className="text-[#e040a0] dark:text-[#f25cb8]">{email}</strong>.
              </p>
              <div className="p-4 bg-[#f0e5ff] dark:bg-[#2b172a] rounded-2xl text-xs font-semibold text-[#7c52aa] dark:text-[#d8bdd5] border border-purple-100 dark:border-[#381f35]">
                ✨ Next Step: Check out our Interactive Dream Board to post your first vision card!
              </div>
              <button
                onClick={handleReset}
                className="w-full py-3 bg-[#e040a0] dark:bg-[#f25cb8] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:bg-[#c82f8c] dark:hover:bg-[#e040a0] transition-all bouncy-hover mt-4"
              >
                Back to HerVoice
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">FULL NAME</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Kagiso Motsepe"
                  className="w-full px-4 py-3 bg-[#fcf7fc] dark:bg-[#281427] text-[#2e1a28] dark:text-[#f8f0f7] rounded-2xl border border-pink-200 dark:border-[#381f35] focus:outline-none focus:border-[#e040a0] dark:focus:border-[#f25cb8] text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="kagiso@example.com"
                  className="w-full px-4 py-3 bg-[#fcf7fc] dark:bg-[#281427] text-[#2e1a28] dark:text-[#f8f0f7] rounded-2xl border border-pink-200 dark:border-[#381f35] focus:outline-none focus:border-[#e040a0] dark:focus:border-[#f25cb8] text-sm font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">ROLE</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-3 bg-[#fcf7fc] dark:bg-[#281427] text-[#2e1a28] dark:text-[#f8f0f7] rounded-2xl border border-pink-200 dark:border-[#381f35] focus:outline-none focus:border-[#e040a0] dark:focus:border-[#f25cb8] text-xs font-bold"
                  >
                    <option value="Student">Secondary Student</option>
                    <option value="University">University Student</option>
                    <option value="Young Pro">Young Professional</option>
                    <option value="Mentor">Aspiring Mentor</option>
                    <option value="Parent">Parent / Educator</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">REGION</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-3 bg-[#fcf7fc] dark:bg-[#281427] text-[#2e1a28] dark:text-[#f8f0f7] rounded-2xl border border-pink-200 dark:border-[#381f35] focus:outline-none focus:border-[#e040a0] dark:focus:border-[#f25cb8] text-xs font-bold"
                  >
                    <option value="Gaborone">Gaborone</option>
                    <option value="Francistown">Francistown</option>
                    <option value="Maun">Maun</option>
                    <option value="Serowe">Serowe</option>
                    <option value="Kasane">Kasane</option>
                    <option value="Lobatse">Lobatse</option>
                    <option value="Other">Other Region</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-[#fcf7fc] dark:bg-[#281427] rounded-2xl border border-pink-100 dark:border-[#381f35] text-[11px] text-[#604868] dark:text-[#d2b8cf] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#e040a0] dark:text-[#f25cb8] text-lg shrink-0">lock</span>
                <span>Your details are confidential and protected under HerVoice safety standards.</span>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="submit"
                  id="submit-join-form-btn"
                  className="flex-1 py-3.5 bg-[#e040a0] dark:bg-[#f25cb8] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md shadow-pink-500/20 hover:bg-[#c82f8c] dark:hover:bg-[#e040a0] transition-all bouncy-hover flex items-center justify-center gap-2"
                >
                  <span>Complete Registration</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
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
