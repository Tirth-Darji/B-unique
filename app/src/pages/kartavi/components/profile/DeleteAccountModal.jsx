import { useState } from "react";

/**
 * DeleteAccountModal Component
 * Destructive action modal asking user to confirm account deletion.
 * Uses mock frontend state confirmation.
 */
export function DeleteAccountModal({ onClose, onConfirm }) {
  const [confirmInput, setConfirmInput] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onConfirm();
    }, 1000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-account-title"
    >
      <div
        className="w-full max-w-md bg-slate-900 border border-red-500/40 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-5 text-slate-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Warning Icon Banner */}
        <div className="flex items-center gap-3 text-red-400 border-b border-red-500/20 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-red-400 block">
              Destructive Action
            </span>
            <h3 id="delete-account-title" className="text-xl font-bold font-serif text-white">
              Delete Traveler Account?
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-300 leading-relaxed font-light">
          Are you sure you want to permanently revoke your GlobeTrotter passport and delete your traveler profile?
          This action will archive all your past expedition stamps, saved itineraries, and passport history.
        </p>

        {/* Type DELETE to confirm */}
        <div>
          <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5">
            Type <span className="text-red-400 font-mono font-bold">DELETE</span> to confirm
          </label>
          <input
            type="text"
            value={confirmInput}
            onChange={(e) => setConfirmInput(e.target.value)}
            placeholder="DELETE"
            className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-red-500 text-red-200 outline-none text-xs font-mono tracking-widest"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-colors"
          >
            Cancel Keep Profile
          </button>
          <button
            type="button"
            disabled={confirmInput.trim() !== "DELETE" || isDeleting}
            onClick={handleDelete}
            className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-500 disabled:opacity-40 disabled:hover:bg-red-600 text-white text-xs font-bold shadow-lg shadow-red-600/30 transition-all flex items-center gap-2"
          >
            {isDeleting ? (
              <span>Revoking Passport...</span>
            ) : (
              <span>Permanently Delete</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
