import { Link } from "react-router-dom";

import styles from "./ExamsNav.module.css";

function ExamsNav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.searchbox}>
          <label>Search </label>
          <input type="text" />
        </div>
        <ul>
          <li className={styles.link}>
            <Link to="/exams/new" className={styles.btn}>
              Create Exam
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ExamsNav;
