import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>Surgeon Generals</div>
        <div className={styles.navbarLink}>
          <ul>
            <li>MENU</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
