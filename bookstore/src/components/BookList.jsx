import BookCard from "./BookCard";

function BookList({ books, onDelete, onEdit, onClear }) {
  return (
    <>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-green-700">
          Books ({books.length})
        </h2>
        <button
          onClick={onClear}
          className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
        >
          Clear All
        </button>
      </div>

      {books.length === 0 ? (
        <p className="text-gray-400">No Books Found!</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default BookList;
