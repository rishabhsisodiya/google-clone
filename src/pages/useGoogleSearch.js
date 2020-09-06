import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "8e2f0f231193c0e46";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);
  return { data };
};

// Custom Hook^^^

export default useGoogleSearch;
