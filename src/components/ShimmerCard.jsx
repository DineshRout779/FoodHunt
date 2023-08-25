const ShimmerCard = () => {
  return (
    <div className='animate-pulse space-y-2'>
      <div className='w-full bg-gray-200 rounded-md aspect-video min-h-[180px] object-cover block card-img relative'></div>

      <h2 className='text-lg font-semibold mt-2 h-4 rounded-md bg-gray-200'></h2>
      <div className='flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200'></div>
    </div>
  );
};
export default ShimmerCard;
