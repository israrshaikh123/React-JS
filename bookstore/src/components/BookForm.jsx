import { useState, useEffect } from "react";

function BookForm({ onAdd, onUpdate, editId, books }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({});
  const [cover, setCover] = useState("");

  useEffect(() => {
    if (editId) {
      const book = books.find((b) => b.id === editId);
      if (book) {
        setTitle(book.title);
        setAuthor(book.author);
        setCategory(book.category);
        setPrice(book.price);
        setCover(book.cover);
      }
    } else {
      setTitle("");
      setAuthor("");
      setCategory("");
      setPrice("");
      setCover(""); 

      setErrors({});
    }
  }, [editId]);

  const validate = () => {
    const newErrors = {};

    if (title.trim() === "") newErrors.title = "Title is required!";
    if (author.trim() === "") newErrors.author = "Author is required!";
    if (category.trim() === "") newErrors.category = "Category is required!";
    if (price.trim() === "") newErrors.price = "Price is required!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const bookData = { title, author, category, price , cover};

    if (editId) {
      onUpdate(bookData);
    } else {
      onAdd(bookData);
    }

    setTitle("");
    setAuthor("");
    setCategory("");
    setPrice("");
    setCover("");
    setErrors({});
  };

  return (
    <>
      <div className="bg-white border border-green-200 rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-bold text-green-700 mb-4">
          {editId ? "Edit Book" : "Add Book"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-green-50 text-gray-800 rounded-lg p-2 outline-none border border-green-200"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="bg-green-50 text-gray-800 rounded-lg p-2 outline-none border border-green-200"
          />
          {errors.author && (
            <p className="text-red-500 text-sm">{errors.author}</p>
          )}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-green-50 text-gray-800 rounded-lg p-2 outline-none border border-green-200"
          >
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Tech">Tech</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category}</p>
          )}

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="bg-green-50 text-gray-800 rounded-lg p-2 outline-none border border-green-200"
          />

          <input
            type="text"
            placeholder="Book Cover Image URL (optional)"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
            className="bg-green-50 text-gray-800 rounded-lg p-2 outline-none border border-green-200"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price}</p>
          )}

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-2 font-semibold"
          >
            {editId ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </>
  );
}

export default BookForm;
