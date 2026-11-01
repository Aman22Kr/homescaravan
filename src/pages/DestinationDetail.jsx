import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Calendar, Check, Compass, ArrowRight, Shield } from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData.js';
import { CARAVANS } from '../data/caravansData.js';
import { useCaravan } from '../context/CaravanContext.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function DestinationDetail() {
  const { id } = useParams();
  const { openBookingModal } = useCaravan();

  const dest = DESTINATIONS.find((d) => d.id === id);

  if (!dest) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white p-8 rounded-2xl border border-neutral-200">
          <h2 className="font-display text-xl font-bold text-neutral-900">Circuit Not Found</h2>
          <p className="mt-2 text-xs text-neutral-600">The destination route does not exist.</p>
          <Link
            to="/destinations"
            className="mt-4 inline-block px-5 py-2 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs"
          >
            All Destinations
          </Link>
        </div>
      </div>
    );
  }

  const matchingCaravan = CARAVANS.find((c) => c.id === dest.recommendedCaravanId) || CARAVANS[0];

  return (
    <div className="min-h-screen bg-neutral-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Back Link */}
        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Circuits</span>
        </Link>

        {/* Hero Visual Card */}
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-900 shadow-xl mb-10">
          <div className="relative aspect-21/9 w-full overflow-hidden">
            <img
              src={dest.image}
              alt={dest.title}
              className="h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">
              {dest.region} · {dest.distance}
            </span>
            <h1 className="mt-1 font-display text-2xl sm:text-4xl font-extrabold text-white">
              {dest.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-400" /> {dest.duration}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-amber-400" /> Start: {dest.startHub}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-amber-400" /> Best Season: {dest.bestTime}
              </span>
            </div>
          </div>
        </div>

        {/* Overview & Recommended Caravan */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-neutral-900 mb-3">
                Circuit Overview
              </h2>
              <p className="text-sm leading-relaxed text-neutral-700">
                {dest.overview}
              </p>

              <div className="mt-6 pt-6 border-t border-neutral-100">
                <h3 className="font-display text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3">
                  Why Caravan Is the Best Way for this Route
                </h3>
                <div className="space-y-2">
                  {dest.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-neutral-900 mb-6">
                Curated Day-by-Day Itinerary
              </h2>

              <div className="space-y-6">
                {dest.itinerary.map((item) => (
                  <div key={item.day} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 font-display text-xs font-bold text-neutral-950">
                        {item.day}
                      </span>
                      {item.day !== dest.itinerary.length && (
                        <span className="h-full w-0.5 bg-neutral-200 my-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="font-display text-base font-bold text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Recommended Caravan Card */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-md">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                Recommended Vehicle
              </span>
              <h3 className="font-display text-lg font-bold text-neutral-900">
                {matchingCaravan.name}
              </h3>
              
              <div className="mt-4 rounded-xl overflow-hidden aspect-4/3 bg-neutral-100">
                <img
                  src={matchingCaravan.images.hero}
                  alt={matchingCaravan.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                {matchingCaravan.tagline}
              </p>

              <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-neutral-500">Tariff</span>
                  <p className="text-base font-bold text-neutral-900">
                    ₹{matchingCaravan.pricePerDay.toLocaleString('en-IN')}/day
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openBookingModal(matchingCaravan)}
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors"
                >
                  Book for this Trip
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-amber-50/50 p-6 text-xs text-neutral-700 space-y-3">
              <h4 className="font-display text-sm font-bold text-neutral-900">
                Route Tips & Campsite Power
              </h4>
              <p>
                All overnight halts on this route feature 220V power points to recharge the onboard lithium battery bank and water refilling.
              </p>
              <p className="font-medium text-amber-900">
                Need a customized stop or longer duration? Contact our road trip specialists.
              </p>
            </div>
          </div>

        </div>

        {/* Ad Placeholder Section */}
        <AdPlaceholder />

      </div>
    </div>
  );
}
