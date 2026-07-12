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
              91 Club is a premium online gaming platform offering colour prediction, lottery,
              aviator and slot-style entertainment with fast withdrawals and 24/7 support.
            </p>
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
