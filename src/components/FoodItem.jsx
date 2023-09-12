import { CDN_URL } from '../utils/constants';

const FoodItem = ({ food }) => {
  return (
    <div className='w-full keen-slider__slide'>
      <img
        src={CDN_URL + food?.imageId}
        className='w-full pointer-events-none'
        alt=''
      />
    </div>
  );
};
export default FoodItem;
