import { Link } from "react-router-dom";

import styles from "./ExamsNavigation.module.css";

function ExamsNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link
              to="/exams"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Exams
            </Link>
          </li>

          <li>
            <Link
              to="/exams/new"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Create Exam
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ExamsNavigation;
