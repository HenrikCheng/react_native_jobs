import { useState, useEffect } from "react";
import axios from "axios";
const mockedUsers = require("../mockedUsers.json");
const mockedDetails = require("../mockedDetails.json");

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "0eea6b1575msh04d67f0026cae16p1a9e14jsnce1fc4cd57a3_",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      if (endpoint === "search") {
        // const response = await axios.request(options);
        // setData(response.data.data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData(mockedUsers[1].data);
      } else if (endpoint === "job-details") {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData(mockedDetails.data);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
