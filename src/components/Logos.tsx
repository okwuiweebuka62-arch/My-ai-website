import React from 'react';

// Nexora AI Logo Mark: Ribbon 'N' with purple/indigo/blue gradients
export function NexoraLogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="nexora-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="nexora-diag" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="nexora-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {/* Left leg */}
      <path
        d="M6 7.5C6 6.12 7.12 5 8.5 5H11C12.38 5 13.5 6.12 13.5 7.5V28.5C13.5 29.88 12.38 31 11 31H8.5C7.12 31 6 29.88 6 28.5V7.5Z"
        fill="url(#nexora-left)"
      />
      {/* Dynamic diagonal ribbon stroke */}
      <path
        d="M10.5 7.5L25.5 28.5C26.5 29.9 28.5 29.5 28.5 27.8V7.5C28.5 6.12 27.38 5 26 5H24C22.62 5 21.5 6.12 21.5 7.5V17L13.2 5.5C12.5 4.5 11 5 10.5 6.2V7.5Z"
        fill="url(#nexora-diag)"
        opacity="0.95"
      />
      {/* Right leg accent */}
      <path
        d="M22.5 7.5C22.5 6.12 23.62 5 25 5H27.5C28.88 5 30 6.12 30 7.5V28.5C30 29.88 28.88 31 27.5 31H25C23.62 31 22.5 29.88 22.5 28.5V7.5Z"
        fill="url(#nexora-right)"
      />
    </svg>
  );
}

// Google Logo (Clean Monochrome / White as in the source)
export function GoogleLogo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center text-white font-medium tracking-tight ${className}`}>
      <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-200">Google</span>
    </div>
  );
}

// Microsoft Logo (Four Squares + Microsoft text)
export function MicrosoftLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-neutral-200 ${className}`}>
      <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
        <div className="bg-neutral-300 w-1.5 h-1.5 rounded-[1px]"></div>
        <div className="bg-neutral-300 w-1.5 h-1.5 rounded-[1px]"></div>
        <div className="bg-neutral-300 w-1.5 h-1.5 rounded-[1px]"></div>
        <div className="bg-neutral-300 w-1.5 h-1.5 rounded-[1px]"></div>
      </div>
      <span className="text-base sm:text-lg font-semibold tracking-normal text-neutral-200">Microsoft</span>
    </div>
  );
}

// Adobe Logo (Stylized 'A' + Adobe text)
export function AdobeLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-neutral-200 ${className}`}>
      <svg className="w-5 h-5 fill-current text-neutral-200" viewBox="0 0 24 24">
        <path d="M13.963 2H24v20H13.963l4.316-11.455h-4.316zm-3.926 0H0v20h10.037L5.72 10.545h4.317zm1.963 8.182L15.926 22H11.61l-1.926-5.091H7.037z" />
      </svg>
      <span className="text-base sm:text-lg font-bold tracking-normal text-neutral-200">Adobe</span>
    </div>
  );
}

// Notion Logo (Notion monogram box + Notion text)
export function NotionLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-neutral-200 ${className}`}>
      <div className="w-5 h-5 rounded-md border border-neutral-300/80 flex items-center justify-center font-serif font-black text-xs text-neutral-200">
        N
      </div>
      <span className="text-base sm:text-lg font-semibold tracking-tight text-neutral-200">Notion</span>
    </div>
  );
}

// Spotify Logo (Spotify circle soundwaves + Spotify text)
export function SpotifyLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-neutral-200 ${className}`}>
      <svg className="w-5 h-5 fill-current text-neutral-200" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.307c-.215.352-.676.464-1.028.249-2.813-1.718-6.353-2.108-10.524-1.155-.401.092-.799-.16-.891-.561-.092-.402.16-.799.561-.891 4.568-1.044 8.49-.607 11.633 1.33.352.215.464.676.249 1.028zm1.464-3.254c-.27.441-.849.58-1.29.31-3.221-1.98-8.132-2.553-11.942-1.396-.498.151-1.026-.134-1.177-.632-.151-.498.134-1.026.632-1.177 4.364-1.325 9.782-.686 13.467 1.58.441.27.58.849.31 1.315zm.126-3.393C15.22 8.397 8.878 8.18 5.168 9.306c-.604.184-1.242-.162-1.426-.766-.184-.604.162-1.242.766-1.426 4.262-1.294 11.265-1.045 15.696 1.586.544.323.722 1.028.4 1.572-.323.543-1.028.721-1.524.384z" />
      </svg>
      <span className="text-base sm:text-lg font-bold tracking-tight text-neutral-200">Spotify</span>
    </div>
  );
}
