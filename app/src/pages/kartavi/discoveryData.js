/**
 * GlobeTrotter Discovery Dataset
 * Exactly 8 Cities and 8 Activities for the dual 8-node ring carousels.
 */

export const ORBIT_ITEMS = [
  // 8 CITIES (LEFT RING)
  {
    id: "city-santorini",
    itemType: "city",
    name: "Santorini",
    country: "Greece",
    region: "Europe",
    category: "nature",
    image: "/assets/cities/santorini.png",
    description: "Sun-bleached whitewashed villas, blue-domed churches, and volcanic caldera cliffs overlooking the Aegean Sea.",
    bestTime: "May – Oct",
    typicalLength: "3–5 Days",
    rating: 4.9,
    reviewsCount: "2,840 reviews",
    costIndex: "$$$$",
    placesToVisit: ["Oia Sunset Viewpoint", "Red Sand Beach", "Akrotiri Ruins"],
  },
  {
    id: "city-tokyo",
    itemType: "city",
    name: "Tokyo",
    country: "Japan",
    region: "Asia",
    category: "culture",
    image: "/assets/cities/tokyo.png",
    description: "A neon-lit metropolis blending futuristic skyscraper landscapes with ancient Shinto shrines and historic teahouses.",
    bestTime: "Mar – May",
    typicalLength: "5–7 Days",
    rating: 4.9,
    reviewsCount: "4,120 reviews",
    costIndex: "$$$",
    placesToVisit: ["Senso-ji Temple", "Shibuya Crossing", "Tokyo Skytree"],
  },
  {
    id: "city-istanbul",
    itemType: "city",
    name: "Istanbul",
    country: "Turkey",
    region: "Europe",
    category: "culture",
    image: "/assets/cities/istanbul.png",
    description: "Where East meets West across the Bosphorus Strait, rich with Ottoman palaces, minarets, and aromatic spice bazaars.",
    bestTime: "Apr – May / Sep – Nov",
    typicalLength: "4–6 Days",
    rating: 4.8,
    reviewsCount: "1,950 reviews",
    costIndex: "$$",
    placesToVisit: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar"],
  },
  {
    id: "city-paris",
    itemType: "city",
    name: "Paris",
    country: "France",
    region: "Europe",
    category: "sightseeing",
    image: "/assets/cities/paris.png",
    description: "The City of Light, famous for its grand boulevards, iconic art museums, high fashion, and cafe culture.",
    bestTime: "Apr – Jun / Sep – Oct",
    typicalLength: "4–5 Days",
    rating: 4.8,
    reviewsCount: "3,500 reviews",
    costIndex: "$$$$",
    placesToVisit: ["Eiffel Tower", "Louvre Museum", "Montmartre"],
  },
  {
    id: "city-bali",
    itemType: "city",
    name: "Bali",
    country: "Indonesia",
    region: "Asia",
    category: "nature",
    image: "/assets/cities/bali.png",
    description: "An island of emerald rice terraces, sacred volcanic temples, pristine surf breaks, and holistic wellness retreats.",
    bestTime: "Apr – Oct",
    typicalLength: "6–10 Days",
    rating: 4.9,
    reviewsCount: "3,200 reviews",
    costIndex: "$$",
    placesToVisit: ["Uluwatu Temple", "Tegallalang Rice Terraces", "Canggu Beaches"],
  },
  {
    id: "city-rome",
    itemType: "city",
    name: "Rome",
    country: "Italy",
    region: "Europe",
    category: "sightseeing",
    image: "/assets/cities/rome.png",
    description: "An open-air museum of ancient Roman ruins, Baroque fountains, vibrant piazzas, and mouthwatering pasta.",
    bestTime: "Apr – May / Sep – Oct",
    typicalLength: "4–5 Days",
    rating: 4.8,
    reviewsCount: "2,900 reviews",
    costIndex: "$$$",
    placesToVisit: ["The Colosseum", "Vatican Museums", "Trevi Fountain"],
  },
  {
    id: "city-marrakech",
    itemType: "city",
    name: "Marrakech",
    country: "Morocco",
    region: "Africa",
    category: "culture",
    image: "/assets/cities/marrakech.png",
    description: "An enchanting oasis of terracotta riads, vibrant spice markets, tranquil courtyards, and bustling medina alleys.",
    bestTime: "Mar – May / Sep – Nov",
    typicalLength: "3–5 Days",
    rating: 4.8,
    reviewsCount: "1,750 reviews",
    costIndex: "$$",
    placesToVisit: ["Jemaa el-Fnaa", "Jardin Majorelle", "Bahia Palace"],
  },
  {
    id: "city-kyoto",
    itemType: "city",
    name: "Kyoto",
    country: "Japan",
    region: "Asia",
    category: "culture",
    image: "/assets/cities/kyoto.png",
    description: "The cultural heart of Japan, home to thousands of classical Buddhist temples, bamboo groves, and traditional geisha districts.",
    bestTime: "Mar – May / Oct – Nov",
    typicalLength: "3–5 Days",
    rating: 4.9,
    reviewsCount: "2,400 reviews",
    costIndex: "$$$",
    placesToVisit: ["Fushimi Inari Shrine", "Arashiyama Bamboo Grove", "Kinkaku-ji (Golden Pavilion)"],
  },

  // 8 ACTIVITIES (RIGHT RING)
  {
    id: "act-kayaking",
    itemType: "activity",
    name: "Sea Kayaking",
    country: "Thailand & Vietnam",
    region: "Asia",
    category: "adventure",
    image: "/assets/activities/kayaking.png",
    description: "Paddle through turquoise sea caves, limestone Karst towers, and hidden lagoons at your own peaceful pace.",
    bestTime: "Nov – Apr",
    typicalLength: "2–3 Hours",
    rating: 4.7,
    reviewsCount: "860 reviews",
    estimatedCost: "₹3,500",
    thingsToKeepInMind: [
      "Life jackets provided & mandatory.",
      "Waterproof dry bags supplied for valuables.",
      "Suitable for beginners with moderate arm stamina."
    ]
  },
  {
    id: "act-safari",
    itemType: "activity",
    name: "Wildlife Safari",
    country: "Kenya & Tanzania",
    region: "Africa",
    category: "nature",
    image: "/assets/activities/safari.png",
    description: "Embark on open-top 4x4 game drives to spot lions, elephants, leopards, and savanna wildlife in their natural habitat.",
    bestTime: "Jul – Oct",
    typicalLength: "Full Day",
    rating: 5.0,
    reviewsCount: "1,450 reviews",
    estimatedCost: "₹18,000",
    thingsToKeepInMind: [
      "Early morning starts yield highest animal activity.",
      "Wear neutral khaki/earth tone clothing.",
      "Binoculars and camera telephoto lens recommended."
    ]
  },
  {
    id: "act-paragliding",
    itemType: "activity",
    name: "Tandem Paragliding",
    country: "Switzerland & Nepal",
    region: "Europe",
    category: "adventure",
    image: "/assets/activities/paragliding.png",
    description: "Soar effortlessly over alpine glaciers, emerald valleys, and lakes alongside a certified tandem flight pilot.",
    bestTime: "May – Sep",
    typicalLength: "1.5 Hours",
    rating: 4.9,
    reviewsCount: "920 reviews",
    estimatedCost: "₹12,500",
    thingsToKeepInMind: [
      "100% wind & weather dependent.",
      "Wear warm windbreaker jacket and closed shoes.",
      "Weight limits between 30kg and 100kg apply."
    ]
  },
  {
    id: "act-citywalk",
    itemType: "activity",
    name: "City Walking Tour",
    country: "Italy & Czechia",
    region: "Europe",
    category: "sightseeing",
    image: "/assets/activities/citywalk.png",
    description: "Uncover hidden cobblestone alleys, ancient fountain squares, local myths, and secret food spots on foot with a local historian.",
    bestTime: "Year-round",
    typicalLength: "2.5 Hours",
    rating: 4.8,
    reviewsCount: "1,100 reviews",
    estimatedCost: "₹2,200",
    thingsToKeepInMind: [
      "Covers 3–4 km of casual walking.",
      "Wireless audio headsets provided for crisp guide audio.",
      "Comfortable walking sneakers essential."
    ]
  },
  {
    id: "act-scuba",
    itemType: "activity",
    name: "Scuba Diving",
    country: "Maldives & Australia",
    region: "Asia",
    category: "adventure",
    image: "/assets/activities/scuba.png",
    description: "Explore vibrant coral reefs, underwater shipwrecks, and exotic marine ecosystems with certified dive masters.",
    bestTime: "Nov – Apr",
    typicalLength: "3 Hours",
    rating: 4.9,
    reviewsCount: "1,600 reviews",
    estimatedCost: "₹12,000",
    thingsToKeepInMind: [
      "Requires basic swimming ability & comfortable breathing underwater.",
      "Deep-water activity; certified dive master guidance provided."
    ]
  },
  {
    id: "act-foodtour",
    itemType: "activity",
    name: "Food Market Tour",
    country: "Japan & France",
    region: "Asia",
    category: "food",
    image: "/assets/activities/foodtour.png",
    description: "Taste authentic street delicacies, regional specialties, and secret neighborhood eateries with a local culinary expert.",
    bestTime: "Year-round",
    typicalLength: "3 Hours",
    rating: 4.9,
    reviewsCount: "2,100 reviews",
    estimatedCost: "₹4,500",
    thingsToKeepInMind: [
      "Inform guide in advance about dietary restrictions or allergies.",
      "Wear comfortable walking shoes."
    ]
  },
  {
    id: "act-ballooning",
    itemType: "activity",
    name: "Hot Air Ballooning",
    country: "Turkey & Egypt",
    region: "Europe",
    category: "adventure",
    image: "/assets/activities/ballooning.png",
    description: "Float at sunrise over volcanic fairy chimneys, dramatic valleys, and ancient cave dwellings.",
    bestTime: "Apr – Nov",
    typicalLength: "1 Hour Flight",
    rating: 5.0,
    reviewsCount: "2,800 reviews",
    estimatedCost: "₹16,500",
    thingsToKeepInMind: [
      "Early morning pre-dawn pickup.",
      "Subject to wind & weather clearance by aviation authorities."
    ]
  },
  {
    id: "act-glacier",
    itemType: "activity",
    name: "Glacier Trekking",
    country: "Iceland & Norway",
    region: "Europe",
    category: "nature",
    image: "/assets/activities/glacier.png",
    description: "Hike across ancient blue ice formations, crevasse fields, and ice caves equipped with crampons and ice axes.",
    bestTime: "May – Sep",
    typicalLength: "4 Hours",
    rating: 4.9,
    reviewsCount: "1,150 reviews",
    estimatedCost: "₹11,000",
    thingsToKeepInMind: [
      "Safety gear (crampons, helmet, ice axe) provided.",
      "Sturdy high-ankle hiking boots mandatory."
    ]
  }
];

export const CATEGORY_COLORS = {
  nature: {
    badge: "bg-emerald-950/80 text-emerald-300 border-emerald-500/40",
    pill: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    dot: "bg-emerald-400",
    accent: "#6EE7B7"
  },
  adventure: {
    badge: "bg-amber-950/80 text-amber-300 border-amber-500/40",
    pill: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    dot: "bg-amber-400",
    accent: "#FCD34D"
  },
  sightseeing: {
    badge: "bg-sky-950/80 text-sky-300 border-sky-500/40",
    pill: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    dot: "bg-sky-400",
    accent: "#7DD3FC"
  },
  culture: {
    badge: "bg-purple-950/80 text-purple-300 border-purple-500/40",
    pill: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    dot: "bg-purple-400",
    accent: "#C084FC"
  },
  food: {
    badge: "bg-rose-950/80 text-rose-300 border-rose-500/40",
    pill: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    dot: "bg-rose-400",
    accent: "#FDA4AF"
  }
};

export const CITIES_DATA = ORBIT_ITEMS.filter((i) => i.itemType === "city");
export const ACTIVITIES_DATA = ORBIT_ITEMS.filter((i) => i.itemType === "activity");
