import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.list} role="list">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ''}`
            }
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ''}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
