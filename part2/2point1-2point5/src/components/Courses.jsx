const Courses = ({courses}) => {
  return (
    <>
      {
        courses.map(course =>
          <Course key={course.id} course={course}/>
        )
      }
    </>
  )};

const Course = ({course}) =>{
  return(
    <>
      <Header course={course} />
      <Content course={course} />
      <Total total={course.parts.reduce((sum,part) => sum+part.exercises, 0)} />
    </>
  )
}

const Header = (props) => {
// console.log(props.course)
return (<h1>{props.course.name}</h1>)}

const Content = ({course}) => {
  return (<>
    {course.parts.map(part =>
      <Part key={part.id} part ={part}/>
    )}
  </>)
}

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = ({total}) => {
return (
  <p> <b>Number of exercises {total}</b></p>
)
}

export default Courses;