import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-between py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-md mx-auto my-auto">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 mx-auto mb-6">
          <Compass className="h-8 w-8 animate-spin-slow" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
          Error 404
        </span>
        <h1 className="mt-2 font-display text-3xl font-extrabold text-neutral-900 tracking-tight">
          Lost on the Highway?
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
          The road you are looking for has taken a detour. Let's steer you back to our luxury caravan fleet or popular Indian circuits.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors shadow-sm"
          >
            Homepage
          </Link>
          <Link
            to="/fleet"
            className="px-5 py-2.5 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-neutral-800 font-semibold text-xs transition-colors"
          >
            Browse Fleet
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <AdPlaceholder />
      </div>
    </div>
  );
}
