import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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
  const [isMinimized, setIsMinimized] = useState(false);

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
    setIsMinimized(false);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setIsMinimized(false);
    onClose();
  };

  // Render Minimized Floating Glass Dock Widget
  if (isMinimized) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-4 right-4 z-50 glass-pill p-2.5 sm:p-3.5 rounded-2xl shadow-2xl border border-pink-300/60 dark:border-pink-500/40 flex items-center gap-3 max-w-xs sm:max-w-sm"
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#e040a0] to-[#f25cb8] text-white flex items-center justify-center shrink-0 shadow-sm animate-pulse">
          <span className="material-symbols-outlined text-base">edit_note</span>
        </div>
        <div className="flex-1 min-w-0 text-left">
          <div className="text-[11px] font-extrabold text-[#2e1a28] dark:text-[#f8f0f7] truncate flex items-center gap-1">
            <span>Join HerVoice</span>
            {fullName && <span className="text-[9px] px-1.5 py-0.2 bg-[#fce8f5] dark:bg-[#341832] text-[#e040a0] dark:text-[#f25cb8] rounded-full">Draft saved</span>}
          </div>
          <p className="text-[10px] text-[#604868] dark:text-[#d2b8cf] truncate font-medium">
            {fullName ? `Signed as ${fullName}` : 'Registration in progress...'}
          </p>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => setIsMinimized(false)}
            title="Expand Sign Up Form"
            className="p-1.5 rounded-lg bg-[#e040a0] dark:bg-[#f25cb8] text-white hover:opacity-90 transition-all flex items-center justify-center shadow-xs"
          >
            <span className="material-symbols-outlined text-sm">open_in_full</span>
          </button>
          <button
            onClick={onClose}
            title="Close Form"
            className="p-1.5 rounded-lg bg-white/60 dark:bg-[#341832]/60 hover:bg-pink-100 dark:hover:bg-[#3d223a] text-[#604868] dark:text-[#d2b8cf] transition-all flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#2e1a28] dark:text-[#f8f0f7] flex flex-col transition-colors border border-white/60 dark:border-white/10"
        >
          {/* Frosted Liquid Glass Header */}
          <div className="bg-gradient-to-r from-[#fce8f5]/90 via-[#f8e8f8]/80 to-[#f0e5ff]/90 dark:from-[#2a1329]/90 dark:via-[#221021]/80 dark:to-[#1e1026]/90 p-4 sm:p-5 text-[#2e1a28] dark:text-[#f8f0f7] text-center relative border-b border-pink-200/40 dark:border-[#381f35] shrink-0 backdrop-blur-md">
            {/* Header Control Actions (Minimize & Close) */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <button
                onClick={() => setIsMinimized(true)}
                id="minimize-join-modal-btn"
                aria-label="Minimize form"
                title="Minimize form to floating widget"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/80 dark:bg-[#341832]/80 hover:bg-pink-100 dark:hover:bg-[#3d223a] flex items-center justify-center text-[#2e1a28] dark:text-[#f8f0f7] transition-all border border-pink-200/50 dark:border-[#381f35] shadow-xs"
              >
                <span className="material-symbols-outlined text-base">remove</span>
              </button>
              <button
                onClick={onClose}
                id="close-join-modal-btn"
                aria-label="Close modal"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/80 dark:bg-[#341832]/80 hover:bg-pink-100 dark:hover:bg-[#3d223a] flex items-center justify-center text-[#2e1a28] dark:text-[#f8f0f7] transition-all border border-pink-200/50 dark:border-[#381f35] shadow-xs"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>

            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#e040a0] to-[#f25cb8] text-white mx-auto flex items-center justify-center shadow-sm mb-1.5">
              <span className="material-symbols-outlined text-xl font-bold">auto_awesome</span>
            </div>
            <h2 className="text-xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Join The Movement</h2>
            <p className="text-[11px] text-[#604868] dark:text-[#d2b8cf] mt-0.5 font-medium">Connect with mentors & empower your future in Botswana</p>
          </div>

          {/* Modal Body - Compact Form Layout */}
          <div className="p-4 sm:p-5">
            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#fce8f5] dark:bg-[#341832] text-[#e040a0] dark:text-[#f25cb8] mx-auto flex items-center justify-center text-2xl animate-bounce">
                  🎉
                </div>
                <h3 className="text-xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Ke a leboga, {fullName}!</h3>
                <p className="text-xs text-[#604868] dark:text-[#d2b8cf] max-w-xs mx-auto font-medium">
                  Welcome to HerVoice! We've sent your digital guide to <strong className="text-[#e040a0] dark:text-[#f25cb8]">{email}</strong>.
                </p>
                <div className="p-3 bg-[#f0e5ff]/80 dark:bg-[#2b172a]/80 backdrop-blur-sm rounded-xl text-xs font-semibold text-[#7c52aa] dark:text-[#d8bdd5] border border-purple-200/50 dark:border-[#381f35]">
                  ✨ Visit our Dream Board to post your first vision card!
                </div>
                <button
                  onClick={handleReset}
                  className="w-full py-2.5 bg-[#e040a0] dark:bg-[#f25cb8] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm hover:bg-[#c82f8c] dark:hover:bg-[#e040a0] transition-all bouncy-hover mt-2"
                >
                  Back to HerVoice
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Compact Input Row 1: Full Name */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Kagiso Motsepe"
                    className="w-full px-3 py-2 bg-white/70 dark:bg-[#281427]/70 text-[#2e1a28] dark:text-[#f8f0f7] rounded-xl border border-pink-200/60 dark:border-[#381f35] focus:outline-none focus:border-[#e040a0] dark:focus:border-[#f25cb8] text-xs font-medium backdrop-blur-xs transition-all"
                  />
                </div>

                {/* Compact Input Row 2: Email */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="kagiso@example.com"
                    className="w-full px-3 py-2 bg-white/70 dark:bg-[#281427]/70 text-[#2e1a28] dark:text-[#f8f0f7] rounded-xl border border-pink-200/60 dark:border-[#381f35] focus:outline-none focus:border-[#e040a0] dark:focus:border-[#f25cb8] text-xs font-medium backdrop-blur-xs transition-all"
                  />
                </div>

                {/* Compact Input Row 3: Role & Region Side-by-Side */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">
                      ROLE
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-2.5 py-2 bg-white/70 dark:bg-[#281427]/70 text-[#2e1a28] dark:text-[#f8f0f7] rounded-xl border border-pink-200/60 dark:border-[#381f35] focus:outline-none focus:border-[#e040a0] dark:focus:border-[#f25cb8] text-xs font-bold transition-all"
                    >
                      <option value="Student">Secondary Student</option>
                      <option value="University">University Student</option>
                      <option value="Young Pro">Young Professional</option>
                      <option value="Mentor">Aspiring Mentor</option>
                      <option value="Parent">Parent / Educator</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">
                      REGION
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-2.5 py-2 bg-white/70 dark:bg-[#281427]/70 text-[#2e1a28] dark:text-[#f8f0f7] rounded-xl border border-pink-200/60 dark:border-[#381f35] focus:outline-none focus:border-[#e040a0] dark:focus:border-[#f25cb8] text-xs font-bold transition-all"
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

                {/* Confidentiality Privacy Note */}
                <div className="p-2.5 bg-white/50 dark:bg-[#281427]/50 rounded-xl border border-pink-100/80 dark:border-[#381f35] text-[10px] text-[#604868] dark:text-[#d2b8cf] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#e040a0] dark:text-[#f25cb8] text-base shrink-0">lock</span>
                  <span>Your details are confidential & protected under HerVoice safety standards.</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="submit"
                    id="submit-join-form-btn"
                    className="flex-1 py-2.5 bg-[#e040a0] dark:bg-[#f25cb8] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-xs hover:bg-[#c82f8c] dark:hover:bg-[#e040a0] transition-all bouncy-hover flex items-center justify-center gap-1.5"
                  >
                    <span>Register Now</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsMinimized(true)}
                    className="px-3 py-2.5 bg-white/60 dark:bg-[#2c152a] text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-pink-50 dark:hover:bg-[#3d223a] font-bold text-xs rounded-full transition-all flex items-center gap-1 border border-pink-200/40 dark:border-[#381f35]"
                    title="Minimize for later"
                  >
                    <span className="material-symbols-outlined text-sm">remove</span>
                    <span className="text-[11px]">Minimize</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

