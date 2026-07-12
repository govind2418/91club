const common = {
  width: 32,
  height: 32,
  viewBox: '0 0 32 32',
  fill: 'none'
};

export function BoltIcon(props) {
  return (
    <svg {...common} {...props}>
      <path
        d="M17.5 2 6 18h8l-1.5 12L26 14h-8l-0.5-12Z"
        stroke="#f9b233"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="rgba(249,178,51,0.12)"
      />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg {...common} {...props}>
      <path
        d="M16 3 27 7v8c0 8-5 13-11 14C10 28 5 23 5 15V7Z"
        stroke="#f9b233"
        strokeWidth="2"
        fill="rgba(249,178,51,0.1)"
      />
      <path d="M11 16l3.5 3.5L21 12" stroke="#ff5d4d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TrophyIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M10 4h12v6a6 6 0 0 1-12 0Z" stroke="#f9b233" strokeWidth="2" fill="rgba(249,178,51,0.1)" />
      <path d="M10 6H5v2a5 5 0 0 0 5 5" stroke="#f9b233" strokeWidth="2" />
      <path d="M22 6h5v2a5 5 0 0 1-5 5" stroke="#f9b233" strokeWidth="2" />
      <path d="M16 16v5m-4 4h8m-4-4v4" stroke="#f9b233" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CardIcon(props) {
  return (
    <svg {...common} {...props}>
      <rect x="3" y="8" width="26" height="18" rx="3" stroke="#f9b233" strokeWidth="2" fill="rgba(255,59,48,0.1)" />
      <path d="M3 13h26" stroke="#f9b233" strokeWidth="2" />
      <path d="M7 20h6" stroke="#ff5d4d" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function WalletIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M5 10a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3Z" stroke="#f9b233" strokeWidth="2" fill="rgba(249,178,51,0.08)" />
      <path d="M20 15h5v4h-5a2 2 0 0 1 0-4Z" fill="#ff5d4d" />
    </svg>
  );
}

export function ChatIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M4 8a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H12l-6 5v-5H7a3 3 0 0 1-3-3Z" stroke="#f9b233" strokeWidth="2" fill="rgba(249,178,51,0.08)" />
    </svg>
  );
}

export function GiftIcon(props) {
  return (
    <svg {...common} {...props}>
      <rect x="5" y="13" width="22" height="15" rx="2" stroke="#f9b233" strokeWidth="2" fill="rgba(255,59,48,0.1)" />
      <rect x="5" y="13" width="22" height="5" fill="#ff3b30" />
      <rect x="14" y="13" width="4" height="15" fill="#f9b233" />
      <path d="M16 13c-6 0-6-8 0-7 4 1 2 5 0 7Zm0 0c6 0 6-8 0-7-4 1-2 5 0 7Z" stroke="#f9b233" strokeWidth="1.5" />
    </svg>
  );
}

export function UsersIcon(props) {
  return (
    <svg {...common} {...props}>
      <circle cx="12" cy="11" r="4" stroke="#f9b233" strokeWidth="2" fill="rgba(249,178,51,0.08)" />
      <circle cx="22" cy="11" r="3.4" stroke="#ff5d4d" strokeWidth="2" fill="rgba(255,93,77,0.08)" />
      <path d="M4 27c0-4.4 3.6-7 8-7s8 2.6 8 7" stroke="#f9b233" strokeWidth="2" fill="none" />
      <path d="M18 21c3.6.4 6 2.6 6 6" stroke="#ff5d4d" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...common} {...props}>
      <circle cx="16" cy="16" r="12" stroke="#f9b233" strokeWidth="2" fill="rgba(249,178,51,0.08)" />
      <path d="M16 9v7l5 3" stroke="#ff5d4d" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
