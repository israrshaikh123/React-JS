function FilterSort({ filter, sort, onFilter, onSort }) {
  return (
    <>
      <div className="flex gap-3 mb-6">
        <select
          value={filter}
          onChange={(e) => onFilter(e.target.value)}
          className="bg-white border border-green-200 rounded-lg p-2 outline-none text-gray-800"
        >
          <option value="All">All Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Tech">Tech</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>

        <select
          value={sort}
          onChange={(e) => onSort(e.target.value)}
          className="bg-white border border-green-200 rounded-lg p-2 outline-none text-gray-800"
        >
          <option value="none">Sort By</option>
          <option value="title">Title A-Z</option>
          <option value="price">Price Low-High</option>
        </select>
      </div>
    </>
  );
}

export default FilterSort;
