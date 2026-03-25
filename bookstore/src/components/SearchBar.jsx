function SearchBar({ search, onSearch }) {
  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full bg-white border border-green-200 rounded-lg p-2 outline-none text-gray-800"
        />
      </div>
    </>
  );
}

export default SearchBar;
