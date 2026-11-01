import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, ArrowRight, Bed, Bath, Users } from 'lucide-react';
import { useCaravan } from '../context/CaravanContext.jsx';

export default function WishlistDrawer() {
  const { isWishlistOpen, setIsWishlistOpen, savedCaravans, toggleSave, openBookingModal } = useCaravan();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-neutral-900">
                Saved Caravans ({savedCaravans.length})
              </h3>
              <p className="text-xs text-neutral-500">
                Persisted in your browser storage for this trip
              </p>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {savedCaravans.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-sm font-medium text-neutral-700">No saved caravans yet</p>
                <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                  Click the bookmark icon on any caravan in our fleet to save it for your road trip comparison.
                </p>
                <Link
                  to="/fleet"
                  onClick={() => setIsWishlistOpen(false)}
                  className="mt-4 inline-block px-4 py-2 text-xs font-semibold text-neutral-900 bg-amber-400 rounded-lg hover:bg-amber-300"
                >
                  Browse Fleet
                </Link>
              </div>
            ) : (
              savedCaravans.map((caravan) => (
                <div
                  key={caravan.id}
                  className="rounded-xl border border-neutral-200 p-3.5 transition-all hover:border-neutral-300 hover:shadow-sm"
                >
                  <div className="flex gap-3">
                    <img
                      src={caravan.images.hero}
                      alt={caravan.name}
                      className="h-20 w-24 object-cover rounded-lg shrink-0 bg-neutral-100"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <Link
                          to={`/fleet/${caravan.id}`}
                          onClick={() => setIsWishlistOpen(false)}
                          className="font-display font-semibold text-sm text-neutral-900 hover:text-amber-600 line-clamp-1"
                        >
                          {caravan.name}
                        </Link>
                        <button
                          onClick={() => toggleSave(caravan.id)}
                          aria-label="Remove from saved"
                          className="text-neutral-400 hover:text-red-500 p-1"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1.5 text-[11px] text-neutral-500">
                        <span className="flex items-center gap-1">
                          <Bed className="h-3 w-3 text-neutral-400" /> {caravan.capacity.berths} Berths
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3 text-neutral-400" /> {caravan.capacity.seating} Seats
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-neutral-100">
                        <span className="text-xs font-bold text-neutral-900 tabular-nums">
                          ₹{caravan.pricePerDay.toLocaleString('en-IN')}{' '}
                          <span className="text-[10px] font-normal text-neutral-500">/day</span>
                        </span>
                        <button
                          onClick={() => {
                            setIsWishlistOpen(false);
                            openBookingModal(caravan);
                          }}
                          className="px-2.5 py-1 text-[11px] font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                        >
                          Inquire
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Action */}
          {savedCaravans.length > 0 && (
            <div className="p-5 border-t border-neutral-200 bg-neutral-50">
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  openBookingModal(savedCaravans[0]);
                }}
                className="w-full py-2.5 px-4 flex items-center justify-center gap-2 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-sm transition-colors"
              >
                <span>Request Trip Quote For All</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
