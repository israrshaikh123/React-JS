import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (email === "israr@gmail.com" && password === "israr123") {
      dispatch(login({ email, name: "Admin" }));
      navigate("/");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-200 rounded-lg p-3 outline-none text-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-200 rounded-lg p-3 outline-none text-gray-800"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-3 font-semibold">
            Login
          </button>
        </form>

        <div className="mt-4 bg-gray-50 rounded-lg p-3">
          <p className="text-gray-500 text-sm text-center">Demo Credentials:</p>
          <p className="text-gray-600 text-sm text-center">
            Email: israr@gmail.com
          </p>
          <p className="text-gray-600 text-sm text-center">
            Password: israr123
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
