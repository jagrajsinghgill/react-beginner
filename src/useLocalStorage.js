import { useEffect, useState, useCallback } from "react";

export function useLocalStorage(key, intialValue) {
  const [value, setValue] = useState(() => {
    const localVal = localStorage.getItem(key);
    if (localVal === null) {
      if (typeof intialValue === "function") {
        return intialValue();
      }
      return intialValue;
    }
    else {
      return JSON.parse(localVal);
    }
  });

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key);
    }
    else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
  }, [value, key]);

  return [value, setValue];
}