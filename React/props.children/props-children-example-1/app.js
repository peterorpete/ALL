import React from "react";
import { render } from "react-dom";

function Button(props) {
 return <button>{props.children}</button>;
}

const root = document.querySelector("#react-root");

render(<Button>Login</Button>, root);
