import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/inventorySlice';  

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(state => state.inventory);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div className="text-center p-8 text-xl">Loading products...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📦 All Products ({products.length})</h2>
      {products.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>No products found. Add some inventory! 🛒</p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="table w-full bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <th>Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id || Math.random()} className="hover">
                  <td className="font-medium">{product.name}</td>
                  <td>{product.category}</td>
                  <td className={product.stock < 10 ? 'text-red-600 font-bold' : ''}>
                    {product.stock}
                  </td>
                  <td className="font-bold text-green-600">₹{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductList;