import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { CDN_URL } from '../utils/constants';

const RestaurantMenuItem = ({ items, index, activeIndex, setActiveIndex }) => {
  // console.log(activeIndex, index);
  // console.log(items?.card?.card?.itemCards);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => dispatch(addToCart(item));

  return (
    <>
      <div
        onClick={() => setActiveIndex(index)}
        className='flex cursor-pointer justify-between items-center p-4 my-2 rounded-md bg-gray-50 select-none'
      >
        <h3 className='text-lg font-semibold'>{items.card.card.title}</h3>
        <button>
          {activeIndex === index ? (
            <ChevronUpIcon className='w-6 h-6' />
          ) : (
            <ChevronDownIcon className='w-6 h-6 ' />
          )}
        </button>
      </div>

      {activeIndex === index && (
        <ul className='p-4'>
          {items?.card?.card?.itemCards?.map((item, i) => (
            <li
              className='p-2 py-8 flex gap-8 justify-between items-center border-b'
              key={i}
            >
              <div className='grow space-y-1'>
                <h2 className='text-base font-semibold'>
                  {item?.card?.info?.name}
                </h2>
                <p className='text-xs'>
                  ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </p>
                <p className='text-xs'>{item?.card?.info?.description}</p>
              </div>

              <div className='max-w-[200px] relative'>
                <img
                  className='w-full h-32 aspect-video object-cover rounded-md'
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt=''
                />
                <button
                  onClick={() => handleAddToCart(item)}
                  className='bg-white text-orange-500 hover:bg-orange-500 hover:text-white font-bold p-2 px-6 rounded-md absolute shadow-md left-[50%] -bottom-5 -translate-x-[50%]'
                >
                  ADD
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default RestaurantMenuItem;
