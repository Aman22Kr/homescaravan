import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Filter, 
  Bed, 
  Users, 
  Bath, 
  Check, 
  Bookmark, 
  MapPin, 
  ArrowUpDown, 
  Sparkles,
  Zap
} from 'lucide-react';
import { useCaravan } from '../context/CaravanContext.jsx';
import { CARAVANS, HUBS, CATEGORIES } from '../data/caravansData.js';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function FleetPage() {
  const [searchParamsHook] = useSearchParams();
  const urlCategory = searchParamsHook.get('category') || 'all';
  const urlHub = searchParamsHook.get('hub') || 'all';

  const { isSaved, toggleSave, openBookingModal } = useCaravan();

  const [category, setCategory] = useState(urlCategory);
  const [selectedHub, setSelectedHub] = useState(urlHub);
  const [minBerths, setMinBerths] = useState(0);
  const [washroomOnly, setWashroomOnly] = useState(false);
  const [petFriendlyOnly, setPetFriendlyOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

  const filteredCaravans = useMemo(() => {
    return CARAVANS.filter((item) => {
      if (category !== 'all' && item.categorySlug !== category) return false;
      if (selectedHub !== 'all' && !item.availableHubs.includes(selectedHub)) return false;
      if (minBerths > 0 && item.capacity.berths < minBerths) return false;
      if (washroomOnly && !item.specs.washroom.includes('Attached')) return false;
      if (petFriendlyOnly && !item.specs.petFriendly) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.pricePerDay - b.pricePerDay;
      if (sortBy === 'price-high') return b.pricePerDay - a.pricePerDay;
      if (sortBy === 'capacity') return b.capacity.berths - a.capacity.berths;
      return b.rating - a.rating;
    });
  }, [category, selectedHub, minBerths, washroomOnly, petFriendlyOnly, sortBy]);

  const resetFilters = () => {
    setCategory('all');
    setSelectedHub('all');
    setMinBerths(0);
    setWashroomOnly(false);
    setPetFriendlyOnly(false);
    setSortBy('popular');
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <span>HomesCaravan Fleet</span>
            <span>·</span>
            <span>Chauffeur-Driven Motorhomes & Campers</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Our Caravan & Motorhome Fleet
          </h1>
          <p className="mt-2 text-sm text-neutral-600 max-w-2xl leading-relaxed">
            Every vehicle in our fleet is custom built for Indian roads with full standing interior height, air conditioning, lithium inverter battery backup, and dedicated professional drivers.
          </p>
        </div>

        {/* Filter Bar Controls */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Category Filter */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Vehicle Type
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800 focus:border-amber-500 focus:outline-none"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Hub Selector */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Departure City Hub
              </label>
              <select
                value={selectedHub}
                onChange={(e) => setSelectedHub(e.target.value)}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800 focus:border-amber-500 focus:outline-none"
              >
                <option value="all">All Hubs (India-wide)</option>
                {HUBS.map((h) => (
                  <option key={h.id} value={h.name}>
                    {h.name} ({h.state})
                  </option>
                ))}
              </select>
            </div>

            {/* Minimum Berths */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Sleeping Capacity
              </label>
              <select
                value={minBerths}
                onChange={(e) => setMinBerths(Number(e.target.value))}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800 focus:border-amber-500 focus:outline-none"
              >
                <option value={0}>Any Berths</option>
                <option value={2}>At least 2 Berths</option>
                <option value={4}>At least 4 Berths</option>
                <option value={6}>6 Berths (Full Family)</option>
              </select>
            </div>

            {/* Sorting */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800 focus:border-amber-500 focus:outline-none"
              >
                <option value="popular">Top Rated & Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="capacity">Berths: High to Low</option>
              </select>
            </div>

            {/* Checkbox Toggles & Reset */}
            <div className="flex flex-col justify-end space-y-2">
              <label className="flex items-center gap-2 text-xs text-neutral-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={washroomOnly}
                  onChange={(e) => setWashroomOnly(e.target.checked)}
                  className="rounded accent-amber-500"
                />
                <span>Attached Washroom</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-neutral-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={petFriendlyOnly}
                  onChange={(e) => setPetFriendlyOnly(e.target.checked)}
                  className="rounded accent-amber-500"
                />
                <span>Pet-Friendly</span>
              </label>
            </div>

          </div>

          <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
            <span>Showing <strong className="text-neutral-900">{filteredCaravans.length}</strong> available caravans</span>
            <button
              onClick={resetFilters}
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Reset All Filters
            </button>
          </div>
        </div>

        {/* Caravan Listing Grid */}
        {filteredCaravans.length === 0 ? (
          <div className="rounded-2xl border border-neutral-200 bg-white p-12 text-center my-8">
            <h3 className="font-display text-lg font-bold text-neutral-900">
              No caravans match your selected filters
            </h3>
            <p className="mt-2 text-xs text-neutral-500 max-w-sm mx-auto">
              Try adjusting your hub or berth requirements to see other available motorhome options.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 text-xs font-semibold text-neutral-900 bg-amber-400 rounded-lg hover:bg-amber-300"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaravans.map((caravan) => (
              <div
                key={caravan.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:border-neutral-300 hover:shadow-lg"
              >
                {/* Image */}
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
                    onClick={() => toggleSave(caravan.id)}
                    aria-label="Save caravan"
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
                    <span className="text-amber-600 font-medium">★ {caravan.rating} ({caravan.reviewsCount} reviews)</span>
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

                  {/* Highlights list */}
                  <div className="mt-3 space-y-1 text-xs text-neutral-600">
                    {caravan.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <Check className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs */}
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

                  {/* Hubs */}
                  <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-neutral-500">
                    <MapPin className="h-3 w-3 text-amber-500 shrink-0" />
                    <span className="truncate">Available: {caravan.availableHubs.join(', ')}</span>
                  </div>

                  {/* Pricing and Action */}
                  <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
                    <div>
                      <span className="text-[11px] text-neutral-500">Daily rental</span>
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
                        Specs
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
        )}

        {/* Ad Placeholder Section */}
        <AdPlaceholder />

      </div>
    </div>
  );
}
