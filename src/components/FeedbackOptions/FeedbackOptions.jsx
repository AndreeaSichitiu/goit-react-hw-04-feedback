import React from "react";
import style from "./FeedbackOptions.module.css";

import PropTypes from "prop-types";

export default function FeedbackOptions({options, onLeaveFeedback }) {
  
  
  
  return (
    <div className={style.buttonContainer}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
          className={style.feedbackButton}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
