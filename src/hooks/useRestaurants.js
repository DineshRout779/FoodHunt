import axios from 'axios';
import { useEffect, useState } from 'react';

const useRestaurants = (url) => {
  const [banners, setBanners] = useState([]);
  const [foods, setFoods] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(url);

        // console.log(data.data);

        setBanners(
          data?.data?.cards.filter(
            (items) => items?.card?.card?.id === 'topical_banner'
          )[0] ||
            data?.data?.cards.filter(
              (items) => items?.card?.card?.id === 'topical_banner'
            )[0]
        );

        setFoods(
          data?.data?.cards.filter(
            (items) => items?.card?.card?.id === 'whats_on_your_mind'
          )[0] ||
            data?.data?.cards.filter(
              (items) => items?.card?.card?.id === 'whats_on_your_mind'
            )[0]
        );

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

  return { banners, foods, restaurants, isLoading, error };
};
export default useRestaurants;
