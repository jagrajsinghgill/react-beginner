import { React } from "react";
import { FirstExcercise } from "./FirstExcercise";
import { SecondExcercise } from "./SecondExcercise";
import { ThirdExcercise } from "./ThirdExcercise";

function App() {

  return (
    <>
      {/* Excercise for Chapter 10 - JSX Basics */}
      <FirstExcercise />
      {/* Excercise for Chapter 11 - Creating Components */}
      <SecondExcercise />
      {/* Excercise for Chapter 12 - Props */}
      <ThirdExcercise />
    </>
  );
}

export default App;
