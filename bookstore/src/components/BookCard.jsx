function BookCard({ book, onDelete, onEdit }) {
  return (
    <>
      <div className="bg-white border border-green-200 rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold text-gray-800">{book.title}</h2>
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
            {book.category}
          </span>
        </div>

        {book.cover ? (
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
        ) : (
          <div className="w-full h-40 bg-green-100 rounded-lg mb-3 flex items-center justify-center">
            <p className="text-green-400">No Cover</p>
          </div>
        )}

        <p className="text-gray-500 text-sm mb-1">By {book.author}</p>
        <p className="text-green-600 font-semibold mb-3">${book.price}</p>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(book.id)}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(book.id)}
            className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default BookCard;
