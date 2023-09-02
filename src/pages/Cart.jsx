import { selectItemsInCart } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector(selectItemsInCart);

  console.log(items);

  return (
    <div className='container-max'>
      <h1 className='text-2xl my-4 font-semibold'>Cart</h1>

      <div className='min-h-[80vh]'>
        {items.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
