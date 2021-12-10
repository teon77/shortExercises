import React from 'react';
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Total } from "./components/Total";
const App = () => {
  const courseName: string = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
      <Header courseName={ courseName }/>
      {courseParts ? courseParts.map((coursePartsEntry) => {
        return <Content name={coursePartsEntry.name} exerciseCount={coursePartsEntry.exerciseCount} />
      }) : null}
      <Total data={ courseParts}/>
    </div>
  );
};

export default App;