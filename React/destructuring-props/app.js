// * Lesson link: https://react-tutorial.app/app.html?id=389

import React from "react";
import { render } from "react-dom";

function Button(props) {
 //Make sure this isnt in the return
 const { className, children } = props;

 return <button className={className}>{children}</button>;
}

const root = document.querySelector("#react-root");

render(<Button className="primary">Login</Button>, root);
