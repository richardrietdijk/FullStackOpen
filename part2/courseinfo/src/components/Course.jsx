const Course = (props) => {
  return (
    <>
      <Header course={props.course.name} />
      <Content part={props.course.parts} />
      <Total part={props.course.parts} />
    </>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return props.part.map((i) => (
    <Part key={i.id} part={i.name} exercises={i.exercises} />
  ));
};

const Total = (props) => {
  const total = props.part.reduce((acc, cur) => acc + cur.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

export default Course;
