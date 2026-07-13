export const routes = [
  { path: '/', name: 'Home', load: () => import('./pages/Home.jsx') },
  { path: '/91-club-login', name: 'Login', load: () => import('./pages/Login.jsx') },
  { path: '/91-club-register', name: 'Register', load: () => import('./pages/Register.jsx') },
  { path: '/91-club-download', name: 'Download', load: () => import('./pages/Download.jsx') },
  { path: '/91-club-apk', name: 'Apk', load: () => import('./pages/Apk.jsx') },
  { path: '/91-club-app', name: 'AppPage', load: () => import('./pages/AppPage.jsx') },
  { path: '/91-club-gift-code', name: 'GiftCode', load: () => import('./pages/GiftCode.jsx') },
  { path: '/91-club-invite-code', name: 'InviteCode', load: () => import('./pages/InviteCode.jsx') },
  {
    path: '/91-club-colour-prediction',
    name: 'ColourPrediction',
    load: () => import('./pages/ColourPrediction.jsx')
  },
  { path: '/91-club-lottery', name: 'Lottery', load: () => import('./pages/Lottery.jsx') },
  { path: '/91-club-aviator', name: 'Aviator', load: () => import('./pages/Aviator.jsx') },
  { path: '/91-club-slots', name: 'Slots', load: () => import('./pages/Slots.jsx') },
  { path: '/91-club-rewards', name: 'Rewards', load: () => import('./pages/Rewards.jsx') },
  { path: '/91-club-vip', name: 'Vip', load: () => import('./pages/Vip.jsx') },
  { path: '/91-club-referral', name: 'Referral', load: () => import('./pages/Referral.jsx') },
  { path: '/91-club-bonus', name: 'Bonus', load: () => import('./pages/Bonus.jsx') },
  { path: '/91-club-offers', name: 'Offers', load: () => import('./pages/Offers.jsx') },
  { path: '/91-club-promotions', name: 'Promotions', load: () => import('./pages/Promotions.jsx') },
  { path: '/91-club-games', name: 'Games', load: () => import('./pages/Games.jsx') },
  { path: '/91-club-guide', name: 'Guide', load: () => import('./pages/Guide.jsx') },
  { path: '/91-club-tips', name: 'Tips', load: () => import('./pages/Tips.jsx') },
  { path: '/91-club-support', name: 'Support', load: () => import('./pages/Support.jsx') },
  { path: '/91-club-security', name: 'Security', load: () => import('./pages/Security.jsx') },
  { path: '/91-club-faq', name: 'Faq', load: () => import('./pages/Faq.jsx') },
  { path: '/about-91-club', name: 'About', load: () => import('./pages/About.jsx') },
  { path: '/91-club-contact', name: 'Contact', load: () => import('./pages/Contact.jsx') },
  { path: '/privacy-policy', name: 'PrivacyPolicy', load: () => import('./pages/PrivacyPolicy.jsx') },
  { path: '/terms', name: 'Terms', load: () => import('./pages/Terms.jsx') },
  {
    path: '/responsible-gaming',
    name: 'ResponsibleGaming',
    load: () => import('./pages/ResponsibleGaming.jsx')
  }
];

export const notFoundRoute = { path: '*', name: 'NotFound', load: () => import('./pages/NotFound.jsx') };
