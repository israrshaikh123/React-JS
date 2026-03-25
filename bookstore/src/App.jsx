import { useState, useEffect } from "react";
import "./App.css";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import FilterSort from "./components/FilterSort";

function App() {
  const [books, setBooks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("none");

  useEffect(() => {
    const saved = localStorage.getItem("books");
    if (saved) {
      setBooks(JSON.parse(saved));
    }
  }, []);

  const addBook = (book) => {
    const newBook = {
      ...book,
      id: Date.now(),
    };
    const updated = [...books, newBook];
    setBooks(updated);
    localStorage.setItem("books", JSON.stringify(updated));
  };

  const deleteBook = (id) => {
    const updated = books.filter((b) => b.id !== id);
    setBooks(updated);
    localStorage.setItem("books", JSON.stringify(updated));
  };

  const startEdit = (id) => {
    setEditId(id);
  };

  const updateBook = (updatedBook) => {
    const updated = books.map((b) =>
      b.id === editId ? { ...b, ...updatedBook } : b,
    );
    setBooks(updated);
    localStorage.setItem("books", JSON.stringify(updated));
    setEditId(null);
  };

  const clearAll = () => {
    setBooks([]);
    localStorage.removeItem("books");
  };

  const getFilteredBooks = () => {
    let filtered = [...books];

    if (search !== "") {
      filtered = filtered.filter((b) =>
        b.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (filter !== "All") {
      filtered = filtered.filter((b) => b.category === filter);
    }

    if (sort === "title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "price") {
      filtered.sort((a, b) => a.price - b.price);
    }

    return filtered;
  };
  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <div className="bg-green-200 px-6 py-4 mb-6">
        <h1 className="text-2xl font-bold text-green-800">BookStore</h1>
        <p className="text-green-700 text-sm">Total Books: {books.length}</p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Form */}
        <BookForm
          onAdd={addBook}
          onUpdate={updateBook}
          editId={editId}
          books={books}
        />

        {/* Search */}
        <SearchBar search={search} onSearch={setSearch} />

        {/* Filter + Sort */}
        <FilterSort
          filter={filter}
          sort={sort}
          onFilter={setFilter}
          onSort={setSort}
        />

        {/* List */}
        <BookList
          books={getFilteredBooks()}
          onDelete={deleteBook}
          onEdit={startEdit}
          onClear={clearAll}
        />
      </div>
    </div>
  );
}

export default App;
