import clsx from "clsx";
import css from "./Options.module.css";

const Options = ({ updateFeedback, total, resetFeedback }) => {
  return (
    <div className={css.optionsBox}>
      <button className={css.optionsBtn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={clsx(css.optionsBtn, css.neutral)}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={clsx(css.optionsBtn, css.bad)}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {total !== 0 && (
        <button
          className={clsx(css.optionsBtn, css.reset)}
          onClick={resetFeedback}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
