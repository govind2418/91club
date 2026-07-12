import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import FloatingTelegram from './components/layout/FloatingTelegram.jsx';
import ScrollProgress from './components/layout/ScrollProgress.jsx';
import BackToTop from './components/layout/BackToTop.jsx';
import StickyMobileCTA from './components/layout/StickyMobileCTA.jsx';
import PageLoader from './components/ui/PageLoader.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Register = lazy(() => import('./pages/Register.jsx'));
const Download = lazy(() => import('./pages/Download.jsx'));
const Apk = lazy(() => import('./pages/Apk.jsx'));
const AppPage = lazy(() => import('./pages/AppPage.jsx'));
const GiftCode = lazy(() => import('./pages/GiftCode.jsx'));
const InviteCode = lazy(() => import('./pages/InviteCode.jsx'));
const ColourPrediction = lazy(() => import('./pages/ColourPrediction.jsx'));
const Lottery = lazy(() => import('./pages/Lottery.jsx'));
const Aviator = lazy(() => import('./pages/Aviator.jsx'));
const Slots = lazy(() => import('./pages/Slots.jsx'));
const Rewards = lazy(() => import('./pages/Rewards.jsx'));
const Vip = lazy(() => import('./pages/Vip.jsx'));
const Referral = lazy(() => import('./pages/Referral.jsx'));
const Bonus = lazy(() => import('./pages/Bonus.jsx'));
const Offers = lazy(() => import('./pages/Offers.jsx'));
const Promotions = lazy(() => import('./pages/Promotions.jsx'));
const Games = lazy(() => import('./pages/Games.jsx'));
const Guide = lazy(() => import('./pages/Guide.jsx'));
const Tips = lazy(() => import('./pages/Tips.jsx'));
const Support = lazy(() => import('./pages/Support.jsx'));
const Security = lazy(() => import('./pages/Security.jsx'));
const Faq = lazy(() => import('./pages/Faq.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const Terms = lazy(() => import('./pages/Terms.jsx'));
const ResponsibleGaming = lazy(() => import('./pages/ResponsibleGaming.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/91-club-login" element={<Login />} />
            <Route path="/91-club-register" element={<Register />} />
            <Route path="/91-club-download" element={<Download />} />
            <Route path="/91-club-apk" element={<Apk />} />
            <Route path="/91-club-app" element={<AppPage />} />
            <Route path="/91-club-gift-code" element={<GiftCode />} />
            <Route path="/91-club-invite-code" element={<InviteCode />} />
            <Route path="/91-club-colour-prediction" element={<ColourPrediction />} />
            <Route path="/91-club-lottery" element={<Lottery />} />
            <Route path="/91-club-aviator" element={<Aviator />} />
            <Route path="/91-club-slots" element={<Slots />} />
            <Route path="/91-club-rewards" element={<Rewards />} />
            <Route path="/91-club-vip" element={<Vip />} />
            <Route path="/91-club-referral" element={<Referral />} />
            <Route path="/91-club-bonus" element={<Bonus />} />
            <Route path="/91-club-offers" element={<Offers />} />
            <Route path="/91-club-promotions" element={<Promotions />} />
            <Route path="/91-club-games" element={<Games />} />
            <Route path="/91-club-guide" element={<Guide />} />
            <Route path="/91-club-tips" element={<Tips />} />
            <Route path="/91-club-support" element={<Support />} />
            <Route path="/91-club-security" element={<Security />} />
            <Route path="/91-club-faq" element={<Faq />} />
            <Route path="/about-91-club" element={<About />} />
            <Route path="/91-club-contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/responsible-gaming" element={<ResponsibleGaming />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingTelegram />
      <BackToTop />
      <StickyMobileCTA />
    </>
  );
}
