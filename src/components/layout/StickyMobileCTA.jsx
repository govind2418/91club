import Button from '../ui/Button.jsx';
import { REGISTER_URL, LOGIN_URL } from '../../data/siteConfig.js';
import styles from './StickyMobileCTA.module.css';

export default function StickyMobileCTA() {
  return (
    <div className={styles.bar}>
      <Button href={LOGIN_URL} variant="outline" size="sm" className={styles.btn}>
        Login
      </Button>
      <Button href={REGISTER_URL} variant="primary" size="sm" className={styles.btn}>
        Register Now
      </Button>
    </div>
  );
}
