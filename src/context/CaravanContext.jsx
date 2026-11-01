import React, { createContext, useContext, useState, useEffect } from 'react';
import { CARAVANS } from '../data/caravansData.js';

const CaravanContext = createContext();

export function CaravanProvider({ children }) {
  // Saved / Wishlist items
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const stored = localStorage.getItem('homescaravan_saved_items');
      return stored ? JSON.parse(stored) : ['urbania-luxury-suite'];
    } catch {
      return ['urbania-luxury-suite'];
    }
  });

  // Submitted Inquiries / Bookings list
  const [inquiries, setInquiries] = useState(() => {
    try {
      const stored = localStorage.getItem('homescaravan_inquiries');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Search preferences in trip planner
  const [searchParams, setSearchParams] = useState(() => {
    try {
      const stored = localStorage.getItem('homescaravan_search_prefs');
      return stored
        ? JSON.parse(stored)
        : {
            hub: 'Mumbai',
            startDate: '',
            endDate: '',
            guests: 2,
            category: 'all',
          };
    } catch {
      return {
        hub: 'Mumbai',
        startDate: '',
        endDate: '',
        guests: 2,
        category: 'all',
      };
    }
  });

  // Booking Modal State
  const [activeBookingCaravan, setActiveBookingCaravan] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync savedIds to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('homescaravan_saved_items', JSON.stringify(savedIds));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [savedIds]);

  // Sync inquiries to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('homescaravan_inquiries', JSON.stringify(inquiries));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [inquiries]);

  // Sync searchParams to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('homescaravan_search_prefs', JSON.stringify(searchParams));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [searchParams]);

  const toggleSave = (caravanId) => {
    setSavedIds((prev) => {
      const exists = prev.includes(caravanId);
      const updated = exists ? prev.filter((id) => id !== caravanId) : [...prev, caravanId];
      showToast(exists ? 'Removed from saved caravans' : 'Saved to your caravan wishlist');
      return updated;
    });
  };

  const isSaved = (caravanId) => savedIds.includes(caravanId);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const openBookingModal = (caravan = null) => {
    setActiveBookingCaravan(caravan || CARAVANS[0]);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const addInquiry = (inquiryData) => {
    const newRecord = {
      id: `HC-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      ...inquiryData,
    };
    setInquiries((prev) => [newRecord, ...prev]);
    showToast(`Booking inquiry submitted! Reference ID: ${newRecord.id}`);
    return newRecord;
  };

  const savedCaravans = CARAVANS.filter((c) => savedIds.includes(c.id));

  return (
    <CaravanContext.Provider
      value={{
        savedIds,
        savedCaravans,
        toggleSave,
        isSaved,
        inquiries,
        addInquiry,
        searchParams,
        setSearchParams,
        isWishlistOpen,
        setIsWishlistOpen,
        isBookingModalOpen,
        openBookingModal,
        closeBookingModal,
        activeBookingCaravan,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CaravanContext.Provider>
  );
}

export function useCaravan() {
  const ctx = useContext(CaravanContext);
  if (!ctx) {
    throw new Error('useCaravan must be used within a CaravanProvider');
  }
  return ctx;
}
