import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/NotFound.module.css';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <p className={styles.code}>404</p>
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.content}>
          <h1 className={styles.heading}>Page Not Found</h1>
          <p className={styles.body}>
            The route <code className={styles.path}>{pathname}</code> doesn't exist in
            our collection. The artwork may have moved, or perhaps this page never
            existed.
          </p>
          <div className={styles.links}>
            <Link to="/" className={styles.btnPrimary}>
              ← Return Home
            </Link>
            <Link to="/gallery" className={styles.btnSecondary}>
              Browse the Gallery
            </Link>
          </div>
        </div>
      </div>

      <p className={styles.bgText} aria-hidden="true">404</p>
    </main>
  );
}
