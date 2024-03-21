import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const status = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const feedbackData = JSON.parse(
      window.localStorage.getItem("feedback-data")
    );
    if (feedbackData) {
      return feedbackData;
    }
    return status;
  });

  useEffect(() => {
    window.localStorage.setItem("feedback-data", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback(status);
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive =
    Math.round((feedback.good / (total - feedback.neutral)) * 100) || 0;

  return (
    <div className="container">
      <Description />
      <Options
        total={total}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {total !== 0 ? (
        <Feedback total={total} positive={positive} status={feedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
