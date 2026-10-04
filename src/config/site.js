export const siteConfig = {
  gymName: "IRON CORE",
  tagline: "NO EXCUSES. JUST REPS.",
  city: "Vijayawada",
  address: "4th Floor, Platinum Plaza, MG Road, Labbipet, Vijayawada 520010",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  email: "join@ironcore.in",
  instagram: "https://instagram.com/ironcorevja",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15316.591963402096!2d80.6385418128211!3d16.505703277322964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a07395bd%3A0x273aed4fa8894200!2sMG%20Rd%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  openingHours: "Mon-Sat: 5:00 AM - 10:00 PM | Sun: 6:00 AM - 12:00 PM",
  showPrototypeBadge: true,
  
  // BRAND COLORS & FONTS
  colors: {
    accent: "#C6FF00", // Acid Lime
    background: "#0A0A0A", // Near Black
    foreground: "#F2EFE9", // Off White
  },
  fonts: {
    display: "Anton", // Make sure to import this in main.jsx
    body: "'Space Grotesk'",
  },

  stats: {
    members: 2500,
    trainers: 15,
    years: 5,
    sqft: 12000,
  },

  programs: [
    {
      id: "strength",
      title: "STRENGTH & CONDITIONING",
      description: "Build raw power and endurance. Olympic lifting, powerlifting, and functional movements.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: "crossfit",
      title: "CROSSFIT",
      description: "High-intensity functional training. Push your limits in a community-driven environment.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop",
    },
    {
      id: "cardio",
      title: "CARDIO BLAST",
      description: "Melt fat and improve stamina with our state-of-the-art cardio deck and HIIT classes.",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1374&auto=format&fit=crop",
    },
    {
      id: "yoga",
      title: "RECOVERY & YOGA",
      description: "Enhance mobility, flexibility, and mind-muscle connection. Active recovery sessions.",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1470&auto=format&fit=crop",
    },
  ],

  trainers: [
    {
      id: "t1",
      name: "VIKRAM SINGH",
      specialties: ["Powerlifting", "Strength"],
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1374&auto=format&fit=crop",
    },
    {
      id: "t2",
      name: "ANJALI REDDY",
      specialties: ["HIIT", "CrossFit", "Mobility"],
      image: "https://images.unsplash.com/photo-1609899517235-c6d401aae50f?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: "t3",
      name: "KARTIK RAO",
      specialties: ["Bodybuilding", "Nutrition"],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
    },
  ],

  membershipPlans: [
    {
      id: "monthly",
      name: "MONTHLY",
      price: "1,500",
      period: "per month",
      features: [
        "Full Gym Access",
        "Free Group Classes",
        "Locker Facility",
      ],
      featured: false,
    },
    {
      id: "quarterly",
      name: "QUARTERLY",
      price: "4,000",
      period: "for 3 months",
      features: [
        "Full Gym Access",
        "Free Group Classes",
        "Locker Facility",
        "1 Diet Consultation",
      ],
      featured: true,
    },
    {
      id: "yearly",
      name: "ANNUAL",
      price: "12,000",
      period: "per year",
      features: [
        "Full Gym Access",
        "Free Group Classes",
        "Locker Facility",
        "Monthly Diet Review",
        "2 Personal Training Sessions",
      ],
      featured: false,
    },
  ],

  offers: [
    "🔥 First Week Free for Locals!",
    "⚡ Student Discount: 20% OFF on Quarterly Plans",
  ],

  testimonials: [
    {
      id: "1",
      name: "Rahul M.",
      text: "The energy here is unmatched. Best equipment in Vijayawada.",
      role: "Member since 2021",
    },
    {
      id: "2",
      name: "Sneha P.",
      text: "Trainers actually care about your form. Dropped 10kgs in 4 months.",
      role: "CrossFit Athlete",
    },
    {
      id: "3",
      name: "Aditya V.",
      text: "Raw, industrial, and serious about fitness. No better place to lift.",
      role: "Powerlifter",
    },
  ],

  galleryImages: [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1374&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop",
  ],

  faqs: [
    {
      q: "Do you provide personal training?",
      a: "Yes, our certified trainers offer 1-on-1 sessions tailored to your goals.",
    },
    {
      q: "Is the gym open on public holidays?",
      a: "We usually remain open in the morning on public holidays. Members are notified via WhatsApp.",
    },
    {
      q: "Can I freeze my membership?",
      a: "Annual members can freeze their membership for up to 30 days once a year.",
    },
  ],
};
