import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import RestaurantList from './RestaurantList';

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const serachRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();

    setFilteredRestaurants(
      restaurants.filter((rest) =>
        rest.info.name
          .toLowerCase()
          .includes(serachRef.current.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios(
          `https://swiggyapiwrapper.dineshrout.repl.co/api/restaurants`
        );

        console.log(
          data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setRestaurants(
          data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setFilteredRestaurants(
          data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
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
    <div className='bg-[#fcfcfc] relative py-8'>
      {/* search bar */}
      <form
        onSubmit={handleSearch}
        className='flex gap-4 max-w-[560px] w-[95%] mx-auto'
      >
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search for Chicken Biriyani'
          className='p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow'
          ref={serachRef}
        />
        <button
          type='submit'
          className='bg-orange-400 text-white p-2 px-8 rounded-md'
        >
          Search
        </button>
      </form>

      {/* restaurant list */}

      <RestaurantList isLoading={isLoading} restaurants={filteredRestaurants} />
    </div>
  );
};
export default Body;
