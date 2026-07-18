import { Link } from 'react-router-dom';
import {
  FOOTER_QUICK_LINKS,
  FOOTER_GAME_LINKS,
  LEGAL_LINKS,
  TELEGRAM_URL,
  SUPPORT_EMAIL
} from '../../data/siteConfig.js';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoMark}>91</span>
              <span>
                Club<span className={styles.dot}>.</span>
              </span>
            </Link>
            <p>
              91 Club works as a single connected system rather than a set of separate pages —
              the account you create carries the same balance and history whether you are signing
              in, redeeming a gift code, or checking VIP progress. This footer collects the parts
              of that system most people come back to:
            </p>
            <ul className={styles.hubList}>
              <li><Link to="/91-club-login">91 Club Login</Link></li>
              <li><Link to="/91-club-register">91 Club Register</Link></li>
              <li><Link to="/91-club-app">91 Club App</Link></li>
              <li><Link to="/91-club-download">91 Club Download</Link></li>
              <li><Link to="/91-club-games">91 Club Games</Link></li>
              <li><Link to="/91-club-support">91 Club Support</Link></li>
              <li><Link to="/91-club-rewards">91 Club Rewards</Link></li>
            </ul>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.telegram}>
              Join our Telegram Channel →
            </a>
          </div>

          <div className={styles.col}>
            <h3>Quick Links</h3>
            <ul>
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3>Games &amp; Rewards</h3>
            <ul>
              {FOOTER_GAME_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3>Legal</h3>
            <ul>
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <p>
            91 Club is intended for entertainment purposes for users aged 18 and above. Please
            play responsibly and within your means. Game outcomes are determined by chance and
            past results do not guarantee future returns.
          </p>
        </div>

        <div className={styles.bottom}>
          <span>© {year} 91 Club. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
