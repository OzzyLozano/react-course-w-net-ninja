import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortLoading = new AbortController()

    fetch(url, { signal: abortLoading.signal })
      .then(res => {
        if (!res.ok) throw Error('couldn\'t fetch the data');
        return res.json();
      })
      .then((data) => {
        setData(data)
        setIsLoading(false)
        setError(null)
      })
      .catch(err => {
          setIsLoading(false)
          setError(err.message)
      })
      return () => abortLoading.abort();
  }, [url]);

  return { data, isLoading, error }

}

export default useFetch
