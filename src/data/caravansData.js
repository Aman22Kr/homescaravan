export const CARAVANS = [
  {
    id: 'urbania-luxury-suite',
    name: 'Force Urbania Presidential Suite',
    tagline: 'Ultra-luxury studio apartment on wheels with private washroom',
    category: 'Luxury Urbania',
    categorySlug: 'luxury-urbania',
    pricePerDay: 18500,
    securityDeposit: 25000,
    capacity: {
      berths: 4,
      seating: 6,
    },
    specs: {
      transmission: 'Manual 5-Speed',
      fuel: 'Diesel Euro-6',
      ac: 'Dual AC (Driving & Stationary 220V)',
      washroom: 'Attached with Hot Water Shower',
      kitchenette: 'Induction, Microwave & Sink',
      driverIncluded: true,
      powerBackup: '400Ah Lithium Inverter + Solar',
      freshWater: '160 Liters',
      petFriendly: true,
    },
    images: {
      hero: '/src/assets/images/caravan_urbania_luxury_1793509641142.jpg',
      interior: '/src/assets/images/caravan_interior_studio_1793509656009.jpg',
      campsite: '/src/assets/images/hero_caravan_landscape_1793509625763.jpg',
    },
    availableHubs: ['Mumbai', 'Pune', 'Delhi', 'Ahmedabad', 'Bangalore'],
    featured: true,
    badge: 'Most Popular',
    rating: 4.95,
    reviewsCount: 48,
    description: 'Custom-crafted on the next-generation Force Urbania platform. Designed like a boutique five-star hotel room with plush recliner seating, motorized convertible double bed, full private bathroom with ceramic washbasin and hot shower, smart LED TV with streaming, 80L refrigerator, and ambient mood lighting.',
    highlights: [
      'Dedicated professional chauffeur included',
      'Attached private bathroom with vacuum toilet and hot shower',
      'Induction stovetop, microwave oven and mini-fridge',
      'Independent 220V battery backup powering AC without vehicle engine',
      'Complimentary outdoor awning, camp chairs and picnic table'
    ],
    dimensions: {
      length: '6.1 Meters',
      height: '2.8 Meters',
      width: '2.1 Meters'
    }
  },
  {
    id: 'wanderlust-couple-camper',
    name: 'Wanderlust Explorer Campervan',
    tagline: 'Agile 2-person camper with pop-up roof tent for mountain expeditions',
    category: 'Couple Campervan',
    categorySlug: 'couple-campervan',
    pricePerDay: 9500,
    securityDeposit: 15000,
    capacity: {
      berths: 2,
      seating: 4,
    },
    specs: {
      transmission: 'Manual 6-Speed',
      fuel: 'Diesel Turbo',
      ac: 'Cabin Air Conditioner',
      washroom: 'Outdoor Privacy Shower & Portable Toilet',
      kitchenette: 'Pull-out Gas Cooker & Cooler',
      driverIncluded: true,
      powerBackup: '200Ah Inverter System',
      freshWater: '70 Liters',
      petFriendly: true,
    },
    images: {
      hero: '/src/assets/images/caravan_campervan_cozy_1793509670796.jpg',
      interior: '/src/assets/images/caravan_interior_studio_1793509656009.jpg',
      campsite: '/src/assets/images/hero_caravan_landscape_1793509625763.jpg',
    },
    availableHubs: ['Bangalore', 'Kochi', 'Mumbai', 'Delhi'],
    featured: true,
    badge: 'Couple Favorite',
    rating: 4.88,
    reviewsCount: 62,
    description: 'Perfect for couples and solo adventurers seeking intimate off-grid holidays in Himachal, Western Ghats, or Goa. Features a swift pop-up rooftop tent with 360-degree mesh windows, slide-out camp kitchen, outdoor hot water shower, and compact dimensions that easily navigate narrow mountain roads.',
    highlights: [
      'Agile wheelbase suited for hill station hairpins and offbeat trails',
      'Rooftop stargazing tent with waterproof insulated canvas',
      'Outdoor pull-out cooktop with dual gas burner and utensils',
      'Bluetooth soundbar and fast USB-C fast charging stations',
      'Ideal for slow romantic getaways and weekend escapes'
    ],
    dimensions: {
      length: '4.9 Meters',
      height: '2.2 Meters',
      width: '1.9 Meters'
    }
  },
  {
    id: 'samara-family-grand-cruiser',
    name: 'Samara Grand Family RV',
    tagline: 'Full-size 6-berth motorhome with bunk beds and panoramic dining dinette',
    category: 'Family Cruiser',
    categorySlug: 'family-cruiser',
    pricePerDay: 22000,
    securityDeposit: 30000,
    capacity: {
      berths: 6,
      seating: 7,
    },
    specs: {
      transmission: 'Heavy-Duty 5-Speed',
      fuel: 'Diesel CRDe',
      ac: 'Central Split AC + Climate Control',
      washroom: 'Spacious En-Suite with Hot Geyser',
      kitchenette: 'Complete Kitchen with Overhead Exhaust',
      driverIncluded: true,
      powerBackup: '500Ah Lithium + Silent Genset',
      freshWater: '220 Liters',
      petFriendly: true,
    },
    images: {
      hero: '/src/assets/images/caravan_family_cruiser_1793509684508.jpg',
      interior: '/src/assets/images/caravan_interior_studio_1793509656009.jpg',
      campsite: '/src/assets/images/hero_caravan_landscape_1793509625763.jpg',
    },
    availableHubs: ['Delhi', 'Jaipur', 'Ahmedabad', 'Mumbai'],
    featured: true,
    badge: 'Best for Families',
    rating: 4.92,
    reviewsCount: 39,
    description: 'The ultimate rolling home for multi-generational families and travel groups. Features fixed bunk beds for children, a master cabover bed, convertible dining dinette, private dry-and-wet separated bathroom, high-output inverter and silent generator for remote desert or forest halts.',
    highlights: [
      'Separate sleeping quarters for adults and kids (6 total berths)',
      'Large dining dinette with seating for 5 for family meals and board games',
      'Massive 220L water tank for multiple showers and cooking needs',
      'Full exterior awning with integrated warm LED perimeter lighting',
      'Huge rear luggage garage for suitcases and camping gear'
    ],
    dimensions: {
      length: '6.9 Meters',
      height: '3.1 Meters',
      width: '2.3 Meters'
    }
  },
  {
    id: 'traveller-nomad-comfort',
    name: 'Traveller Nomad Comfort Van',
    tagline: 'The iconic road tripper with captain chairs and panoramic picture windows',
    category: 'Comfort Van',
    categorySlug: 'comfort-van',
    pricePerDay: 13500,
    securityDeposit: 20000,
    capacity: {
      berths: 4,
      seating: 6,
    },
    specs: {
      transmission: 'Manual 5-Speed',
      fuel: 'Diesel',
      ac: 'Dual Rooftop AC',
      washroom: 'Enclosed Chemical Restroom',
      kitchenette: 'Electric Induction & Refrigerator',
      driverIncluded: true,
      powerBackup: '300Ah Inverter',
      freshWater: '120 Liters',
      petFriendly: true,
    },
    images: {
      hero: '/src/assets/images/caravan_urbania_luxury_1793509641142.jpg',
      interior: '/src/assets/images/caravan_interior_studio_1793509656009.jpg',
      campsite: '/src/assets/images/hero_caravan_landscape_1793509625763.jpg',
    },
    availableHubs: ['Mumbai', 'Pune', 'Bangalore', 'Delhi'],
    featured: false,
    badge: 'Value Choice',
    rating: 4.79,
    reviewsCount: 54,
    description: 'Built on the dependable Force Traveller 3350 wheelbase, the Nomad Comfort is calibrated for long interstate road trips. Enjoy plush push-back leatherette seats, rear fold-flat sleeper lounge, and generous headroom that allows you to stand comfortably throughout the vehicle.',
    highlights: [
      'Over 6 feet interior standing height for effortless movement',
      'Captain bucket chairs that swivel to face the dining table',
      'Onboard smart screen for movie nights while parked',
      'Thermal and acoustic insulation for peaceful night sleep',
      'Affordable group travel pricing'
    ],
    dimensions: {
      length: '5.6 Meters',
      height: '2.7 Meters',
      width: '2.0 Meters'
    }
  },
  {
    id: 'sahara-overlander-4x4',
    name: 'Sahara Overlander 4x4 Camper',
    tagline: 'Rugged all-terrain camper built for Spiti, Ladakh, and Kutch deserts',
    category: 'Off-Road 4x4',
    categorySlug: 'off-road-4x4',
    pricePerDay: 16000,
    securityDeposit: 25000,
    capacity: {
      berths: 3,
      seating: 4,
    },
    specs: {
      transmission: '4x4 High/Low Range',
      fuel: 'Diesel High-Altitude Tuned',
      ac: 'Heavy-Duty Cabin AC',
      washroom: 'Portable Bio-Toilet & Camp Shower',
      kitchenette: 'Slide-out Heavy Duty Burner',
      driverIncluded: true,
      powerBackup: 'Dual AGM Deep Cycle Batteries',
      freshWater: '90 Liters',
      petFriendly: false,
    },
    images: {
      hero: '/src/assets/images/hero_caravan_landscape_1793509625763.jpg',
      interior: '/src/assets/images/caravan_interior_studio_1793509656009.jpg',
      campsite: '/src/assets/images/caravan_family_cruiser_1793509684508.jpg',
    },
    availableHubs: ['Delhi', 'Chandigarh', 'Ahmedabad'],
    featured: false,
    badge: 'High Altitude Ready',
    rating: 4.91,
    reviewsCount: 27,
    description: 'Designed specifically for rugged terrain, rocky riverbeds, and remote mountain passes. High ground clearance, all-terrain tires, auxiliary fuel tank, snorkel, and rooftop hard-shell expedition tent make this the vehicle of choice for Zanskar, Spiti, and Nubra Valley.',
    highlights: [
      'Genuine 4WD drivetrain with low-range transfer case',
      'High ground clearance capable of water crossings',
      'Off-grid diesel air heater for sub-zero Himalayan nights',
      'Experienced Himalayan mountain driver included',
      'High altitude recovery kit and oxygen cylinder onboard'
    ],
    dimensions: {
      length: '5.1 Meters',
      height: '2.4 Meters',
      width: '1.9 Meters'
    }
  },
  {
    id: 'coastal-breeze-glamper',
    name: 'Coastal Breeze Beach Glamper',
    tagline: 'Sunlit van with skylights and outdoor barbecue setup for coastal cruising',
    category: 'Couple Campervan',
    categorySlug: 'couple-campervan',
    pricePerDay: 11000,
    securityDeposit: 18000,
    capacity: {
      berths: 2,
      seating: 4,
    },
    specs: {
      transmission: 'Manual 5-Speed',
      fuel: 'Diesel',
      ac: 'Inverter Driven Air Conditioner',
      washroom: 'Compact Restroom + Outdoor Rinse Hose',
      kitchenette: 'Mini Bar, Espresso Maker & Induction',
      driverIncluded: true,
      powerBackup: '300Ah Lithium Bank',
      freshWater: '100 Liters',
      petFriendly: true,
    },
    images: {
      hero: '/src/assets/images/caravan_campervan_cozy_1793509670796.jpg',
      interior: '/src/assets/images/caravan_interior_studio_1793509656009.jpg',
      campsite: '/src/assets/images/hero_caravan_landscape_1793509625763.jpg',
    },
    availableHubs: ['Mumbai', 'Goa', 'Kochi', 'Bangalore'],
    featured: false,
    badge: 'Beach Special',
    rating: 4.86,
    reviewsCount: 41,
    description: 'Bask in sea breezes along Konkan or Malabar coast. Features ceiling skylights, bamboo finish interior paneling, hammock hooks, outdoor shower for sandy beach returns, and a smokeless barbecue charcoal grill for sunset grills by the waves.',
    highlights: [
      'Rooftop skylight for sleeping under the stars',
      'Outdoor warm shower for washing off ocean sand',
      'Includes portable beach umbrella and reclining loungers',
      'Chilled drink cooler and cocktail shaker bar kit',
      'Pet friendly interior with easy-clean floor'
    ],
    dimensions: {
      length: '5.2 Meters',
      height: '2.5 Meters',
      width: '2.0 Meters'
    }
  }
];

export const HUBS = [
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', pickupPoints: ['Bandra Kurla Complex', 'Navi Mumbai', 'Chhatrapati Shivaji Airport'] },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', pickupPoints: ['Kalyani Nagar', 'Baner', 'Pune Airport'] },
  { id: 'delhi', name: 'Delhi NCR', state: 'Delhi', pickupPoints: ['IGI Airport T3', 'Aerocity', 'Gurugram Cyber Hub'] },
  { id: 'bangalore', name: 'Bangalore', state: 'Karnataka', pickupPoints: ['Indiranagar', 'Whitefield', 'Kempegowda Airport'] },
  { id: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', pickupPoints: ['SG Highway', 'Bodakdev', 'Sardar Vallabhbhai Patel Airport'] },
  { id: 'goa', name: 'Goa', state: 'Goa', pickupPoints: ['Dabolim Airport', 'Mopa Airport', 'Panaji Hub'] },
  { id: 'kochi', name: 'Kochi', state: 'Kerala', pickupPoints: ['Nedumbassery Airport', 'Fort Kochi', 'Marine Drive'] },
  { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan', pickupPoints: ['Jaipur International Airport', 'C-Scheme'] }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Fleet' },
  { id: 'luxury-urbania', label: 'Luxury Urbania' },
  { id: 'couple-campervan', label: 'Couple Campervan' },
  { id: 'family-cruiser', label: 'Family Cruiser' },
  { id: 'comfort-van', label: 'Comfort Van' },
  { id: 'off-road-4x4', label: 'Off-Road 4x4' }
];
