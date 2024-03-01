import { Link } from "react-router-dom";
import ExamFilter from "./ExamFilter";
import styles from "./ExamsNav.module.css";

function ExamsNav({ onSearch }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Data passed from exams with data to filter in ExamFilter component */}
        <ExamFilter onSearch={onSearch} />
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
