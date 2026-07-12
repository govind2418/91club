import Button from '../ui/Button.jsx';
import styles from './StickyMobileCTA.module.css';

export default function StickyMobileCTA() {
  return (
    <div className={styles.bar}>
      <Button href="/91-club-login" variant="outline" size="sm" className={styles.btn}>
        Login
      </Button>
      <Button href="/91-club-register" variant="primary" size="sm" className={styles.btn}>
        Register Now
      </Button>
    </div>
  );
}
