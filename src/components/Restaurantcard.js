  import { CDN_URL } from "../utils/constant";

const Restaurantcard = ({ resData }) => {
  if (!resData) return null;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    costForTwoString,
    avgRating,
    sla,
  } = resData;

  return (
    <div className="Res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      <h3>{name}</h3>

      <h4>{cuisines?.join(", ")}</h4>

      <h4>⭐ {avgRating}</h4>

      <h4>{costForTwoString}</h4>

      <h4>{sla?.deliveryTime} minutes</h4>

      <h4>{areaName}</h4>
    </div>
  );
};

export default Restaurantcard;