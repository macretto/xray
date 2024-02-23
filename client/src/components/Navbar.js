import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>SG</div>
        <div className={styles.navbarLink}>
          <ul>
            <li>helkkoi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
