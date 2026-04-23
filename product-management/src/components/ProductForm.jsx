import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../redux/productSlice";

function ProductForm({ editProduct, onCancel }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(editProduct?.title || "");
  const [price, setPrice] = useState(editProduct?.price || "");
  const [category, setCategory] = useState(editProduct?.category || "");
  const [image, setImage] = useState(editProduct?.image || "");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (title.trim() === "") newErrors.title = "Title is required!";
    if (price === "") newErrors.price = "Price is required!";
    if (category.trim() === "") newErrors.category = "Category is required!";
    if (image.trim() === "") newErrors.image = "Image URL is required!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const productData = {
      title,
      price: Number(price),
      category,
      image,
    };

    if (editProduct) {
      dispatch(updateProduct({ ...productData, id: editProduct.id }));
    } else {
      dispatch(addProduct(productData));
    }

    setTitle("");
    setPrice("");
    setCategory("");
    setImage("");
    setErrors({});
    if (onCancel) onCancel();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {editProduct ? "Edit Product" : "Add Product"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-200 rounded-lg p-2 outline-none text-gray-800"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-200 rounded-lg p-2 outline-none text-gray-800"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-200 rounded-lg p-2 outline-none text-gray-800"
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Sports">Sports</option>
          <option value="Accessories">Accessories</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category}</p>
        )}

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border border-gray-200 rounded-lg p-2 outline-none text-gray-800"
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

        <div className="flex gap-3">
          <button className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-2 font-semibold flex-1">
            {editProduct ? "Update Product" : "Add Product"}
          </button>
          {editProduct && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg p-2 font-semibold flex-1"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
