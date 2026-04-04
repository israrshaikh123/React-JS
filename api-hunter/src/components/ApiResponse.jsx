import { useSelector } from "react-redux";

function ApiResponse() {
  const { loading, data, error, status, url, method } = useSelector(
    (state) => state.api,
  );

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">API Response</h2>

        {/* Default State */}
        {!loading && !data && !error && (
          <p className="text-gray-400">
            Send a request to see the response here...
          </p>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-center py-8">
            <p className="text-blue-500 font-medium"> Loading...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-500 font-medium">Error: {error}</p>
          </div>
        )}

        {/* Success */}
        {data && !loading && (
          <div>
            {/* Summary */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-gray-500 text-xs">Endpoint</p>
                  <p className="text-gray-800 text-sm font-medium truncate">
                    {url}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Method</p>
                  <span
                    className={`text-sm font-bold ${
                      method === "GET" ? "text-green-600" : "text-blue-600"
                    }`}
                  >
                    {method}
                  </span>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Status</p>
                  <span className="text-green-600 font-bold text-sm">
                    {status}
                  </span>
                </div>
              </div>
            </div>

            {/* Response Data */}
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">
                Response Data:
              </p>
              <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-auto text-xs max-h-96">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ApiResponse;
