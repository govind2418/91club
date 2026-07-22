import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Button from '../ui/Button.jsx';
import { buildSiteNavigationSchema } from '../seo/SEO.jsx';
import { NAV_LINKS, SITELINKS, REGISTER_URL, LOGIN_URL } from '../../data/siteConfig.js';
import logoWebp from '../../assets/brand/91club-logo.webp';
import logoPng from '../../assets/brand/91club-logo.png';
import styles from './Header.module.css';

const SCHEMA_NAV_LINKS = [
  ...SITELINKS,
  ...NAV_LINKS.filter((link) => !SITELINKS.some((s) => s.href === link.href))
];
const NAV_SCHEMA = buildSiteNavigationSchema(SCHEMA_NAV_LINKS);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 24);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <Helmet>
        {NAV_SCHEMA.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <img
              src={logoPng}
              alt="91 Club"
              className={styles.logoImg}
              width={421}
              height={160}
              decoding="async"
              fetchpriority="high"
            />
          </picture>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.href.startsWith('/#') ? (
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => (isActive ? styles.active : '')}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <div className={styles.navActions}>
            <Button href={LOGIN_URL} variant="outline" size="sm">
              Login
            </Button>
            <Button href={REGISTER_URL} variant="primary" size="sm">
              Register
            </Button>
          </div>
        </nav>

        <div className={styles.headerActions}>
          <Button href={LOGIN_URL} variant="outline" size="sm" className={styles.desktopOnly}>
            Login
          </Button>
          <Button href={REGISTER_URL} variant="primary" size="sm" className={styles.desktopOnly}>
            Register
          </Button>
          <button
            className={styles.burger}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
    </>
  );
}
