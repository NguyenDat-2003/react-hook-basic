import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();

    async function fetchData() {
      try {
        let res = await axios.get(url, {
          cancelToken: ourRequest.token,
        });

        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
          data.map((item) => {
            return item;
          });
        }
        setData(data);
        setIsLoading(false);
        setIsError(false);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log("Request canceled", e.message);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      }
    }

    setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      ourRequest.cancel("Operation canceled by the user");
    };
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
}

export default useFetch;
