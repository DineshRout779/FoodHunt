const ShimmerRestaurant = () => {
  return (
    <div className='animate-pulse'>
      <div className='flex justify-between items-center border-dashed border-b  pb-8'>
        <div className='basis-6/12 space-y-2 '>
          <div className='bg-gray-200 h-6 rounded-md'></div>
          <div className='bg-gray-200 w-[50%] h-6 rounded-md'></div>
        </div>

        <div className='basis-2/12 bg-gray-200 h-14 rounded-md'></div>
      </div>
    </div>
  );
};
export default ShimmerRestaurant;
