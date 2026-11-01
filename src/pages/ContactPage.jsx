import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { useCaravan } from '../context/CaravanContext.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function ContactPage() {
  const { addInquiry } = useCaravan();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('Maharashtra & Western Ghats');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    addInquiry({
      caravanName: 'General Consultation',
      hub: region,
      name,
      phone,
      email,
      notes: message,
      estimatedTotal: 0,
      status: 'Consultation Requested'
    });

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2 block">
            Direct Support Desk
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Contact HomesCaravan
          </h1>
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
            Have questions about vehicle availability, route feasibility, or customized caravan itineraries? Our trip concierge team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Contact Details Column */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-display font-bold text-base text-neutral-900 mb-4">
                Booking Concierge
              </h3>
              
              <div className="space-y-4 text-xs text-neutral-700">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-[11px]">Phone & WhatsApp:</span>
                    <a href="tel:+919409480403" className="font-bold text-neutral-900 hover:text-amber-600 transition-colors">
                      +91 94094 80403
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-[11px]">Email Inquiries:</span>
                    <a href="mailto:hello@homescaravan.in" className="font-bold text-neutral-900 hover:text-amber-600 transition-colors">
                      hello@homescaravan.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-[11px]">Working Hours:</span>
                    <span className="font-semibold text-neutral-900">
                      08:00 AM – 10:00 PM IST (Daily)
                    </span>
                    <p className="text-[10px] text-neutral-400 mt-0.5">24/7 Roadside SOS for on-trip guests</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hub Depots */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm text-xs">
              <h4 className="font-display font-bold text-sm text-neutral-900 mb-3">
                Principal Dispatch Depots
              </h4>
              <ul className="space-y-2 text-neutral-600">
                <li><strong>Mumbai Hub:</strong> BKC & Navi Mumbai Depot</li>
                <li><strong>Pune Hub:</strong> Kalyani Nagar Terminal</li>
                <li><strong>Delhi Hub:</strong> Aerocity / Gurugram Gateway</li>
                <li><strong>Bangalore Hub:</strong> Indiranagar & Airport Logistics Hub</li>
                <li><strong>Ahmedabad Hub:</strong> SG Highway Depot</li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-lg font-bold text-neutral-900 mb-1">
                Send a Message or Request a Callback
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Tell us your expected dates, group size, or route preferences.
              </p>

              {submitted ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 font-display">
                    Thank You, {name}!
                  </h4>
                  <p className="mt-1 text-xs text-neutral-600 max-w-sm mx-auto">
                    Your message has been recorded. Our trip coordinator will call or message your WhatsApp at <strong className="text-neutral-900">{phone}</strong> within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-xl border border-neutral-300 p-2.5 text-xs text-neutral-900 focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        WhatsApp / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 94094 80403"
                        className="w-full rounded-xl border border-neutral-300 p-2.5 text-xs text-neutral-900 focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full rounded-xl border border-neutral-300 p-2.5 text-xs text-neutral-900 focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Preferred Road Trip Region
                      </label>
                      <select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="w-full rounded-xl border border-neutral-300 p-2.5 text-xs text-neutral-900 focus:border-amber-500 focus:outline-none"
                      >
                        <option value="Maharashtra & Goa">Maharashtra & Konkan Coast / Goa</option>
                        <option value="Rajasthan Thar Circuit">Rajasthan & Thar Desert</option>
                        <option value="Western Ghats & South">Karnataka & Western Ghats</option>
                        <option value="Kutch Gujarat">Gujarat Rann of Kutch</option>
                        <option value="Himachal & Ladakh">Himachal & Ladakh</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Trip Details or Specific Questions
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details like tentative travel dates, number of travelers, questions about driver accommodation or campsite booking..."
                      className="w-full rounded-xl border border-neutral-300 p-2.5 text-xs text-neutral-900 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs shadow-md transition-colors inline-flex items-center gap-2"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Ad Placeholder Section */}
        <AdPlaceholder />

      </div>
    </div>
  );
}
