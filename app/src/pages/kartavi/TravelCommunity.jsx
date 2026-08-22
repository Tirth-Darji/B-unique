import React, { useState, useMemo } from "react";
import { COMMUNITY_JOURNEYS } from "./communityData";
import { CommunityHero } from "./components/community/CommunityHero";
import { FeaturedJourney } from "./components/community/FeaturedJourney";
import { JourneyGrid } from "./components/community/JourneyCard";
import { TravelByMood } from "./components/community/TravelByMood";
import { TravelersLikeYou } from "./components/community/TravelersLikeYou";
import { CommunitySearchFilters } from "./components/community/CommunitySearchFilters";
import { PublicItineraryModal } from "./components/community/PublicItineraryModal";
import { TravelerPassportModal } from "./components/community/TravelerPassportModal";

/**
 * TravelCommunity Component ("The Travel Atlas")
 * Flagship Community page orchestrator.
 */
export default function TravelCommunity({ onNavigateToJourneys, sharedTrips, onUpdateTrips }) {
  // FILTER STATES
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMood, setSelectedMood] = useState("all");
  const [destinationFilter, setDestinationFilter] = useState("All");
  const [budgetFilter, setBudgetFilter] = useState("All");
  const [styleFilter, setStyleFilter] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  // MODAL STATES
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [selectedTraveler, setSelectedTraveler] = useState(null);

  // USER SAVES STATE
  const [savedJourneyIds, setSavedJourneyIds] = useState(new Set(["comm-japan-1", "comm-swiss-5"]));

  // TOAST FEEDBACK STATE
  const [toastMessage, setToastMessage] = useState(null);

  // Helper for displaying toast
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // FEATURED JOURNEY (Japan Unfiltered)
  const featuredJourney = useMemo(() => {
    return COMMUNITY_JOURNEYS.find((j) => j.isFeatured) || COMMUNITY_JOURNEYS[0];
  }, []);

  // FILTERED & SORTED JOURNEYS
  const filteredJourneys = useMemo(() => {
    return COMMUNITY_JOURNEYS.filter((item) => {
      // Mood filter
      if (selectedMood !== "all" && item.moodCategory !== selectedMood) {
        return false;
      }
      // Destination filter
      if (destinationFilter !== "All" && item.destination !== destinationFilter) {
        return false;
      }
      // Budget filter
      if (budgetFilter !== "All" && item.budgetCategory !== budgetFilter) {
        return false;
      }
      // Style filter
      if (styleFilter !== "All" && !item.styles.includes(styleFilter)) {
        return false;
      }
      // Search term
      if (searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesRoute = item.route.toLowerCase().includes(query);
        const matchesDest = item.destination.toLowerCase().includes(query);
        const matchesCreator = item.creator.name.toLowerCase().includes(query) || item.creator.username.toLowerCase().includes(query);
        if (!matchesTitle && !matchesRoute && !matchesDest && !matchesCreator) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "popular") {
        return (b.savesCount + (savedJourneyIds.has(b.id) ? 1 : 0)) - (a.savesCount + (savedJourneyIds.has(a.id) ? 1 : 0));
      }
      if (sortBy === "recent") {
        return b.id.localeCompare(a.id);
      }
      if (sortBy === "duration") {
        return parseInt(b.duration) - parseInt(a.duration);
      }
      return 0;
    });
  }, [searchTerm, selectedMood, destinationFilter, budgetFilter, styleFilter, sortBy, savedJourneyIds]);

  // TOGGLE SAVE HANDLER
  const handleToggleSave = (journey) => {
    setSavedJourneyIds((prev) => {
      const next = new Set(prev);
      if (next.has(journey.id)) {
        next.delete(journey.id);
        showToast(`Removed "${journey.title}" from saved inspiration.`);
      } else {
        next.add(journey.id);
        showToast(`❤️ Saved "${journey.title}" to your inspiration!`);
      }
      return next;
    });
  };

  // COPY TRIP HANDLER (Injects into App sharedTrips state)
  const handleCopyTrip = (journey) => {
    if (!onUpdateTrips) return;

    // Convert community journey into planner trip model
    const newTrip = {
      id: `trip-copied-${Date.now()}`,
      name: journey.title,
      destination: journey.destination,
      country: journey.destination,
      image: journey.image,
      summary: journey.quote,
      description: journey.description,
      startDate: "15 Oct 2026",
      endDate: "22 Oct 2026",
      status: "upcoming",
      details: {
        duration: journey.duration,
        travelers: "1 Traveler",
        accommodation: "Curated Boutique Stay",
        budget: journey.budget,
        transport: "Local Express Rail"
      },
      itinerary: journey.timeline.map((item) => ({
        day: `Day ${item.day}`,
        title: item.title,
        description: item.activities.join(", ")
      }))
    };

    onUpdateTrips((prevTrips) => [newTrip, ...(prevTrips || [])]);
    showToast(`✨ "${journey.title}" copied to your planner! View it under Upcoming Journeys.`);
  };

  // SHARE HANDLER
  const handleShare = (journey) => {
    const shareUrl = `${window.location.origin}/community/${journey.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      showToast(`🔗 Link copied to clipboard: ${shareUrl}`);
    } else {
      showToast(`🔗 Public route: ${shareUrl}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1620] text-slate-100 font-sans px-4 sm:px-8 py-6 pb-20 max-w-7xl mx-auto space-y-8">
      
      {/* TOAST FEEDBACK FLOATING NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
          <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#E9C98A] to-[#D9A857] text-[#0B1620] font-sans font-bold text-xs sm:text-sm shadow-2xl flex items-center gap-3 border border-white/20">
            <span>🎉</span>
            <span>{toastMessage}</span>
            {onNavigateToJourneys && toastMessage.includes("copied to your planner") && (
              <button
                type="button"
                onClick={onNavigateToJourneys}
                className="ml-2 underline font-extrabold hover:text-black"
              >
                Go to My Journeys →
              </button>
            )}
          </div>
        </div>
      )}

      {/* 1. COMMUNITY HERO */}
      <CommunityHero />

      {/* 2. FEATURED JOURNEY */}
      <FeaturedJourney
        journey={featuredJourney}
        onExplore={(j) => setSelectedJourney(j)}
        onCopy={handleCopyTrip}
        isSaved={savedJourneyIds.has(featuredJourney.id)}
        onToggleSave={handleToggleSave}
      />

      {/* 4. TRAVEL BY MOOD (Signature Feature) */}
      <TravelByMood
        selectedMood={selectedMood}
        onSelectMood={(mood) => setSelectedMood(mood)}
      />

      {/* 6. SEARCH + REFINED FILTERS */}
      <CommunitySearchFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        destinationFilter={destinationFilter}
        onDestinationChange={setDestinationFilter}
        budgetFilter={budgetFilter}
        onBudgetChange={setBudgetFilter}
        styleFilter={styleFilter}
        onStyleChange={setStyleFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalResults={filteredJourneys.length}
      />

      {/* 3. JOURNEYS WORTH TAKING GRID */}
      <JourneyGrid
        journeys={filteredJourneys}
        onExplore={(j) => setSelectedJourney(j)}
        onCopy={handleCopyTrip}
        savedIds={savedJourneyIds}
        onToggleSave={handleToggleSave}
      />

      {/* 5. TRAVELERS LIKE YOU (Passport Creator Discovery) */}
      <TravelersLikeYou
        onSelectTraveler={(traveler) => setSelectedTraveler(traveler)}
      />

      {/* 7 & 8. PUBLIC READ-ONLY ITINERARY MODAL */}
      {selectedJourney && (
        <PublicItineraryModal
          journey={selectedJourney}
          onClose={() => setSelectedJourney(null)}
          onCopy={handleCopyTrip}
          isSaved={savedJourneyIds.has(selectedJourney.id)}
          onToggleSave={handleToggleSave}
          onShare={handleShare}
        />
      )}

      {/* PUBLIC CREATOR PASSPORT MODAL */}
      {selectedTraveler && (
        <TravelerPassportModal
          traveler={selectedTraveler}
          onClose={() => setSelectedTraveler(null)}
          onExploreJourney={(j) => setSelectedJourney(j)}
        />
      )}

    </div>
  );
}
