import { CDN_URL } from '../utils/constants';

const Banner = ({ banner }) => {
  return (
    <img
      className='block w-full max-w-[360px]'
      src={CDN_URL + banner?.imageId}
      alt=''
    />
  );
};

export default Banner;
