import { StarIcon } from '@heroicons/react/24/solid';

const RestaurantCard = () => {
  return (
    <div>
      <img
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/oapbfe5a3ftryfzjxr7u'
        alt='restaurant'
        className='w-full rounded-md aspect-video object-cover block card-img relative'
      />

      <h2 className='text-lg font-semibold mt-2 text-zinc-800'>Meghna Foods</h2>
      <div className='flex items-center gap-2'>
        <StarIcon className='w-6 h-6 text-orange-400' />{' '}
        <p className='font-semibold text-gray-700 text-base'>4.3</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
