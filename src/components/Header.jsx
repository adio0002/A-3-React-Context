import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Nav from './Nav';
import styles from '../styles/Header.module.css';

export default function Header() {
  const { currentTheme, applyTheme, themes } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Wordmark */}
        <Link to="/" className={styles.wordmark} aria-label="ARTEX home">
          <span className={styles.wordmarkMain}>ARTEX</span>
          <span className={styles.wordmarkSub}>Art Discovery</span>
        </Link>

        {/* Navigation */}
        <Nav />

        {/* Theme selector */}
        <div className={styles.themeGroup} role="group" aria-label="Choose a colour theme">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => applyTheme(theme.id)}
              className={`${styles.themeBtn} ${currentTheme === theme.id ? styles.themeBtnActive : ''}`}
              aria-pressed={currentTheme === theme.id}
              title={theme.label}
            >
              <span className={styles.themeDot} data-theme-dot={theme.id} />
              <span className={styles.themeLabel}>{theme.label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
