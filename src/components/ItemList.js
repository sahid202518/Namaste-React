import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const img_link =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className="">
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-4 m-4 border-gray-300 border-b-2 text-left flex justify-between h-[160px]"
        >
          <div className="w-9/12">
            <div className="text-lg py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹ {item?.card?.info?.price || item?.card?.info?.defaultPrice}
              </span>
            </div>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-2/12 ">
            <div className="absolute p-1">
              <button
                className="rounded-lg bg-white shadow-lg"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                Add+
              </button>
            </div>
            <img
              src={img_link + item?.card?.info?.imageId}
              alt=""
              className="h-[100px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
