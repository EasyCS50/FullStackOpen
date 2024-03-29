import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Anecdote = ({ text }) => <p>{text}</p>

const Votes = ({ votes }) => <p>has {votes} votes</p>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const length = anecdotes.length
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    new Uint8Array(length)
  )

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * length))
  }

  const castVote = () => {
    const temp = [...votes]
    temp[selected] += 1
    setVotes(temp)
  }

  const sortedVotes = [...votes].sort((a, b) => b - a)[0]
  const mostVotes = votes.indexOf(sortedVotes)

  return (
    <div>
      <Header text='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} />
      <Votes votes={votes[selected]} />

      <Button handleClick={castVote} text='vote' />
      <Button handleClick={randomAnecdote} text='next anecdote' />

      <Header text='Anecdote with the most votes' />
      <Anecdote text={anecdotes[mostVotes]} />
      <Votes votes={sortedVotes} />
    </div>
  )
}

export default App
