function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div>
        {Object.keys(options).map(key => (
          <button type="button" key={key} onClick={onLeaveFeedback} name={key}>
            {key}
          </button>
        ))}
      </div>
    </>
  );
}

export default FeedbackOptions;
