import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";

function ProductList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("none");
  const [editProduct, setEditProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const getFilteredProducts = () => {
    let filtered = [...products];

    if (search !== "") {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category !== "All") {
      filtered = filtered.filter((p) => p.category === category);
    }

    return filtered;
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditProduct(null);
    setShowForm(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <button
          onClick={() => {
            setEditProduct(null);
            setShowForm(!showForm);
          }}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
        >
          {showForm ? "Hide Form" : "Add Product"}
        </button>
      </div>

      {showForm && (
        <ProductForm editProduct={editProduct} onCancel={handleCancel} />
      )}

      <div className="flex gap-3 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-lg p-2 outline-none text-gray-800"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-200 rounded-lg p-2 outline-none text-gray-800"
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Sports">Sports</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      {loading && <p className="text-blue-500">Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {getFilteredProducts().length === 0 && !loading && (
        <p className="text-gray-400">No products found!</p>
      )}

      <div className="grid grid-cols-3 gap-6">
        {getFilteredProducts().map((product) => (
          <ProductItem key={product.id} product={product} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
