import { useState, useEffect } from 'react';

export function useFetch({ urlAPI }) {


  const [data, setData] = useState(null);

  useEffect(() => {

    fetch(urlAPI)
      .then(response => response.json())
      .then(data => setData(data));


  }, [urlAPI]);

  return { data };
}