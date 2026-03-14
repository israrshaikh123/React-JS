import FeedbackCard from "./FeedbackCard";

function FeedbackList({ feedbacks }) {
  return (
    <>
      <h2>Submitted Feedbacks</h2>
      {feedbacks.length === 0 ? (
        <p>No Feedbacks Yet!</p>
      ) : (
        feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))
      )}
    </>
  );
}

export default FeedbackList;
