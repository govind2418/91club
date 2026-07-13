import { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import FloatingTelegram from './components/layout/FloatingTelegram.jsx';
import ScrollProgress from './components/layout/ScrollProgress.jsx';
import BackToTop from './components/layout/BackToTop.jsx';
import StickyMobileCTA from './components/layout/StickyMobileCTA.jsx';
import PageLoader from './components/ui/PageLoader.jsx';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App({ routes, NotFoundComponent }) {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<NotFoundComponent />} />
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
