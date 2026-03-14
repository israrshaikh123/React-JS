import { useRef, useState } from "react";
import DynamicList from "./DynamicList";

function FeedbackForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([""]);
  const [suggestions, setSuggestions] = useState([""]);

  const screenshotRef = useRef(null);
  const notesRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      name,
      email,
      category,
      priority,
      description,
      steps,
      suggestions,

      screenshot: screenshotRef.current.value,
      notes: notesRef.current.value,
    };

    console.log(feedbackData);
    onSubmit(feedbackData);

    setName("");
    setEmail("");
    setCategory("");
    setPriority("");
    setDescription("");
    setSteps([""]);
    setSuggestions([""]);

    screenshotRef.current.value = "";
    notesRef.current.value = "";
  };

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const updateStep = (index, value) => {
    setSteps(steps.map((s, i) => (i === index ? value : s)));
  };

  const addSuggestion = () => setSuggestions([...suggestions, ""]);

  const removeSuggestion = (index) => {
    setSuggestions(suggestions.filter((_, i) => i !== index));
  };

  const updateSuggestion = (index, value) => {
    setSuggestions(suggestions.map((s, i) => (i === index ? value : s)));
  };
  return (
    <>
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-white mb-4">Submit Feedback</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-700 text-white rounded-lg p-2 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-700 text-white rounded-lg p-2 outline-none"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-700 text-white rounded-lg p-2 outline-none"
          >
            <option value="">Select Category</option>
            <option value="Bug">Bug</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Complaint">Complaint</option>
            <option value="Other">Other</option>
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="bg-gray-700 text-white rounded-lg p-2 outline-none"
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <textarea
            placeholder="Describe your issue..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-700 text-white rounded-lg p-2 outline-none"
            rows={3}
          />

          <input
            type="text"
            placeholder="Screenshot URL (optional)"
            ref={screenshotRef}
            className="bg-gray-700 text-white rounded-lg p-2 outline-none"
          />

          <textarea
            placeholder="Additional Notes (optional)"
            ref={notesRef}
            className="bg-gray-700 text-white rounded-lg p-2 outline-none"
            rows={2}
          />

          <DynamicList
            items={steps}
            onAdd={addStep}
            onRemove={removeStep}
            onUpdate={updateStep}
            placeholder="Step"
          />

          <DynamicList
            items={suggestions}
            onAdd={addSuggestion}
            onRemove={removeSuggestion}
            onUpdate={updateSuggestion}
            placeholder="Suggestion"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-2 font-semibold"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </>
  );
}

export default FeedbackForm;
