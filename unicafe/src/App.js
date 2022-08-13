import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  if (total === 0) {
    return (
      <p>no feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine 
          text='Good'
          value={good}
        />
        <StatisticLine 
          text='Neutral'
          value={neutral}
        />
        <StatisticLine 
          text='Bad'
          value={bad}
        />
        <StatisticLine 
          text='All'
          value={total}
        />
        <StatisticLine 
          text='Average'
          value={((good) + (bad * -1)) / total}
        />
        <StatisticLine 
          text='Positive'
          value={`${(good/total) * 100}%`}
        />
      </tbody>
    </table>
  )
}


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodReview = () => {
    setGood(good + 1)
  }

  const badReview = () => {
    setBad(bad + 1)
  }

  const neutralReview = () => {
    setNeutral(neutral + 1)
  }

  return (
    <>
      <h1>give feedback</h1>
      <div>
        <Button 
          handleClick={goodReview}
          text='good'
        />
        <Button 
          handleClick={neutralReview}
          text='neutral'
        />
        <Button 
          handleClick={badReview}
          text='bad'
        />
      </div>
      <h1>Statistics</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </>
  )
}

export default App
