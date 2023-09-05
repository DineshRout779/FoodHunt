import { CDN_URL } from '../utils/constants';

const Banner = ({ banner }) => {
  // console.log(banner);
  return (
    <div className='w-full '>
      <img className='w-full block' src={CDN_URL + banner?.imageId} alt='' />
    </div>
  );
};

export default Banner;
