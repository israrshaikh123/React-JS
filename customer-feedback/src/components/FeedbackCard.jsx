function FeedbackCard({ feedback }) {
  return (
    <>
      <div className="bg-gray-800 rounded-lg p-4 mb-4">

        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-white">{feedback.name}</h2>
          <span className="text-gray-400 text-sm">{feedback.timestamp}</span>
        </div>

        <p className="text-gray-400 text-sm mb-2">{feedback.email}</p>

        <div className="flex gap-2 mb-3">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
            {feedback.category}
          </span>
          <span
            className={`text-white text-xs px-2 py-1 rounded ${
              feedback.priority === "High"
                ? "bg-red-600"
                : feedback.priority === "Medium"
                  ? "bg-yellow-600"
                  : "bg-green-600"
            }`}
          >
            {feedback.priority}
          </span>
        </div>

        <p className="text-gray-300 text-sm mb-3">{feedback.description}</p>

        {feedback.steps.length > 0 && (
          <div className="mb-3">
            <p className="text-gray-400 text-sm font-semibold mb-1">Steps:</p>
            {feedback.steps.map((step, index) => (
              <p key={index} className="text-gray-300 text-sm">
                {index + 1}. {step}
              </p>
            ))}
          </div>
        )}

        {feedback.suggestions.length > 0 && (
          <div>
            <p className="text-gray-400 text-sm font-semibold mb-1">
              Suggestions:
            </p>
            {feedback.suggestions.map((suggestion, index) => (
              <p key={index} className="text-gray-300 text-sm">
                {index + 1}. {suggestion}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default FeedbackCard;
