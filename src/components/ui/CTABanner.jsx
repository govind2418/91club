import Button from './Button.jsx';
import styles from './CTABanner.module.css';

export default function CTABanner({
  title = 'Ready to start playing?',
  subtitle = 'Create your free account in under a minute and step into the 91 Club experience.',
  primaryLabel = 'Register Now',
  primaryHref = '/91-club-register',
  secondaryLabel = '91 Club Login',
  secondaryHref = '/91-club-login'
}) {
  return (
    <div className={styles.banner}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className={styles.actions}>
          <Button href={primaryHref} variant="gold" size="lg">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="outline" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
