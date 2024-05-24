import { useCallback, useState } from "react";

export function useArray(intialArray) {
  const [array, setArray] = useState(intialArray);

  const push = useCallback((ele) => {
    setArray((currArray) => {
      return [...currArray, ele];
    });
  }, []);

  const replace = useCallback((index, ele) => {
    setArray((currArray) => {
      return [...currArray.slice(0, index), ele, ...currArray.slice(index + 1)];
    });
  }, []);

  const filter = useCallback((callback) => {
    setArray((currArray) => {
      return currArray.filter(callback);
    });
  }, []);

  const remove = useCallback((index) => {
    setArray((currArray) => {
      return currArray.filter((ele, i) => {
        if (i !== index) return ele;
      });
    });
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  const reset = useCallback(() => {
    setArray(intialArray);
  }, [intialArray]);

  return {array, set: setArray, push, replace, filter, remove, clear, reset};
}