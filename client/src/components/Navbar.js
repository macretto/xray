import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <nav className={styles.navbarContainer}>
        <Link too="/" className={styles.navbarLogo}>
          Surgeon Generals
        </Link>
        <div className={styles.navbarLinks}>
          <ul className={styles.links}>
            <NavLink className={styles.link} to="/exams">
              Exams
            </NavLink>

            <NavLink className={styles.link} to="/about">
              About
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
