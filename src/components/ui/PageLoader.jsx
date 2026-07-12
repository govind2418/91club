import styles from './PageLoader.module.css';

export default function PageLoader() {
  return (
    <div className={styles.loader} role="status" aria-label="Loading">
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  );
}
