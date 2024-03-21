import clsx from "clsx";
import css from "./Feedback.module.css";

const Feedback = ({ status: { good, neutral, bad }, total, positive }) => {
  return (
    <div>
      <p className={css.feedbackText}>
        Good: <span className={clsx(css.feedbackData, css.good)}>{good}</span>
      </p>
      <p className={css.feedbackText}>
        Neutral:{" "}
        <span className={clsx(css.feedbackData, css.neutral)}>{neutral}</span>
      </p>
      <p className={css.feedbackText}>
        Bad: <span className={clsx(css.feedbackData, css.bad)}>{bad}</span>
      </p>
      <p className={css.feedbackText}>
        Total:{" "}
        <span className={clsx(css.feedbackData, css.total)}>{total}</span>
      </p>
      <p className={css.feedbackText}>
        Positive:{" "}
        <span
          className={clsx(css.feedbackData, {
            [css.neutral]: positive === 50,
            [css.bad]: positive < 50,
          })}
        >
          {positive}%
        </span>
      </p>
    </div>
  );
};

export default Feedback;
