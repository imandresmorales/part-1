import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

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

  const all = () => (good + bad + neutral)

  const average = () => {
    return (good - bad) / all()
  }
  
  const positive = () => {
    return (good / all()) * 100
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {HandleGoodClick} text = "good" />
      <Button handleClick = {HandleNeutralClick} text = "neutral" />
      <Button handleClick = {HandleBadClick} text = "bad" />
      <h1>give feedback</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all()}</p>
      <p>average {average()}</p>
      <p>positive {positive()} %</p>
    </div>
  )
}

export default App