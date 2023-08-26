import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ restaurant }) => {
  const { info } = restaurant;

  return (
    <>
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
    </>
  );
};

export default RestaurantCard;

//  HOC for Top Rated Restaurants
export const withTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className='relative'>
        <p className='absolute z-10 -top-2 -left-2 rounded-md p-2 px-4 bg-zinc-900 text-white text-xs'>
          Top Rated
        </p>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
