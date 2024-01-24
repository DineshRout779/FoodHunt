import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import useRestaurants from '../hooks/useRestaurants';
import { GET_RESTAURANTS_URL } from '../utils/constants';
import BannerList from './BannerList';
import FoodList from './FoodList';
import RestaurantList from './RestaurantList';

const Body = () => {
  const { banners, foods, restaurants, isLoading } = useRestaurants();
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

  return (
    <div className='bg-white relative py-8'>
      {/* banners */}
      <BannerList banners={banners} isLoading={isLoading} />

      {/* food list */}
      <FoodList foods={foods} isLoading={isLoading} />

      {/* search bar */}
      <form
        onSubmit={handleSearch}
        className='flex gap-2 md:gap-4 max-w-[560px] w-[90%] mx-auto mt-6'
      >
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search for Chicken Biriyani'
          className='p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow w-full'
          ref={serachRef}
        />
        <button
          type='submit'
          className='bg-orange-400 basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base'
        >
          <MagnifyingGlassIcon className='w-4 h-4' />{' '}
          <span className='hidden md:block'>Search</span>
        </button>
      </form>

      {/* restaurant list */}

      <RestaurantList isLoading={isLoading} restaurants={filteredRestaurants} />
    </div>
  );
};
export default Body;
