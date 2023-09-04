import React, { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (event) => {
    setFeedbacks((prev) => ({
      ...prev,
      [event]: prev[event] + 1,
    }));
  };

  const countTotalFeedback = () => {
    let totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedbacks.good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleFeedback}
        />

        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
