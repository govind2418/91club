import { TELEGRAM_URL } from '../../data/siteConfig.js';
import styles from './FloatingTelegram.module.css';

export default function FloatingTelegram() {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Join 91 Club Telegram Channel"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <path
          d="M21.5 4.5 2.8 11.7c-1.1.4-1.1 1.6 0 2l4.6 1.4 1.8 5.6c.2.7 1 .9 1.6.4l2.6-2.4 4.8 3.5c.8.6 1.9.2 2.1-.8l3-16.3c.2-1-.8-1.8-1.8-1.2Z"
          fill="url(#tgGrad)"
        />
        <defs>
          <linearGradient id="tgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffe6a3" />
            <stop offset="100%" stopColor="#f9b233" />
          </linearGradient>
        </defs>
      </svg>
      <span className={styles.pulse} />
    </a>
  );
}
