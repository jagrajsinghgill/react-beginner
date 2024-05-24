import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url, options = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setIsLoading(true);
    setData(undefined);
    setIsError(false);
    const controller = new AbortController();

    // Axios request.
    // Options didn't work with Axios.
    // axios
    //   .get(url, {
    //     signal: controller.signal,
    //     ...options
    //   })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       return response.json()
    //     }
    //     return Promise.reject(response);
    //   })
    //   .then((data) => {
    //     setData(data);
    //   })
    //   .catch((error) => {
    //     if (error.name === "CanceledError") return;
    //     console.log("error", error);
    //     setIsError(true);
    //   })
    //   .finally(() => {
    //     if (controller.signal.aborted) return;
    //     setIsLoading(false);
    //   });
    
    // Fetch request.
    fetch(url, {
        signal: controller.signal,
        ...options
      })
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        return Promise.reject(response);
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        if (error.name === "AbortError") return;
        console.log("error", error);
        setIsError(true);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };

  }, [url]);

  return {isLoading, isError, data};
}