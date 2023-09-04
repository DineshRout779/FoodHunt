import Banner from './Banner';
import ShimmerBanner from './shimmers/ShimmerBanner';

const BannerList = ({ isLoading, banners }) => {
  //   console.log(banners);

  if (!banners) {
    return null;
  }

  return (
    <div className='container-max '>
      <h1 className='mb-4 font-bold text-2xl text-zinc-700'>
        Best offers for you
      </h1>
      <div className='flex gap-8 mb-8'>
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => <ShimmerBanner key={i} />)
        ) : (
          <div className='flex items-center gap-8'>
            {banners?.card?.card?.gridElements?.infoWithStyle?.info?.map(
              (banner) => (
                <Banner banner={banner} key={banner.id} />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default BannerList;
