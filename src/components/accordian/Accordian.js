import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaApple, FaEgg } from "react-icons/fa";
import { IMAGE_BASE_URL } from "../../utils/urls";
const Accordian = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, itemCards } = data?.card?.card;

  const ItemDetail = ({ detail }) => {
    const { name, isVeg, ratings, imageId, price } = detail?.card?.info;
    console.log(detail?.card?.info);

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
        {imageId ? (
          <div className="relative">
            <img src={IMAGE_BASE_URL + imageId} alt="" className="w-24 h-24" />
            <button className="absolute bottom-0 left-2 bg-green-800 text-sm p-1 rounded-sm text-white cursor-pointer">
              Add to Cart
            </button>
          </div>
        ) : null}
      </div>
    );
  };
  return (
    <div className="accordian shadow rounded-md p-4 m-4 pb-2">
      <div
        className="head cursor-pointer flex justify-between items-center pb-1 mb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}( {itemCards?.length}){isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {isOpen && (
        <>
          {itemCards?.map((item, index) => {
            return <ItemDetail key={item?.card?.info?.id} detail={item} />;
          })}
        </>
      )}
    </div>
  );
};

export default Accordian;
