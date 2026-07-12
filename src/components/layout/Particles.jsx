import styles from './Particles.module.css';

const particles = Array.from({ length: 18 });

export default function Particles() {
  return (
    <div className={styles.field} aria-hidden="true">
      {particles.map((_, i) => (
        <span
          key={i}
          className={styles.dot}
          style={{
            left: `${(i * 53.7) % 100}%`,
            animationDuration: `${8 + (i % 6)}s`,
            animationDelay: `${(i % 5) * 0.8}s`,
            opacity: 0.15 + (i % 4) * 0.08
          }}
        />
      ))}
    </div>
  );
}
