import React, { useState } from 'react';
import { MapPin, Zap, Droplets, ShieldCheck, Flame, Search } from 'lucide-react';
import { CAMPSITES } from '../data/destinationsData.js';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function CampsitesPage() {
  const [filterState, setFilterState] = useState('all');

  const states = ['all', 'Maharashtra', 'Karnataka', 'Rajasthan', 'Uttarakhand'];

  const filteredCampsites = filterState === 'all'
    ? CAMPSITES
    : CAMPSITES.filter((c) => c.state.toLowerCase() === filterState.toLowerCase());

  return (
    <div className="min-h-screen bg-neutral-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <span>Verified Caravan Parks</span>
            <span>·</span>
            <span>Safe Overnight Halts Across India</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Verified Campsites & Caravan Parks
          </h1>
          <p className="mt-2 text-sm text-neutral-600 max-w-2xl leading-relaxed">
            Never wonder where to park your motorhome. We collaborate with private coffee estates, beachfront farms, and desert sanctuaries that offer 220V power charging, clean fresh water refills, and 24/7 security.
          </p>
        </div>

        {/* State Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {states.map((st) => (
            <button
              key={st}
              onClick={() => setFilterState(st)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors capitalize ${
                filterState === st
                  ? 'bg-neutral-900 text-amber-400'
                  : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {st === 'all' ? 'All States' : st}
            </button>
          ))}
        </div>

        {/* Campsites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredCampsites.map((site) => (
            <div
              key={site.id}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:border-neutral-300 transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                    {site.state} · {site.city}
                  </span>
                  <h3 className="font-display text-lg font-bold text-neutral-900 mt-1">
                    {site.name}
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-neutral-500 uppercase block">Parking Fee</span>
                  <span className="text-sm font-extrabold text-neutral-900 tabular-nums">
                    ₹{site.nightlyRate.toLocaleString('en-IN')}{' '}
                    <span className="text-[10px] font-normal text-neutral-500">/night</span>
                  </span>
                </div>
              </div>

              <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                {site.description}
              </p>

              <div className="mt-5 pt-4 border-t border-neutral-100">
                <span className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider block mb-2">
                  Verified Facility Hookups:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {site.hookups.map((h, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-neutral-100 px-2.5 py-1 text-[11px] text-neutral-700 font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <ShieldCheck className="h-4 w-4" /> 24/7 Gated Security
                </span>
                <span className="text-amber-600 font-semibold">★ {site.rating} rating</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ad Placeholder Section */}
        <AdPlaceholder />

      </div>
    </div>
  );
}
