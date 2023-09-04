import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      to='/'
      data-testid='logo'
      className='text-xl md:text-2xl font-semibold'
    >
      🍔 Foody
    </Link>
  );
};

export default Logo;
