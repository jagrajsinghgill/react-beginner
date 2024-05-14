import { useState } from "react";

const INTIAL_ELEMENTS = ["A", "B", "C"];

export function ArrayState() {
  const [customArray, setCustomArray] = useState(INTIAL_ELEMENTS);
  const [newElement, setNewElement] = useState("");
  const [elementIndex, setElementIndex] = useState(0);

  function removeFirstEle() {
    setCustomArray((currArray) => {
      return currArray.slice(1);
    });
  }

  function removeClickedEle(ele) {
    setCustomArray((currArray) => {
      return currArray.filter((element) => element != ele);
    });
  }

  function addElementAtStart() {
    setCustomArray((currArray) => {
      return [newElement, ...currArray];
    });
  }

  function addElementAtEnd() {
    setCustomArray((currArray) => {
      return [...currArray, newElement];
    });
  }

  function clearArr() {
    setCustomArray([]);
  }

  function resetArr() {
    setCustomArray(INTIAL_ELEMENTS);
  }

  function updateAtoH() {
    setCustomArray((currArray) => {
      return [...currArray].map((item) => (item == "A" ? "H" : item));
    });
  }

  function addAtIndex() {
    setCustomArray((currArray) => {
      return [
        ...currArray.slice(0, elementIndex),
        newElement,
        ...currArray.slice(elementIndex),
      ];
    });
  }

  return (
    <div>
      <h1>My custom array element list : </h1>
      <ul>
        {customArray.map((el, i) => (
          <li key={el + i}>
            {el}
            <button
              data-id={el}
              onClick={(e) => removeClickedEle(e?.currentTarget?.dataset?.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <label htmlFor="add_new_element">Element to Add</label>
      <input
        id="add_new_element"
        type="text"
        name="add_new_element"
        onChange={(e) => setNewElement(e.target.value)}
      />
      <br />
      <label htmlFor="add_element_index">Element Index</label>
      <input
        id="add_element_index"
        type="number"
        step={1}
        name="add_element_index"
        onChange={(e) => setElementIndex(e.target.value)}
      />
      <button onClick={addAtIndex}>Add Element at given index</button>
      <br />
      <br />
      <button onClick={addElementAtStart}>Add element at Start</button>
      <br />
      <br />
      <button onClick={addElementAtEnd}>Add element at End</button>
      <br />
      <br />
      <button onClick={removeFirstEle}>Remove first element</button>
      <br />
      <br />
      <button onClick={clearArr}>Clear</button>
      <br />
      <br />
      <button onClick={resetArr}>Reset</button>
      <br />
      <br />
      <button onClick={updateAtoH}>Update A's to H's</button>
    </div>
  );
}
