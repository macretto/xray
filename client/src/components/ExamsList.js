// import React, { useState } from "react";
// import styles from "./ExamsList.module.css";
// import { Link } from "react-router-dom";
// import Pagination from "./Pagination";

// const ExamsList = ({ items, searchTerm }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 7;

//   const onPageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Filter items only if searchTerm is provided
//   const filteredItems = searchTerm
//     ? items.filter((exam) =>
//         exam.patientName.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : items;

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
//   return (
//     <div className={styles.exams}>
//       <h1 style={{ color: "rgb(68, 68, 68)" }}>E</h1>
//       <Pagination
//         itemsPerPage={itemsPerPage}
//         totalItems={filteredItems.length}
//         onPageChange={onPageChange}
//         currentPage={currentPage}
//       />
//       <ul className={styles.list}>
//         {currentItems.map((exam) => (
//           <li key={exam._id} className={styles.item}>
//             <Link to={`/exams/${exam._id}`}>
//               <img src={exam.imageURL} alt={exam.imageURL} />
//               <div className={styles.content}>
// <div className={styles.titles} style={{ maxWidth: "4.5rem" }}>
//     <h4>Patient: </h4>
//     <p>{exam.patientName}</p>
//   </div>

//   <div className={styles.titles}>
//     <h4>Age</h4>
//     <p>{exam.age}</p>
//   </div>

//   <div className={styles.titles}>
//     <h4>Sex</h4>
//     <p>{exam.sex}</p>
//   </div>
//   <div className={styles.titles}>
//     <h4>Bmi</h4>
//     <p>{exam.bmi}</p>
//   </div>
//   <div className={styles.titles}>
//     <h4>ZipCode</h4>
//     <p>{exam.zipCode}</p>
//   </div>
//   <div className={styles.titles} style={{ width: "10rem" }}>
//     <h4>Findings</h4>
//     <p>
//       {exam.keyFindings.slice(0, 60)}...{" "}
//       <span className={styles.more}>
//         {" "}
//         see more
//       </span>
//     </p>
//   </div>
//   <div className={styles.titles}>
//     <h4>BrixiaScores</h4>
//     <p>{exam.age}</p>
//   </div>

//   <div className={styles.titles}>
//     <h4>created</h4>
//     no date
//     {/* <span>{convertDate((exam.updatedAt))}</span> */}

//   </div>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <Pagination
//         itemsPerPage={itemsPerPage}
//         totalItems={filteredItems.length}
//         onPageChange={onPageChange}
//         currentPage={currentPage}
//       />
//     </div>
//   );
// };

// export default ExamsList;

//   // Filter items only if searchTerm is provided
//   const filteredItems = searchTerm
//     ? items.filter(
//         (exam) =>
//           exam.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) // Optional chaining here
//       )
//     : items;

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div className={styles.exams}>
//       <h1 style={{ color: "rgb(68, 68, 68)" }}>E</h1>
//       <Pagination
//         itemsPerPage={itemsPerPage}
//         totalItems={filteredItems.length}
//         onPageChange={onPageChange}
//         currentPage={currentPage}
//       />
//       <ul className={styles.list}>
//         {currentItems.map((exam) => (
//           <li key={exam._id} className={styles.item}>
//             <Link to={`/exams/${exam._id}`}>
//               <img src={exam.imageURL} alt={exam.imageURL} />
//               <div className={styles.content}>
//                 {/* Render exam details */}
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <Pagination
//         itemsPerPage={itemsPerPage}
//         totalItems={filteredItems.length}
//         onPageChange={onPageChange}
//         currentPage={currentPage}
//       />
//     </div>
//   );
// };

// export default ExamsList;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ExamsList.module.css";
import Pagination from "./Pagination";

const ExamsList = ({ items, searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // Filter items only if searchTerm is provided
  //filtered items is provided to mutate data from DB
  const filteredItems = searchTerm
    ? items.filter(
        (exam) =>
          exam.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) // Optional chaining here
      )
    : items;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles.exams}>
      <h1 style={{ color: "rgb(68, 68, 68)" }}>E</h1>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredItems.length}
        onPageChange={onPageChange}
        currentPage={currentPage}
      />
      <ul className={styles.list}>
        {currentItems.map((exam) => (
          <li key={exam._id} className={styles.item}>
            <Link to={`/exams/${exam._id}`}>
              <img src={exam.imageURL} alt={exam.imageURL} />
              <div className={styles.content}>
                <div className={styles.titles} style={{ maxWidth: "4.5rem" }}>
                  <h4>Patient: </h4>
                  <p>{exam.patientName}</p>
                </div>

                <div className={styles.titles}>
                  <h4>Age</h4>
                  <p>{exam.age}</p>
                </div>

                <div className={styles.titles}>
                  <h4>Sex</h4>
                  <p>{exam.sex}</p>
                </div>
                <div className={styles.titles}>
                  <h4>Bmi</h4>
                  <p>{exam.bmi}</p>
                </div>
                <div className={styles.titles}>
                  <h4>ZipCode</h4>
                  <p>{exam.zipCode}</p>
                </div>
                <div className={styles.titles} style={{ width: "10rem" }}>
                  <h4>Findings</h4>
                  <p>
                    {exam.keyFindings.slice(0, 60)}...{" "}
                    <span className={styles.more}> see more</span>
                  </p>
                </div>
                <div className={styles.titles}>
                  <h4>BrixiaScores</h4>
                  <p>{exam.age}</p>
                </div>

                <div className={styles.titles}>
                  <h4>created</h4>
                  no date
                  {/* <span>{convertDate((exam.updatedAt))}</span> */}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredItems.length}
        onPageChange={onPageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ExamsList;
