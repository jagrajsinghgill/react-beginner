import { React } from "react";
import { FirstExcercise } from "./FirstExcercise";
import { SecondExcercise } from "./SecondExcercise";
import { ThirdExcercise } from "./ThirdExcercise";
import { FourthExcercise } from "./FourthExcercise";

function App() {

  return (
    <>
      {/* Excercise for Chapter 10 - JSX Basics */}
      <FirstExcercise />
      {/* Excercise for Chapter 11 - Creating Components */}
      <SecondExcercise />
      {/* Excercise for Chapter 12 - Props */}
      <ThirdExcercise />
      {/* Excercise for Chapter 14 - Importing Non-JS Files */}
      <FourthExcercise />
    </>
  );
}

export default App;
