import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFiles } from "../features/fileSlice";
import UploadFile from "../components/UploadFile";
import FileList from "../components/FileList";
import SearchFilter from "../components/SearchFilter";

function Dashboard() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    dispatch(fetchFiles());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-blue-600 px-6 py-4 mb-6">
        <h1 className="text-2xl font-bold text-white">
          Digital Document Manager
        </h1>
        <p className="text-blue-200 text-sm">
          Upload, manage and organize your documents
        </p>
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