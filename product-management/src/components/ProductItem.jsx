import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/productSlice";

function ProductItem({ product, onEdit }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <img src={product.image} className="w-full h-48 object-cover" />

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-gray-800">{product.title}</h3>
          <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <p className="text-green-600 font-bold text-lg mb-4">
          ${product.price}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(product)}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm flex-1"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteProduct(product.id))}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm flex-1"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
