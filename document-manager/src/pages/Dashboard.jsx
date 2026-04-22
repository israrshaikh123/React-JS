import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFiles } from "../features/fileSlice";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import UploadFile from "../components/UploadFile";
import FileList from "../components/FileList";
import SearchFilter from "../components/SearchFilter";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    dispatch(fetchFiles());
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-blue-600 px-6 py-4 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Digital Document Manager
          </h1>
          <p className="text-blue-200 text-sm">
            Welcome, {auth.currentUser?.displayName || auth.currentUser?.email}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/profile")}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <UploadFile />
        <SearchFilter
          search={search}
          filterCategory={filterCategory}
          onSearch={setSearch}
          onFilter={setFilterCategory}
        />
        <FileList
          search={search}
          filterCategory={filterCategory}
        />
      </div>
    </div>
  );
}

export default Dashboard;