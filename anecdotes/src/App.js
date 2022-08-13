import { useState } from 'react'

const Mostvotes = (props) => {
  if (Math.max(...props.votes) === 0) {
    return (
      <></>
    )
  }
  const maxNum = Math.max(...props.votes)
  const indexNum = props.votes.indexOf(maxNum)
  return (
    <>
      <h1>Anecdotes with most votes</h1>
      <div>
        {props.anecdotes[indexNum]}
      </div>
      <p>has {maxNum} votes.</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = () => {
    setVotes(prevVotes => {
      const copy = [...prevVotes]
      copy[selected] += 1
      return copy
    })
  }

  console.log(votes)

  return (
    <>
      <div>
        {anecdotes[selected]}
      </div>
      <p>has {votes[selected]} votes.</p>
      <button onClick={addVote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <Mostvotes 
        votes={votes}
        anecdotes={anecdotes}
      />
    </>
  )
}

export default App
