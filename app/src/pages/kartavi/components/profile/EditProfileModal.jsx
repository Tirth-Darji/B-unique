import { useState } from "react";

/**
 * EditProfileModal Component
 * Allows user to update their personal identity and passport details.
 * Features an editorial passport-styled modal dialog.
 */
export function EditProfileModal({ user, onSave, onClose }) {
  const [formData, setFormData] = useState({
    name: user.name || "",
    username: user.username || "",
    email: user.email || "",
    nationality: user.nationality || "",
    home: user.home || "",
    dob: user.dob || "",
    avatar: user.avatar || "",
    bio: user.bio || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-profile-title"
    >
      <div
        className="w-full max-w-lg bg-[#faf7f0] text-slate-900 border border-amber-900/30 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-900/20 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 block">
              Passport Record Endorsement
            </span>
            <h2 id="edit-profile-title" className="text-2xl font-bold font-serif text-slate-900">
              Edit Passport Identity
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
          {/* Avatar URL */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
              Profile Photo URL
            </label>
            <input
              type="text"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900 text-xs font-mono"
              placeholder="https://..."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Full Name */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900 font-semibold"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Email */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900"
              />
            </div>

            {/* Nationality */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
                Nationality
              </label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Home Location */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
                Home Base / City
              </label>
              <input
                type="text"
                name="home"
                value={formData.home}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
                Date of Birth
              </label>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900 uppercase font-mono"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-amber-900/80 mb-1">
              Personal Travel Motto / Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 rounded-xl bg-white border border-amber-900/20 focus:border-amber-700 outline-none text-slate-900 text-xs"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-amber-900/20">
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
              Save Endorsement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
