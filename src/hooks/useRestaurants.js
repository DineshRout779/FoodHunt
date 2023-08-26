import axios from 'axios';
import { useEffect, useState } from 'react';

const useRestaurants = (url) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(url);

        // console.log(data);

        setRestaurants(
          data?.data?.cards.filter(
            (items) => items?.card?.card?.id === 'restaurant_grid_listing'
          )[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      } catch (err) {
        console.log(err.response);
        setError(err.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { restaurants, isLoading, error };
};
export default useRestaurants;
