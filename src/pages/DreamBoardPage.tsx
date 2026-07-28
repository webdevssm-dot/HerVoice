import React, { useState } from 'react';
import { DreamGoal } from '../types';

interface DreamBoardPageProps {
  onOpenAddGoal: () => void;
  goals: DreamGoal[];
  setGoals: React.Dispatch<React.SetStateAction<DreamGoal[]>>;
}

export const DreamBoardPage: React.FC<DreamBoardPageProps> = ({
  onOpenAddGoal,
  goals,
  setGoals
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [newTaskText, setNewTaskText] = useState<{ [goalId: string]: string }>({});
  const [selectedGoalForModal, setSelectedGoalForModal] = useState<DreamGoal | null>(null);

  const filteredGoals = goals.filter((g) => {
    return activeCategory === 'All' || g.category === activeCategory;
  });

  const handleToggleTask = (goalId: string, taskId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id !== goalId || !g.completedTasks) return g;
        return {
          ...g,
          completedTasks: g.completedTasks.map((t) =>
            t.id === taskId ? { ...t, done: !t.done } : t
          )
        };
      })
    );
  };

  const handleAddTask = (goalId: string, e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.stopPropagation();
    const text = newTaskText[goalId]?.trim();
    if (!text) return;

    setGoals((prev) =>
      prev.map((g) => {
        if (g.id !== goalId) return g;
        const tasks = g.completedTasks || [];
        return {
          ...g,
          completedTasks: [...tasks, { id: `task-${Date.now()}`, text, done: false }]
        };
      })
    );

    setNewTaskText((prev) => ({ ...prev, [goalId]: '' }));
  };

  const handleCheer = (goalId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id !== goalId) return g;
        return {
          ...g,
          cheersCount: (g.cheersCount || 0) + 1
        };
      })
    );
  };

  const handleDeleteGoal = (goalId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setGoals((prev) => prev.filter((g) => g.id !== goalId));
    if (selectedGoalForModal?.id === goalId) {
      setSelectedGoalForModal(null);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education':
        return 'school';
      case 'Leadership':
        return 'workspace_premium';
      case 'Creative Arts':
        return 'palette';
      case 'Legal & Health':
        return 'gavel';
      default:
        return 'lightbulb';
    }
  };

  const getPinColor = (index: number) => {
    const colors = ['text-rose-500', 'text-amber-500', 'text-[#e040a0]', 'text-[#7c52aa]', 'text-[#0096cc]'];
    return colors[index % colors.length];
  };

  const getRotations = (index: number, goalRotation?: number) => {
    if (goalRotation !== undefined && goalRotation !== 0) {
      return `rotate-[${goalRotation}deg]`;
    }
    const presetRotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', 'rotate-0'];
    return presetRotations[index % presetRotations.length];
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-amber-900/20 p-6 sm:p-10 rounded-3xl border border-[#ebd8eb] dark:border-[#381f35] shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#e040a0] text-white text-[10px] font-black uppercase rounded-full tracking-wider shadow-sm">
                <span className="material-symbols-outlined text-xs">push_pin</span>
                <span>Interactive Dream & Vision Canvas</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-[#2e1a28] dark:text-[#f8f0f7] tracking-tight">
                Botswana Youth <span className="text-[#e040a0] dark:text-[#f25cb8]">Dream Board</span>
              </h1>
              <p className="text-xs sm:text-sm text-[#604868] dark:text-[#d2b8cf] font-medium leading-relaxed">
                Pin your aspirations, propose youth initiatives, track your progress steps, and cheer on fellow dreamers across Botswana!
              </p>
            </div>

            <button
              onClick={onOpenAddGoal}
              id="add-goal-top-btn"
              className="px-6 py-3.5 bg-[#e040a0] dark:bg-[#f25cb8] hover:bg-[#c82f8c] dark:hover:bg-[#e040a0] text-white font-bold text-xs rounded-full shadow-lg shadow-pink-500/25 transition-all bouncy-hover flex items-center gap-2 self-start lg:self-auto shrink-0"
            >
              <span className="material-symbols-outlined text-lg">push_pin</span>
              <span>Pin Your Dream Idea</span>
            </button>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-black/5 dark:border-white/10">
            <span className="text-xs font-black uppercase tracking-wider text-[#604868] dark:text-[#d2b8cf] mr-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-[#e040a0]">filter_alt</span>
              <span>Filter Pinboard:</span>
            </span>
            {['All', 'Education', 'Leadership', 'Creative Arts', 'Legal & Health'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#e040a0] dark:bg-[#f25cb8] text-white shadow-md'
                    : 'bg-white dark:bg-[#281427] text-[#604868] dark:text-[#d2b8cf] border border-[#f2e8f2] dark:border-[#381f35] hover:border-[#e040a0]'
                }`}
              >
                {cat === 'All' ? '📌 All Pinned Ideas' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pinboard Cork Canvas Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f7efe4] dark:bg-[#1a0f1b] border-4 border-[#d8c3a5] dark:border-[#381f35] rounded-3xl p-6 sm:p-10 shadow-inner relative min-h-[500px]">
          {/* Subtle Cork Texture Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#d4bd9b_1px,transparent_1px)] dark:bg-[radial-gradient(#2b172a_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none rounded-2xl"></div>

          {filteredGoals.length === 0 ? (
            <div className="text-center py-20 relative z-10 space-y-4">
              <span className="material-symbols-outlined text-5xl text-[#e040a0]">cloud_off</span>
              <h3 className="text-xl font-bold text-[#2e1a28] dark:text-[#f8f0f7]">No ideas pinned in this category yet</h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf]">Be the first to pin a new dream card!</p>
              <button
                onClick={onOpenAddGoal}
                className="px-6 py-2.5 bg-[#e040a0] text-white font-bold text-xs rounded-full hover:bg-[#c82f8c] transition-colors"
              >
                Pin a New Idea
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8 relative z-10">
              {filteredGoals.map((goal, idx) => {
                const rotationClass = getRotations(idx, goal.rotation);
                const pinColor = getPinColor(idx);

                return (
                  <div
                    key={goal.id}
                    onClick={() => setSelectedGoalForModal(goal)}
                    className={`bg-white dark:bg-[#231222] rounded-2xl p-3.5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-0 hover:z-30 cursor-pointer flex flex-col justify-between border border-[#e8d8e8] dark:border-[#381f35] relative group ${rotationClass}`}
                  >
                    {/* Visual Push Pin Graphic */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                      <span className={`material-symbols-outlined text-2xl sm:text-3xl drop-shadow-md ${pinColor} transform -rotate-12`}>
                        push_pin
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="space-y-2.5 sm:space-y-4 pt-1 sm:pt-2">
                      {/* Image Thumbnail if available */}
                      {goal.image && (
                        <div className="h-28 sm:h-36 rounded-xl overflow-hidden bg-gray-100 dark:bg-[#160a15] relative">
                          <img
                            src={goal.image}
                            alt={goal.imageAlt || goal.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      {/* Header Badge */}
                      <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold">
                        <span className="px-2 py-0.5 sm:px-2.5 bg-[#fce8f5] dark:bg-[#341832] text-[#e040a0] dark:text-[#f25cb8] rounded-full flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">{getCategoryIcon(goal.category)}</span>
                          <span>{goal.category}</span>
                        </span>

                        {goal.targetDate && (
                          <span className="text-[#7c52aa] dark:text-[#b08cc9] flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">calendar_today</span>
                            <span>{goal.targetDate}</span>
                          </span>
                        )}
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1">
                        <h3 className="text-sm sm:text-lg font-black text-[#2e1a28] dark:text-[#f8f0f7] leading-snug group-hover:text-[#e040a0] transition-colors">
                          {goal.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#604868] dark:text-[#d2b8cf] line-clamp-3 leading-relaxed font-medium">
                          {goal.description}
                        </p>
                      </div>

                      {/* Checkable Milestones */}
                      {goal.completedTasks && goal.completedTasks.length > 0 && (
                        <div className="pt-3 border-t border-dashed border-pink-200 dark:border-pink-900/50 space-y-2">
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9]">
                            Action Checklist:
                          </span>
                          <div className="space-y-1.5">
                            {goal.completedTasks.map((task) => (
                              <div
                                key={task.id}
                                onClick={(e) => handleToggleTask(goal.id, task.id, e)}
                                className="flex items-center gap-2 text-xs cursor-pointer group/task hover:text-[#e040a0]"
                              >
                                <span className={`material-symbols-outlined text-base ${task.done ? 'text-emerald-500' : 'text-gray-300 dark:text-gray-600'}`}>
                                  {task.done ? 'check_box' : 'check_box_outline_blank'}
                                </span>
                                <span className={`font-medium ${task.done ? 'line-through text-gray-400' : 'text-[#2e1a28] dark:text-[#f8f0f7]'}`}>
                                  {task.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Bottom Footer */}
                    <div className="pt-4 mt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs">
                      <button
                        onClick={(e) => handleCheer(goal.id, e)}
                        className="px-3 py-1 bg-[#fce8f5] dark:bg-[#341832] hover:bg-[#e040a0] hover:text-white text-[#e040a0] dark:text-[#f25cb8] rounded-full font-bold transition-all flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-sm">favorite</span>
                        <span>{goal.cheersCount || 0}</span>
                      </button>

                      <button
                        onClick={(e) => handleDeleteGoal(goal.id, e)}
                        className="p-1.5 text-gray-400 hover:text-rose-500 transition-colors"
                        title="Unpin goal"
                      >
                        <span className="material-symbols-outlined text-base">delete</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Goal Detail Modal */}
      {selectedGoalForModal && (
        <div
          onClick={() => setSelectedGoalForModal(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#1c0f1b] text-[#2e1a28] dark:text-[#f8f0f7] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#f2e8f2] dark:border-[#381f35] p-6 space-y-6 relative"
          >
            <button
              onClick={() => setSelectedGoalForModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 dark:bg-[#2b172a] text-[#2e1a28] dark:text-[#f8f0f7] flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="p-2 bg-[#fce8f5] dark:bg-[#341832] text-[#e040a0] rounded-xl font-bold">
                <span className="material-symbols-outlined text-xl">{getCategoryIcon(selectedGoalForModal.category)}</span>
              </span>
              <div>
                <span className="text-[10px] font-bold uppercase text-[#7c52aa] dark:text-[#b08cc9]">{selectedGoalForModal.category}</span>
                <h2 className="text-xl font-black leading-snug">{selectedGoalForModal.title}</h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#604868] dark:text-[#d2b8cf] leading-relaxed font-medium">
              {selectedGoalForModal.description}
            </p>

            {/* Interactive Checklist inside Modal */}
            <div className="space-y-3 pt-2">
              <h3 className="font-bold text-xs uppercase text-[#7c52aa] dark:text-[#b08cc9] tracking-wider">
                Milestones & Steps
              </h3>
              {selectedGoalForModal.completedTasks && selectedGoalForModal.completedTasks.length > 0 ? (
                <div className="space-y-2">
                  {selectedGoalForModal.completedTasks.map((task) => (
                    <label
                      key={task.id}
                      className="flex items-center gap-3 p-3 bg-[#fcf7fc] dark:bg-[#180a17] rounded-xl border border-[#f2e8f2] dark:border-[#381f35] cursor-pointer hover:bg-pink-50 dark:hover:bg-[#251223] transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={task.done}
                        onChange={() => handleToggleTask(selectedGoalForModal.id, task.id)}
                        className="w-4 h-4 accent-[#e040a0] rounded cursor-pointer"
                      />
                      <span className={`text-xs font-semibold ${task.done ? 'line-through text-gray-400' : ''}`}>
                        {task.text}
                      </span>
                    </label>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500 italic">No milestone steps added yet.</p>
              )}

              {/* Add Task Input */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="text"
                  value={newTaskText[selectedGoalForModal.id] || ''}
                  onChange={(e) => setNewTaskText({ ...newTaskText, [selectedGoalForModal.id]: e.target.value })}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddTask(selectedGoalForModal.id)}
                  placeholder="Add a new milestone step..."
                  className="flex-1 px-4 py-2 bg-[#fcf7fc] dark:bg-[#180a17] text-xs font-medium rounded-xl border border-[#f2e8f2] dark:border-[#381f35] focus:outline-none focus:border-[#e040a0]"
                />
                <button
                  onClick={() => handleAddTask(selectedGoalForModal.id)}
                  className="px-4 py-2 bg-[#e040a0] text-white text-xs font-bold rounded-xl hover:bg-[#c82f8c]"
                >
                  Add
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-[#f2e8f2] dark:border-[#381f35] flex items-center justify-between">
              <button
                onClick={(e) => handleCheer(selectedGoalForModal.id, e)}
                className="px-4 py-2 bg-[#fce8f5] text-[#e040a0] dark:bg-[#341832] dark:text-[#f25cb8] hover:bg-[#e040a0] hover:text-white rounded-full text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">favorite</span>
                <span>Cheer On ({selectedGoalForModal.cheersCount || 0})</span>
              </button>

              <button
                onClick={() => setSelectedGoalForModal(null)}
                className="px-5 py-2 bg-[#e040a0] text-white font-bold text-xs rounded-full hover:bg-[#c82f8c]"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
