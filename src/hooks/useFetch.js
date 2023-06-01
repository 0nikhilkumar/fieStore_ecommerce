import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api.js";

const useFetch = (endpoints) => {
  const [data, setData] = useState();

  useEffect(() => {
    makeApiCall();
  }, [endpoints]);

  const makeApiCall = async () => {
    const res = await fetchDataFromApi(endpoints);
    setData(res);
  };
  return { data };
};
export default useFetch;
