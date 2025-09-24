import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";
const useRestaurantMenum = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const M_URL = RES_MENU_URL + resId;

  const fetchMenu = async () => {
    const data = await fetch(M_URL);
    const json = await data.json();

    setResMenu(json.data);
  };

  return resMenu;
};
export default useRestaurantMenum;
