import RestaurantCard from "../restaurantCard/ResturantCard";
import { rdata } from "../../utils/data";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../../utils/urls";
import useFetchData from "../../utils/hooks/useFetchData";
import useOnlineStatus from "../../utils/hooks/useOnlineStatus";
const Body = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [restaurantList, setRestaurantList] = useState([]);
    const { data, loading, error } = useFetchData(SWIGGY_URL);
    const onlineStatus = useOnlineStatus()
    const handleFilter = (value) => {
        const data = restaurantList.filter((restaurant) => {
            if (restaurant.info.name.toLowerCase().includes(value.toLowerCase())) {
                return restaurant;
            }
        });
        setFilteredData(data);
    };
    let timer;
    function handleSearch(e) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            handleFilter.apply(this, [e.target.value]);
        }, 3000);
    }


    useEffect(() => {
        setRestaurantList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }, [data]);

    if (onlineStatus === false) {
        return <h1>You are offline</h1>
    }
    return (
        <div className="body">
            <div className="search">
                <input type="text" onChange={handleSearch} />
                <button onClick={() => handleFilter()}>Top Rated RestaurantsS</button>
            </div>
            <div className="res-container">
                {loading ? "Shimmeeeeeeeeerrrrrrrrrrrr" : <div className="card-conatiner">
                    {filteredData?.length > 0
                        ? filteredData.map((item) => (
                            <RestaurantCard data={item} key={item.info.id} />
                        ))
                        : ""}
                </div>}
            </div>
        </div>
    );
};
export default Body;
