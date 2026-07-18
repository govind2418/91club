import styles from './Screenshot.module.css';

export default function Screenshot({ src, alt, className = '' }) {
  return (
    <figure className={`${styles.frame} ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  );
}
