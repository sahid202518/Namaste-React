import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenum from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenum(resId);
  const [showIndex, setShowIndex] = useState(undefined);

  if (resMenu === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;
  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
      c?.card?.card["@type"]?.includes("ItemCategory")
    );
  console.log(categories, "category");

  return (
    <div className="text-center">
      <h1 className="text-2xl my-4 font-bold">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.categoryId}
          showItem={index === showIndex ? true : false}
          showIndex={showIndex}
          index={index}
          setShowIndex={(i) => {
            setShowIndex(i);
          }}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
