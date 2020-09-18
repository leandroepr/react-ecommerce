import { useEffect, useState } from 'react';

function useFetch<T>(url: string, initialState: T | (() => T)) {
  const remoteApiServer = `http://my-json-server.typicode.com/leandroepr/repo/${url}`;
  const [data, setData] = useState<T>(initialState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      try {
        const response = await fetch(remoteApiServer);
        if (!response.ok) throw response.statusText;
        const json = await response.json();
        setData(json);
      } catch (e) {
        setError(e.toString());
      } finally {
        setLoading(false);
      }
    };
    doFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, error, loading };
}
