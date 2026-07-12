import { Link } from 'react-router-dom';
import styles from './RelatedLinks.module.css';

export default function RelatedLinks({ title = 'Related Pages', links }) {
  return (
    <div className={styles.wrap}>
      <h2>{title}</h2>
      <div className={styles.grid}>
        {links.map((link) => (
          <Link to={link.href} className={styles.link} key={link.href}>
            <span>{link.label}</span>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
