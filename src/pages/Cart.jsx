import { selectItemsInCart } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';
import CartItemList from '../components/CartItemList';

const Cart = () => {
  const items = useSelector(selectItemsInCart);

  console.log(items);

  return (
    <div className='container-max'>
      <h1 className='text-2xl my-4 font-semibold'>Cart</h1>

      {/* cart details */}

      {/* cart items */}
      {/* order summary */}

      <div className='min-h-[80vh]'>
        <CartItemList items={items} />
      </div>
    </div>
  );
};

export default Cart;
