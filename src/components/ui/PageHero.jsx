import Breadcrumb from './Breadcrumb.jsx';
import Button from './Button.jsx';
import styles from './PageHero.module.css';

export default function PageHero({
  breadcrumbItems,
  eyebrow,
  title,
  intro,
  primaryLabel = 'Register Now',
  primaryHref = '/91-club-register',
  secondaryLabel = '91 Club Login',
  secondaryHref = '/91-club-login'
}) {
  return (
    <div className={styles.hero}>
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />
        <span className="eyebrow">{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.actions}>
          <Button href={primaryHref} variant="primary" size="md">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="outline" size="md">
            {secondaryLabel}
          </Button>
        </div>
      </div>
      <div className={styles.glow} aria-hidden="true" />
    </div>
  );
}
