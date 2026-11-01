import React, { useState } from 'react';
import { Play, Volume2, ShieldCheck } from 'lucide-react';

export default function VideoPlaceholder({
  title = 'Watch HomesCaravan Interior Walkthrough & Road Experience',
  subtitle = 'Experience 4K studio tour of the Force Urbania & off-grid camping setup in India',
  className = ''
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 text-white shadow-xl ${className}`}>
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative aspect-video w-full bg-neutral-900 flex items-center justify-center overflow-hidden">
        {/* Background Image / Ambient Texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105"
          style={{ backgroundImage: `url('/src/assets/images/hero_caravan_landscape_1793509625763.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

        {/* Video Player Overlay Simulation (Blank placeholder per requirements) */}
        {!isPlaying ? (
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Play video showcase"
              className="group flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-amber-500 text-neutral-950 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-500/40"
            >
              <Play className="h-7 w-7 sm:h-8 sm:w-8 translate-x-0.5 fill-current transition-transform group-hover:scale-110" />
            </button>
            <h4 className="mt-5 text-base sm:text-lg font-semibold tracking-tight text-white">
              {title}
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-neutral-300">
              {subtitle}
            </p>
            <div className="mt-3 flex items-center gap-3 text-[11px] text-neutral-400">
              <span>Duration: 3m 42s</span>
              <span>·</span>
              <span>4K Ultra HD</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-amber-400">
                <ShieldCheck className="h-3 w-3" /> Official Walkthrough
              </span>
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center bg-neutral-900/90 rounded-xl border border-neutral-800 max-w-md mx-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-amber-400 mb-3">
              <Volume2 className="h-6 w-6 animate-pulse" />
            </div>
            <p className="text-sm font-medium text-white">
              Video Playback Placeholder
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              External YouTube stream embed disabled to ensure fast offline performance and zero third-party cookie tracking.
            </p>
            <button
              onClick={() => setIsPlaying(false)}
              className="mt-4 px-4 py-1.5 rounded-lg text-xs font-medium bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-colors"
            >
              Close Player
            </button>
          </div>
        )}

        {/* Video progress bar dummy */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800">
          <div className="h-full bg-amber-500 w-1/3" />
        </div>
      </div>
    </div>
  );
}
