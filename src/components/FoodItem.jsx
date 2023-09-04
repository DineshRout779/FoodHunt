import { Link } from 'react-router-dom';
import { CDN_URL } from '../utils/constants';

const FoodItem = ({ food }) => {
  return (
    <Link to='/#' key={food.id} className='pointer-events-none'>
      <img
        src={CDN_URL + food?.imageId}
        className='w-full max-w-[108px] pointer-events-none'
        alt=''
      />
    </Link>
  );
};
export default FoodItem;
