import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Custom fetch hook
export const useFetch = (url, query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let firstRender = useRef(true);
  let location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    if (query === '') {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
    }

    const fetchData = async () => {
      // Set loading to true
      setLoading(true);
      try {
        // Fetch data from url
        const response = await fetch(url);

        // Check if response is not ok
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        // Parse response as json
        const json = await response.json();
        // set loading to false
        setLoading(false);
        // Set data to json
        setData(json);
        // set error to null
        setError(null);

        // Catch errors
      } catch (err) {
        console.log(err.message);
        // // set loading to false
        setLoading(false);
        // // Set error to custom message
        setError('There was an issue loading data.');
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error, setError };
};
