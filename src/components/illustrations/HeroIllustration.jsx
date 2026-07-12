import styles from './HeroIllustration.module.css';

export default function HeroIllustration() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.streak1} />
      <div className={styles.streak2} />
      <div className={styles.ring} />

      <svg
        className={styles.wheel}
        viewBox="0 0 240 240"
        width="240"
        height="240"
        role="presentation"
      >
        <defs>
          <linearGradient id="goldRim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffe6a3" />
            <stop offset="55%" stopColor="#f9b233" />
            <stop offset="100%" stopColor="#a6690f" />
          </linearGradient>
          <linearGradient id="redSlice" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff5d4d" />
            <stop offset="100%" stopColor="#ff3b30" />
          </linearGradient>
        </defs>
        <circle cx="120" cy="120" r="112" fill="url(#goldRim)" />
        <circle cx="120" cy="120" r="94" fill="#161616" stroke="#f9b233" strokeWidth="2" />
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d="M120 120 L120 26 A94 94 0 0 1 186.5 53.5 Z"
            fill={i % 2 === 0 ? 'url(#redSlice)' : '#1c1c1c'}
            transform={`rotate(${i * 45} 120 120)`}
            opacity="0.92"
          />
        ))}
        <circle cx="120" cy="120" r="20" fill="url(#goldRim)" />
        <circle cx="120" cy="120" r="8" fill="#1a1000" />
      </svg>

      <svg className={styles.coinA} viewBox="0 0 60 60" width="60" height="60">
        <circle cx="30" cy="30" r="28" fill="url(#goldRim)" stroke="#7a4c0d" strokeWidth="1" />
        <text x="30" y="38" textAnchor="middle" fontSize="24" fontWeight="700" fill="#1a1000">
          91
        </text>
      </svg>

      <svg className={styles.coinB} viewBox="0 0 60 60" width="46" height="46">
        <circle cx="30" cy="30" r="28" fill="url(#goldRim)" stroke="#7a4c0d" strokeWidth="1" />
        <text x="30" y="38" textAnchor="middle" fontSize="24" fontWeight="700" fill="#1a1000">
          ₹
        </text>
      </svg>

      <svg className={styles.coinC} viewBox="0 0 60 60" width="36" height="36">
        <circle cx="30" cy="30" r="28" fill="url(#goldRim)" stroke="#7a4c0d" strokeWidth="1" />
        <text x="30" y="38" textAnchor="middle" fontSize="24" fontWeight="700" fill="#1a1000">
          ★
        </text>
      </svg>

      <svg className={styles.gift} viewBox="0 0 100 100" width="86" height="86">
        <rect x="16" y="42" width="68" height="46" rx="6" fill="#161616" stroke="#f9b233" strokeWidth="2" />
        <rect x="16" y="42" width="68" height="16" fill="url(#redSlice)" />
        <rect x="44" y="42" width="12" height="46" fill="url(#goldRim)" />
        <path
          d="M50 42 C 30 42 30 18 44 20 C 54 22 50 36 50 42 Z"
          fill="url(#goldRim)"
        />
        <path
          d="M50 42 C 70 42 70 18 56 20 C 46 22 50 36 50 42 Z"
          fill="url(#goldRim)"
        />
      </svg>
    </div>
  );
}
