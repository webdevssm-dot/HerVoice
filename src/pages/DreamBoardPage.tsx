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

  const filteredGoals = activeCategory === 'All'
    ? goals
    : goals.filter((g) => g.category === activeCategory);

  const handleToggleTask = (goalId: string, taskId: string) => {
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

  const handleAddTask = (goalId: string) => {
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

  const handleDeleteGoal = (goalId: string) => {
    setGoals((prev) => prev.filter((g) => g.id !== goalId));
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#2e1a28] dark:text-[#f8f0f7]">
              Visualise Your <span className="text-[#e040a0] dark:text-[#f25cb8]">Future</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#604868] dark:text-[#d2b8cf] mt-2 max-w-2xl font-medium">
              This is your digital sanctuary. Map out your goals, pin your inspirations, and watch your dreams take flight on the HerVoice Dream Board.
            </p>
          </div>

          <button
            onClick={onOpenAddGoal}
            id="add-goal-top-btn"
            className="px-6 py-2.5 bg-[#e040a0] dark:bg-[#f25cb8] hover:bg-[#c82f8c] dark:hover:bg-[#e040a0] text-white font-bold text-xs rounded-full shadow-md shadow-pink-500/20 transition-all bouncy-hover flex items-center gap-1.5 self-start md:self-auto"
          >
            <span className="material-symbols-outlined text-base">add</span>
            <span>Add Goal</span>
          </button>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {['All', 'Education', 'Leadership', 'Creative Arts'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#e040a0] dark:bg-[#f25cb8] text-white shadow-md shadow-pink-500/20'
                  : 'bg-white dark:bg-[#281427] text-[#604868] dark:text-[#d2b8cf] border border-[#f2e8f2] dark:border-[#381f35] hover:bg-[#fce8f5] dark:hover:bg-[#3a1a38] hover:text-[#e040a0] dark:hover:text-[#f25cb8]'
              }`}
            >
              {cat === 'All' ? 'All Goals' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Dream Canvas Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="dream-canvas min-h-[550px] p-6 sm:p-10 rounded-3xl border border-[#ebd8eb] dark:border-[#381f35] bg-white/50 dark:bg-[#1c0f1b]/80 shadow-inner">
          {filteredGoals.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <span className="material-symbols-outlined text-5xl text-[#e040a0] dark:text-[#f25cb8]">cloud</span>
              <h3 className="text-xl font-bold text-[#2e1a28] dark:text-[#f8f0f7]">No vision cards here yet</h3>
              <p className="text-xs text-[#604868] dark:text-[#d2b8cf]">Click 'Add Goal' to pin your first dream to this board!</p>
              <button
                onClick={onOpenAddGoal}
                className="px-6 py-2.5 bg-[#e040a0] dark:bg-[#f25cb8] text-white text-xs font-bold rounded-full shadow-md hover:bg-[#c82f8c]"
              >
                + Add Goal
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGoals.map((goal, idx) => {
                // Card soft colors cycling with dark mode support
                const cardBgClasses = [
                  'bg-[#dff2ff] dark:bg-[#122838] border-sky-200 dark:border-sky-800',
                  'bg-[#f0e5ff] dark:bg-[#24132a] border-purple-200 dark:border-purple-800',
                  'bg-[#ffe5f2] dark:bg-[#2d1124] border-pink-200 dark:border-pink-800',
                  'bg-white dark:bg-[#1e0f1d] border-pink-100 dark:border-[#381f35]'
                ];
                const cardBg = cardBgClasses[idx % cardBgClasses.length];

                return (
                  <div
                    key={goal.id}
                    style={{ transform: `rotate(${goal.rotation || (idx % 2 === 0 ? 1 : -1)}deg)` }}
                    className={`${cardBg} rounded-3xl p-6 shadow-md border relative flex flex-col justify-between sticky-note group`}
                  >
                    {/* Red Pushpin Icon */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md border-2 border-white dark:border-[#1e0f1d]">
                      <span className="material-symbols-outlined text-xs">push_pin</span>
                    </div>

                    <div className="space-y-4 pt-2">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-white/80 dark:bg-black/40 text-[#2e1a28] dark:text-[#f8f0f7] text-[10px] font-bold rounded-full uppercase">
                          {goal.category}
                        </span>
                        <button
                          onClick={() => handleDeleteGoal(goal.id)}
                          className="text-[#604868] dark:text-[#d2b8cf] hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                          title="Delete Goal"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      </div>

                      <h3 className="text-xl font-black text-[#2e1a28] dark:text-[#f8f0f7] leading-tight">{goal.title}</h3>

                      {/* Image if available */}
                      {goal.image && (
                        <div className="rounded-2xl overflow-hidden aspect-16/9 shadow-sm border border-black/5 dark:border-white/10">
                          <img src={goal.image} alt={goal.imageAlt || goal.title} className="w-full h-full object-cover" />
                        </div>
                      )}

                      {goal.hasIllustrationPlaceholder && (
                        <div className="p-4 bg-white/70 dark:bg-black/30 rounded-2xl border border-dashed border-pink-300 dark:border-pink-800 text-center text-xs font-bold text-[#e040a0] dark:text-[#f25cb8] flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-xl">draw</span>
                          <span>Illustration Canvas Attached</span>
                        </div>
                      )}

                      <p className="text-xs text-[#604868] dark:text-[#d2b8cf] leading-relaxed font-medium">
                        {goal.description}
                      </p>

                      {/* Tasks Checkbox list */}
                      {goal.completedTasks && (
                        <div className="pt-2 border-t border-black/5 dark:border-white/10 space-y-2">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9]">Checklist</p>
                          <div className="space-y-1.5">
                            {goal.completedTasks.map((task) => (
                              <label
                                key={task.id}
                                className="flex items-center gap-2 text-xs text-[#2e1a28] dark:text-[#f8f0f7] cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  checked={task.done}
                                  onChange={() => handleToggleTask(goal.id, task.id)}
                                  className="w-4 h-4 accent-[#e040a0] rounded cursor-pointer"
                                />
                                <span className={task.done ? 'line-through text-[#886690] dark:text-[#a082a8]' : 'font-semibold'}>
                                  {task.text}
                                </span>
                              </label>
                            ))}
                          </div>

                          {/* Add Task Input */}
                          <div className="flex items-center gap-2 pt-2">
                            <input
                              type="text"
                              value={newTaskText[goal.id] || ''}
                              onChange={(e) =>
                                setNewTaskText({ ...newTaskText, [goal.id]: e.target.value })
                              }
                              onKeyDown={(e) => e.key === 'Enter' && handleAddTask(goal.id)}
                              placeholder="Add milestone step..."
                              className="w-full px-3 py-1.5 bg-white/80 dark:bg-[#180a17] text-[#2e1a28] dark:text-[#f8f0f7] rounded-xl text-xs font-medium border border-pink-200 dark:border-[#381f35] focus:outline-none focus:border-[#e040a0]"
                            />
                            <button
                              onClick={() => handleAddTask(goal.id)}
                              className="px-3 py-1.5 bg-[#e040a0] dark:bg-[#f25cb8] text-white rounded-xl text-xs font-bold hover:bg-[#c82f8c]"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 mt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#604868] dark:text-[#d2b8cf]">
                      <span>Target: {goal.targetDate || 'Dec 2025'}</span>
                      <span className="text-[#e040a0] dark:text-[#f25cb8]">In Progress</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
