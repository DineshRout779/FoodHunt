import Logo from './Logo';
import {
  BuildingOfficeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className='sticky top-0 bg-white z-50 py-4 border-b shadow-sm border-gray-100'>
      <div className='container-max flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <Logo />

          <p className='text-sm flex items-center gap-1'>
            <MapPinIcon className='w-4 h-4 text-gray-700' />
            Bhubaneswar, Odisha
          </p>
        </div>

        <ul className='text-zinc-700 hidden md:flex gap-4 items-center'>
          <li>
            <a
              href='#'
              className='p-2 px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
            >
              <MagnifyingGlassIcon className='w-4 h-4 text-gray-700' /> Search
            </a>
          </li>
          <li>
            <a
              href='#'
              className='p-2 px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
            >
              <HomeIcon className='w-4 h-4 text-gray-700' /> Home
            </a>
          </li>
          <li>
            <a
              href='#'
              className='p-2 px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
            >
              <BuildingOfficeIcon className='w-4 h-4 text-gray-700' /> About
            </a>
          </li>
          <li>
            <a
              href='#'
              className='p-2 px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
            >
              <PhoneIcon className='w-4 h-4 text-gray-700' /> Contact
            </a>
          </li>
          <li>
            <a
              href='#'
              className='p-2 px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
            >
              <ShoppingBagIcon className='w-4 h-4 text-gray-700' /> Cart
            </a>
          </li>
        </ul>
        <a
          href='#'
          className='bg-orange-400 text-white p-2 px-4 rounded-md flex items-center gap-2'
        >
          Login
        </a>
      </div>
    </header>
  );
};
export default Header;
