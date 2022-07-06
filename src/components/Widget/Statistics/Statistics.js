function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <ul>
        <li>good : {good}</li>
        <li>neutral : {neutral}</li>
        <li>bad : {bad}</li>
      </ul>
      <p>total: {total}</p>

      <p>Positive feedback : {positivePercentage} %</p>
    </>
  );
}

export default Statistics;
