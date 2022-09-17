import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const useData = (url) => {
  const [state, setState] = useState({ loading: false, data: [], error: null });

  const isMounted = useRef(false);

  //TODO: Romper la referencia en el useEffect
  useEffect(() => {
    isMounted.current = true;
    if (isMounted) {
      setState({ ...state, loading: true });
      async function fetchData() {
        const response = await axios.get(url);
        const { status, data } = response;
        return { data, status };
      }

      fetchData()
        .then((resp) => {
          setTimeout(() => {
            
            setState({ ...state, loading: false, data: resp.data });
          },3000);
        })
        .catch(({ message }) =>
          setState({ error: message, loading: false, data: [] })
        );
    }
    return () => {
      isMounted.current = false;
    };
  }, [url]);

  return [state];
};
