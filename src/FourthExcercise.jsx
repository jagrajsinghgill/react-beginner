import "./assets/styles.css";
import Img from "./assets/react.svg";
import User from "./assets/users.json";

export function FourthExcercise() {

  // Excercise for Chapter 14 - Importing Non-JS Files
  return (
    <>
      <div>
        <h1>Hello there Mate !</h1>
        <img src={Img} />
        <div>{JSON.stringify(User)}</div>
      </div>
    </>
  );
}
