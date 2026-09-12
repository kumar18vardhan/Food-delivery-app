import Restaurantcard from "./Restaurantcard.js";
import { useState, useEffect } from "react";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=24.7752901&lng=84.9622929&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    const restaurantCard = json.data.cards.find(
      (card) => card?.card?.card?.id === "restaurant_grid_listing_v2"
    );

    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  // Search restaurants
  const handleSearch = () => {
    const filteredList = allRestaurants.filter((restaurant) =>
      restaurant?.info?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase())
    );

    setFilteredRestaurants(filteredList);
  };

  // Top rated restaurants
  const handleTopRated = () => {
    const filteredList = allRestaurants.filter(
      (restaurant) => restaurant?.info?.avgRating > 4
    );

    setFilteredRestaurants(filteredList);
  };

  // Clear search and filters
  const handleClearSearch = () => {
    setSearchText("");
    setFilteredRestaurants(allRestaurants);
  };

  // Food category filter
  const handleCategoryFilter = (category) => {
    const filteredList = allRestaurants.filter((restaurant) =>
      restaurant?.info?.cuisines?.some((cuisine) =>
        cuisine.toLowerCase().includes(category.toLowerCase())
      )
    );

    setFilteredRestaurants(filteredList);
  };

  return (
    <div className="Body">

      {/* Food Categories */}
      <div className="food-section">
        <h2>What's on your mind?</h2>

        <div className="food-categories">

          {/* Pizza */}
          <div
            className="food-item"
            onClick={() => handleCategoryFilter("pizza")}
          >
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png"
              alt="Pizza"
            />
          </div>

          {/* Biryani */}
          <div
            className="food-item"
            onClick={() => handleCategoryFilter("biryani")}
          >
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
              alt="Biryani"
            />
          </div>

          {/* Cakes */}
          <div
            className="food-item"
            onClick={() => handleCategoryFilter("cake")}
          >
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png"
              alt="Cakes"
            />
          </div>

        </div>
      </div>

      {/* Search Section */}
      <div className="Search">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>

        <button onClick={handleClearSearch}>
          Clear
        </button>
      </div>

      {/* Filter Section */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={handleTopRated}
        >
          TOP RATED RESTAURANT
        </button>
      </div>

      {/* No Results */}
      {filteredRestaurants.length === 0 && (
        <h3 className="no-results">
          No restaurants found 😕
        </h3>
      )}

      {/* Restaurant Cards */}
      <div className="res-container">
        {filteredRestaurants
          .filter((restaurant) => restaurant?.info?.id)
          .map((restaurant) => (
            <Restaurantcard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          ))}
      </div>

    </div>
  );
};

export default Body;