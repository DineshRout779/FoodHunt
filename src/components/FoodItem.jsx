import { Link } from 'react-router-dom';
import { CDN_URL } from '../utils/constants';

const FoodItem = ({ food }) => {
  return (
    <Link to='/#' key={food.id} className='keen-slider__slide'>
      <img
        src={CDN_URL + food?.imageId}
        className='w-full pointer-events-none'
        alt=''
      />
    </Link>
  );
};
export default FoodItem;
