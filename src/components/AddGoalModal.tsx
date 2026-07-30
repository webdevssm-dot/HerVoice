import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DreamGoal } from '../types';

interface AddGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddGoal: (goal: DreamGoal) => void;
}

export const AddGoalModal: React.FC<AddGoalModalProps> = ({ isOpen, onClose, onAddGoal }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'Education' | 'Leadership' | 'Creative Arts'>('Education');
  const [description, setDescription] = useState('');
  const [targetDate, setTargetDate] = useState('Dec 2025');

  // Close modal on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    const newGoal: DreamGoal = {
      id: `goal-${Date.now()}`,
      title,
      category,
      description,
      targetDate,
      rotation: Math.floor(Math.random() * 5) - 2,
      completedTasks: [
        { id: `t-${Date.now()}-1`, text: 'Define action steps', done: false },
        { id: `t-${Date.now()}-2`, text: 'Find a HerVoice mentor', done: false }
      ]
    };

    onAddGoal(newGoal);
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-white/80 dark:border-white/10 relative text-[#2e1a28] dark:text-[#f8f0f7] flex flex-col"
          >
            <div className="bg-white/70 dark:bg-[#2c152a]/80 backdrop-blur-md p-5 sm:p-6 text-[#2e1a28] dark:text-[#f8f0f7] text-center relative border-b border-pink-200/50 dark:border-white/10 shrink-0">
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full glass-panel hover:bg-pink-100 dark:hover:bg-[#3d223a] flex items-center justify-center text-[#2e1a28] dark:text-[#f8f0f7] font-bold transition-all border border-pink-200/60 dark:border-white/10 shadow-xs"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
              <div className="w-12 h-12 rounded-2xl bg-[#e040a0] text-white mx-auto flex items-center justify-center shadow-md mb-2">
                <span className="material-symbols-outlined text-2xl font-bold">add_reaction</span>
              </div>
              <h2 className="text-2xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">Pin Your Dream Card</h2>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf] mt-1 font-medium">Declare your aspirations to the HerVoice community canvas</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 flex-1">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">GOAL / VISION TITLE</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Launch a Tech Club in Francistown"
                  className="w-full px-4 py-3 glass-panel text-[#2e1a28] dark:text-[#f8f0f7] rounded-2xl border border-pink-200/60 dark:border-white/10 focus:outline-none focus:border-[#e040a0] text-sm font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">CATEGORY</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3 py-3 glass-panel text-[#2e1a28] dark:text-[#f8f0f7] rounded-2xl border border-pink-200/60 dark:border-white/10 focus:outline-none focus:border-[#e040a0] text-xs font-bold"
                  >
                    <option value="Education" className="dark:bg-[#1a0c1a]">🎓 Education</option>
                    <option value="Leadership" className="dark:bg-[#1a0c1a]">👑 Leadership</option>
                    <option value="Creative Arts" className="dark:bg-[#1a0c1a]">🎨 Creative Arts</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">TIMELINE</label>
                  <input
                    type="text"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    placeholder="e.g. Dec 2025"
                    className="w-full px-4 py-3 glass-panel text-[#2e1a28] dark:text-[#f8f0f7] rounded-2xl border border-pink-200/60 dark:border-white/10 focus:outline-none focus:border-[#e040a0] text-xs font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9] mb-1">NOTES & INSPIRATION</label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Why does this dream matter to you? How will you achieve it?"
                  className="w-full px-4 py-3 glass-panel text-[#2e1a28] dark:text-[#f8f0f7] rounded-2xl border border-pink-200/60 dark:border-white/10 focus:outline-none focus:border-[#e040a0] text-xs font-medium"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3.5 bg-[#e040a0] dark:bg-[#f25cb8] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md shadow-pink-500/20 hover:bg-[#c82f8c] transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Pin Goal to Board</span>
                  <span className="material-symbols-outlined text-lg">push_pin</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-3.5 glass-panel text-[#7c52aa] dark:text-[#d8bdd5] hover:bg-white/90 dark:hover:bg-[#3d223a] font-bold text-xs rounded-full transition-all flex items-center gap-1 border border-pink-200/50 dark:border-white/10"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                  <span className="hidden sm:inline">Cancel</span>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

