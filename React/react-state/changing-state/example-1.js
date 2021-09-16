////
// * React chnaging state example
// # click button change value
// from this lesson https://scrimba.com/learn/learnreact/react-setstate-changing-the-state-cLKWEcZ
////

import React from "react";

class App extends React.Component {
 constructor() {
  super();
  this.state = {
   count: 0,
  };
  this.handleClick = this.handleClick.bind(this);
 }

 handleClick() {
  this.setState((prevState) => {
   return {
    count: prevState.count + 1,
   };
  });
 }

 render() {
  return (
   <div>
    <h1>{this.state.count}</h1>
    <button onClick={this.handleClick}>Change!</button>
   </div>
  );
 }
}

export default App;
