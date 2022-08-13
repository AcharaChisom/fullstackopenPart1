const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
 
const Part = (props) => {
  return (
    <p>
      {props.part1} {props.exercises1}
    </p>
  )
}

const Content = (props) => {
  const partEl = props.parts.map(obj => <Part part1={obj.name} exercises1={obj.exercises}/>)

  return (
    <>
      {partEl}
    </>
  )
}

const Total = (props) => {
  const number = props.parts.map(obj => obj.exercises).reduce((prev, curr) => {
    return prev += curr
  }, 0)
  return (
    <p>Number of exercises {number}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header 
        course={course.name}
      />
      <Content 
        parts={course.parts}
      />
      <Total 
        parts={course.parts}
      />
    </div>
  )
}

export default App
