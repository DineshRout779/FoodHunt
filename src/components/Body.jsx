import { useEffect, useRef, useState } from 'react';
import useRestaurants from '../hooks/useRestaurants';
import { GET_RESTAURANTS_URL } from '../utils/constants';
import RestaurantList from './RestaurantList';

const Body = () => {
  const { restaurants, isLoading } = useRestaurants(GET_RESTAURANTS_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const serachRef = useRef();

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
    setFilteredRestaurants(restaurants);
  }, [isLoading]);

  // console.log(isLoading, restaurants, filteredRestaurants);

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
