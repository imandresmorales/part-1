import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  const all = () => (props.good + props.bad + props.neutral)

  const average = () => {
    return (props.good - props.bad) / all()
  }

  const positive = () => {
    return (props.good / all()) * 100
  }

  if(props.good ===0 && props.bad === 0 && props.neutral === 0){
    return (
      <p>No feedback given</p>
    )
  }
  
  return (
    <>
      <h2>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all()}</p>
      <p>average {average()}</p>
      <p>positive {positive()} %</p>
   </>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const HandleGoodClick = () => {
    setGood(good + 1)
    setBad(bad)
    setNeutral(neutral)
  }

  const HandleNeutralClick = () => {
    setGood(good)
    setBad(bad)
    setNeutral(neutral + 1)
  }

  const HandleBadClick = () => {
    setGood(good)
    setBad(bad + 1)
    setNeutral(neutral)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {HandleGoodClick} text = "good" />
      <Button handleClick = {HandleNeutralClick} text = "neutral" />
      <Button handleClick = {HandleBadClick} text = "bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App