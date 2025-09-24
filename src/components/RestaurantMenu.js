import { useParams } from "react-router-dom";
import useRestaurantMenum from "../utils/useRestaurantMenu.js";

import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenum(resId);

  if (resMenu === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
