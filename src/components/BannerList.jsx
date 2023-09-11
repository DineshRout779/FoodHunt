import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

      <div className='flex gap-8 mb-8 overflow-x-scroll md:overflow-hidden'>
        {isLoading ? (
          <>
            {Array.from({ length: 3 }).map((_, i) => (
              <ShimmerBanner key={i} />
            ))}
          </>
        ) : (
          <>
            {banners.card.card.gridElements.infoWithStyle.info.map((banner) => (
              <Banner banner={banner} key={banner.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default BannerList;
