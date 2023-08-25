import RestaurantCard from './RestaurantCard';
import ShimmerCard from './ShimmerCard';

const RestaurantList = ({ isLoading, restaurants }) => {
  return (
    <div className='container-max'>
      <h1 className='my-4 font-bold text-2xl text-zinc-700'>
        Restaurants near you
      </h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {isLoading
          ? Array.from({ length: 15 }).map((_, i) => <ShimmerCard key={i} />)
          : restaurants.map((restaurant, i) => (
              <RestaurantCard key={i} restaurant={restaurant} />
            ))}
      </div>
    </div>
  );
};

export default RestaurantList;
