import { useState, useEffect } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal: abortController.signal });
        if (!res.ok) {
          const errorText = await res.text();

          setError(errorText);
          console.error("Error:", errorText);
        } else {
          const data = (await res.json()) as T;

          setData(data);
          setError(null);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setError(err.message);
          }
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    void fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
}