import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="res-card p-4 m-4 w-[260px] h-[335px] bg-gray-200 hover:bg-gray-300">
      <img
        className="rounded-lg h-20 w-[240px]"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt=""
      />
      <h5 className="font-bold py-2 text-lg">{name}</h5>
      <div>{cuisines.join(", ")}</div>
      <div>{avgRating}</div>
      <div>{costForTwo}</div>
      <div>{deliveryTime}</div>
      <div className="font-bold text-sm">{loggedInUser}</div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white" htmlFor="">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
