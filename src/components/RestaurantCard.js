import { SWIGGY_CLOUD_IMG_BASE_PATH } from "../utils/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    props?.restaurant?.info;

  return (
    <div className="">
      <img
        src={SWIGGY_CLOUD_IMG_BASE_PATH + cloudinaryImageId}
        alt="card-img"
        className=" rounded-md"
      />
      <h4 className="text-lg font-bold py-2">{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating ?? 0} stars</p>
      <p>{sla?.deliveryTime} Mins</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
