/**
 * GlobeTrotter Itinerary View Dataset
 * Structured 5-Day Rome Getaway Itinerary for Detail View (Reference Image 1)
 * Scoped data model placed inside app/src/pages/tirth/data/
 */

export const ROME_ITINERARY_DATA = {
  id: "rome-5-day-trip",
  title: "Rome Getaway — 5 Days Trip",
  subtitle: "A five-day escape through Rome’s timeless landmarks, local cuisine, and hidden corners.",
  country: "Italy",
  dateRange: "12 Oct 2026 – 16 Oct 2026",
  travelers: "2 Adults",
  estimatedBudget: "₹1,20,000 estimated",
  totalDays: 5,
  days: [
    {
      dayNumber: 1,
      date: "October 12",
      title: "Arrival & Historic Center Exploration",
      estimatedTravelTime: "40–50 minutes",
      travelMode: "Car Route",
      trafficStatus: "Moderate traffic — this is currently the most practical route.",
      activities: [
        {
          id: "act-1-1",
          stopNumber: 1,
          time: "10:30 AM",
          title: "Fiumicino Airport Arrival",
          location: "Leonardo da Vinci International Airport (FCO)",
          category: "flight",
          priceLabel: "Included in flight ticket",
          actionLabel: "View Booking",
          image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=400&q=80",
          coords: { x: 18, y: 78 }
        },
        {
          id: "act-1-2",
          stopNumber: 2,
          time: "12:30 PM",
          title: "Hotel Check-in & Refresh",
          location: "The Inn at the Spanish Steps, Via dei Condotti",
          category: "hotel",
          priceLabel: "Confirmed Booking",
          actionLabel: "View Hotel",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
          coords: { x: 42, y: 48 }
        },
        {
          id: "act-1-3",
          stopNumber: 3,
          time: "02:00 PM",
          title: "Lunch at Trattoria der Pallaro",
          location: "Largo del Pallaro 15, Campo de' Fiori",
          category: "dining",
          priceLabel: "₹2,400 for two",
          actionLabel: "Reserve Table",
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80",
          coords: { x: 48, y: 55 }
        },
        {
          id: "act-1-4",
          stopNumber: 4,
          time: "04:30 PM",
          title: "Colosseum & Roman Forum Twilight Tour",
          location: "Piazza del Colosseo 1, Rome",
          category: "sightseeing",
          priceLabel: "Priority Entry Ticket",
          actionLabel: "Book Ticket",
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80",
          coords: { x: 68, y: 62 }
        }
      ]
    },
    {
      dayNumber: 2,
      date: "October 13",
      title: "Vatican Treasures & Trastevere Evenings",
      estimatedTravelTime: "25–35 minutes",
      travelMode: "Walking & Taxi",
      trafficStatus: "Light pedestrian traffic around Saint Peter's Square.",
      activities: [
        {
          id: "act-2-1",
          stopNumber: 1,
          time: "08:30 AM",
          title: "Vatican Museums & Sistine Chapel",
          location: "Viale Vaticano, 00165 Roma RM",
          category: "museum",
          priceLabel: "Skip-the-Line Pass",
          actionLabel: "View Pass",
          image: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=400&q=80",
          coords: { x: 28, y: 35 }
        },
        {
          id: "act-2-2",
          stopNumber: 2,
          time: "11:45 AM",
          title: "St. Peter's Basilica Dome Climb",
          location: "Piazza San Pietro, 00120 Città del Vaticano",
          category: "sightseeing",
          priceLabel: "Elevator + Dome Ticket",
          actionLabel: "View Ticket",
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=400&q=80",
          coords: { x: 32, y: 38 }
        },
        {
          id: "act-2-3",
          stopNumber: 3,
          time: "01:30 PM",
          title: "Artisanal Gelato at Giolitti",
          location: "Via Uffici del Vicario 40",
          category: "dining",
          priceLabel: "₹600 for two",
          actionLabel: "View Menu",
          image: "https://images.unsplash.com/photo-1560008511-11c63416e52d?auto=format&fit=crop&w=400&q=80",
          coords: { x: 50, y: 44 }
        },
        {
          id: "act-2-4",
          stopNumber: 4,
          time: "07:00 PM",
          title: "Trastevere Cobblestone Food Walk",
          location: "Piazza di Santa Maria in Trastevere",
          category: "dining",
          priceLabel: "Guided Tasting Tour",
          actionLabel: "View Details",
          image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=400&q=80",
          coords: { x: 42, y: 70 }
        }
      ]
    },
    {
      dayNumber: 3,
      date: "October 14",
      title: "Baroque Fountains & Pantheon Walks",
      estimatedTravelTime: "20–30 minutes",
      travelMode: "Walking Route",
      trafficStatus: "Scenic walking route through pedestrian squares.",
      activities: [
        {
          id: "act-3-1",
          stopNumber: 1,
          time: "09:00 AM",
          title: "Trevi Fountain Early Morning Coin Toss",
          location: "Piazza di Trevi, 00187 Roma RM",
          category: "sightseeing",
          priceLabel: "Free Access",
          actionLabel: "View Map",
          image: "https://images.unsplash.com/photo-1525874684015-5837e4437750?auto=format&fit=crop&w=400&q=80",
          coords: { x: 58, y: 46 }
        },
        {
          id: "act-3-2",
          stopNumber: 2,
          time: "11:00 AM",
          title: "Pantheon Oculum Guided Visit",
          location: "Piazza della Rotonda, 00186 Roma RM",
          category: "sightseeing",
          priceLabel: "Entry Ticket Included",
          actionLabel: "View Ticket",
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80",
          coords: { x: 50, y: 50 }
        },
        {
          id: "act-3-3",
          stopNumber: 3,
          time: "03:30 PM",
          title: "Piazza Navona Artists & Four Rivers",
          location: "Piazza Navona, 00186 Roma RM",
          category: "culture",
          priceLabel: "Open Square",
          actionLabel: "View Details",
          image: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=400&q=80",
          coords: { x: 45, y: 52 }
        }
      ]
    },
    {
      dayNumber: 4,
      date: "October 15",
      title: "Borghese Gardens & Villa Art",
      estimatedTravelTime: "30–40 minutes",
      travelMode: "Taxi & Walking",
      trafficStatus: "Smooth drive along Villa Borghese perimeter.",
      activities: [
        {
          id: "act-4-1",
          stopNumber: 1,
          time: "09:30 AM",
          title: "Galleria Borghese Masterpieces",
          location: "Piazzale Scipione Borghese 5",
          category: "museum",
          priceLabel: "Reserved Reservation",
          actionLabel: "View Booking",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
          coords: { x: 62, y: 25 }
        },
        {
          id: "act-4-2",
          stopNumber: 2,
          time: "01:00 PM",
          title: "Borghese Lake Rowing Boat Hire",
          location: "Laghetto di Villa Borghese",
          category: "activity",
          priceLabel: "₹1,200 per boat",
          actionLabel: "Rent Boat",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
          coords: { x: 60, y: 28 }
        },
        {
          id: "act-4-3",
          stopNumber: 3,
          time: "06:30 PM",
          title: "Pincio Terrace Sunset View",
          location: "Viale Gabriele D'Annunzio",
          category: "sunset",
          priceLabel: "Panoramic Viewpoint",
          actionLabel: "View Location",
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=400&q=80",
          coords: { x: 52, y: 32 }
        }
      ]
    },
    {
      dayNumber: 5,
      date: "October 16",
      title: "Appian Way & Departure",
      estimatedTravelTime: "45–60 minutes",
      travelMode: "Car Route to Airport",
      trafficStatus: "Moderate midday airport express route.",
      activities: [
        {
          id: "act-5-1",
          stopNumber: 1,
          time: "10:00 AM",
          title: "Appian Way E-Bike Historic Trail",
          location: "Via Appia Antica 42",
          category: "activity",
          priceLabel: "E-Bike Rental Included",
          actionLabel: "View Rental",
          image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=400&q=80",
          coords: { x: 75, y: 80 }
        },
        {
          id: "act-5-2",
          stopNumber: 2,
          time: "03:00 PM",
          title: "Airport Transfer & Departure",
          location: "Leonardo da Vinci International Airport (FCO)",
          category: "flight",
          priceLabel: "Private Taxi Transfer",
          actionLabel: "View Booking",
          image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=400&q=80",
          coords: { x: 18, y: 78 }
        }
      ]
    }
  ]
};
