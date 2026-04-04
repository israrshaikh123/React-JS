import "./App.css";
import { Provider } from "react-redux";
import ApiForm from "./components/ApiForm";
import ApiResponse from "./components/ApiResponse";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 px-6 py-4 mb-6">
        <h1 className="text-2xl font-bold text-white"> API Hunter</h1>
        <p className="text-blue-200 text-sm">
          Explore and test APIs with fetch()
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <ApiForm />
        <ApiResponse />
      </div>
    </div>
  );
}

export default App;
