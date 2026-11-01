import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, Calendar, Clock, ArrowRight, Shield } from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData.js';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <span>Curated Caravan Circuits</span>
            <span>·</span>
            <span>Pre-vetted Campsites & Hookups</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Popular Indian Road Trip Circuits
          </h1>
          <p className="mt-2 text-sm text-neutral-600 max-w-2xl leading-relaxed">
            From the white salt flats of Kutch to the emerald tea estates of Munnar and the turquoise beaches of South Goa, explore India with complete off-grid freedom.
          </p>
        </div>

        {/* Circuits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:border-neutral-300 hover:shadow-lg"
            >
              <div className="relative aspect-16/9 w-full overflow-hidden bg-neutral-200">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-lg bg-neutral-900/85 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {dest.duration} · {dest.distance}
                </span>
              </div>

              <div className="p-6 flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                    <span className="text-amber-700 font-semibold uppercase tracking-wider">{dest.region}</span>
                    <span>Best Time: {dest.bestTime}</span>
                  </div>

                  <Link
                    to={`/destinations/${dest.id}`}
                    className="font-display text-xl font-bold text-neutral-900 hover:text-amber-600 transition-colors block mt-1"
                  >
                    {dest.title}
                  </Link>

                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                    {dest.overview}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <span className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-neutral-600">
                      {dest.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="text-xs text-neutral-500">
                    <span>Depot: </span>
                    <strong className="text-neutral-900">{dest.startHub}</strong>
                  </div>
                  <Link
                    to={`/destinations/${dest.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 text-xs font-semibold transition-colors"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
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
