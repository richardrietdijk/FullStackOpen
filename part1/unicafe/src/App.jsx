import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>

      <p>
        good {props.good} <br />
        neutral {props.neutral} <br />
        bad {props.bad}
        <br />
        all {props.good + props.neutral + props.bad}
        <br />
        average{" "}
        {(props.good - props.bad) / (props.good + props.neutral + props.bad)}
        <br />
        positive {(props.good / (props.good + props.neutral + props.bad)) *
          100}{" "}
        %
        <br />
      </p>
    </div>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
