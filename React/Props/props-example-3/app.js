import React from "react";
import { render } from "react-dom";

function Button(props) {
 let buttonSize = "btn-medium";

 if (props.size === "small") {
  buttonSize = "btn-small";
 } else if (props.size === "large") {
  buttonSize = "btn-large";
 }
 return <button className={buttonSize}>Text here</button>;
}

const root = document.querySelector("#react-root");
render(<Button size="small" />, root);
