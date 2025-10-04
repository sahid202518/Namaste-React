import ItemList from "./ItemList.js";
const RestaurantCategory = ({
  data,
  showItem,
  setShowIndex,
  index,
  showIndex,
}) => {
  const handleClick = () => {
    console.log(showIndex, "showIndex");
    console.log(index, "index");
    showIndex !== index ? setShowIndex(index) : setShowIndex(undefined);
  };

  return (
    <div className="text-xl w-6/12 my-4 mx-auto bg-gray-100 shadow-xl p-4">
      <div
        className="flex justify-between font-bold cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {data.title} ({data?.itemCards?.length})
        </span>
        <span className="text-lg">🔽</span>
      </div>
      {showItem && <ItemList items={data?.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
