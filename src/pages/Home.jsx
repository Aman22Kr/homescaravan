import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Bed, 
  Bath, 
  Zap, 
  Flame, 
  Coffee, 
  Check, 
  ChevronDown, 
  Bookmark, 
  Sparkles, 
  PhoneCall,
  Search
} from 'lucide-react';
import { useCaravan } from '../context/CaravanContext.jsx';
import { CARAVANS, HUBS, CATEGORIES } from '../data/caravansData.js';
import { DESTINATIONS } from '../data/destinationsData.js';
import VideoPlaceholder from '../components/VideoPlaceholder.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function Home() {
  const navigate = useNavigate();
  const { isSaved, toggleSave, openBookingModal, searchParams, setSearchParams } = useCaravan();

  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);

  // Filtered caravans for the showcase
  const filteredCaravans = activeCategory === 'all'
    ? CARAVANS
    : CARAVANS.filter(c => c.categorySlug === activeCategory);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/fleet?hub=${encodeURIComponent(searchParams.hub)}&category=${searchParams.category}`);
  };

  const faqs = [
    {
      q: 'Do your caravans come with a driver or can I self-drive?',
      a: 'All HomesCaravan motorhomes and campervans are accompanied by certified professional commercial chauffeurs who are experienced in hill roads, interstate regulations, and vehicle maintenance. This allows you and your family to completely relax, enjoy panoramic views, and eliminates the stress of navigating Indian traffic and heavy vehicle parking.'
    },
    {
      q: 'Where does the driver sleep at night?',
      a: 'Our drivers are provided with either a separated partitioned driver sleeper berth in the cabin, or our team coordinates driver accommodation at verified campsite driver quarters or nearby homestays at zero inconvenience to your private cabin space.'
    },
    {
      q: 'Does the air conditioner and washroom work when the engine is switched off?',
      a: 'Yes! Our flagship luxury Force Urbanias and motorhomes are equipped with high-capacity 400Ah lithium battery inverter systems and rooftop solar panels. This enables the split AC, refrigerator, warm water shower, lights, and induction cooker to run for hours even when parked in remote off-grid locations without running the engine.'
    },
    {
      q: 'Are your campervans pet-friendly?',
      a: 'Yes! Most of our models (including the Force Urbania, Wanderlust Explorer, and Coastal Glamper) warmly welcome well-behaved pets. We provide specialized pet seat anchors and easy-to-clean hygiene flooring with a nominal sanitization fee.'
    },
    {
      q: 'Where do we park overnight during the trip?',
      a: 'We have pre-vetted partnerships with over 50 scenic caravan-friendly campsites, heritage coffee estates, beachfront farms, and desert camps across Maharashtra, Goa, Karnataka, Rajasthan, Himachal, and Gujarat that feature 220V power hookups, freshwater refilling, and night security.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        {/* Background Visual Asset */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_caravan_landscape_1793509625763.jpg"
            alt="HomesCaravan luxury motorhome parked by lake at sunset"
            className="h-full w-full object-cover object-center opacity-45 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-28 sm:px-6 lg:px-8 lg:pt-28 lg:pb-36">
          <div className="max-w-3xl">
            {/* Unboxed Metadata Kicker (Anti-slop discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-4">
              <span>Experiential Vanlife</span>
              <span className="text-neutral-500">·</span>
              <span>Chauffeur-Driven Luxury</span>
              <span className="text-neutral-500">·</span>
              <span>Across India</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Explore India in Your Private Studio on Wheels.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Escape rigid hotel bookings. Rent bespoke campervans, luxury Force Urbanias, and family motorhomes equipped with attached washrooms, kitchenettes, and professional drivers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm shadow-lg transition-all focus:ring-4 focus:ring-amber-500/40 inline-flex items-center gap-2"
              >
                <span>Plan Your Road Trip</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/fleet"
                className="px-6 py-3.5 rounded-xl border border-neutral-700 hover:border-neutral-500 bg-neutral-900/60 backdrop-blur-md text-white font-semibold text-sm transition-all"
              >
                View Caravan Fleet
              </Link>
            </div>
          </div>
        </div>

        {/* TRIP PLANNER SEARCH BAR (Interactive Desktop/Mobile Strip) */}
        <div className="relative z-20 mx-auto max-w-6xl px-4 -mt-16 sm:-mt-20">
          <form
            onSubmit={handleSearchSubmit}
            className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Departure Hub */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Departure Hub
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-amber-500" />
                  <select
                    value={searchParams.hub}
                    onChange={(e) => setSearchParams({ ...searchParams, hub: e.target.value })}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 pl-9 pr-3 py-2 text-xs font-semibold text-neutral-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                  >
                    {HUBS.map((h) => (
                      <option key={h.id} value={h.name}>
                        {h.name} ({h.state})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Caravan Category */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Caravan Type
                </label>
                <div className="relative">
                  <Compass className="absolute left-3 top-2.5 h-4 w-4 text-amber-500" />
                  <select
                    value={searchParams.category}
                    onChange={(e) => setSearchParams({ ...searchParams, category: e.target.value })}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 pl-9 pr-3 py-2 text-xs font-semibold text-neutral-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                  >
                    <option value="all">All Caravan Types</option>
                    <option value="luxury-urbania">Luxury Urbania</option>
                    <option value="couple-campervan">Couple Campervan</option>
                    <option value="family-cruiser">Family Cruiser</option>
                    <option value="off-road-4x4">Off-Road 4x4 Rig</option>
                  </select>
                </div>
              </div>

              {/* Number of Travelers */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Travelers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-2.5 h-4 w-4 text-amber-500" />
                  <select
                    value={searchParams.guests}
                    onChange={(e) => setSearchParams({ ...searchParams, guests: Number(e.target.value) })}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 pl-9 pr-3 py-2 text-xs font-semibold text-neutral-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                  >
                    <option value={2}>2 Guests (Couple)</option>
                    <option value={4}>3 - 4 Guests (Small Family)</option>
                    <option value={6}>5 - 6 Guests (Large Group)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-neutral-900 py-2.5 px-4 text-xs font-bold text-amber-400 hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  <Search className="h-4 w-4" />
                  <span>Search Caravans</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* WHY HOMESCARAVAN - CORE VALUE PILLARS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">
            The New Way to Travel India
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Why Choose HomesCaravan?
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            Ditch packed bus tours and cookie-cutter hotels. Wake up to misty mountain views or ocean waves right outside your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-7 transition-all hover:border-neutral-300 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 mb-5">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Off-Grid Independence
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Equipped with high-capacity lithium battery inverters and solar arrays. Keep your AC, refrigerator, and induction cooktop running throughout the night even without campsite electricity.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-7 transition-all hover:border-neutral-300 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 mb-5">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Verified Commercial Chauffeurs
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Every caravan includes an experienced, background-verified tourist chauffeur. Relax with your family, play games, or nap comfortably while our driver handles ghats and interstate tolls.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-7 transition-all hover:border-neutral-300 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 mb-5">
              <Coffee className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Studio Living & Kitchenette
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Cook your own fresh meals with induction, mini-fridge, and microwave. Enjoy attached private chemical restrooms and hot-water showers for the highest hygiene standard.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED FLEET CATALOG */}
      <section className="py-16 bg-neutral-100/70 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">
                Our Fleet
              </span>
              <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-neutral-900">
                Crafted for Indian Road Conditions
              </h2>
            </div>

            {/* Segmented Category Filter Tabs */}
            <div className="flex flex-wrap gap-1 p-1 bg-white rounded-xl border border-neutral-200 shadow-sm">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Caravan Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaravans.map((caravan) => (
              <div
                key={caravan.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:border-neutral-300 hover:shadow-lg"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-200">
                  <img
                    src={caravan.images.hero}
                    alt={caravan.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {caravan.badge && (
                    <span className="absolute top-3 left-3 rounded-md bg-neutral-900/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold text-amber-400">
                      {caravan.badge}
                    </span>
                  )}
                  {/* Bookmark Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSave(caravan.id);
                    }}
                    aria-label="Save caravan to favorites"
                    className={`absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md transition-colors ${
                      isSaved(caravan.id)
                        ? 'bg-amber-500 text-neutral-950'
                        : 'bg-white/80 text-neutral-700 hover:bg-white'
                    }`}
                  >
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                    <span>{caravan.category}</span>
                    <span className="text-amber-600 font-medium">★ {caravan.rating} ({caravan.reviewsCount})</span>
                  </div>

                  <Link
                    to={`/fleet/${caravan.id}`}
                    className="font-display text-lg font-bold text-neutral-900 hover:text-amber-600 transition-colors line-clamp-1"
                  >
                    {caravan.name}
                  </Link>

                  <p className="mt-1 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {caravan.tagline}
                  </p>

                  {/* Specs Badges (Unboxed metadata with separators) */}
                  <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-neutral-100 pt-3 text-xs text-neutral-600">
                    <span className="flex items-center gap-1">
                      <Bed className="h-3.5 w-3.5 text-neutral-400" /> {caravan.capacity.berths} Berths
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5 text-neutral-400" /> {caravan.capacity.seating} Seats
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-3.5 w-3.5 text-neutral-400" /> Washroom
                    </span>
                  </div>

                  {/* Hubs pill tags */}
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-neutral-500">
                    <MapPin className="h-3 w-3 text-amber-500 shrink-0" />
                    <span className="truncate">Hubs: {caravan.availableHubs.join(', ')}</span>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
                    <div>
                      <span className="text-xs text-neutral-500">Starts at</span>
                      <p className="text-base font-extrabold text-neutral-900 tabular-nums">
                        ₹{caravan.pricePerDay.toLocaleString('en-IN')}{' '}
                        <span className="text-xs font-normal text-neutral-500">/day</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/fleet/${caravan.id}`}
                        className="px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:text-neutral-950 transition-colors"
                      >
                        Details
                      </Link>
                      <button
                        type="button"
                        onClick={() => openBookingModal(caravan)}
                        className="px-3.5 py-1.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-300 bg-white text-xs font-bold text-neutral-900 hover:bg-neutral-50 transition-colors shadow-sm"
            >
              <span>Explore All Models & Specifications</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO TOUR PLACEHOLDER SECTION (16:9 ratio, blank placeholder as requested) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">
            Virtual Experience
          </span>
          <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-neutral-900">
            Step Inside the Force Urbania Studio
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto">
            Take a 360-degree tour of our handcrafted interior: convertible queen sofa-bed, warm teak accents, induction kitchenette, and full-height shower.
          </p>
        </div>

        <VideoPlaceholder
          title="Force Urbania Presidential Suite — Interior & Road Demonstration"
          subtitle="Tour the convertible lounge, kitchenette, independent battery inverter, and scenic Western Ghats halt."
        />
      </section>

      {/* POPULAR CIRCUITS & ROAD TRIPS */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">
              Curated Road Trips
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-neutral-900">
              Iconic Indian Caravan Circuits
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600">
              Each circuit includes pre-mapped verified caravan campsites with electricity hookups and waste disposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((dest) => (
              <Link
                key={dest.id}
                to={`/destinations/${dest.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 transition-all hover:border-neutral-300 hover:shadow-md"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-200">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2.5 left-2.5 rounded bg-neutral-900/80 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
                    {dest.duration} · {dest.distance}
                  </span>
                </div>
                <div className="p-4 flex flex-1 flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider">
                      {dest.region}
                    </span>
                    <h3 className="font-display font-bold text-sm text-neutral-900 mt-1 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {dest.title}
                    </h3>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-neutral-500 pt-2 border-t border-neutral-200/60">
                    <span>Hub: {dest.startHub}</span>
                    <span className="font-semibold text-neutral-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Route <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">
            Have Questions?
          </span>
          <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600">
            Everything you need to know about renting a caravan in India with HomesCaravan.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-neutral-200 bg-white overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-4 text-left font-display font-semibold text-sm text-neutral-900 hover:text-amber-600 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-neutral-500 transition-transform duration-200 shrink-0 ml-3 ${
                    openFaq === idx ? 'rotate-180 text-amber-600' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 pt-1 text-xs sm:text-sm leading-relaxed text-neutral-600 border-t border-neutral-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ADVERTISEMENT PLACEHOLDER (Compact section required near bottom of every relevant page) */}
      <AdPlaceholder />

      {/* CALL TO ACTION BANNER */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Ready for the Open Road?
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Book Your Next Unforgettable Road Trip Today
          </h2>
          <p className="mt-3 text-sm text-neutral-400 max-w-xl mx-auto">
            Contact our expedition planners to map out custom stops, verify campsite power points, and match you with the right vehicle.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openBookingModal()}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs shadow-md transition-colors"
            >
              Book Caravan Now
            </button>
            <a
              href="tel:+919409480403"
              className="px-6 py-3 rounded-xl border border-neutral-700 hover:border-neutral-500 bg-neutral-800 text-white font-semibold text-xs transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="h-3.5 w-3.5 text-amber-400" />
              <span>Call +91 94094 80403</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
