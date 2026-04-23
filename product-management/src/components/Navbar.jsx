import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-green-600 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-white text-xl font-bold">
        Product Manager
      </Link>
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <span className="text-green-200 text-sm">
              Welcome, {user?.name}
            </span>
            <Link
              to="/"
              className="text-white hover:text-green-200 text-sm font-medium"
            >
              Products
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;