// import React, { useState } from "react";

const ExamsFilter = ({ filterChangeHandler, list}) => {
//   const [filteredData, setFilterData] = useState("");

//   const filteredItems = list.filter(item =>
//     item.name.toLowerCase().includes(filteredData.toLowerCase())
//   );

  return (
    <div>
      <div>
        <label>Filter by name: </label>
        <input
          type="text"
          id="filter"
          name="filter"
   
        />
     
      </div>
  
    </div>
  );
};

export default ExamsFilter;
