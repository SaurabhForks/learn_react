
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
const Restaurant = () => {
    const [resData, setResData] = useState([])
    const { resId } = useParams()
    const RESTAURANT_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="
    useEffect(() => {
        fetchData(resId)
    }, [resId])
    const fetchData = async (id) => {
        try {
            const res = await fetch(`${RESTAURANT_URL}${id}`)
            const data = await res.json()
            setResData(data?.data?.cards[2]?.card?.card?.info)
            console.log(data?.data?.cards[2]?.card?.card?.info)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>{resData?.name}</div>
    )
}

export default Restaurant