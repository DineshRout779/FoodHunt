import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from './Banner';
import ShimmerBanner from './shimmers/ShimmerBanner';

const settings = {
  className: 'center',
  infinite: true,
  centerPadding: '20px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
  ],
  swipeToSlide: true,
};

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
          <Slider {...settings}>
            {banners?.card?.card?.gridElements?.infoWithStyle?.info?.map(
              (banner) => (
                <Banner banner={banner} key={banner.id} />
              )
            )}
          </Slider>
        )}
      </div>
    </div>
  );
};
export default BannerList;
