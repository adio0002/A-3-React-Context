import styles from '../styles/Spinner.module.css';

export default function Spinner({ message = 'Loading…' }) {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <div className={styles.ring}>
        <div />
        <div />
        <div />
        <div />
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
}
