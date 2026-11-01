export const DESTINATIONS = [
  {
    id: 'mumbai-konkan-goa',
    slug: 'mumbai-konkan-goa',
    title: 'Konkan Coastline to Goa Coastal Expedition',
    region: 'Maharashtra & Goa',
    duration: '5 - 7 Days',
    distance: '620 km',
    startHub: 'Mumbai / Pune',
    bestTime: 'October to March',
    image: '/src/assets/images/hero_caravan_landscape_1793509625763.jpg',
    overview: 'Drive down the serene Maharashtra coastal highway overlooking Arabian Sea sunsets. Park directly by coconut groves in Kashid, ancient forts in Murud-Janjira, pristine Ganpatipule beaches, and bohemian South Goa shores.',
    highlights: [
      'Overnight beach-side caravan camping under swaying palms',
      'Authentic Malvani seafood barbecues cooked fresh at campsite',
      'Scenic ferry crossings with the caravan in Jaigad and Dabhol',
      'Direct beach access campsites with power & fresh water'
    ],
    recommendedCaravan: 'Force Urbania Presidential Suite',
    recommendedCaravanId: 'urbania-luxury-suite',
    itinerary: [
      { day: 1, title: 'Mumbai to Alibaug & Kashid Beach', desc: 'Depart Mumbai, drive across Atal Setu bridge, cruise through Alibaug to private beachfront camp in Kashid.' },
      { day: 2, title: 'Kashid to Harihareshwar & Diveagar', desc: 'Coastal winding road past Murud Janjira fort, seafood stop at Diveagar, sunset cliffside parking.' },
      { day: 3, title: 'Diveagar to Ganpatipule via Ferry', desc: 'Experience the caravan vehicle ferry across the creek, drive scenic Aare Ware coastal road.' },
      { day: 4, title: 'Ganpatipule to Tarkarli & Malvan', desc: 'Clear turquoise waters, scuba diving and water activities, fresh coconut water under awning.' },
      { day: 5, title: 'Malvan to North & South Goa', desc: 'Cross into Goa, park at dedicated caravan park in Morjim or Palolem beach.' }
    ]
  },
  {
    id: 'rajasthan-royal-desert-circuit',
    slug: 'rajasthan-royal-desert-circuit',
    title: 'Royal Forts & Golden Thar Desert Circuit',
    region: 'Rajasthan',
    duration: '6 - 8 Days',
    distance: '850 km',
    startHub: 'Delhi / Jaipur',
    bestTime: 'October to March',
    image: '/src/assets/images/caravan_family_cruiser_1793509684508.jpg',
    overview: 'Experience the magic of Rajasthan like royal nomads. Wake up to sunrise over sandstone palaces in Jaipur and Jodhpur, and park under billions of stars in the Sam Sand Dunes of Jaisalmer.',
    highlights: [
      'Private dune parking in Jaisalmer away from crowded tent resorts',
      'Traditional folk music and Rajasthani feast around the caravan bonfire',
      'Stately palace backdrops for early morning coffee on the awning terrace',
      'Spacious family motorhome comfort with AC in desert afternoon sun'
    ],
    recommendedCaravan: 'Samara Grand Family RV',
    recommendedCaravanId: 'samara-family-grand-cruiser',
    itinerary: [
      { day: 1, title: 'Delhi to Jaipur Pink City', desc: 'Smooth highway drive to Jaipur, park at heritage campsite near Nahargarh Biological Park.' },
      { day: 2, title: 'Jaipur to Pushkar Sacred Lake', desc: 'Visit Amer Fort in the morning, picturesque drive through Aravalli hills to Pushkar oasis.' },
      { day: 3, title: 'Pushkar to Jodhpur Blue City', desc: 'Drive through Marwar plains, evening panoramic view of Mehrangarh Fort lit at night.' },
      { day: 4, title: 'Jodhpur to Thar Dunes Jaisalmer', desc: 'Journey into the golden heart of the Thar Desert, pitch camp directly on sand dunes.' },
      { day: 5, title: 'Stargazing & Camel Safari', desc: 'Zero light pollution night sky observation, off-grid dinner cooked in the caravan kitchenette.' },
      { day: 6, title: 'Jaisalmer Fort & Return to Jaipur', desc: 'Explore the living fort before heading to the Jaipur depot or flight back.' }
    ]
  },
  {
    id: 'western-ghats-coffee-trails',
    slug: 'western-ghats-coffee-trails',
    title: 'Western Ghats & Misty Coffee Plantations',
    region: 'Karnataka & Kerala',
    duration: '4 - 6 Days',
    distance: '540 km',
    startHub: 'Bangalore / Kochi',
    bestTime: 'Throughout the year (Monsoon special)',
    image: '/src/assets/images/caravan_campervan_cozy_1793509670796.jpg',
    overview: 'Escape into emerald tea and coffee plantations, roaring mountain waterfalls, and crisp cloud-kissed air. Wake up with birdsong inside private estate campsites in Sakleshpur, Chikmagalur, and Coorg.',
    highlights: [
      'Estate parking inside heritage coffee plantations with private stream access',
      'Freshly brewed single-origin Arabica coffee straight from your van',
      'Campfires under rainforest canopies with mist rolling over the hood',
      'Agile campervan ideal for winding ghat road hairpins'
    ],
    recommendedCaravan: 'Wanderlust Explorer Campervan',
    recommendedCaravanId: 'wanderlust-couple-camper',
    itinerary: [
      { day: 1, title: 'Bangalore to Sakleshpur Hills', desc: 'Breeze through Hassan highway into lush Western Ghats, park at riverside estate.' },
      { day: 2, title: 'Sakleshpur to Chikmagalur Peaks', desc: 'Drive up to Mullayanagiri peak, aromatic coffee berry tasting in estate.' },
      { day: 3, title: 'Chikmagalur to Coorg Madikeri', desc: 'Scenic mountain pass, Abbey Falls visit, pitch camp overlooking Brahmagiri range.' },
      { day: 4, title: 'Coorg Discovery & Nagarhole Jungle Edge', desc: 'Elephants at Dubare camp, wildlife safari, serene return to Bangalore hub.' }
    ]
  },
  {
    id: 'kutch-white-desert-safari',
    slug: 'kutch-white-desert-safari',
    title: 'White Rann of Kutch & Flamingo Coast',
    region: 'Gujarat',
    duration: '5 - 7 Days',
    distance: '780 km',
    startHub: 'Ahmedabad',
    bestTime: 'November to February (Full Moon special)',
    image: '/src/assets/images/caravan_urbania_luxury_1793509641142.jpg',
    overview: 'Witness the boundless endless expanse of the blinding white salt desert. Stargaze on full moon nights, discover Kutchi handloom artisan villages, and explore fossil hills and Asiatic lion sanctuaries.',
    highlights: [
      'Caravan parking permissions near Dhordo salt flats for full-moon watching',
      'Visit Rogan art and Bhujodi weaving hamlets directly at your leisure',
      'Delicious Kutchi thali and hot masala chai at mobile roadside stops',
      'Full climate control against winter desert night chills'
    ],
    recommendedCaravan: 'Force Urbania Presidential Suite',
    recommendedCaravanId: 'urbania-luxury-suite',
    itinerary: [
      { day: 1, title: 'Ahmedabad to Little Rann of Kutch (Dasada)', desc: 'Wild Ass Sanctuary safari, sunset over dried cracked clay pans.' },
      { day: 2, title: 'Dasada to Bhuj Heritage Capital', desc: 'Prag Mahal, Aina Mahal, artisan shopping in Bhujodi village.' },
      { day: 3, title: 'Bhuj to Dhordo & Great White Rann', desc: 'Park on the perimeter of salt flats, walk on white salt under moonlight.' },
      { day: 4, title: 'Kala Dungar (Black Hill) & India Bridge', desc: 'Highest point in Kutch with panoramic salt vista, panoramic lunch from van.' },
      { day: 5, title: 'Mandvi Beach & Vijay Vilas Palace to Ahmedabad', desc: 'Shipbuilding yards and beach sunset before returning to Ahmedabad.' }
    ]
  }
];

export const CAMPSITES = [
  {
    id: 'kashid-beach-campsite',
    name: 'Kashid Palms Beachfront Caravan Park',
    state: 'Maharashtra',
    city: 'Kashid (Near Alibaug)',
    hookups: ['220V Electric Hookup', 'Fresh Water Refill', 'Chemical Toilet Dump Station', 'Beachfront Direct Access', 'Security Guard 24/7'],
    nightlyRate: 1500,
    rating: 4.9,
    description: 'Private 3-acre coconut grove directly touching the soft sand of Kashid beach. Plug your caravan into mains power and enjoy unlimited AC without engine idle.'
  },
  {
    id: 'chikmagalur-coffee-grove',
    name: 'Chikmagalur Valley Estate Campsite',
    state: 'Karnataka',
    city: 'Chikmagalur',
    hookups: ['Electric 16A Points', 'Natural Spring Water', 'Hot Shower Restrooms', 'Campfire Pits', 'Coffee Estate Trek Trails'],
    nightlyRate: 1200,
    rating: 4.85,
    description: 'Surrounded by silver oak trees and cardamom bushes at 4,000 feet elevation. Temperature drops to 14°C at night for the quintessential campfire vanlife experience.'
  },
  {
    id: 'sam-dunes-oasis-camp',
    name: 'Jaisalmer Thar Stargazer Sanctuary',
    state: 'Rajasthan',
    city: 'Sam Sand Dunes',
    hookups: ['Solar Power Hookup', 'Treated Water', 'Desert Bonfire Space', 'Folk Dance Stage', 'Perimeter Fencing'],
    nightlyRate: 1800,
    rating: 4.92,
    description: 'Isolated desert campsite perched right beside soft golden ripples of wind-blown sand. Uninterrupted Milky Way photography opportunities right from the caravan roof.'
  },
  {
    id: 'rishikesh-ganga-glade',
    name: 'Ganga Riverside Caravan Glade',
    state: 'Uttarakhand',
    city: 'Rishikesh (Shivpuri)',
    hookups: ['220V Electric Supply', 'River Access', 'Clean Washrooms', 'Rafting Pickup', 'Cafe on Premise'],
    nightlyRate: 1600,
    rating: 4.88,
    description: 'Situated on the white sandy banks of the holy Ganges river nestled against Himalayan foothills. Morning yoga on your caravan awning carpet.'
  }
];
