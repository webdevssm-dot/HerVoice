import React, { useState } from 'react';
import { RIGHT_PILLARS, QUIZ_QUESTIONS } from '../data/mockData';
import { RightPillar } from '../types';

interface RightsPageProps {
  onOpenRightsDetail: (pillar: RightPillar) => void;
}

export const RightsPage: React.FC<RightsPageProps> = ({ onOpenRightsDetail }) => {
  const [activeQuizIndex, setActiveQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[activeQuizIndex];

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    if (currentQuestion.options[idx].isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (activeQuizIndex < QUIZ_QUESTIONS.length - 1) {
      setActiveQuizIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setActiveQuizIndex(0);
    setSelectedOption(null);
    setScore(0);
    setQuizCompleted(false);
    setShowExplanation(false);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fce8f5] rounded-full">
              <span className="material-symbols-outlined text-sm text-[#d12b8d]">auto_awesome</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#d12b8d]">
                KNOWLEDGE IS POWER
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#2e1a28] leading-[1.1]">
              Know Your <span className="text-[#e040a0]">Rights</span>,<br />
              Own Your <span className="text-[#7c52aa]">Future</span>.
            </h1>

            <p className="text-sm sm:text-base text-[#604868] max-w-xl font-medium leading-relaxed">
              Understanding your fundamental rights is the first step toward self-advocacy and empowerment. We've broken down the essentials for you.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#quiz-section"
                className="px-7 py-3.5 bg-[#7c52aa] hover:bg-[#683f96] text-white rounded-full font-bold text-xs shadow-md shadow-purple-500/20 transition-all bouncy-hover flex items-center gap-2"
              >
                <span>Take the Rights Quiz</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>

              <a
                href="#pillars-section"
                className="px-7 py-3.5 bg-[#f0e5ff] text-[#7c52aa] hover:bg-[#ebd8ff] rounded-full font-bold text-xs transition-all bouncy-hover flex items-center gap-2"
              >
                <span>Explore Rights</span>
              </a>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-pink-100 max-w-md w-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBREkNkVD_l4YJ5g5qzpPWiPUoTYrC24HRwXwED_92rPJBeVCzlImDyknRZ5k66izv2fLbyMuyStCvX_T5esuP6Vyfyt82wsU4FS4x-uaobrFH1s6L7bBHIuTcYDw5hSf_EVTR1FFfAAIfJuZ29cnE0D8c0VGCQbE1LcmszCN3EtwFl96Hmz4cGnQMOPHH--x0g7gz6H5aeuVmjgwsmStaQvpVW1SLFJyhYAxkxC6_1s8gTPbh2VaDeQDaJzZqophx8Tl-Ex57TxHvp"
                alt="Young African woman smiling in green sweater with books"
                className="w-full h-[360px] object-cover"
              />

              {/* Floating Badge Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-pink-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#fce8f5] text-[#e040a0] flex items-center justify-center font-bold shrink-0">
                  <span className="material-symbols-outlined text-xl">verified</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2e1a28]">Verified Legal Standards</p>
                  <p className="text-[11px] text-[#604868]">Aligned with Botswana Constitution & UN Conventions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section id="pillars-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="text-3xl font-black text-[#2e1a28]">Fundamental Rights</h2>
          <p className="text-xs text-[#604868]">
            Explore key areas where your rights are protected by law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RIGHT_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-3xl p-8 border border-[#f2e8f2] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#fce8f5] text-[#e040a0] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl font-bold">{pillar.icon}</span>
                </div>

                <h3 className="text-2xl font-black text-[#2e1a28]">{pillar.title}</h3>
                <p className="text-xs text-[#604868] leading-relaxed">
                  {pillar.description}
                </p>

                <div className="pt-2">
                  <ul className="space-y-2 text-xs text-[#2e1a28] font-semibold">
                    {pillar.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#e040a0] font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#f2e8f2]">
                <button
                  onClick={() => onOpenRightsDetail(pillar)}
                  className="text-xs font-bold text-[#e040a0] hover:text-[#c82f8c] flex items-center gap-1.5 transition-all"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Rights Quiz */}
      <section id="quiz-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-[#ebd8eb] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#f2e8f2] pb-4">
            <div>
              <span className="px-3.5 py-1 bg-[#f0e5ff] text-[#7c52aa] text-[10px] font-bold rounded-full uppercase tracking-wider">
                CHALLENGE YOURSELF
              </span>
              <h3 className="text-2xl font-black text-[#2e1a28] mt-2">Interactive Rights Quiz</h3>
            </div>
            {!quizCompleted && (
              <div className="text-xs font-bold text-[#7c52aa] bg-[#f0e5ff] px-4 py-1.5 rounded-full">
                Question {activeQuizIndex + 1} of {QUIZ_QUESTIONS.length}
              </div>
            )}
          </div>

          {quizCompleted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#fce8f5] text-[#e040a0] mx-auto flex items-center justify-center text-3xl">
                🌟
              </div>
              <h4 className="text-2xl font-black text-[#2e1a28]">Quiz Completed!</h4>
              <p className="text-base font-bold text-[#e040a0]">
                You scored {score} out of {QUIZ_QUESTIONS.length}!
              </p>
              <p className="text-xs text-[#604868] max-w-sm mx-auto">
                {score === QUIZ_QUESTIONS.length
                  ? 'Outstanding! You have a great grasp of your rights.'
                  : 'Great effort! Review our guides to learn even more.'}
              </p>
              <button
                onClick={handleRestartQuiz}
                className="px-8 py-3 bg-[#e040a0] text-white font-bold text-xs rounded-full shadow-md shadow-pink-500/20 hover:bg-[#c82f8c] transition-all bouncy-hover"
              >
                Retake Quiz
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-base font-bold text-[#2e1a28] leading-snug">
                {currentQuestion.question}
              </p>

              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  let btnStyle = 'bg-[#fcf7fc] text-[#2e1a28] border-[#f2e8f2] hover:bg-[#fce8f5] hover:border-[#e040a0]';

                  if (selectedOption !== null) {
                    if (option.isCorrect) {
                      btnStyle = 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold';
                    } else if (selectedOption === idx) {
                      btnStyle = 'bg-rose-50 text-rose-800 border-rose-300 font-bold';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={selectedOption !== null}
                      className={`w-full p-4 rounded-2xl text-left text-xs sm:text-sm border transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{option.text}</span>
                      {selectedOption !== null && option.isCorrect && (
                        <span className="material-symbols-outlined text-lg text-emerald-600">check_circle</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <div className="p-4 bg-[#f0e5ff] rounded-2xl text-xs text-[#7c52aa] space-y-1">
                  <p className="font-bold uppercase text-[10px]">EXPLANATION</p>
                  <p>{currentQuestion.explanation}</p>
                </div>
              )}

              {selectedOption !== null && (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 bg-[#e040a0] text-white font-bold text-xs rounded-full shadow-md hover:bg-[#c82f8c] transition-all bouncy-hover flex items-center gap-1"
                  >
                    <span>{activeQuizIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Score'}</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Support Hub 4-Card Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <h2 className="text-3xl font-black text-[#2e1a28]">Support Hub</h2>
          <p className="text-xs text-[#604868]">Quick access to tools, communities, and helpline resources.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Legal Resource Library */}
          <div className="bg-gradient-to-br from-[#7c52aa] to-[#5d3886] text-white rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">menu_book</span>
              </div>
              <h3 className="font-bold text-lg">Legal Resource Library</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Downloadable guides, court templates, and legal dictionaries.
              </p>
            </div>
            <button
              onClick={() => onOpenRightsDetail(RIGHT_PILLARS[0])}
              className="w-full py-2.5 bg-white text-[#7c52aa] font-bold text-xs rounded-full hover:bg-purple-50 transition-colors"
            >
              Browse Library
            </button>
          </div>

          {/* Card 2: Sisterhood Forum */}
          <div className="bg-[#0096cc] text-white rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">forum</span>
              </div>
              <h3 className="font-bold text-lg">Sisterhood Forum</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Connect safely with peers to discuss rights, career advice, and support.
              </p>
            </div>
            <button
              onClick={() => onOpenRightsDetail(RIGHT_PILLARS[1])}
              className="w-full py-2.5 bg-white text-[#0096cc] font-bold text-xs rounded-full hover:bg-sky-50 transition-colors"
            >
              Join Discussion
            </button>
          </div>

          {/* Card 3: Advocacy Hotline */}
          <div className="bg-white rounded-3xl p-6 border border-[#f2e8f2] flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#fce8f5] text-[#e040a0] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">speed</span>
              </div>
              <h3 className="font-bold text-lg text-[#2e1a28]">Advocacy Hotline</h3>
              <p className="text-xs text-[#604868] leading-relaxed">
                Need immediate help or confidential counseling? Toll-free 24/7.
              </p>
            </div>
            <button
              onClick={() => onOpenRightsDetail(RIGHT_PILLARS[2])}
              className="w-full py-2.5 bg-[#e040a0] text-white font-bold text-xs rounded-full hover:bg-[#c82f8c] transition-colors"
            >
              Call Now
            </button>
          </div>

          {/* Card 4: Know Your Locality */}
          <div className="bg-[#fce8f5] rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#d12b8d] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">location_on</span>
              </div>
              <h3 className="font-bold text-lg text-[#2e1a28]">Know Your Locality</h3>
              <p className="text-xs text-[#604868] leading-relaxed">
                Find local legal aid clinics, youth centers, and support hubs across Botswana.
              </p>
            </div>
            <button
              onClick={() => onOpenRightsDetail(RIGHT_PILLARS[3])}
              className="w-full py-2.5 bg-[#d12b8d] text-white font-bold text-xs rounded-full hover:bg-[#b8227a] transition-colors"
            >
              Explore Map
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
