import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  as,
  children,
  className = '',
  ...rest
}) {
  const classes = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  if (as === 'a' || (href && href.startsWith('http'))) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
