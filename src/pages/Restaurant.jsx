import { StarIcon } from '@heroicons/react/24/solid';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantInfo from '../components/RestaurantInfo';
import ShimmerRestaurant from '../components/shimmers/ShimmerRestaurant';
import RestaurantMenu from '../components/RestaurantMenu';

const Restaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://swiggyapiwrapper.dineshrout.repl.co/api/restaurants/${id}`
        );
        console.log(data?.data);
        setRestaurant(data?.data);
      } catch (err) {
        console.log(err.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <div className='container-md my-8'>
      {isLoading ? (
        <ShimmerRestaurant />
      ) : (
        <>
          <RestaurantInfo info={restaurant?.cards[0]?.card?.card?.info} />
          <RestaurantMenu
            menu={
              restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            }
          />
        </>
      )}
    </div>
  );
};
export default Restaurant;
