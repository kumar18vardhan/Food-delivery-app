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

      <p className="cuisine">{cuisines?.join(", ")}</p>

          <div className="rating-time">
          <h4>⭐ {avgRating}</h4>
          <h4>⏱️ {sla?.deliveryTime} mins</h4>
          </div>

         <p className="price">{costForTwoString}</p>
         <p className="area">📍 {areaName}</p>
    </div>
  );
};

export default Restaurantcard;