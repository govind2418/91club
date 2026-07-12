import styles from './Section.module.css';

export default function Section({ eyebrow, title, subtitle, children, className = '', id }) {
  return (
    <section className={`section ${className}`} id={id}>
      <div className="container">
        {(eyebrow || title) && (
          <header className={styles.header}>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
