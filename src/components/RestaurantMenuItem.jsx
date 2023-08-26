import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const RestaurantMenuItem = ({ items, index, activeIndex, setActiveIndex }) => {
  // console.log(activeIndex, index);
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
            <li className='p-2' key={i}>
              {item?.card?.info?.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default RestaurantMenuItem;
