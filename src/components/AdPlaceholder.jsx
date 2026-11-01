import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function AdPlaceholder({ className = '' }) {
  return (
    <aside
      aria-label="Sponsored Advertisement"
      className={`w-full max-w-5xl mx-auto my-8 px-4 ${className}`}
    >
      <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100/80 p-4 sm:p-5 transition-colors hover:border-neutral-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
                  Partner Spotlight
                </span>
                <span className="text-neutral-300">·</span>
                <span className="text-xs font-medium text-neutral-800">
                  Wildcraft & Dometic Outdoor Equipment
                </span>
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">
                Engineered camping gear, portable power banks, and coolers tested for rugged Indian road trips.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
            <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest border border-neutral-200 rounded px-1.5 py-0.5 bg-white">
              Ad
            </span>
            <button
              type="button"
              onClick={() => alert('Sponsor preview: HomesCaravan travelers receive 15% off certified off-grid expedition accessories.')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-700 hover:text-amber-600 transition-colors"
            >
              <span>Explore Gear</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
