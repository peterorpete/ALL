////
// * React state example with ternary operator
// # React state example - Also shows a ternary operator - show trye or false
// From this lesson: https://scrimba.com/learn/learnreact/react-state-practice-2-cewRpUQ
////
import React from "react";

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App extends React.Component {
 constructor() {
  super();
  this.state = {
   isLoggedIn: false,
  };
 }
 render() {
  return (
   <div>
    <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
   </div>
  );
 }
}
export default App;
