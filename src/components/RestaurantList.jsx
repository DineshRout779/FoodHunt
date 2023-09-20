import { Link } from 'react-router-dom';
import RestaurantCard, { withTopRatedLabel } from './RestaurantCard';
import ShimmerCard from './ShimmerCard';

const RestaurantList = ({ isLoading, restaurants }) => {
  const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard);

  return (
    <div className='container-max'>
      <h1 className='my-4 mt-8 font-bold text-2xl text-zinc-700'>
        Restaurants near you
      </h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
        {isLoading ? (
          Array.from({ length: 15 }).map((_, i) => <ShimmerCard key={i} />)
        ) : restaurants && restaurants?.length !== 0 ? (
          restaurants.map((restaurant, i) => (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              className='hover:scale-95 transition ease-in-out duration-300 relative z-10'
              key={i}
            >
              {restaurant.info.avgRating >= 4.2 ? (
                <RestaurantCardTopRated restaurant={restaurant} />
              ) : (
                <RestaurantCard restaurant={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <p>No restaurant found!</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
