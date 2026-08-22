/**
 * PassportIdentityPage Component
 * Renders the Left Page of the open passport.
 * Styled as an authentic official passport identity document with micro-typography,
 * guilloche security lines, profile photo frame, MRZ barcode zone, and edit/delete actions.
 */
export function PassportIdentityPage({ user, onEditProfile, onDeleteAccount }) {
  return (
    <div className="relative w-full h-full p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between text-slate-900 selection:bg-amber-200">
      {/* BACKGROUND SECURITY GUILLOCHE PATTERN & WATERMARK */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] flex items-center justify-center overflow-hidden">
        <svg className="w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] text-amber-950" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
        </svg>
      </div>

      {/* TOP HEADER - OFFICIAL PASSPORT DOCUMENT BANNER */}
      <div>
        <div className="flex items-start justify-between border-b border-amber-900/30 pb-3 lg:pb-4 mb-4 lg:mb-6">
          <div>
            <span className="text-[9px] lg:text-[11px] xl:text-xs uppercase tracking-[0.25em] font-extrabold text-amber-900/70 block">
              REPUBLIC OF GLOBETROTTER
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-serif text-slate-950 tracking-tight">
              PASSPORT / PASSEPORT
            </h2>
          </div>
          <div className="text-right">
            <span className="text-[9px] lg:text-[11px] xl:text-xs uppercase font-bold tracking-widest text-amber-900/60 block">Type / Code</span>
            <span className="text-xs lg:text-sm xl:text-base font-mono font-bold text-amber-950">P / IND</span>
          </div>
        </div>

        {/* PASSPORT DATA GRID & PHOTO */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 lg:gap-6 xl:gap-8 items-start">
          {/* PROFILE PHOTO WITH STAMP FRAME */}
          <div className="sm:col-span-5 flex flex-col items-center sm:items-start space-y-2 lg:space-y-3">
            <div className="relative group">
              {/* Outer Photo Frame */}
              <div className="w-28 h-36 sm:w-32 sm:h-40 md:w-36 md:h-48 lg:w-44 lg:h-56 xl:w-50 xl:h-64 rounded-xl xl:rounded-2xl overflow-hidden border-2 border-amber-900/40 bg-slate-200 shadow-md p-1 lg:p-1.5 bg-amber-50/50">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover rounded-lg xl:rounded-xl filter contrast-[1.05]"
                />
              </div>
              {/* Official Stamp Overlay on Photo corner */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-full border-2 border-amber-800/60 bg-amber-900/10 backdrop-blur-[1px] flex items-center justify-center rotate-[-15deg] pointer-events-none">
                <span className="text-[7px] lg:text-[9px] xl:text-[10px] font-bold uppercase tracking-tighter text-amber-900 text-center leading-tight">
                  VERIFIED<br />TRAVELER
                </span>
              </div>
            </div>

            {/* Passport Doc Number below photo */}
            <div className="text-center sm:text-left pt-1 lg:pt-2">
              <span className="text-[8px] lg:text-[10px] xl:text-xs uppercase font-bold tracking-widest text-amber-900/60 block">Passport No.</span>
              <span className="text-xs sm:text-sm lg:text-base xl:text-lg font-mono font-bold text-amber-950 tracking-wider">
                {user.passportNo || "IND-8849201-GT"}
              </span>
            </div>
          </div>

          {/* PERSONAL IDENTITY DETAILS */}
          <div className="sm:col-span-7 space-y-2.5 lg:space-y-4 xl:space-y-5 text-slate-900 font-sans">
            {/* Surname / Name */}
            <div>
              <span className="text-[8px] lg:text-[10px] xl:text-xs uppercase font-bold tracking-widest text-amber-900/60 block">
                Full Name / Nom
              </span>
              <span className="text-base sm:text-lg lg:text-2xl xl:text-3xl font-bold font-serif text-slate-950 block leading-tight">
                {user.name}
              </span>
            </div>

            {/* Username & Nationality */}
            <div className="grid grid-cols-2 gap-2 lg:gap-4">
              <div>
                <span className="text-[8px] lg:text-[10px] xl:text-xs uppercase font-bold tracking-widest text-amber-900/60 block">Username</span>
                <span className="text-xs lg:text-sm xl:text-base font-mono font-semibold text-slate-800">{user.username}</span>
              </div>
              <div>
                <span className="text-[8px] lg:text-[10px] xl:text-xs uppercase font-bold tracking-widest text-amber-900/60 block">Nationality</span>
                <span className="text-xs lg:text-sm xl:text-base font-semibold text-slate-900">{user.nationality}</span>
              </div>
            </div>

            {/* Home & Date of Birth */}
            <div className="grid grid-cols-2 gap-2 lg:gap-4">
              <div>
                <span className="text-[8px] lg:text-[10px] xl:text-xs uppercase font-bold tracking-widest text-amber-900/60 block">Home Base</span>
                <span className="text-xs lg:text-sm xl:text-base font-semibold text-slate-900">{user.home}</span>
              </div>
              <div>
                <span className="text-[8px] lg:text-[10px] xl:text-xs uppercase font-bold tracking-widest text-amber-900/60 block">Date of Birth</span>
                <span className="text-xs lg:text-sm xl:text-base font-mono font-semibold text-slate-900">{user.dob}</span>
              </div>
            </div>

            {/* Member Since & Email */}
            <div className="grid grid-cols-2 gap-2 lg:gap-4">
              <div>
                <span className="text-[8px] lg:text-[10px] xl:text-xs uppercase font-bold tracking-widest text-amber-900/60 block">Issued / Member</span>
                <span className="text-xs lg:text-sm xl:text-base font-mono font-semibold text-slate-900">{user.memberSince}</span>
              </div>
              <div className="truncate">
                <span className="text-[8px] lg:text-[10px] xl:text-xs uppercase font-bold tracking-widest text-amber-900/60 block">Email</span>
                <span className="text-[11px] lg:text-xs xl:text-sm font-medium text-slate-800 truncate block">{user.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS ROW - TRIPS & COUNTRIES VISITED */}
        <div className="grid grid-cols-3 gap-2 lg:gap-4 mt-5 lg:mt-7 xl:mt-8 p-3 lg:p-4 xl:p-5 rounded-2xl bg-amber-900/5 border border-amber-900/20 text-center">
          <div>
            <span className="text-[8px] lg:text-[10px] xl:text-xs uppercase font-extrabold tracking-widest text-amber-900/70 block">Total Expeditions</span>
            <span className="text-lg lg:text-2xl xl:text-3xl font-bold font-mono text-amber-950">{user.tripsCount || 12}</span>
          </div>
          <div className="border-x border-amber-900/20">
            <span className="text-[8px] lg:text-[10px] xl:text-xs uppercase font-extrabold tracking-widest text-amber-900/70 block">Countries Explored</span>
            <span className="text-lg lg:text-2xl xl:text-3xl font-bold font-mono text-amber-950">{user.countriesVisited || 8}</span>
          </div>
          <div>
            <span className="text-[8px] lg:text-[10px] xl:text-xs uppercase font-extrabold tracking-widest text-amber-900/70 block">Cities Logged</span>
            <span className="text-lg lg:text-2xl xl:text-3xl font-bold font-mono text-amber-950">{user.citiesVisited || 14}</span>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION BUTTONS & MACHINE READABLE ZONE (MRZ) */}
      <div className="space-y-4 lg:space-y-5 pt-4 lg:pt-6 border-t border-amber-900/20">
        {/* EDIT PROFILE & DELETE ACCOUNT ACTIONS */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onEditProfile}
            className="px-5 py-2 lg:px-6 lg:py-2.5 xl:px-7 xl:py-3 rounded-full bg-amber-900 hover:bg-amber-950 text-amber-50 text-xs lg:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 lg:gap-2"
          >
            <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Edit Profile Endorsement
          </button>

          <button
            type="button"
            onClick={onDeleteAccount}
            className="text-[11px] lg:text-xs xl:text-sm font-semibold text-red-700/80 hover:text-red-900 underline underline-offset-4 transition-colors"
          >
            Delete Account
          </button>
        </div>

        {/* MACHINE READABLE PASSPORT ZONE (MRZ BARCODE) */}
        <div className="font-mono text-[9px] sm:text-[10px] lg:text-xs xl:text-sm tracking-[0.25em] lg:tracking-[0.3em] xl:tracking-[0.35em] leading-tight text-amber-950/70 select-none overflow-hidden whitespace-nowrap bg-amber-900/5 p-2 lg:p-3 xl:p-4 rounded-lg border border-amber-900/10">
          <div>P&lt;IND{user.name.toUpperCase().replace(/\s+/g, '&lt;')}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
          <div>88492013&lt;2IND9804147F2608229&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;02</div>
        </div>
      </div>
    </div>
  );
}
