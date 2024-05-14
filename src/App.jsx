import { CounterWithName } from "./layoutComponents/CounterWithName";
import { CounterWithNameClass } from "./layoutComponents/CounterWithNameClass";

function App() {
  return (
    <>
      {/* Function Component */}
      <h1>Function Component</h1>
      <CounterWithName />
      <br />
      {/* Class Component */}
      <h1>Class Component</h1>
      <CounterWithNameClass />
    </>
  );
}

export default App;
