import React, { useEffect, useState } from 'react'

const useFetchData = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchData(url)
    }, [url])
    const fetchData = async (URL) => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setData(data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    return { data, loading, error }
}

export default useFetchData