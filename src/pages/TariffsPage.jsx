import React, { useState } from 'react';
import { Shield, CheckCircle, Calculator, PhoneCall, Sparkles } from 'lucide-react';
import { CARAVANS } from '../data/caravansData.js';
import { useCaravan } from '../context/CaravanContext.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function TariffsPage() {
  const { openBookingModal } = useCaravan();

  const [selectedVehicleId, setSelectedVehicleId] = useState(CARAVANS[0].id);
  const [days, setDays] = useState(4);
  const [bbqKit, setBbqKit] = useState(false);
  const [petCare, setPetCare] = useState(false);

  const vehicle = CARAVANS.find((c) => c.id === selectedVehicleId) || CARAVANS[0];

  const vehicleCost = vehicle.pricePerDay * days;
  const driverCost = 1200 * days;
  const addonsCost = (bbqKit ? 2500 : 0) + (petCare ? 3000 : 0);
  const grandTotal = vehicleCost + driverCost + addonsCost;

  return (
    <div className="min-h-screen bg-neutral-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2 block">
            No Hidden Fees
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Tariffs & Pricing Calculator
          </h1>
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
            Honest, per-day rates with dedicated tourist chauffeurs included across all models. Use our interactive estimator below to calculate your complete holiday budget.
          </p>
        </div>

        {/* Interactive Estimator Tool */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Calculator className="h-5 w-5 text-amber-600" />
            <h2 className="font-display text-xl font-bold text-neutral-900">
              Interactive Trip Cost Estimator
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5 text-xs">
              <div>
                <label className="block font-bold uppercase text-neutral-500 mb-1.5 text-[11px]">
                  Select Vehicle Model
                </label>
                <select
                  value={selectedVehicleId}
                  onChange={(e) => setSelectedVehicleId(e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 p-2.5 text-xs font-semibold text-neutral-900 focus:border-amber-500 focus:outline-none"
                >
                  {CARAVANS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} — ₹{c.pricePerDay.toLocaleString('en-IN')}/day ({c.capacity.berths} Berths)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-bold uppercase text-neutral-500 text-[11px]">
                    Trip Duration
                  </label>
                  <span className="font-bold text-amber-600 text-sm tabular-nums">
                    {days} Days
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="15"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-neutral-400">
                  <span>2 days</span>
                  <span>7 days</span>
                  <span>15 days</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100 space-y-2">
                <span className="font-bold uppercase text-neutral-500 text-[11px] block">
                  Optional Trip Add-ons:
                </span>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bbqKit}
                    onChange={(e) => setBbqKit(e.target.checked)}
                    className="rounded accent-amber-500"
                  />
                  <span>Outdoor BBQ Charcoal Camp Grill & Skewers (+₹2,500)</span>
                </label>
                {vehicle.specs.petFriendly && (
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={petCare}
                      onChange={(e) => setPetCare(e.target.checked)}
                      className="rounded accent-amber-500"
                    />
                    <span>Pet Sanitization & Travel Kit (+₹3,000)</span>
                  </label>
                )}
              </div>
            </div>

            {/* Live Calculation Output Card */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  Estimate Breakdown
                </span>
                <h3 className="font-display text-lg font-bold text-neutral-900 mt-1">
                  {vehicle.name}
                </h3>

                <div className="mt-4 space-y-2 text-xs text-neutral-700">
                  <div className="flex justify-between">
                    <span>Base Vehicle ({days} days @ ₹{vehicle.pricePerDay.toLocaleString('en-IN')}):</span>
                    <span className="tabular-nums font-semibold">₹{vehicleCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chauffeur Allowance ({days} days @ ₹1,200):</span>
                    <span className="tabular-nums">₹{driverCost.toLocaleString('en-IN')}</span>
                  </div>
                  {addonsCost > 0 && (
                    <div className="flex justify-between">
                      <span>Add-ons:</span>
                      <span className="tabular-nums">₹{addonsCost.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-3 border-t border-amber-200 text-sm font-extrabold text-neutral-900">
                    <span>Estimated Rental Total:</span>
                    <span className="text-amber-800 text-lg tabular-nums">
                      ₹{grandTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-500 pt-1">
                    <span>Refundable Security Deposit:</span>
                    <span className="tabular-nums font-medium text-neutral-700">₹{vehicle.securityDeposit.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-200">
                <button
                  type="button"
                  onClick={() => openBookingModal(vehicle)}
                  className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs shadow-md transition-colors"
                >
                  Proceed to Inquire for {days} Days
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Rates Comparison Table */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm mb-12 overflow-x-auto">
          <h2 className="font-display text-lg font-bold text-neutral-900 mb-4">
            Standard Daily Rates Comparison
          </h2>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 text-neutral-500 font-bold uppercase text-[10px]">
                <th className="py-3 px-4">Caravan Model</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Berths</th>
                <th className="py-3 px-4">Daily Rate</th>
                <th className="py-3 px-4">Security Deposit</th>
                <th className="py-3 px-4">Chauffeur</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {CARAVANS.map((c) => (
                <tr key={c.id} className="hover:bg-neutral-50">
                  <td className="py-3.5 px-4 font-bold text-neutral-900">{c.name}</td>
                  <td className="py-3.5 px-4 text-neutral-600">{c.category}</td>
                  <td className="py-3.5 px-4 text-neutral-600 tabular-nums">{c.capacity.berths} Berths</td>
                  <td className="py-3.5 px-4 font-bold text-neutral-900 tabular-nums">₹{c.pricePerDay.toLocaleString('en-IN')}</td>
                  <td className="py-3.5 px-4 text-neutral-600 tabular-nums">₹{c.securityDeposit.toLocaleString('en-IN')}</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-medium">Included</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ad Placeholder Section */}
        <AdPlaceholder />

      </div>
    </div>
  );
}
