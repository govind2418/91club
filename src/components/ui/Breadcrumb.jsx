import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb({ items }) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            {index === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <>
                <Link to={item.href}>{item.label}</Link>
                <span className={styles.sep}>/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
