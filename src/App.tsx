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

  console.log("This is a change that I added");

  return (
<<<<<<< HEAD
    <div>
      <p>HELLO???</p>
=======
>>>>>>> b2847eb649f8a671e54749e85184fb484350ede8
      {restaurantsList}
  );
}

export default App;
