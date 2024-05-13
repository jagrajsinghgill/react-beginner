import { useState } from "react"

export function Counter() {

  const [counter, setCounter] = useState(0)
  // const [object, setObject] = useState({name: "Jagraj", lastName: "Gill"})

  function handleClick() {

    // To directly increase the counter
    setCounter(currCounter => currCounter + 1);
  
    // To use the counter value multiple times so
    // that it can be increased twice using single click.
    
    // setCounter((currCounter) => {
    //   return currCounter + 1;
    // })

    // setCounter((currCounter) => {
    //   return currCounter + 1;
    // })

    // Object updating using prev object so that
    // it updates particular key only and not the whole object.

    // setObject(currObj => {
    //   return { ...currObj, lastName: "Gill again!" }
    // })
  }

  return (
    <>
    {/* <h1>Hi {object.name} {object.lastName}</h1> */}
    <h1 onClick={handleClick}>Counter : {counter}</h1>
    </>
  )
}