import { React } from "react";

function App() {
  return (
    <>
      <div className="large" id="largeDiv">
        <label htmlFor="inputId">Number</label>
        <input type="number" id="inputId" defaultValue={3} />
      </div>
    </>
  );
}

export default App;
