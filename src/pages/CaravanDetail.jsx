import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Bed, 
  Users, 
  Bath, 
  Check, 
  Bookmark, 
  Calendar, 
  MapPin, 
  Shield, 
  Zap, 
  Coffee, 
  PhoneCall, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { CARAVANS, HUBS } from '../data/caravansData.js';
import { useCaravan } from '../context/CaravanContext.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function CaravanDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isSaved, toggleSave, openBookingModal } = useCaravan();

  const caravan = CARAVANS.find((c) => c.id === id);

  const [activeImageKey, setActiveImageKey] = useState('hero');
  const [tripDays, setTripDays] = useState(3);
  const [selectedHub, setSelectedHub] = useState('Mumbai');
  const [selectedAddonBbq, setSelectedAddonBbq] = useState(false);

  if (!caravan) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
          <h2 className="font-display text-xl font-bold text-neutral-900">Caravan Not Found</h2>
          <p className="mt-2 text-xs text-neutral-600">
            The vehicle identifier you requested does not exist in our current fleet.
          </p>
          <Link
            to="/fleet"
            className="mt-5 inline-block px-5 py-2.5 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs"
          >
            Back to All Caravans
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = [
    { key: 'hero', label: 'Exterior View', src: caravan.images.hero },
    { key: 'interior', label: 'Studio Interior', src: caravan.images.interior },
    { key: 'campsite', label: 'Campsite Setup', src: caravan.images.campsite },
  ];

  const currentImageSrc = caravan.images[activeImageKey] || caravan.images.hero;

  // Cost calculation
  const basePrice = caravan.pricePerDay * tripDays;
  const driverBatta = 1200 * tripDays;
  const bbqFee = selectedAddonBbq ? 2500 : 0;
  const totalCost = basePrice + driverBatta + bbqFee;

  return (
    <div className="min-h-screen bg-neutral-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Fleet Catalog</span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleSave(caravan.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
                isSaved(caravan.id)
                  ? 'bg-amber-500/10 border-amber-500 text-amber-900'
                  : 'bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              <Bookmark className={`h-3.5 w-3.5 ${isSaved(caravan.id) ? 'fill-current text-amber-600' : ''}`} />
              <span>{isSaved(caravan.id) ? 'Saved' : 'Save Caravan'}</span>
            </button>
          </div>
        </div>

        {/* Title Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <span>{caravan.category}</span>
            <span>·</span>
            <span>Chauffeur Included</span>
            <span>·</span>
            <span>★ {caravan.rating} ({caravan.reviewsCount} Verified Reviews)</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            {caravan.name}
          </h1>
          <p className="mt-2 text-base text-neutral-600 max-w-3xl leading-relaxed">
            {caravan.tagline}
          </p>
        </div>

        {/* Main Grid: Gallery & Booking Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 2-Column Left: Image Gallery & Deep Specs */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery Main Display */}
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 shadow-md">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-900">
                <img
                  src={currentImageSrc}
                  alt={caravan.name}
                  className="h-full w-full object-cover transition-all duration-300"
                />
              </div>

              {/* Thumbnails Row */}
              <div className="flex items-center gap-3 p-3 bg-neutral-950/80 border-t border-neutral-800">
                {galleryImages.map((img) => (
                  <button
                    key={img.key}
                    onClick={() => setActiveImageKey(img.key)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeImageKey === img.key
                        ? 'bg-amber-500 text-neutral-950 font-semibold'
                        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                    }`}
                  >
                    <span>{img.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Overview & Description */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-neutral-900 mb-4">
                Vehicle Overview
              </h2>
              <p className="text-sm leading-relaxed text-neutral-700">
                {caravan.description}
              </p>

              {/* Highlights */}
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <h3 className="font-display text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3">
                  Vehicle Highlights & Included Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {caravan.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-neutral-900 mb-4">
                Technical Specifications & Living Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3.5">
                  <span className="text-neutral-500 block mb-1 font-semibold uppercase text-[10px]">
                    Sleeping & Seating
                  </span>
                  <p className="font-bold text-neutral-900">
                    {caravan.capacity.berths} Sleeping Berths · {caravan.capacity.seating} Certified Passenger Seats
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3.5">
                  <span className="text-neutral-500 block mb-1 font-semibold uppercase text-[10px]">
                    Washroom & Shower
                  </span>
                  <p className="font-bold text-neutral-900">
                    {caravan.specs.washroom}
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3.5">
                  <span className="text-neutral-500 block mb-1 font-semibold uppercase text-[10px]">
                    Kitchenette & Cooking
                  </span>
                  <p className="font-bold text-neutral-900">
                    {caravan.specs.kitchenette}
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3.5">
                  <span className="text-neutral-500 block mb-1 font-semibold uppercase text-[10px]">
                    Air Conditioning
                  </span>
                  <p className="font-bold text-neutral-900">
                    {caravan.specs.ac}
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3.5">
                  <span className="text-neutral-500 block mb-1 font-semibold uppercase text-[10px]">
                    Off-grid Power Backup
                  </span>
                  <p className="font-bold text-neutral-900">
                    {caravan.specs.powerBackup}
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3.5">
                  <span className="text-neutral-500 block mb-1 font-semibold uppercase text-[10px]">
                    Fresh Water Storage
                  </span>
                  <p className="font-bold text-neutral-900">
                    {caravan.specs.freshWater} Clean Tank
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3.5">
                  <span className="text-neutral-500 block mb-1 font-semibold uppercase text-[10px]">
                    Chassis & Drivetrain
                  </span>
                  <p className="font-bold text-neutral-900">
                    {caravan.specs.transmission} · {caravan.specs.fuel}
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3.5">
                  <span className="text-neutral-500 block mb-1 font-semibold uppercase text-[10px]">
                    Exterior Dimensions
                  </span>
                  <p className="font-bold text-neutral-900">
                    {caravan.dimensions.length} (L) × {caravan.dimensions.width} (W) × {caravan.dimensions.height} (H)
                  </p>
                </div>
              </div>
            </div>

            {/* Hub Depots Availability */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-display text-base font-bold text-neutral-900 mb-2">
                Available Departure & Drop Hubs
              </h3>
              <p className="text-xs text-neutral-600 mb-4">
                This vehicle is available for depot pickup or doorstep vehicle delivery in the following metropolitan centres:
              </p>
              <div className="flex flex-wrap gap-2">
                {caravan.availableHubs.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-800"
                  >
                    <MapPin className="h-3.5 w-3.5 text-amber-600" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* 1-Column Right: Sticky Booking Calculator & Inquiry Card */}
          <div className="space-y-6">
            <div className="sticky top-24 rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl">
              <div className="flex items-baseline justify-between border-b border-neutral-100 pb-4">
                <div>
                  <span className="text-xs text-neutral-500">Rental rate</span>
                  <p className="text-2xl font-extrabold text-neutral-900 tabular-nums">
                    ₹{caravan.pricePerDay.toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-normal text-neutral-500">/day</span>
                  </p>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Driver Included
                </span>
              </div>

              {/* Calculator Form */}
              <div className="mt-5 space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    Pickup Hub
                  </label>
                  <select
                    value={selectedHub}
                    onChange={(e) => setSelectedHub(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 p-2 text-xs font-medium text-neutral-900 focus:border-amber-500 focus:outline-none"
                  >
                    {caravan.availableHubs.map((h, i) => (
                      <option key={i} value={h}>
                        {h} Depot
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="font-semibold text-neutral-700">Trip Duration</label>
                    <span className="font-bold text-amber-700 tabular-nums">{tripDays} Days</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="14"
                    value={tripDays}
                    onChange={(e) => setTripDays(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-0.5">
                    <span>2 days (Min)</span>
                    <span>7 days</span>
                    <span>14 days</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-100 space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedAddonBbq}
                      onChange={(e) => setSelectedAddonBbq(e.target.checked)}
                      className="rounded accent-amber-500"
                    />
                    <span>Add Campfire & BBQ Grill kit (+₹2,500)</span>
                  </label>
                </div>

                {/* Estimate Summary */}
                <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3.5 space-y-1.5 text-[11px] text-neutral-600">
                  <div className="flex justify-between">
                    <span>Base Vehicle ({tripDays} days):</span>
                    <span className="font-semibold text-neutral-800 tabular-nums">
                      ₹{basePrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Driver Daily Allowance:</span>
                    <span className="text-neutral-800 tabular-nums">
                      ₹{driverBatta.toLocaleString('en-IN')}
                    </span>
                  </div>
                  {bbqFee > 0 && (
                    <div className="flex justify-between">
                      <span>BBQ Kit Add-on:</span>
                      <span className="text-neutral-800 tabular-nums">₹{bbqFee.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-neutral-200 text-xs font-bold text-neutral-900">
                    <span>Estimated Rental Total:</span>
                    <span className="text-amber-700 tabular-nums text-sm">
                      ₹{totalCost.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-400 pt-1">
                    Refundable security deposit: ₹{caravan.securityDeposit.toLocaleString('en-IN')}. Fuel & state tolls paid per actuals.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openBookingModal(caravan)}
                  className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs shadow-md transition-colors text-center"
                >
                  Book This Caravan
                </button>

                <a
                  href={`https://wa.me/919409480403?text=${encodeURIComponent(`Hi HomesCaravan, I am interested in booking ${caravan.name} for a ${tripDays}-day road trip from ${selectedHub}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Chat on WhatsApp (+91 94094 80403)</span>
                </a>
              </div>

              {/* Trust markers */}
              <div className="mt-5 pt-4 border-t border-neutral-100 space-y-2 text-[11px] text-neutral-500">
                <div className="flex items-center gap-2">
                  <Shield className="h-3.5 w-3.5 text-amber-600" />
                  <span>Sanitized & Deep Cleaned Before Every Trip</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-amber-600" />
                  <span>24/7 Roadside Mechanical Assistance Included</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Ad Placeholder Section */}
        <AdPlaceholder />

      </div>
    </div>
  );
}
