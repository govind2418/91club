import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO.jsx';
import Button from '../components/ui/Button.jsx';
import RelatedLinks from '../components/ui/RelatedLinks.jsx';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for could not be found on 91 Club."
        path="/404"
      />
      <div className={`container section ${styles.wrap}`}>
        <span className={styles.code}>404</span>
        <h1>This page wandered off the table</h1>
        <p>
          The page you are looking for does not exist or may have moved. Head back to the
          homepage or jump straight to one of these popular destinations.
        </p>
        <div className={styles.actions}>
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
        <div className={styles.links}>
          <RelatedLinks
            title="Popular Pages"
            links={[
              { label: '91 Club Login', href: '/91-club-login' },
              { label: '91 Club Register', href: '/91-club-register' },
              { label: '91 Club Games', href: '/91-club-games' },
              { label: '91 Club FAQ', href: '/91-club-faq' }
            ]}
          />
        </div>
      </div>
    </>
  );
}
