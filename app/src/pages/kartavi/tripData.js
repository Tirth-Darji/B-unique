/**
 * GlobeTrotter Trip Data Model
 * Structured sample datasets for Ongoing, Upcoming, and Completed journeys.
 */

export const INITIAL_TRIPS = [
  // ONGOING JOURNEY
  {
    id: "trip-ongoing-1",
    name: "Kyoto Expedition",
    destination: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85",
    summary: "Immersion into ancient bamboo groves, traditional teahouses, and UNESCO Zen shrines.",
    description: "A tranquil 6-day journey through historic temples, bamboo groves, and ancient wooden teahouses in Gion during early morning hours.",
    startDate: "18 Aug 2026",
    endDate: "24 Aug 2026",
    status: "ongoing",
    details: {
      duration: "6 Days",
      travelers: "2 Travelers",
      accommodation: "Traditional Machiya Ryokan",
      budget: "₹42,000",
      transport: "JR Express Rail Pass"
    },
    itinerary: [
      { day: "Day 1-2", title: "Arashiyama & Bamboo Groves", description: "Early morning bamboo forest walk and Okochi Sanso Villa tea ceremony." },
      { day: "Day 3-4", title: "Gion Teahouse Quarter", description: "Private Kaiseki dining experience and evening stroll through Hanami-koji." },
      { day: "Day 5-6", title: "Fushimi Inari Shrine Hike", description: "Torii gate summit trail at dawn followed by Kinkaku-ji golden pavilion tour." }
    ]
  },

  // UPCOMING JOURNEYS (Featured Destinations)
  {
    id: "trip-upcoming-1",
    name: "Volcanic Aurora Quest",
    destination: "Reykjavik",
    country: "Iceland",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=85",
    summary: "Chasing northern lights, geothermal springs, volcanic crater lakes, and black sand shores.",
    description: "An epic 8-day Icelandic road trip along the Golden Circle and South Coast, featuring geothermal spa retreats, glacial lagoon ice caves, and night Aurora borealis hunts.",
    startDate: "12 Oct 2026",
    endDate: "20 Oct 2026",
    status: "upcoming",
    details: {
      duration: "8 Days",
      travelers: "2 Travelers",
      accommodation: "Glass Igloo & Boutique Lodge",
      budget: "₹95,000",
      transport: "4x4 SUV Camper"
    },
    itinerary: [
      { day: "Day 1-2", title: "Reykjavik & Blue Lagoon", description: "Geothermal silica spa immersion and Old Harbor seafood dining." },
      { day: "Day 3-5", title: "Golden Circle & Waterfalls", description: "Thingvellir National Park, Gullfoss waterfall, and Haukadalur geysers." },
      { day: "Day 6-8", title: "Vík Black Sand & Northern Lights", description: "Reynisfjara basalt columns, Skógafoss hike, and night Aurora guided safari." }
    ]
  },
  {
    id: "trip-upcoming-2",
    name: "Coastal Cliff Escape",
    destination: "Amalfi Coast",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85",
    summary: "Pastel cliffside villages, limoncello tasting, and scenic Mediterranean boat excursions.",
    description: "7 serene days winding along Italy's spectacular coastline, exploring Positano cliffside villas, high-altitude Ravello gardens, and private catamaran cruises.",
    startDate: "04 Nov 2026",
    endDate: "11 Nov 2026",
    status: "upcoming",
    details: {
      duration: "7 Days",
      travelers: "1 Traveler",
      accommodation: "Cliffside Cliff Villa Hotel",
      budget: "₹78,000",
      transport: "Vintage Convertible Alpha"
    },
    itinerary: [
      { day: "Day 1-2", title: "Positano Cliffside Exploration", description: "Checking into panoramic villa and exploring pastel staircases and beachfront cafes." },
      { day: "Day 3-4", title: "Path of the Gods Hike", description: "Breathtaking mountain ridge trail from Bomerano to Nocelle with sea vistas." },
      { day: "Day 5-7", title: "Capri Island & Blue Grotto", description: "Full-day boat excursion around Capri island caves and Villa Cimbrone gardens." }
    ]
  },
  {
    id: "trip-upcoming-3",
    name: "Aegean Sunset Retreat",
    destination: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85",
    summary: "Whitewashed Cycladic homes, blue domes, caldera sunsets, and ancient wine tasting.",
    description: "5 days immersed in the Aegean sea breeze, watching world-renowned sunsets in Oia, sailing around volcanic hot springs, and visiting cliffside vineyards.",
    startDate: "15 Dec 2026",
    endDate: "20 Dec 2026",
    status: "upcoming",
    details: {
      duration: "5 Days",
      travelers: "2 Travelers",
      accommodation: "Caldera Cave Suite",
      budget: "₹64,000",
      transport: "Private Yacht & Scooter"
    },
    itinerary: [
      { day: "Day 1-2", title: "Oia Sunsets & Cave Suites", description: "Golden hour photowalk in Oia and private heated infinity pool relaxation." },
      { day: "Day 3-4", title: "Caldera Catamaran Sail", description: "Snorkeling at Red Beach, volcanic hot springs swim, and grilled seafood on deck." },
      { day: "Day 5", title: "Akrotiri Ruins & Vineyard Tasting", description: "Ancient Minoan bronze age ruins and Assyrtiko wine tasting at Santo Wines." }
    ]
  },
  {
    id: "trip-upcoming-4",
    name: "Sunlit Cobblestones",
    destination: "Lisbon",
    country: "Portugal",
    image: "https://images.unsplash.com/photo-1509803874385-db7c23652552?auto=format&fit=crop&w=1200&q=85",
    summary: "Yellow vintage trams, hilltop miradouros, pastel pastel de nata bakeries, and Fado nights.",
    description: "6 vibrant days walking the historic neighborhoods of Alfama and Bairro Alto, savoring fresh pasteis de nata, and visiting the fairy-tale castles of Sintra.",
    startDate: "10 Jan 2027",
    endDate: "16 Jan 2027",
    status: "upcoming",
    details: {
      duration: "6 Days",
      travelers: "2 Travelers",
      accommodation: "Heritage Boutique Apartment",
      budget: "₹58,000",
      transport: "Tram 28 Pass & Walking"
    },
    itinerary: [
      { day: "Day 1-2", title: "Alfama Alleyways & Tram 28", description: "Historic tram rides and evening acoustic Fado performance at local tavern." },
      { day: "Day 3-4", title: "Belém & Monastery", description: "Pastéis de Belém bakery visit and Jerónimos Monastery maritime architecture." },
      { day: "Day 5-6", title: "Sintra Romantic Palaces", description: "Day trip to Pena Palace, Quinta da Regaleira initiation well, and Cabo da Roca." }
    ]
  },

  // COMPLETED JOURNEYS
  {
    id: "trip-completed-1",
    name: "Glacier Rail Odyssey",
    destination: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85",
    summary: "Alpine valley scenic rail routes, snow-capped Matterhorn vistas, and quiet mountain chalets.",
    description: "9 days aboard the Glacier Express train crossing snow-covered mountain passes, hiking alpine trails in Grindelwald, and admiring Zermatt peak views.",
    startDate: "10 Jan 2026",
    endDate: "19 Jan 2026",
    status: "completed",
    details: {
      duration: "9 Days",
      travelers: "2 Travelers",
      accommodation: "Zermatt Alpine Chalet",
      budget: "₹1,20,000",
      transport: "Swiss Travel Pass"
    },
    itinerary: [
      { day: "Day 1-3", title: "Glacier Express to Zermatt", description: "Panoramic dome train ride across 291 bridges to Matterhorn view chalet." },
      { day: "Day 4-6", title: "Grindelwald & Jungfraujoch", description: "High altitude train ride to the top of Europe and cliff walk." },
      { day: "Day 7-9", title: "Lake Lucerne Cruise", description: "Paddlesteamer cruise on Lake Lucerne and Mount Pilatus cable car descent." }
    ]
  },
  {
    id: "trip-completed-2",
    name: "Bohemian Seine Promenade",
    destination: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    summary: "Art galleries at the Louvre, quiet Seine river strolls, sidewalk bistros, and Montmartre walks.",
    description: "5 classic days visiting iconic museums, sipping espresso at sidewalk bistros, taking evening Seine boat rides, and exploring Montmartre artist alleys.",
    startDate: "14 Feb 2026",
    endDate: "19 Feb 2026",
    status: "completed",
    details: {
      duration: "5 Days",
      travelers: "1 Traveler",
      accommodation: "Left Bank Art Hotel",
      budget: "₹68,000",
      transport: "Paris Métro & Walking"
    },
    itinerary: [
      { day: "Day 1-2", title: "Louvre & Palais Royal", description: "Private guided museum tour and stroll through Tuileries gardens." },
      { day: "Day 3-5", title: "Montmartre & Eiffel Twilight", description: "Sacre-Cœur Basilica view, painter's square, and Eiffel Tower light spectacle." }
    ]
  },
  {
    id: "trip-completed-3",
    name: "Inca Trail Sanctuary",
    destination: "Cusco & Machu Picchu",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=85",
    summary: "Sacred Valley exploration, high altitude Inca trails, and historic stone architecture.",
    description: "10 high-altitude days trekking through Andean mountain passes, exploring Sacred Valley craft markets, and sunrise arrival at Machu Picchu Citadel.",
    startDate: "05 Mar 2026",
    endDate: "15 Mar 2026",
    status: "completed",
    details: {
      duration: "10 Days",
      travelers: "2 Travelers",
      accommodation: "Eco-Lodge Sanctuary",
      budget: "₹88,000",
      transport: "Inca Rail Vistadome"
    },
    itinerary: [
      { day: "Day 1-3", title: "Cusco Altitude Acclimatization", description: "San Pedro market, Qorikancha stone temple, and Peruvian culinary tasting." },
      { day: "Day 4-7", title: "Sacred Valley & Trail Hike", description: "Ollantaytambo fortress and guided mountain trail trek." },
      { day: "Day 8-10", title: "Machu Picchu Citadel Sunrise", description: "Early morning Sun Gate entrance to Machu Picchu lost city." }
    ]
  }
];

export function getTripsByStatus(trips, status) {
  return trips.filter((trip) => trip.status === status);
}

export const SECTION_METADATA = {
  ongoing: {
    id: "ongoing",
    title: "ONGOING JOURNEYS",
    subtitle: "Expeditions you are exploring right now",
    emptyTitle: "No journeys currently in progress.",
    emptySubtext: "Your active travel itineraries will appear here when you are out exploring the world.",
    emptyAction: "Start a New Journey",
  },
  upcoming: {
    id: "upcoming",
    title: "UPCOMING ADVENTURES",
    subtitle: "Curated itineraries waiting for your arrival",
    emptyTitle: "No upcoming journeys planned yet.",
    emptySubtext: "Discover breathtaking destinations and add your next dream trip.",
    emptyAction: "Explore Destinations",
  },
  completed: {
    id: "completed",
    title: "PAST EXPEDITIONS",
    subtitle: "Memories and archives of places you've conquered",
    emptyTitle: "No completed journeys recorded yet.",
    emptySubtext: "Your explored destinations and past trip logs will appear here.",
    emptyAction: "Log a Past Expedition",
  }
};
