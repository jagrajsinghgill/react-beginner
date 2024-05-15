import { useState } from "react";
import { Child } from "./Child";
import { ChildClass } from "./ChildClass";

export default function App() {
  const [show, setShow] = useState(true);

  const childComponent = show ? <Child /> : null;
  const childClassComponent = show ? <ChildClass /> : null;

  return (
    <div>
      <button onClick={() => setShow((currentShow) => !currentShow)}>
        Show/Hide
      </button>
      <h1>Function Component</h1>
      {childComponent}
      <h1>Class Component</h1>
      {childClassComponent}
    </div>
  );
}
