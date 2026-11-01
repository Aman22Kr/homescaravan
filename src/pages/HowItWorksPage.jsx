import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Key, 
  ShieldCheck, 
  Coffee, 
  Fuel, 
  Compass, 
  ArrowRight,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { useCaravan } from '../context/CaravanContext.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function HowItWorksPage() {
  const { openBookingModal } = useCaravan();

  const steps = [
    {
      step: '01',
      title: 'Choose Your Caravan & Custom Route',
      desc: 'Browse our catalog of luxury Force Urbanias, 2-person campervans, or 6-berth family motorhomes based on your travel party size. Pick a pre-planned scenic circuit or design your custom itinerary.'
    },
    {
      step: '02',
      title: 'Trip Confirmation & Chauffeur Match',
      desc: 'Submit your dates and hub. Our trip desk assigns a background-verified tourist chauffeur skilled in mountain navigation, along with pre-booking your verified campsite spots.'
    },
    {
      step: '03',
      title: 'Departure: Depot Pickup or Doorstep Handover',
      desc: 'Meet your chauffeur and vehicle at our city depot (or opt for doorstep home delivery). We conduct a 15-minute briefing to demonstrate the AC, induction stovetop, and washroom controls.'
    },
    {
      step: '04',
      title: 'Off-Grid Freedom with 24/7 Road Support',
      desc: 'Hit the road! Cook fresh meals whenever you please, stop at scenic viewpoints for tea, and sleep under starry skies. Our technical support team monitors vehicle diagnostics 24/7.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2 block">
            Seamless & Transparent
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            How Renting a Caravan Works
          </h1>
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
            From booking your favorite motorhome to parking next to sea waves or mountain peaks—here is everything you need to know about taking a caravan trip in India with HomesCaravan.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md"
            >
              <span className="font-display text-2xl font-black text-amber-500">
                {s.step}
              </span>
              <h3 className="font-display text-lg font-bold text-neutral-900 mt-2">
                {s.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Transparency Table: What is Included vs Excluded */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 mb-16 shadow-sm">
          <h2 className="font-display text-xl font-bold text-neutral-900 mb-6 text-center">
            Transparent Inclusions & Trip Policies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs">
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-5">
              <h3 className="font-display font-bold text-sm text-emerald-900 mb-4 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>What's Included in Your Rental:</span>
              </h3>
              <ul className="space-y-2.5 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>Dedicated commercial tourist driver (8 hours drive time daily)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>Fresh bed linens, plush pillows, and cozy blankets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>Kitchen induction plate, cookware, dining crockery, and electric kettle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>Outdoor roll-out shade awning, folding camping chairs, and picnic table</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>Full tank fresh water and initial chemical toilet bio-treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>24/7 technical assistance and emergency towing network coverage</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <h3 className="font-display font-bold text-sm text-neutral-900 mb-4 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-amber-600" />
                <span>Paid Directly by Guest as Incurred:</span>
              </h3>
              <ul className="space-y-2.5 text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                  <span>Vehicle Diesel Fuel (Handed over full tank, return full tank)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                  <span>FASTag National Highway Tolls and State Border Entry Permits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                  <span>Nightly parking / power-hookup fees at private campsites (₹1,000–₹1,800/night)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                  <span>Driver daily night allowance (bata) @ ₹1,200/day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                  <span>Refundable security deposit (returned within 48h after trip completion)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => openBookingModal()}
            className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm shadow-md transition-colors"
          >
            Start Your Caravan Reservation
          </button>
        </div>

        {/* Ad Placeholder Section */}
        <AdPlaceholder />

      </div>
    </div>
  );
}
