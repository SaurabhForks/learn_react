
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import useFetchData from '../../utils/hooks/useFetchData'
import { RESTAURANT_URL } from '../../utils/urls'
const Restaurant = () => {
    const [resData, setResData] = useState([])
    const { resId } = useParams()
    const { data, loading, error } = useFetchData(`${RESTAURANT_URL}${resId}`)

    useEffect(() => {
        setResData(data?.data?.cards[2]?.card?.card?.info)
    }, [data])


    return loading ? <>Loading...</> : (
        <div>{resData?.name}</div>
    )
}

export default Restaurant