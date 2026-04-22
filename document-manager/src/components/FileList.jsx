import { useSelector } from "react-redux";
import FileCard from "./FileCard";

function FileList({ search, filterCategory }) {
  const { files, loading, error } = useSelector((state) => state.files);

  const filtered = files.filter((file) => {
    const matchSearch = file.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filterCategory === "All" || file.category === filterCategory;
    return matchSearch && matchCategory;
  });

  return (
    <>
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Documents ({filtered.length})
        </h2>

        {loading && <p className="text-blue-500">Uploading...</p>}

        {error && <p className="text-red-500">Error: {error}</p>}

        {filtered.length === 0 && !loading && (
          <p className="text-gray-400">No documents found!</p>
        )}

        <div className="grid grid-cols-3 gap-4">
          {filtered.map((file) => (
            <FileCard key={file.id} file={file} />
          ))}
        </div>

      </div>
    </>
  );
}

export default FileList;