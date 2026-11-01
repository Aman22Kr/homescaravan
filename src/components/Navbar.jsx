import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Bookmark, Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import { useCaravan } from '../context/CaravanContext.jsx';

export default function Navbar() {
  const location = useLocation();
  const { savedIds, setIsWishlistOpen, openBookingModal } = useCaravan();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Fleet & RVs', path: '/fleet' },
    { label: 'Routes & Destinations', path: '/destinations' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Campsites', path: '/campsites' },
    { label: 'Tariffs', path: '/tariffs' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    return path !== '/' && location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single-element Brand Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-neutral-900 whitespace-nowrap shrink-0 group"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-amber-400 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors shadow-sm">
            <Compass className="h-5 w-5" />
          </span>
          <span className="font-display font-extrabold tracking-tight text-lg sm:text-xl text-neutral-900">
            homes<span className="text-amber-600">caravan</span>
          </span>
        </Link>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600">
          {navLinks.slice(0, 6).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-neutral-950 py-1 border-b-2 ${
                isActive(item.path)
                  ? 'border-amber-500 font-semibold text-neutral-950'
                  : 'border-transparent text-neutral-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Zone 3: Wishlist toggle and 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setIsWishlistOpen(true)}
            aria-label="View Saved Caravans"
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
          >
            <Bookmark className="h-4 w-4" />
            {savedIds.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-bold text-neutral-950">
                {savedIds.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => openBookingModal()}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            Plan Road Trip
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-50 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-neutral-200 bg-white px-4 py-5 shadow-lg lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-amber-50 text-amber-900 font-semibold'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="h-4 w-4 text-neutral-400" />
              </Link>
            ))}

            <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                Book a Caravan
              </button>
              <a
                href="tel:+919409480403"
                className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900"
              >
                <PhoneCall className="h-3.5 w-3.5 text-amber-600" />
                <span>+91 94094 80403 (Direct Hotline)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
