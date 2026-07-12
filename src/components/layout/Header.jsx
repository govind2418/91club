import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../ui/Button.jsx';
import { NAV_LINKS } from '../../data/siteConfig.js';
import styles from './Header.module.css';

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
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoMark}>91</span>
          <span className={styles.logoText}>
            Club<span className={styles.logoDot}>.</span>
          </span>
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
            <Button href="/91-club-login" variant="outline" size="sm">
              Login
            </Button>
            <Button href="/91-club-register" variant="primary" size="sm">
              Register
            </Button>
          </div>
        </nav>

        <div className={styles.headerActions}>
          <Button href="/91-club-login" variant="outline" size="sm" className={styles.desktopOnly}>
            Login
          </Button>
          <Button href="/91-club-register" variant="primary" size="sm" className={styles.desktopOnly}>
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
  );
}
