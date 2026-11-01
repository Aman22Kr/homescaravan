import React from 'react';
import { useCaravan } from '../context/CaravanContext.jsx';
import { CheckCircle, Info } from 'lucide-react';

export default function ToastNotification() {
  const { toastMessage } = useCaravan();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl bg-neutral-900 px-4 py-3 text-xs font-medium text-white shadow-2xl border border-neutral-800 animate-in fade-in slide-in-from-bottom-3 duration-200">
      <CheckCircle className="h-4 w-4 text-amber-400 shrink-0" />
      <span>{toastMessage}</span>
    </div>
  );
}
