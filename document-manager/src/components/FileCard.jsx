import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFile, updateFile } from "../features/fileSlice";

function FileCard({ file }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(file.name);
  const [category, setCategory] = useState(file.category);
  const [description, setDescription] = useState(file.description);

  const handleUpdate = () => {
    dispatch(
      updateFile({
        id: file.id,
        updates: { name: title, category, description },
      }),
    );
    setIsEditing(false);
  };

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        {/* File Info */}
        {!isEditing ? (
          <>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-800 truncate">{file.name}</h3>
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                {file.category}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-1">{file.description}</p>
            <p className="text-gray-400 text-xs mb-1">
              Size: {(file.size / 1024).toFixed(2)} KB
            </p>
            <p className="text-gray-400 text-xs mb-3">
              Uploaded: {file.uploadDate}
            </p>

            {/* Buttons */}
            <div className="flex gap-2">
              <a
                href={file.url}
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
              >
                Download
              </a>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteFile(file.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
              >
                Delete
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Edit Mode */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2 outline-none mb-2"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2 outline-none mb-2"
            >
              <option value="General">General</option>
              <option value="Personal">Personal</option>
              <option value="Academic">Academic</option>
              <option value="Office">Office</option>
              <option value="Certificates">Certificates</option>
            </select>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2 outline-none mb-3"
            />
            <div className="flex gap-2">
              <button
                onClick={handleUpdate}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded-lg text-sm"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default FileCard;
