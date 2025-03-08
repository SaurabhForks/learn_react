import { useNavigate } from "react-router";
import { IMAGE_BASE_URL } from "../../utils/urls";

const RestaurantCard = ({ data }) => {
    let navigate = useNavigate()
    const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, locality, id } = data.info;
    // const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    const handleCardClick = (id) => {
        navigate(`restaurant/${id}`)
    }
    return (
        <div className="card" onClick={() => handleCardClick(id)} >
            <img className="card-img" src={IMAGE_BASE_URL + cloudinaryImageId} alt="" />
            <div className="card-info">
                <h3>{name}</h3>
                <div className="rating">{avgRating}</div>
                <div className="cusien">{cuisines.join(", ")}</div>
                <div className="address">{locality}</div>
            </div>
        </div>
    );
};
export default RestaurantCard;