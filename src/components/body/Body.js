import RestaurantCard from "../restaurantCard/ResturantCard";
import { rdata } from "../../utils/data";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../../utils/urls";
const Body = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [restaurantList, setRestaurantList] = useState([]);
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
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGY_URL);
            const data = await response.json();
            setRestaurantList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="body">
            <div className="search">
                <input type="text" onChange={handleSearch} />
                <button onClick={() => handleFilter()}>Top Rated RestaurantsS</button>
            </div>
            <div className="res-container">
                {filteredData?.length === 0 ? "Shimmeeeeeeeeerrrrrrrrrrrr" : <div className="card-conatiner">
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
