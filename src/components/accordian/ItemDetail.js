import { useDispatch } from "react-redux";
import {
  addItemTocart,
  removeItemFromCart,
} from "../../redux/slices/cartSilce";
import { FaApple, FaEgg } from "react-icons/fa";
import { IMAGE_BASE_URL } from "../../utils/urls";
import { LOGO } from "../../utils/urls";

const ItemDetail = ({ detail, isCart = false }) => {
  const dispatch = useDispatch();
  const { name, isVeg, ratings, imageId, price } = detail?.card?.info;
  console.log(detail?.card?.info);
  const handleAddToCart = (item) => {
    dispatch(addItemTocart(item));
  };
  const hadleRemoveFromCart = (item) => {
    dispatch(removeItemFromCart(item));
  };
  return (
    <div className="flex justify-between items-center shadow p-4 mt-4">
      <div>
        <div className="flex items-center justify-left">
          {isVeg ? (
            <FaApple className="fill-emerald-500" />
          ) : (
            <FaEgg className="red" />
          )}
          <span className="ml-2 ">
            {ratings?.aggregatedRating?.rating
              ? ratings?.aggregatedRating?.rating
              : "NA "}
            / 5 ( {ratings?.aggregatedRating?.ratingCount})
          </span>
        </div>
        <h3 className=" font-bold mt-4">{name}</h3>
        <p className="font-semibold"> ₹ {price / 100}</p>
      </div>

      <div className="relative">
        {imageId ? (
          <img src={IMAGE_BASE_URL + imageId} alt="" className="w-24 h-24" />
        ) : (
          LOGO
        )}
        {!isCart ? (
          <button
            className="absolute bottom-0 left-2 bg-green-800 text-sm p-1 rounded-sm text-white cursor-pointer"
            onClick={() => handleAddToCart(detail)}
          >
            Add Item
          </button>
        ) : (
          <button
            className="absolute bottom-0 left-2 bg-green-800 text-sm p-1 rounded-sm text-white cursor-pointer"
            onClick={() => hadleRemoveFromCart(detail)}
          >
            Remove Item
          </button>
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
