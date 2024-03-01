

const ExamFilter = ({onSearch }) => {
    return (
    <div>
      <label htmlFor="search">Filter by Name: </label>
      <input
        type="text"
        id="search"
        placeholder="Search by Patient Name"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default ExamFilter;
