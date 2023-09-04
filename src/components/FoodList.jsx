import FoodItem from './FoodItem';
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from '@heroicons/react/24/outline';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  className: 'center',
  infinite: true,
  centerPadding: '20px',
  slidesToShow: 6,
  swipeToSlide: true,
};

const FoodList = ({ foods }) => {
  if (!foods) {
    return null;
  }

  return (
    <div className='container-max my-16'>
      <div className='flex items-center justify-between'>
        <h1 className='mb-4 font-bold text-2xl text-zinc-700'>
          {foods?.card?.card?.header?.title}
        </h1>

        <div className='flex gap-2 items-center'>
          <button className='p-2 bg-gray-300 rounded-full'>
            <ArrowLongLeftIcon className='w-4 h-4' />
          </button>
          <button className='p-2 bg-gray-300 rounded-full'>
            <ArrowLongRightIcon className='w-4 h-4' />
          </button>
        </div>
      </div>

      <Slider {...settings}>
        {foods?.card?.card?.gridElements?.infoWithStyle?.info?.map((food) => (
          <FoodItem food={food} key={food.id} />
        ))}
      </Slider>

      {/* <div className='flex flex-wrap'> */}

      {/* </div> */}
    </div>
  );
};
export default FoodList;
