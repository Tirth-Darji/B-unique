import { useState } from "react";

/**
 * EditTripModal Component
 * Allows user to edit past/completed trip details from the right page of the passport.
 * Updates state immediately.
 */
export function EditTripModal({ trip, onSave, onClose }) {
  const [formData, setFormData] = useState({
    id: trip.id,
    destination: trip.destination || trip.name || "",
    country: trip.country || "",
    startDate: trip.startDate || "",
    endDate: trip.endDate || "",
    duration: trip.details?.duration || trip.duration || "",
    budget: trip.details?.budget || trip.budget || "",
    description: trip.description || "",
    image: trip.image || "",
    placesVisited: trip.highlights ? trip.highlights.join(", ") : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTrip = {
      ...trip,
      destination: formData.destination,
      name: formData.destination,
      country: formData.country,
      startDate: formData.startDate,
      endDate: formData.endDate,
      duration: formData.duration,
      budget: formData.budget,
      description: formData.description,
      image: formData.image,
      details: {
        ...(trip.details || {}),
        duration: formData.duration,
        budget: formData.budget,
      },
      highlights: formData.placesVisited
        ? formData.placesVisited.split(",").map((s) => s.trim())
        : trip.highlights || [],
    };
    onSave(updatedTrip);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-trip-title"
    >
      <div
        className="w-full max-w-lg bg-[#faf7f0] text-slate-900 border border-amber-900/30 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-900/20 pb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 block">
              Passport Travel Record
            </span>
            <h2 id="edit-trip-title" className="text-xl font-bold font-serif text-slate-900">
              Edit Expedition Log
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-amber-900/10 hover:bg-amber-900/20 text-slate-700 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
          {/* Destination & Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
                Destination / City
              </label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900 font-semibold"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
              Cover Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900 font-mono text-[11px]"
            />
          </div>

          {/* Dates & Duration */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
                Start Date
              </label>
              <input
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-2.5 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900 text-xs"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
                End Date
              </label>
              <input
                type="text"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full px-2.5 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900 text-xs"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-2.5 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900 text-xs"
              />
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
              Estimated Budget
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900 font-medium"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
              Short Description / Summary
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900 text-xs leading-relaxed"
            />
          </div>

          {/* Places Visited / Highlights */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
              Places Visited (Comma separated)
            </label>
            <input
              type="text"
              name="placesVisited"
              value={formData.placesVisited}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900 text-xs"
              placeholder="Louvre, Eiffel Tower, Notre Dame"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-amber-900/20">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-amber-900/30 hover:bg-amber-900/10 text-amber-900 text-xs font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-amber-900 hover:bg-amber-950 text-amber-50 text-xs font-bold shadow-md transition-all"
            >
              Save Trip Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
