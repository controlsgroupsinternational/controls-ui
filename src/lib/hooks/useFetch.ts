import { useState, useEffect } from 'react'

export function useFetch<Entity = any>(fetchFunction?: () => Promise<Entity>) {
  const [data, setData] = useState<Entity | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (fetchFunction) {
      const fetchData = async () => {
        try {
          setLoading(true)
          const result = await fetchFunction()
          setData(result)
        } catch (err) {
          setError(err as any)
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }
  }, [fetchFunction])

  async function manualFetcher (fetchFunction: () => Promise<Entity>) {
    try {
      setLoading(true)
      const result = await fetchFunction()
      setData(result)
    } catch (err) {
      setError(err as any)
    } finally {
      setLoading(false)
    }
  }

  return { data, error, loading, fetcher: manualFetcher }
}
