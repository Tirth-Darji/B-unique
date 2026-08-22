import { useState, useMemo } from "react";
import { CITIES_DATA, ACTIVITIES_DATA } from "./discoveryData.js";
import { RingCarousel } from "./components/discovery/RingCarousel.jsx";
import { PreviewPanel } from "./components/discovery/PreviewPanel.jsx";
import { CircleImage } from "./components/discovery/CircleImage.jsx";

/**
 * TravelDiscovery Component
 * Immersive Travel Discovery Screen featuring:
 * - Full-screen sharp European cliff backdrop with dark gradient & vignette
 * - LEFT RING: 8 Cities rotating Clockwise (50% extending beyond left viewport edge)
 * - RIGHT RING: 8 Activities rotating Counter-Clockwise (50% extending beyond right viewport edge)
 * - Counter-rotating items so images and text stay 100% upright at all times
 * - SINGLE LARGE CENTRAL HEADLINE ("Where will you go next?")
 * - Slide-in glassmorphic PreviewPanel on clicking any item
 */
export default function TravelDiscovery({ onNavigateToJourneys, onNavigateToProfile }) {
  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all"); // 'all' | 'cities' | 'activities'
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedActivityType, setSelectedActivityType] = useState("All");

  // Selected Item Modal State
  const [selectedItem, setSelectedItem] = useState(null);
  const [addedItemIds, setAddedItemIds] = useState(new Set());

  // Filter Cities for Left Ring
  const filteredCities = useMemo(() => {
    return CITIES_DATA.filter((city) => {
      const matchesSearch =
        city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.country.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRegion =
        selectedRegion === "All" || city.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, selectedRegion]);

  // Filter Activities for Right Ring
  const filteredActivities = useMemo(() => {
    return ACTIVITIES_DATA.filter((act) => {
      const matchesSearch =
        act.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        act.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        act.country.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        selectedActivityType === "All" || act.category === selectedActivityType.toLowerCase() || act.type === selectedActivityType;

      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedActivityType]);

  // Toggle Added to Trip
  const handleAddToTrip = (item) => {
    setAddedItemIds((prev) => new Set([...prev, item.id]));
  };

  return (
    <div className="relative min-h-[calc(100vh-60px)] w-full bg-[#0B1620] text-slate-100 font-sans overflow-hidden select-none">
      
      {/* 1. SHARP HIGH-RESOLUTION EUROPEAN COASTAL CLIFF BACKDROP */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=80"
          alt="Amalfi Coast Aerial Cliff Town Dusk"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
        />
        {/* DARK GRADIENT OVERLAY (TOP-TO-BOTTOM ~80-90% OPACITY TOWARD BOTTOM) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1620]/50 via-[#0B1620]/75 to-[#0B1620]/95" />
        
        {/* SUBTLE RADIAL VIGNETTE CENTERED ON PAGE */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(11,22,32,0.85)_100%)]" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full min-h-[calc(100vh-60px)] flex flex-col justify-between p-4 sm:p-6 lg:p-8">
        
        {/* TOP BRANDING HEADER */}
        {addedItemIds.size > 0 && (
          <div className="flex items-center justify-end max-w-7xl mx-auto w-full z-30">
            <span className="px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-xs font-bold font-mono flex items-center gap-1.5 shadow-lg backdrop-blur-md">
              <span>✓</span>
              <span>{addedItemIds.size} Added to Journey</span>
            </span>
          </div>
        )}        {/* 2. DUAL HALF-VIEWPORT RING CAROUSELS (50% EXTENDED BEYOND VIEWPORT EDGES) */}
        <div className="relative w-full max-w-[100vw] mx-auto flex-1 flex items-center justify-center my-auto min-h-[640px]">
          
          {/* LEFT RING — ACTIVITIES ORBIT (50% OUTSIDE LEFT SCREEN EDGE, CCW ROTATION: TOP -> BOTTOM) */}
          {(categoryFilter === "all" || categoryFilter === "activities") && (
            <div className="hidden md:block">
              <RingCarousel
                items={filteredActivities}
                direction="ccw"
                side="left"
                selectedItemId={selectedItem?.id}
                onSelectItem={(item) => setSelectedItem(item)}
              />
            </div>
          )}

          {/* CENTER DISCOVERY PANEL WITH SINGLE HORIZONTAL HEADLINE & SEARCH */}
          <div className="w-full max-w-xl mx-auto text-center space-y-5 z-30 my-auto px-4 py-8 pointer-events-auto">
            
            {/* SINGLE HORIZONTAL LARGE CENTRAL HEADLINE */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-2xl">
                Where will you go next?
              </h1>
              <p className="text-xs sm:text-sm text-[#E9C98A]/90 font-serif italic max-w-md mx-auto leading-relaxed drop-shadow">
                Discover places and experiences worth adding to your journey.
              </p>
            </div>

            {/* GLASSMORPHIC SEARCH INPUT */}
            <div className="relative max-w-md mx-auto">
              <div className="relative flex items-center bg-white/[0.08] hover:bg-white/[0.12] border border-white/20 hover:border-[#E9C98A]/50 rounded-full p-1.5 pl-5 shadow-2xl backdrop-blur-md transition-all focus-within:ring-2 focus-within:ring-[#E9C98A]/40">
                <svg
                  className="w-4 h-4 text-[#E9C98A] shrink-0 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search destinations or activities..."
                  className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-slate-300/60 focus:outline-none font-sans"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="px-2 text-xs text-slate-300 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* CATEGORY FILTER TOGGLES */}
            <div className="inline-flex items-center gap-1 p-1 bg-[#0B1620]/80 border border-white/10 rounded-full backdrop-blur-md shadow-lg text-xs font-mono">
              <button
                type="button"
                onClick={() => setCategoryFilter("all")}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  categoryFilter === "all"
                    ? "bg-gradient-to-r from-[#E9C98A] to-[#D9A857] text-[#0B1620] font-bold shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                All Orbits
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter("cities")}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  categoryFilter === "cities"
                    ? "bg-gradient-to-r from-[#E9C98A] to-[#D9A857] text-[#0B1620] font-bold shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Cities ({filteredCities.length})
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter("activities")}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  categoryFilter === "activities"
                    ? "bg-gradient-to-r from-[#E9C98A] to-[#D9A857] text-[#0B1620] font-bold shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Activities ({filteredActivities.length})
              </button>
            </div>

            {/* SUB-FILTER PILLS */}
            <div className="space-y-2 pt-1 text-xs">
              {(categoryFilter === "all" || categoryFilter === "cities") && (
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-mono text-[#7FB3A3] uppercase mr-1">Region:</span>
                  {["All", "Europe", "Asia", "Middle East", "Africa"].map((region) => (
                    <button
                      key={region}
                      type="button"
                      onClick={() => setSelectedRegion(region)}
                      className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all ${
                        selectedRegion === region
                          ? "bg-[#E9C98A]/20 border border-[#E9C98A] text-[#E9C98A] font-bold"
                          : "bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              )}

              {(categoryFilter === "all" || categoryFilter === "activities") && (
                <div className="flex items-center justify-center gap-1.5 flex-wrap pt-0.5">
                  <span className="text-[10px] font-mono text-[#7FB3A3] uppercase mr-1">Type:</span>
                  {["All", "Adventure", "Nature", "Sightseeing", "Food"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedActivityType(type)}
                      className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all ${
                        selectedActivityType === type
                          ? "bg-[#7FB3A3]/20 border border-[#7FB3A3] text-[#7FB3A3] font-bold"
                          : "bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT RING — CITIES ORBIT (50% OUTSIDE RIGHT SCREEN EDGE, CW ROTATION: BOTTOM -> TOP) */}
          {(categoryFilter === "all" || categoryFilter === "cities") && (
            <div className="hidden md:block">
              <RingCarousel
                items={filteredCities}
                direction="cw"
                side="right"
                selectedItemId={selectedItem?.id}
                onSelectItem={(item) => setSelectedItem(item)}
              />
            </div>
          )}
        </div>

        {/* MOBILE RESPONSIVE CAROUSEL SLIDERS (Visible on small screens) */}
        <div className="flex md:hidden flex-col gap-5 my-4 z-30">
          {(categoryFilter === "all" || categoryFilter === "cities") && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-[#E9C98A]">
                ✦ Cities ({filteredCities.length})
              </h3>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                {filteredCities.map((city) => (
                  <div
                    key={city.id}
                    onClick={() => setSelectedItem(city)}
                    className="shrink-0 w-32 text-center cursor-pointer group"
                  >
                    <div className="w-28 h-28 rounded-full overflow-hidden border border-white/20 group-hover:border-[#E9C98A] mx-auto shadow-lg">
                      <img src={city.image} alt={city.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs font-serif font-bold text-white block mt-1.5 group-hover:text-[#E9C98A]">
                      {city.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(categoryFilter === "all" || categoryFilter === "activities") && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-[#7FB3A3]">
                ✦ Activities ({filteredActivities.length})
              </h3>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                {filteredActivities.map((act) => (
                  <div
                    key={act.id}
                    onClick={() => setSelectedItem(act)}
                    className="shrink-0 w-32 text-center cursor-pointer group"
                  >
                    <div className="w-28 h-28 rounded-full overflow-hidden border border-white/20 group-hover:border-[#7FB3A3] mx-auto shadow-lg">
                      <img src={act.image} alt={act.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs font-serif font-bold text-white block mt-1.5 group-hover:text-[#7FB3A3]">
                      {act.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM HELPER TEXT LINE */}
        <div className="text-center text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400/80 pt-3 border-t border-white/10 z-30">
          HOVER OR TAP ANY ORBITAL CARD TO OPEN A TRAVEL PREVIEW & ADD IT TO YOUR TRIP
        </div>
      </div>

      {/* SLIDE-IN PREVIEW PANEL */}
      {selectedItem && (
        <PreviewPanel
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToTrip={handleAddToTrip}
          isAdded={addedItemIds.has(selectedItem.id)}
        />
      )}
    </div>
  );
}
