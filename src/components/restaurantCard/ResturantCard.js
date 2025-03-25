import { useNavigate } from "react-router";
import { IMAGE_BASE_URL } from "../../utils/urls";

const RestaurantCard = ({ data }) => {
  console.log(data);

  let navigate = useNavigate();
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
    locality,
    id,
  } = data;
  const handleCardClick = (id) => {
    navigate(`restaurant/${id}`);
  };
  return (
    <div
      className="card  w-[24%] shadow rounded p-2 bg-zinc-50"
      onClick={() => handleCardClick(id)}
      data-testid="cardTest"
    >
      <img
        className="card-img rounded h-[250] w-[100%]"
        src={IMAGE_BASE_URL + cloudinaryImageId}
        alt=""
      />
      <div className="card-info pt-2">
        <h3>{name}</h3>
        <div className="rating">{avgRating}</div>
        <div className="cusien">{cuisines.join(", ")}</div>
        <div className="address">{locality}</div>
      </div>
    </div>
  );
};
export default RestaurantCard;
