import { useState } from "react"

export function Counter() {

  const [counter, setCounter] = useState(0)
  // const [object, setObject] = useState({name: "Jagraj", lastName: "Gill"})

  function handleClick() {

    // To directly increase the counter
    setCounter(currCounter => currCounter + 1);
    // setObject(currObj => {
    //   return { ...currObj, lastName: "Gill again!" }
    // })
    // To use the counter value multiple times so
    // that it can be increased twice using single click.
    // setCounter((currCounter) => {
    //   return currCounter + 1;
    // })

    // setCounter((currCounter) => {
    //   return currCounter + 1;
    // })
  }

  return (
    <>
    {/* <h1>Hi {object.name} {object.lastName}</h1> */}
    <h1 onClick={handleClick}>Counter : {counter}</h1>
    </>
  )
}