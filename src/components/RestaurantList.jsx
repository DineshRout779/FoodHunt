import RestaurantCard from './RestaurantCard';
import ShimmerCard from './ShimmerCard';

const RestaurantList = ({ isLoading, restaurants }) => {
  console.log(isLoading, restaurants);
  return (
    <div className='container-max'>
      <h1 className='my-4 font-bold text-2xl'>Restaurant List</h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {isLoading
          ? Array.from({ length: 15 }).map((_, i) => <ShimmerCard key={i} />)
          : Array.from({ length: 15 }).map((_, i) => (
              <RestaurantCard key={i} />
            ))}
      </div>
    </div>
  );
};

export default RestaurantList;
