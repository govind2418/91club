export const SITE_URL = 'https://91clubapp.com';
export const SITE_NAME = '91 Club';
export const TELEGRAM_URL = 'https://t.me/91club_official';
export const SUPPORT_EMAIL = 'support@91clubapp.com';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-91-club' },
  { label: 'Features', href: '/#features' },
  { label: 'Rewards', href: '/91-club-rewards' },
  { label: 'Games', href: '/91-club-games' },
  { label: 'FAQ', href: '/91-club-faq' },
  { label: 'Contact', href: '/91-club-contact' }
];

export const CORE_LINKS = [
  { label: '91 Club Login', href: '/91-club-login' },
  { label: '91 Club Register', href: '/91-club-register' },
  { label: '91 Club Download', href: '/91-club-download' },
  { label: '91 Club Gift Code', href: '/91-club-gift-code' },
  { label: '91 Club Rewards', href: '/91-club-rewards' },
  { label: '91 Club Bonus', href: '/91-club-bonus' },
  { label: '91 Club Support', href: '/91-club-support' },
  { label: '91 Club FAQ', href: '/91-club-faq' },
  { label: 'Home', href: '/' }
];

export const FOOTER_QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About 91 Club', href: '/about-91-club' },
  { label: '91 Club Login', href: '/91-club-login' },
  { label: '91 Club Register', href: '/91-club-register' },
  { label: '91 Club Download', href: '/91-club-download' },
  { label: '91 Club APK', href: '/91-club-apk' },
  { label: '91 Club App', href: '/91-club-app' },
  { label: '91 Club Games', href: '/91-club-games' },
  { label: '91 Club Rewards', href: '/91-club-rewards' },
  { label: '91 Club VIP', href: '/91-club-vip' },
  { label: '91 Club Support', href: '/91-club-support' },
  { label: '91 Club Contact', href: '/91-club-contact' }
];

export const FOOTER_GAME_LINKS = [
  { label: 'Colour Prediction', href: '/91-club-colour-prediction' },
  { label: 'Lottery', href: '/91-club-lottery' },
  { label: 'Aviator', href: '/91-club-aviator' },
  { label: 'Slots', href: '/91-club-slots' },
  { label: 'Gift Code', href: '/91-club-gift-code' },
  { label: 'Invite Code', href: '/91-club-invite-code' },
  { label: 'Referral', href: '/91-club-referral' },
  { label: 'Bonus', href: '/91-club-bonus' },
  { label: 'Offers', href: '/91-club-offers' },
  { label: 'Promotions', href: '/91-club-promotions' },
  { label: 'Guide', href: '/91-club-guide' },
  { label: 'Winning Tips', href: '/91-club-tips' },
  { label: 'Security', href: '/91-club-security' }
];

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Responsible Gaming', href: '/responsible-gaming' }
];

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  alternateName: '91club',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    '91 Club is an online gaming platform offering a single account for login, registration, the official app and every game category.',
  sameAs: [TELEGRAM_URL],
  contactPoint: {
    '@type': 'ContactPoint',
    email: SUPPORT_EMAIL,
    contactType: 'customer support'
  }
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  alternateName: '91club',
  url: SITE_URL,
  inLanguage: 'en-IN',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};
