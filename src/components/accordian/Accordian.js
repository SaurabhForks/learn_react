import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IMAGE_BASE_URL } from "../../utils/urls";
import ItemDetail from "./ItemDetail";
const Accordian = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, itemCards } = data?.card?.card;

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
