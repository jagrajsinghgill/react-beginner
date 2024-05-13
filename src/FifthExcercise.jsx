import { Counter } from "./layoutComponents/Counter";
import { CounterClass } from "./layoutComponents/CounterClass";

export function FifthExcercise() {

  // Excercise for Chapter 17 - useState Hook
  // Excercise for Chapter 18 - State In Class Components
  return (
    <>
      <div>
        {/* Function Component - Excercise for Chapter 17 - useState Hook */}
        <Counter />
        {/* Class Component - Excercise for Chapter 18 - State In Class Components */}
        <CounterClass />
      </div>
    </>
  );
}
