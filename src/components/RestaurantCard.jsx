import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ restaurant }) => {
  const { info } = restaurant;
  return (
    <Link
      to={`/restaurants/${restaurant.info.id}`}
      className='hover:scale-95 transition ease-in-out duration-300'
    >
      <div className='overlay-container'>
        <img
          src={CDN_URL + info.cloudinaryImageId}
          alt='restaurant'
          className='relative w-full min-h-[180px] overflow-hidden aspect-video object-cover block rounded-md'
        />
        <div className='overlay w-full rounded-md p-2 px-3 '>
          <p className='text-xl font-bold flex gap-2 flex-wrap'>
            {info?.aggregatedDiscountInfoV3?.header
              ? info.aggregatedDiscountInfoV3.header
              : ''}{' '}
            {info?.aggregatedDiscountInfoV3?.subHeader
              ? info.aggregatedDiscountInfoV3.subHeader
              : ''}
          </p>
        </div>
      </div>

      <h2 className='text-lg font-semibold mt-2 text-zinc-800'>{info.name}</h2>
      <div className='flex items-center gap-2'>
        <StarIcon className='w-6 h-6 text-orange-400' />{' '}
        <p className='font-semibold text-gray-700 text-sm'>
          {info.avgRatingString}
        </p>
      </div>

      <p className='truncate  text-zinc-600'>
        {info?.cuisines?.map((c, i) => (
          <span key={i}>
            {c}
            {i === info.cuisines.length - 1 ? '' : ', '}
          </span>
        ))}
      </p>

      <p className='text-zinc-600'>{info.locality}</p>
    </Link>
  );
};

export default RestaurantCard;
