import Logo from './Logo';
import {
  BuildingOfficeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='sticky top-0 bg-white z-20 py-4 border-b shadow-sm border-gray-100'>
      <div className='container-max flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <Logo />

          <p className='text-sm flex items-center gap-1'>
            <MapPinIcon className='w-4 h-4 text-gray-700' />
            Bhubaneswar, Odisha
          </p>
        </div>

        <ul className='text-zinc-700 ml-auto flex gap-2 md:gap-4 items-center'>
          <li>
            <Link
              to='/search'
              className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
            >
              <MagnifyingGlassIcon className='w-4 h-4 text-gray-700' />{' '}
              <p className='hidden md:block'>Search</p>
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
            >
              <HomeIcon className='w-4 h-4 text-gray-700' />{' '}
              <p className='hidden md:block'>Home</p>
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
            >
              <BuildingOfficeIcon className='w-4 h-4 text-gray-700' />{' '}
              <p className='hidden md:block'>About</p>
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
            >
              <PhoneIcon className='w-4 h-4 text-gray-700' />{' '}
              <p className='hidden md:block'>Contact</p>
            </Link>
          </li>
          <li>
            <Link
              to='/cart'
              className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
            >
              <ShoppingBagIcon className='w-4 h-4 text-gray-700' />{' '}
              <p className='hidden md:block'>Cart</p>
            </Link>
          </li>
        </ul>
        <Link
          to='/login'
          className='ml-4 bg-orange-400 text-white p-2 px-4 rounded-md flex items-center gap-2'
        >
          Login
        </Link>
      </div>
    </header>
  );
};
export default Header;
