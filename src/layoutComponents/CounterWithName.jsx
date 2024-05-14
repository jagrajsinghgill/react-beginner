import { useState } from "react";

export function CounterWithName() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function decrementAge() {
    setAge((currAge) => {
      return currAge - 1;
    });
  }

  function incrementAge() {
    setAge((currAge) => {
      return currAge + 1;
    });
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={decrementAge}>-</button>
      {age}
      <button onClick={incrementAge}>+</button>
      <br />
      <p>
        My name is {name} and I am {age} years old.
      </p>
    </div>
  );
}
