import { useEffect, useState } from "react";

interface APItypes {
  url: string;
}

function useApiCall<T>({ url }: APItypes): {
  error: string;
  data: T | undefined;
} {
  const [data, setData] = useState<T>({} as T);
  const [error, setError] = useState("no error");

  const fetchData = async () => {
    try {
      const fetchedData = await fetch(url);
      const dataJson = (await fetchedData.json()) as T;
      setData(dataJson);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { error, data };
}

export default useApiCall;
