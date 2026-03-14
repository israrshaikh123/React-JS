import { useState } from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (feedback) => {
    const newFeedback = {
      ...feedback,
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
    };
    setFeedbacks([...feedbacks, newFeedback]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 px-6 py-4 mb-6 shadow-md">
        <h1 className="text-2xl font-bold text-white">
          Customer Feedback System
        </h1>
        <p className="text-gray-400 text-sm">
          Total Feedbacks: {feedbacks.length}
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <FeedbackForm onSubmit={addFeedback} />
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </div>
  );
}

export default App;
