import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchApi } from "../features/apiSlice";

function ApiForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    let parsedBody = null;
    if (method === "POST" && body) {
      try {
        parsedBody = JSON.parse(body);
      } catch {
        alert("Invalid JSON in body!");
        return;
      }
    }
    dispatch(fetchApi({ url, method, body: parsedBody }));
  };

  const dispatch = useDispatch();
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🔍 API Hunter</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label className="text-gray-600 text-sm font-medium mb-1 block">
              API Endpoint
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://api.example.com/data"
              className="w-full border border-gray-200 rounded-lg p-2 outline-none text-gray-800"
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm font-medium mb-1 block">
              Method
            </label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2 outline-none text-gray-800"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
            </select>
          </div>

          {/* Body — sirf POST ke liye */}
          {method === "POST" && (
            <div>
              <label className="text-gray-600 text-sm font-medium mb-1 block">
                Request Body (JSON)
              </label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder='{"name": "Ali", "email": "ali@example.com"}'
                rows={4}
                className="w-full border border-gray-200 rounded-lg p-2 outline-none text-gray-800 font-mono text-sm"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-2 font-semibold"
          >
            Send Request
          </button>
        </form>

        {/* Quick URLs */}
        <div className="mt-4">
          <p className="text-gray-500 text-sm mb-2">Quick URLs:</p>
          <div className="flex gap-2 flex-wrap">
            <button
              type="button"
              onClick={() =>
                setUrl("https://jsonplaceholder.typicode.com/users")
              }
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs hover:bg-gray-200"
            >
              JSONPlaceholder Users
            </button>
            <button
              type="button"
              onClick={() =>
                setUrl("https://jsonplaceholder.typicode.com/posts")
              }
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs hover:bg-gray-200"
            >
              JSONPlaceholder Posts
            </button>
            <button
              type="button"
              onClick={() => setUrl("http://localhost:3001/users")}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs hover:bg-gray-200"
            >
              Local Users
            </button>
            <button
              type="button"
              onClick={() => setUrl("http://localhost:3001/posts")}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs hover:bg-gray-200"
            >
              Local Posts
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApiForm;
