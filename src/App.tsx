import React, { useState, useEffect } from 'react';
import { TabType, Spotlight, ResourceAsset, RightPillar, DreamGoal } from './types';
import { INITIAL_GOALS } from './data/mockData';

// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { JoinUsModal } from './components/JoinUsModal';
import { SearchModal } from './components/SearchModal';
import { StoryModal } from './components/StoryModal';
import { ResourceModal } from './components/ResourceModal';
import { NominateModal } from './components/NominateModal';
import { RightsDetailModal } from './components/RightsDetailModal';
import { AddGoalModal } from './components/AddGoalModal';

// Pages
import { HomePage } from './pages/HomePage';
import { RightsPage } from './pages/RightsPage';
import { SpotlightsPage } from './pages/SpotlightsPage';
import { DreamBoardPage } from './pages/DreamBoardPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  // Dark Mode persistent state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('hervoice_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('hervoice_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('hervoice_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Instant scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore shortcut if user is typing in an input or textarea
      if (
        ['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)
      ) {
        if (e.key === 'Escape') {
          setIsJoinUsOpen(false);
          setIsSearchOpen(false);
          setIsNominateOpen(false);
          setIsAddGoalOpen(false);
          setSelectedSpotlight(null);
          setSelectedResource(null);
          setSelectedRightsPillar(null);
        }
        return;
      }

      if (e.key === 'Escape') {
        setIsJoinUsOpen(false);
        setIsSearchOpen(false);
        setIsNominateOpen(false);
        setIsAddGoalOpen(false);
        setSelectedSpotlight(null);
        setSelectedResource(null);
        setSelectedRightsPillar(null);
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === '/') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Modals state
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNominateOpen, setIsNominateOpen] = useState(false);
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false);

  // Active items for detailed modals
  const [selectedSpotlight, setSelectedSpotlight] = useState<Spotlight | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceAsset | null>(null);
  const [selectedRightsPillar, setSelectedRightsPillar] = useState<RightPillar | null>(null);

  // Goals list state with persistent storage
  const [goals, setGoals] = useState<DreamGoal[]>(() => {
    const saved = localStorage.getItem('hervoice_goals');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error('Failed to parse saved goals', err);
      }
    }
    return INITIAL_GOALS;
  });

  useEffect(() => {
    localStorage.setItem('hervoice_goals', JSON.stringify(goals));
  }, [goals]);

  const handleAddGoal = (newGoal: DreamGoal) => {
    setGoals((prev) => [newGoal, ...prev]);
  };

  const handleSelectSpotlightFromSearch = (spotlightId: string) => {
    setActiveTab('spotlights');
  };

  return (
    <div className="min-h-screen bg-[#fcf7fc] dark:bg-[#130a12] text-[#2e1a28] dark:text-[#f8f0f7] flex flex-col font-['DM_Sans',sans-serif] selection:bg-[#e040a0] selection:text-white transition-colors duration-200">
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenJoinUs={() => setIsJoinUsOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            onOpenStory={(spot) => setSelectedSpotlight(spot)}
            onOpenJoinUs={() => setIsJoinUsOpen(true)}
          />
        )}

        {activeTab === 'rights' && (
          <RightsPage
            onOpenRightsDetail={(pillar) => setSelectedRightsPillar(pillar)}
          />
        )}

        {activeTab === 'spotlights' && (
          <SpotlightsPage
            onOpenStory={(spot) => setSelectedSpotlight(spot)}
            onOpenNominate={() => setIsNominateOpen(true)}
          />
        )}

        {activeTab === 'dream-board' && (
          <DreamBoardPage
            onOpenAddGoal={() => setIsAddGoalOpen(true)}
            goals={goals}
            setGoals={setGoals}
          />
        )}

        {activeTab === 'resources' && (
          <ResourcesPage
            onOpenResourceModal={(res) => setSelectedResource(res)}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            setActiveTab={setActiveTab}
            onOpenJoinUs={() => setIsJoinUsOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenJoinUs={() => setIsJoinUsOpen(true)}
      />

      {/* Overlays & Modals */}
      <JoinUsModal
        isOpen={isJoinUsOpen}
        onClose={() => setIsJoinUsOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        setActiveTab={setActiveTab}
        onSelectSpotlight={handleSelectSpotlightFromSearch}
      />

      <NominateModal
        isOpen={isNominateOpen}
        onClose={() => setIsNominateOpen(false)}
      />

      <AddGoalModal
        isOpen={isAddGoalOpen}
        onClose={() => setIsAddGoalOpen(false)}
        onAddGoal={handleAddGoal}
      />

      <StoryModal
        spotlight={selectedSpotlight}
        onClose={() => setSelectedSpotlight(null)}
        onSelectSpotlight={(s) => setSelectedSpotlight(s)}
      />

      <ResourceModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />

      <RightsDetailModal
        pillar={selectedRightsPillar}
        onClose={() => setSelectedRightsPillar(null)}
      />
    </div>
  );
}

export default App;
