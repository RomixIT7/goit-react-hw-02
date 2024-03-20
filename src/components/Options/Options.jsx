const Options = ({ updateFeedback, total, resetFeedback }) => {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {total !== 0 && <button onClick={resetFeedback}>Reset</button>}
    </>
  );
};

export default Options;
