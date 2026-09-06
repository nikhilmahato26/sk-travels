export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  iconName: "Train" | "Plane" | "Car" | "Moon" | "FileText" | "Banknote";
  badge: string;
  highlights: string[];
}

export interface VehicleCategory {
  id: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  suitability: string;
  badge: string;
}

export interface TrustFactor {
  title: string;
  description: string;
  iconName: string;
}

export const BUSINESS_INFO = {
  name: "Siliguri Tour and Travels",
  shortName: "Siliguri Tour & Travels",
  logo: "/images/logo.png",
  tagline: "Your Trusted Travel & Ticket Booking Partner",
  subTagline: "Train Tickets • Flight Tickets • Four-Wheeler Travel Services",
  locationBadge: "Pupri, Near Krishna Complex, Station Road",
  address: "Pupri, Near Krishna Complex, Station Road, Bihar, India",
  googleMapsQuery: "Pupri Station Road Near Krishna Complex Bihar India",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.6276228308876!2d85.74838637599042!3d26.500257576891963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed09ea91a7c361%3A0x7d6f51eb9dc74824!2sJanakpur%20Road%20Railway%20Station%20(Pupri)!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Train Tickets", href: "#train-tickets" },
  { label: "Flight Tickets", href: "#flight-tickets" },
  { label: "Four-Wheeler", href: "#four-wheeler" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "train-tickets",
    title: "Train Ticket Booking",
    shortDesc: "Easy and convenient train ticket booking assistance.",
    longDesc: "Convenient and prompt assistance for train ticket booking and travel planning across Indian Railways routes. We assist with route selection, reservation queries, and scheduling support.",
    image: "/images/service_train.jpg",
    iconName: "Train",
    badge: "Convenient Assistance",
    highlights: ["Indian Railways booking assistance", "Route & schedule guidance", "Prompt reservation support"],
  },
  {
    id: "flight-tickets",
    title: "Flight Ticket Booking",
    shortDesc: "Flight booking assistance for your travel needs.",
    longDesc: "Flight ticket booking assistance for domestic and other available travel requirements. Plan your flights smoothly with dedicated help for your preferred dates and destinations.",
    image: "/images/service_flight.jpg",
    iconName: "Plane",
    badge: "Domestic & Available Routes",
    highlights: ["Domestic flight bookings", "Flexible itinerary assistance", "Quick enquiry support"],
  },
  {
    id: "four-wheeler",
    title: "Four-Wheeler Services",
    shortDesc: "Different types of four-wheelers available for travel requirements.",
    longDesc: "We provide different types of four-wheelers tailored to customer travel requirements, whether for local visits, outstation travel, family events, or round-trip journeys.",
    image: "/images/service_four_wheeler.jpg",
    iconName: "Car",
    badge: "Multiple Vehicle Options",
    highlights: ["Different vehicle categories", "Local & outstation travel", "Customer-focused service"],
  },
  {
    id: "haj-umrah",
    title: "Haj & Umrah",
    shortDesc: "Complete Haj and Umrah packages with dedicated guidance.",
    longDesc: "We provide comprehensive Haj and Umrah travel packages including visa processing, flight bookings, and accommodation assistance for a seamless spiritual journey.",
    image: "/images/service_umrah.jpg",
    iconName: "Moon",
    badge: "Spiritual Journey",
    highlights: ["Complete travel packages", "Visa & accommodation assistance", "Dedicated guidance"],
  },
  {
    id: "visa-services",
    title: "Visa Services",
    shortDesc: "Reliable visa application and processing assistance.",
    longDesc: "Expert assistance for tourist, business, and specialized visa applications for various countries. We simplify the documentation and application process.",
    image: "/images/service_visa.jpg",
    iconName: "FileText",
    badge: "Global Access",
    highlights: ["Tourist & Business Visas", "Documentation support", "Prompt processing"],
  },
  {
    id: "money-exchange",
    title: "Money Exchange",
    shortDesc: "Secure and swift foreign currency exchange services.",
    longDesc: "We offer secure, swift, and reliable foreign currency exchange services at competitive rates for your international travel and business needs.",
    image: "/images/service_money.jpg",
    iconName: "Banknote",
    badge: "Best Rates",
    highlights: ["Competitive exchange rates", "Secure transactions", "Multiple currencies supported"],
  },
];

export const VEHICLE_CATEGORIES: VehicleCategory[] = [
  {
    id: "sedan",
    category: "Sedan",
    tagline: "Comfortable Intercity & City Rides",
    description: "Well-maintained sedan four-wheelers providing smooth and comfortable passenger travel for personal, business, or station transfers.",
    image: "/images/vehicle_sedan.jpg",
    suitability: "Ideal for individual and couple journeys",
    badge: "Popular Choice",
  },
  {
    id: "suv",
    category: "SUV",
    tagline: "Spacious Travel with Confident Road Presence",
    description: "Rugged and roomy SUV vehicles offering extra luggage room and comfortable seating for long distance routes and countryside travel.",
    image: "/images/vehicle_suv.jpg",
    suitability: "Ideal for family outings & outstation travel",
    badge: "Versatile & Sturdy",
  },
  {
    id: "premium-car",
    category: "Premium Car",
    tagline: "Executive Comfort & Elegant Travel",
    description: "Premium class four-wheelers tailored for special occasions, wedding transport, corporate requirements, and VIP guest travel.",
    image: "/images/vehicle_premium.jpg",
    suitability: "Ideal for special events & executive travel",
    badge: "Premium Comfort",
  },
  {
    id: "family-car",
    category: "Family Car",
    tagline: "Dedicated Space for Whole Family Travel",
    description: "Multi-utility spacious vehicles designed to accommodate family travel comfortably with dedicated boot space for travel luggage.",
    image: "/images/vehicle_family.jpg",
    suitability: "Ideal for family journeys & holiday trips",
    badge: "Family Favorite",
  },
  {
    id: "large-travel-vehicle",
    category: "Large Travel Vehicle",
    tagline: "Group Travel & Outstation Excursions",
    description: "Spacious passenger travel vehicle suited for group journeys, pilgrimage tours, marriage parties, and team outstation trips.",
    image: "/images/vehicle_large.jpg",
    suitability: "Ideal for large groups & tour parties",
    badge: "Group Travel",
  },
];

export const WHY_CHOOSE_US_FACTORS: TrustFactor[] = [
  {
    title: "Easy Ticket Booking",
    description: "Simple, streamlined process for securing your train and flight tickets without hassle.",
    iconName: "CheckCircle2",
  },
  {
    title: "Train Ticket Assistance",
    description: "Dedicated guidance with station routes, seat classes, and travel timing assistance.",
    iconName: "Train",
  },
  {
    title: "Flight Ticket Assistance",
    description: "Assistance with domestic flights and travel itineraries matching your convenience.",
    iconName: "Plane",
  },
  {
    title: "Multiple Travel Options",
    description: "Choose seamlessly between train routes, airline flights, or four-wheeler roadway services.",
    iconName: "Layers",
  },
  {
    title: "Four-Wheeler Services",
    description: "Different types of vehicles available to match your specific group size and travel plan.",
    iconName: "Car",
  },
  {
    title: "Convenient Location",
    description: "Easily accessible office located on Station Road, Near Krishna Complex in Pupri.",
    iconName: "MapPin",
  },
  {
    title: "Customer-Focused Service",
    description: "Attentive support focused on making your travel arrangements smooth and pleasant.",
    iconName: "HeartHandshake",
  },
];
