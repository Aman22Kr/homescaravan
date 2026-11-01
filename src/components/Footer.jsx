import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, Mail, MapPin, Shield, Heart } from 'lucide-react';
import { HUBS } from '../data/caravansData.js';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-neutral-950 font-bold">
                <Compass className="h-5 w-5" />
              </span>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                homes<span className="text-amber-400">caravan</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400 max-w-sm">
              India's premier luxury campervan and caravan rental platform. Transforming road trips into boutique experiential living with chauffeur-driven comfort, modern kitchenettes, and verified campsite networks.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-xs text-neutral-400">
              <a href="tel:+919409480403" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-amber-400" />
                <span>+91 94094 80403 (WhatsApp & Phone)</span>
              </a>
              <a href="mailto:hello@homescaravan.in" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-amber-400" />
                <span>hello@homescaravan.in</span>
              </a>
              <div className="flex items-center gap-2 text-neutral-400">
                <Shield className="h-4 w-4 text-amber-400" />
                <span>Govt RTO Approved Tourist Caravans & Insured</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Explore Fleet
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link to="/fleet" className="hover:text-amber-400 transition-colors">
                  All Caravans & RVs
                </Link>
              </li>
              <li>
                <Link to="/fleet?category=luxury-urbania" className="hover:text-amber-400 transition-colors">
                  Force Urbania Suites
                </Link>
              </li>
              <li>
                <Link to="/fleet?category=couple-campervan" className="hover:text-amber-400 transition-colors">
                  Couple Campervans
                </Link>
              </li>
              <li>
                <Link to="/fleet?category=family-cruiser" className="hover:text-amber-400 transition-colors">
                  6-Berth Family Cruisers
                </Link>
              </li>
              <li>
                <Link to="/fleet?category=off-road-4x4" className="hover:text-amber-400 transition-colors">
                  4x4 Expedition Rigs
                </Link>
              </li>
              <li>
                <Link to="/tariffs" className="hover:text-amber-400 transition-colors">
                  Tariff Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Routes & Campsites */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Top Circuits
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link to="/destinations/mumbai-konkan-goa" className="hover:text-amber-400 transition-colors">
                  Mumbai - Konkan - Goa
                </Link>
              </li>
              <li>
                <Link to="/destinations/rajasthan-royal-desert-circuit" className="hover:text-amber-400 transition-colors">
                  Rajasthan Desert Odyssey
                </Link>
              </li>
              <li>
                <Link to="/destinations/western-ghats-coffee-trails" className="hover:text-amber-400 transition-colors">
                  Western Ghats Coffee Trail
                </Link>
              </li>
              <li>
                <Link to="/destinations/kutch-white-desert-safari" className="hover:text-amber-400 transition-colors">
                  Rann of Kutch Full Moon
                </Link>
              </li>
              <li>
                <Link to="/campsites" className="hover:text-amber-400 transition-colors">
                  Verified Campsites Directory
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-amber-400 transition-colors">
                  How Caravan Rental Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Hubs & Cities */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Departure Hubs
            </h4>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {HUBS.map((hub) => (
                <span
                  key={hub.id}
                  className="rounded bg-neutral-800/80 px-2 py-1 text-[11px] text-neutral-300"
                >
                  {hub.name}
                </span>
              ))}
            </div>
            <div className="mt-4 text-xs text-neutral-400">
              <p>Doorstep delivery and depot pickups available in all major metropolitan hubs.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="mt-12 border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} HomesCaravan (Recreated from travelhomes.in under new brand identity). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-neutral-400 transition-colors">
              About HomesCaravan
            </Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-neutral-400 transition-colors">
              Support & Bookings
            </Link>
            <span>·</span>
            <span className="text-neutral-600">Client-Side Demo (LocalStorage Mode)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
