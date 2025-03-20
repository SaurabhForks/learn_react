import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useFetchData from "../../utils/hooks/useFetchData";
import { RESTAURANT_URL } from "../../utils/urls";
import Accordian from "../accordian/Accordian";
const Restaurant = () => {
  const [resData, setResData] = useState([]);
  const [option, setOption] = useState([]);
  const [isOpen, setIsOpen] = useState(0);
  const { resId } = useParams();
  const { data, loading, error } = useFetchData(`${RESTAURANT_URL}${resId}`);

  useEffect(() => {
    setResData(data?.data?.cards[2]?.card?.card?.info);
    setOption(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  }, [data]);

  return loading ? (
    <>Loading...</>
  ) : (
    <div className="">
      <h3 className="mt-3 mb-3 font-bold text-2xl text-center">{`${resData?.name}, ${resData?.city}`}</h3>
      <p className="text-m text-center">
        Cusiens: {resData?.labels[2]?.message}
        {" || "}
        <span>Cost for two: {resData?.costForTwo / 100}</span>
      </p>
      <div>
        {option?.length > 0 &&
          option?.map((cardData, index) => {
            if (
              cardData?.card?.card?.title &&
              cardData?.card?.card?.itemCards?.length > 0
            ) {
              return (
                <Accordian
                  key={index}
                  data={cardData}
                  isOpen={isOpen === index ? true : false}
                  index={index}
                  setIsOpen={setIsOpen}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default Restaurant;
