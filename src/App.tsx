import React from 'react';
import Cafe, { CafeData } from './Cafe';
import Restaurant, { RestaurantData } from './Restaurant';
import restuarantsData from './restaurants.json'
import './App.css';

function App() {
  const restaurants: RestaurantData[] = restuarantsData as RestaurantData[]

  const restaurantsList = restaurants.map(restaurant => {
      return (
        <Restaurant 
          name={restaurant.name}
          description={restaurant.description}
          rating={restaurant.rating}
          reviews={restaurant.reviews}
        />
      )
  })

  return (
    <div>
      {restaurantsList}
    </div>
  );
}

export default App;
