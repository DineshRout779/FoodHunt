import CartItemList from '../components/CartItemList';
import OrderSummary from '../components/OrderSummary';

const Cart = () => {
  return (
    <div className='container-max py-8 pb-16'>
      <h1 className='text-2xl my-4 font-semibold'>Cart</h1>

      {/* cart details */}
      <div className='min-h-[60vh] pb-8 md:flex gap-8'>
        {/* cart items */}
        <CartItemList />
        {/* order summary */}
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
