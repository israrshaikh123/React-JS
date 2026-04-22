import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../features/fileSlice";

function UploadFile() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.files);

  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("General");
  const [description, setDescription] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file!");
      return;
    }
    dispatch(uploadFile({ file, category, description }));
    setFile(null);
    setCategory("General");
    setDescription("");
    e.target.reset();
  };

  return (
    // ✅ function ke andar
    <>
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Upload Document
        </h2>

        <form onSubmit={handleUpload} className="flex flex-col gap-3">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="border border-gray-200 rounded-lg p-2 text-gray-800"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-200 rounded-lg p-2 outline-none text-gray-800"
          >
            <option value="General">General</option>
            <option value="Personal">Personal</option>
            <option value="Academic">Academic</option>
            <option value="Office">Office</option>
            <option value="Certificates">Certificates</option>
          </select>
          <input
            type="text"
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-200 rounded-lg p-2 outline-none text-gray-800"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-2 font-semibold"
          >
            {loading ? "Uploading..." : "Upload File"}
          </button>
        </form>
      </div>
    </>
  );
}

export default UploadFile;
