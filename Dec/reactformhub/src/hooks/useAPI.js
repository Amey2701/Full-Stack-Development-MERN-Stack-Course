import { useEffect, useState } from "react";
import axios from "axios";

const useAPI = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(url)
      .then((res) => setData(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useAPI;
