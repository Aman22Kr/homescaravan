import React from 'react';
import { Compass, ShieldCheck, Heart, Users, MapPin, Award } from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2 block">
            Our Journey
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            About HomesCaravan
          </h1>
          <p className="mt-2 text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Reimagining road travel across India by creating high-comfort, studio apartments on wheels that give travelers complete intimacy with nature.
          </p>
        </div>

        {/* Narrative & Philosophy */}
        <div className="space-y-8 mb-12">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="font-display text-xl font-bold text-neutral-900 mb-4">
              The HomesCaravan Story
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <p>
                India possesses some of the world's most spectacular landscapes—from misty Western Ghats rainforests and silent Thar Desert dunes to untouched Himalayan river valleys and coastal Konkan backwaters. Yet traditional travel often forced tourists into crowded hotels, rushed itineraries, and exhausting commutes.
              </p>
              <p>
                <strong>HomesCaravan</strong> was established to bridge this gap. Inspired by the ethos of slowing down, our mission is to empower families, couples, and adventurers to travel at their own pace without sacrificing 5-star comfort. Every campervan and motorhome in our fleet is engineered to withstand diverse terrain while offering the warmth of a boutique private studio.
              </p>
            </div>
          </div>

          {/* Pillars of Trust */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-amber-600 mb-3" />
              <h3 className="font-display font-bold text-base text-neutral-900">
                Safety & Sanitization
              </h3>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                Hospital-grade sterilization before every handover. Comprehensive RTO tourist permits and full commercial insurance coverage across all Indian states.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <Users className="h-6 w-6 text-amber-600 mb-3" />
              <h3 className="font-display font-bold text-base text-neutral-900">
                Verified Chauffeurs
              </h3>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                Our drivers are defensive driving certified, background-checked, and deeply respectful of guest privacy and cabin boundaries.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <Award className="h-6 w-6 text-amber-600 mb-3" />
              <h3 className="font-display font-bold text-base text-neutral-900">
                Eco-Conscious Off-Grid
              </h3>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                High-capacity rooftop solar arrays and lithium battery storage mean zero engine idle noise or smoke at scenic campsites.
              </p>
            </div>
          </div>

          {/* Network of Hubs */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="font-display text-xl font-bold text-neutral-900 mb-3">
              Pan-India Presence & Departure Depots
            </h2>
            <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
              We maintain dedicated service depots and sanitized dispatch hubs in key travel gateways:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-neutral-800">
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-600" /> Mumbai & Pune
              </div>
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-600" /> Delhi NCR
              </div>
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-600" /> Bangalore
              </div>
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-600" /> Ahmedabad
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
