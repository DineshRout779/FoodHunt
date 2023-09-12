import { CDN_URL } from '../utils/constants';

const CartItemList = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul className='basis-6/12'>
          {items.map(({ item, quantity }) => (
            <li
              key={item.card.info.id}
              className='flex gap-4 justify-between max-w-[600px] my-4'
            >
              <div className='basis-3/12'>
                <img
                  className='w-full object-cover h-full block rounded-md aspect-square'
                  src={CDN_URL + item.card.info.imageId}
                  alt=''
                />
              </div>
              <div className='grow'>
                <h2 className='text-md text-zinc-700'>{item.card.info.name}</h2>
                <p className='font-semibold mt-4'>
                  ₹
                  {parseFloat(
                    (quantity * parseFloat(item.card.info.price / 100)).toFixed(
                      2
                    )
                  )}
                </p>
                <div className='flex items-center my-4'>
                  <button className='bg-orange-500 text-white font-bold w-8 h-8 rounded-md'>
                    -
                  </button>
                  <p className='font-bold w-8 h-8 flex justify-center items-center'>
                    {quantity}
                  </p>
                  <button className='bg-orange-500 text-white font-bold w-8 h-8 rounded-md'>
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default CartItemList;
