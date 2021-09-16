////
// * React event handling example 1
// # event handlers - hover
//From lesson https://scrimba.com/learn/learnreact/handling-events-in-react-c2Nm2cV
//! https://reactjs.org/docs/events.html#supported-events
////

import React from "react";

function handleClick() {
 console.log("I was clicked");
}
function handleHover() {
 console.log("I was hovered on!");
}
function App() {
 return (
  <div>
   <img onMouseEnter={handleHover} src="https://www.fillmurray.com/200/100" />
   <br />
   <br />
   <button onClick={handleClick}>Click me</button>
  </div>
 );
}

export default App;
