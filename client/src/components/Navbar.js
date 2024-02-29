import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>Surgeon Generals</div>
        <div className={styles.navbarLink}>
          <ul className={styles.links}>
            <li>Exams</li>
            <li>Menu</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
