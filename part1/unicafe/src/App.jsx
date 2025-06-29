import { useState } from 'react'
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  // const [clicks, setClicks] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // })
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);
  return (
    <>
      <h1>Give Feedback</h1>
      {/* <Button handleClick={() => setClicks({...clicks, good: clicks.good + 1})} text="good" />
      <Button handleClick={() => setClicks({...clicks, neutral : clicks.neutral + 1})} text="neutral" />
      <Button handleClick={() => setClicks({...clicks, bad : clicks.bad + 1})} text="bad" /> */}
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      {good + neutral + bad  === 0 ?(
        <p>No feedback given</p>
      ) : (
        <>
        <p>average {(good - bad) / (good + neutral + bad)}</p>
        <p>positive {good/(good + neutral + bad) * 100} %</p>
        </>
      )}
      
      {/* <p>good {clicks.good}</p>
      <p>neutral {clicks.neutral}</p>
      <p>bad {clicks.bad}</p> */}

    </>
  )
}

export default App