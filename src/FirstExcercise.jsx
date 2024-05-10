export function FirstExcercise() {

  // Excercise for Chapter 10 - JSX Basics
  return (
    <>
      <div className="large" id="largeDiv">
        <label htmlFor="inputId">Number</label>
        <input type="number" id="inputId" defaultValue={3} />
      </div>
    </>
  );
}
