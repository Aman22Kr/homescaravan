import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Users, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { useCaravan } from '../context/CaravanContext.jsx';
import { CARAVANS, HUBS } from '../data/caravansData.js';

export default function BookingModal() {
  const { isBookingModalOpen, closeBookingModal, activeBookingCaravan, addInquiry } = useCaravan();

  const [selectedCaravanId, setSelectedCaravanId] = useState(
    activeBookingCaravan ? activeBookingCaravan.id : CARAVANS[0].id
  );
  const [hub, setHub] = useState('Mumbai');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [bbqAddon, setBbqAddon] = useState(false);
  const [petAddon, setPetAddon] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState(null);

  useEffect(() => {
    if (activeBookingCaravan) {
      setSelectedCaravanId(activeBookingCaravan.id);
    }
  }, [activeBookingCaravan]);

  if (!isBookingModalOpen) return null;

  const currentCaravan = CARAVANS.find((c) => c.id === selectedCaravanId) || CARAVANS[0];

  // Calculate days
  const calculateDays = () => {
    if (!startDate || !endDate) return 3; // Default 3 days minimum
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const days = calculateDays();
  const baseRental = currentCaravan.pricePerDay * days;
  const addonsTotal = (bbqAddon ? 2500 : 0) + (petAddon ? 3000 : 0);
  const driverBatta = 1200 * days; // ₹1200/day driver daily allowance standard in India
  const estimatedTotal = baseRental + addonsTotal + driverBatta;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const record = addInquiry({
      caravanId: currentCaravan.id,
      caravanName: currentCaravan.name,
      hub,
      startDate: startDate || 'Flexible (Upcoming weekend)',
      endDate: endDate || '3-day duration',
      days,
      guests,
      name,
      phone,
      email,
      notes,
      addons: {
        bbq: bbqAddon,
        pet: petAddon,
      },
      estimatedTotal,
      status: 'Inquiry Confirmed',
    });

    setSubmittedInquiry(record);
  };

  const handleReset = () => {
    setSubmittedInquiry(null);
    closeBookingModal();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm transition-opacity"
          onClick={handleReset}
        />

        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-neutral-200">
          {/* Header */}
          <div className="bg-neutral-900 px-6 py-5 text-white flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-400">
                HomesCaravan Official Booking Desk
              </span>
              <h3 className="text-lg font-bold font-display mt-0.5">
                Plan Your Caravan Road Trip
              </h3>
            </div>
            <button
              onClick={handleReset}
              className="rounded-lg p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {submittedInquiry ? (
            <div className="p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold font-display text-neutral-900">
                Inquiry Successfully Logged!
              </h4>
              <p className="mt-2 text-sm text-neutral-600 max-w-md mx-auto">
                Thank you <strong className="text-neutral-900">{submittedInquiry.name}</strong>. Your caravan itinerary request for{' '}
                <strong className="text-neutral-900">{submittedInquiry.caravanName}</strong> has been saved.
              </p>
              
              <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-neutral-900">{submittedInquiry.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Departure Hub:</span>
                  <span className="font-medium text-neutral-900">{submittedInquiry.hub}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Duration:</span>
                  <span className="font-medium text-neutral-900">{submittedInquiry.days} Days ({submittedInquiry.guests} Guests)</span>
                </div>
                <div className="flex justify-between border-t border-neutral-200 pt-2 font-semibold">
                  <span className="text-neutral-700">Estimated Tariff:</span>
                  <span className="text-amber-600 tabular-nums">₹{submittedInquiry.estimatedTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/919409480403?text=${encodeURIComponent(`Hi HomesCaravan team, I submitted an inquiry #${submittedInquiry.id} for ${submittedInquiry.caravanName} departing from ${submittedInquiry.hub}. Please share availability.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors inline-flex items-center justify-center gap-2"
                >
                  Confirm on WhatsApp (+91 94094 80403)
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-neutral-700 font-semibold text-xs transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Caravan Selection */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Select Caravan Model
                </label>
                <select
                  value={selectedCaravanId}
                  onChange={(e) => setSelectedCaravanId(e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 font-medium"
                >
                  {CARAVANS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} — ₹{c.pricePerDay.toLocaleString('en-IN')}/day ({c.capacity.berths} Berths)
                    </option>
                  ))}
                </select>
              </div>

              {/* Hub & Dates Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Pickup Hub
                  </label>
                  <select
                    value={hub}
                    onChange={(e) => setHub(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-xs text-neutral-900 focus:border-amber-500 focus:outline-none"
                  >
                    {HUBS.map((h) => (
                      <option key={h.id} value={h.name}>
                        {h.name} ({h.state})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-xs text-neutral-900 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-xs text-neutral-900 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Guests and Addons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-neutral-100">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Number of Travelers
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="1"
                      max={currentCaravan.capacity.seating}
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                    <span className="text-xs font-bold text-neutral-900 tabular-nums px-2 py-1 bg-neutral-100 rounded">
                      {guests} Guests
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-neutral-700">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Trip Add-ons
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bbqAddon}
                      onChange={(e) => setBbqAddon(e.target.checked)}
                      className="rounded accent-amber-500"
                    />
                    <span>Campfire & BBQ Charcoal Grill Kit (+₹2,500)</span>
                  </label>
                  {currentCaravan.specs.petFriendly && (
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={petAddon}
                        onChange={(e) => setPetAddon(e.target.checked)}
                        className="rounded accent-amber-500"
                      />
                      <span>Pet Sanitization Fee (+₹3,000)</span>
                    </label>
                  )}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-neutral-100">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aman Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-xs text-neutral-900 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-xs text-neutral-900 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Tariff Estimate Box */}
              <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
                <div className="flex items-center justify-between text-xs text-neutral-700 mb-1">
                  <span>Estimated {days}-day Rental ({currentCaravan.name}):</span>
                  <span className="tabular-nums font-semibold">₹{baseRental.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                  <span>Driver Allowance ({days} days @ ₹1,200/day):</span>
                  <span className="tabular-nums">₹{driverBatta.toLocaleString('en-IN')}</span>
                </div>
                {addonsTotal > 0 && (
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                    <span>Optional Selected Add-ons:</span>
                    <span className="tabular-nums">₹{addonsTotal.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex items-center justify-between pt-2 border-t border-amber-200 font-bold text-sm text-neutral-900">
                  <span>Total Estimated Cost:</span>
                  <span className="text-amber-700 tabular-nums text-base">₹{estimatedTotal.toLocaleString('en-IN')}</span>
                </div>
                <p className="mt-1 text-[11px] text-neutral-500">
                  *Excludes interstate toll taxes & fuel which are paid as per actuals. Refundable security deposit: ₹{currentCaravan.securityDeposit.toLocaleString('en-IN')}.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
