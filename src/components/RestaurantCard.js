import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt=""
      />
      <h5>{name}</h5>
      <div>{cuisines.join(", ")}</div>
      <div>{avgRating}</div>
      <div>{costForTwo}</div>
      <div>{deliveryTime}</div>
    </div>
  );
};

export default RestaurantCard;
