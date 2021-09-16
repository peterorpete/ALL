////
// * React state example
// # React state example
//From this lesson: https://scrimba.com/learn/learnreact/react-state-practice-c2NmZsa
////
import React from "react";

// Challenge:
// Given an incomplete class-based component without a constructor,
// add a constructor and initialize state to fix the broken component.

class App extends React.Component {
 constructor() {
  super(); //super takes all the goodies from React.Component i think
  this.state = {
   name: "peter",
   age: 38,
  };
 }
 render() {
  return (
   <div>
    <h1>{this.state.name}</h1>
    <h3>{this.state.age} years old</h3>
   </div>
  );
 }
}

export default App;
