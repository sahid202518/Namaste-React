import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const finalData =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setFilterRestaurant(finalData);
    setListOfRestaurant(finalData);
  };
  if (onlineStatus === false) {
    return <h1>You are Offline!!!</h1>;
  }
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-xl"
            onClick={() => {
              const filterRes = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filterRes, "filterRes");
              setFilterRestaurant(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <button
            className="px-4 py-1  bg-red-400 rounded-xl"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Res
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <label htmlFor="">username : </label>
          <input
            type="text"
            className="p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="res-container flex flex-wrap ml-14">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/resturant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {"aggregatedDiscountInfoV3" in restaurant.info ? (
              <RestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCardPromoted resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
