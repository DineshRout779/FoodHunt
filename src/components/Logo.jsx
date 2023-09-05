import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      to='/'
      data-testid='logo'
      className='text-xl md:text-2xl font-semibold'
    >
      🍔 <span className='hidden md:block'>Foody</span>
    </Link>
  );
};

export default Logo;
