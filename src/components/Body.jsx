import axios from 'axios';
import { useEffect, useState } from 'react';
import RestaurantList from './RestaurantList';

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios(
          `https://swiggyapiwrapper.dineshrout.repl.co/api/restaurants`
        );

        // console.log(data);
        setRestaurants(
          data?.data?.cards[3]?.card?.card?.gridElements?.restaurants
        );
      } catch (err) {
        console.log(err.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  console.log(isLoading, restaurants);

  return (
    <div>
      {/* search bar */}
      <div className='flex gap-4 max-w-[560px] mx-auto w-full'>
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search for Chicken Biriyani'
          className='p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow'
        />
        <button className='bg-orange-400 text-white p-2 px-8 rounded-md'>
          Search
        </button>
      </div>

      {/* restaurant list */}

      <RestaurantList isLoading={isLoading} restaurants={restaurants} />
    </div>
  );
};
export default Body;
