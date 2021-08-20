import React from "react";
import { render } from "react-dom";
import Link from "./Link.js";
import Button from "./Button.js";
import Container from "./Container.js";
import Input from "./Input.js";
function App() {
 return (
  <>
   <Link href="https://react-tutorial.app">Shop online</Link>
   <Button>hello</Button>
   <Container>content</Container>
   <Input type="text" placeholder="Your full name" name="name here" />
  </>
 );
}

render(<App />, document.querySelector("#react-root"));
