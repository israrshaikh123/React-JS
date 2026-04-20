import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startInventoryListener } from "./features/inventorySlice"; 
import { ref, push, set, remove, update } from "firebase/database";
import { db } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.inventory);

  
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    stock: "",
    price: "",
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(startInventoryListener());
    }
  }, [status, dispatch]);

  

  
  const addProduct = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.stock || !formData.price) {
      alert("Please fill all required fields!");
      return;
    }
    try {
      const productsRef = ref(db, "products");
      const newProductRef = push(productsRef);
      await set(newProductRef, {
        name: formData.name,
        category: formData.category || "General",
        stock: parseInt(formData.stock),
        price: parseInt(formData.price),
        lastUpdated: new Date().toISOString(),
      });
      setFormData({ name: "", category: "", stock: "", price: "" });
    } catch (err) {
      console.error("Add Error:", err);
    }
  };

  
  const updateStock = async (id, currentStock, change) => {
    const newStock = Math.max(0, currentStock + change); 
    try {
      const productRef = ref(db, `products/${id}`);
      await update(productRef, { stock: newStock });
    } catch (err) {
      console.error("Update Error:", err);
    }
  };

  
  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await remove(ref(db, `products/${id}`));
      } catch (err) {
        console.error("Delete Error:", err);
      }
    }
  };

  
  const inputStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "14px",
  };

  const btnPrimary = {
    padding: "10px 20px",
    background: "#4F46E5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  if (status === "loading") {
    return (
      <div
        style={{ textAlign: "center", marginTop: "100px", fontSize: "20px" }}
      >
        ⏳ Connecting to Warehouse...
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F3F4F6",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              color: "#111827",
              fontSize: "2.5rem",
              marginBottom: "10px",
            }}
          >
            📦 Inventory Tracker Pro
          </h1>
          <p style={{ color: "#6B7280" }}>
            Real-time Inventory Management System
          </p>
        </div>

          <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            gap: "20px",
          }}
        >
  
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              height: "fit-content",
            }}
          >
            <h3 style={{ marginBottom: "20px", fontSize: "1.2rem" }}>
              Add New Item
            </h3>
            <form
              onSubmit={addProduct}
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <input
                placeholder="Product Name"
                style={inputStyle}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                placeholder="Category"
                style={inputStyle}
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Initial Stock"
                style={inputStyle}
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Price (₹)"
                style={inputStyle}
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
              <button type="submit" style={btnPrimary}>
                Add to Inventory
              </button>
            </form>
          </div>

  
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
  
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "15px",
              }}
            >
              <div style={statCard("#EEF2FF", "#4338CA")}>
                <small>Total Items</small>
                <h2>{items.length}</h2>
              </div>
              <div style={statCard("#FEF2F2", "#B91C1C")}>
                <small>Low Stock (&lt;10)</small>
                <h2>{items.filter((i) => i.stock < 10).length}</h2>
              </div>
              <div style={statCard("#ECFDF5", "#047857")}>
                <small>Total Valuation</small>
                <h2>
                  ₹
                  {items
                    .reduce((acc, curr) => acc + curr.price * curr.stock, 0)
                    .toLocaleString()}
                </h2>
              </div>
            </div>

  
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "left",
                }}
              >
                <thead
                  style={{
                    backgroundColor: "#F9FAFB",
                    borderBottom: "1px solid #F3F4F6",
                  }}
                >
                  <tr>
                    <th style={thStyle}>Product Details</th>
                    <th style={thStyle}>Category</th>
                    <th style={thStyle}>Stock Control</th>
                    <th style={thStyle}>Price</th>
                    <th style={thStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr
                      key={item.id}
                      style={{ borderBottom: "1px solid #F3F4F6" }}
                    >
                      <td style={tdStyle}>
                        <div style={{ fontWeight: "600", color: "#111827" }}>
                          {item.name}
                        </div>
                        <small style={{ color: "#9CA3AF" }}>
                          ID: {item.id.slice(-5)}
                        </small>
                      </td>
                      <td style={tdStyle}>
                        <span style={badgeStyle}>{item.category}</span>
                      </td>
                      <td style={tdStyle}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <button
                            onClick={() => updateStock(item.id, item.stock, -1)}
                            style={stockBtn}
                          >
                            -
                          </button>
                          <span
                            style={{
                              fontWeight: "bold",
                              minWidth: "25px",
                              textAlign: "center",
                              color: item.stock < 10 ? "#EF4444" : "#111827",
                            }}
                          >
                            {item.stock}
                          </span>
                          <button
                            onClick={() => updateStock(item.id, item.stock, 1)}
                            style={stockBtn}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td style={tdStyle}>₹{item.price.toLocaleString()}</td>
                      <td style={tdStyle}>
                        <button
                          onClick={() => deleteProduct(item.id)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#EF4444",
                            cursor: "pointer",
                            fontSize: "14px",
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {items.length === 0 && (
                <div
                  style={{
                    padding: "40px",
                    textAlign: "center",
                    color: "#6B7280",
                  }}
                >
                  No products found in inventory.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Styles
const statCard = (bg, color) => ({
  background: bg,
  padding: "15px",
  borderRadius: "10px",
  color: color,
  textAlign: "center",
});

const thStyle = {
  padding: "15px",
  fontSize: "12px",
  textTransform: "uppercase",
  color: "#6B7280",
  letterSpacing: "0.05em",
};
const tdStyle = { padding: "15px", fontSize: "14px" };
const badgeStyle = {
  background: "#F3F4F6",
  padding: "4px 8px",
  borderRadius: "4px",
  fontSize: "12px",
  color: "#374151",
};
const stockBtn = {
  width: "24px",
  height: "24px",
  borderRadius: "4px",
  border: "1px solid #D1D5DB",
  background: "white",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default App;
