import React, { useState } from 'react';
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
import { BriefPage } from './pages/BriefPage';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  // Modals state
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNominateOpen, setIsNominateOpen] = useState(false);
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false);

  // Active items for detailed modals
  const [selectedSpotlight, setSelectedSpotlight] = useState<Spotlight | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceAsset | null>(null);
  const [selectedRightsPillar, setSelectedRightsPillar] = useState<RightPillar | null>(null);

  // Goals list state
  const [goals, setGoals] = useState<DreamGoal[]>(INITIAL_GOALS);

  const handleAddGoal = (newGoal: DreamGoal) => {
    setGoals((prev) => [newGoal, ...prev]);
  };

  const handleSelectSpotlightFromSearch = (spotlightId: string) => {
    // Navigate to spotlights and open story if found
    setActiveTab('spotlights');
  };

  return (
    <div className="min-h-screen bg-[#fcf7fc] text-[#2e1a28] flex flex-col font-['DM_Sans',sans-serif] selection:bg-[#e040a0] selection:text-white">
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenJoinUs={() => setIsJoinUsOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
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

        {activeTab === 'brief' && <BriefPage />}
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
