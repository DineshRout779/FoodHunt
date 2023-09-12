import { useSelector, useDispatch } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  selectItemsInCart,
} from '../features/cart/cartSlice';
import { CDN_URL } from '../utils/constants';

const CartItemList = () => {
  const cartItems = useSelector(selectItemsInCart);
  const dispatch = useDispatch();
  console.log('cart items', cartItems);

  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity({ id }));
  const increaseQuantity = (id) => dispatch(increaseItemQuantity({ id }));

  if (cartItems.length === 0) {
    return <p>Your cart is empty!</p>;
  }

  return (
    <ul className='basis-7/12'>
      {cartItems.map((item) => (
        <li
          key={item?.item?.card?.info?.id}
          className='flex gap-4 justify-between max-w-[600px] my-4'
        >
          <div className='basis-3/12'>
            <img
              className='w-full object-cover block rounded-md aspect-square'
              src={CDN_URL + item?.item?.card?.info?.imageId}
              alt=''
            />
          </div>
          <div className='basis-9/12'>
            <p className='text-lg font-semibold'>
              {item?.item?.card?.info?.name}
            </p>

            <p className='hidden md:block'>
              {' '}
              {item?.item?.card?.info?.description.length > 50
                ? item?.item?.card?.info?.description.slice(0, 50) + '...'
                : item?.item?.card?.info?.description}
            </p>

            <p className='my-2'>
              <span className='font-semibold'>
                ₹
                {parseFloat(
                  (
                    item?.quantity *
                    parseFloat(item?.item?.card?.info?.price / 100)
                  ).toFixed(2)
                )}
              </span>
              <span className='text-gray-800 font-normal'>
                ({item?.item?.card?.info?.price / 100} × {item?.quantity})
              </span>
            </p>

            <div className='flex items-center my-2'>
              <button
                onClick={() => decreaseQuantity(item?.item?.card?.info?.id)}
                className='bg-orange-500 text-white font-bold w-8 h-8 rounded-md'
              >
                -
              </button>
              <p className='font-bold w-8 h-8 flex justify-center items-center'>
                {item?.quantity}
              </p>
              <button
                onClick={() => increaseQuantity(item?.item?.card?.info?.id)}
                className='bg-orange-500 text-white font-bold w-8 h-8 rounded-md'
              >
                +
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItemList;
