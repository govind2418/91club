import styles from './Testimonials.module.css';

export default function Testimonials({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <figure className={styles.card} key={item.name}>
          <div className={styles.rating} aria-hidden="true">
            {'★'.repeat(item.rating)}
            {'☆'.repeat(5 - item.rating)}
          </div>
          <blockquote>{item.quote}</blockquote>
          <figcaption>
            <span className={styles.avatar}>{item.name.charAt(0)}</span>
            <div>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.role}>{item.role}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
