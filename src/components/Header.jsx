import Logo from './Logo';
import {
  Bars3Icon,
  BuildingOfficeIcon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectItemsInCart } from '../features/cart/cartSlice';
import {
  closeLocationModal,
  openLocationModal,
  toggleMenu,
} from '../features/app/appSlice';
import LocationModal from './LocationModal';
import { selectAddress } from '../features/address/addressSlice';

const Header = () => {
  const { isMenuOpen, isLocationModalOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const items = useSelector(selectItemsInCart);
  const { address } = useSelector(selectAddress);

  const handleToggleMenu = () => dispatch(toggleMenu());

  const handleCloseModal = () => dispatch(closeLocationModal());
  const handleOpenModal = () => dispatch(openLocationModal());

  return (
    <header className='sticky w-full top-0 bg-white z-20 py-4 border-b shadow-sm border-gray-100'>
      <div className='container-max flex justify-between items-center'>
        <div className='flex items-center gap-2 md:gap-4'>
          <Logo />

          <button
            onClick={handleOpenModal}
            className='text-xs md:text-sm flex items-center gap-1'
          >
            <MapPinIcon className='w-4 h-4 text-gray-700' />
            {address?.city}
            <ChevronDownIcon className='w-4 h-4 text-orange-500' />
          </button>
        </div>

        {isLocationModalOpen ? <LocationModal /> : null}

        <ul className='text-zinc-700 ml-auto gap-2 md:gap-4 items-center hidden md:flex'>
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
              className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
            >
              <ShoppingBagIcon className='w-4 h-4 text-gray-700' />{' '}
              <p className='hidden md:block'>Cart</p>
              {
                <p className='absolute -top-1 -right-1 bg-orange-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
                  {items.length}
                </p>
              }
            </Link>
          </li>
        </ul>
        {isLoading ? null : isAuthenticated ? (
          <button
            onClick={() => loginWithRedirect()}
            className='ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
          >
            Logout{' '}
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className='ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
          >
            Login
          </button>
        )}

        {!isMenuOpen ? (
          <div className='shadow-lg transition-all fixed top-full -right-[100%] bg-white h-screen p-4 px-8'>
            <>
              <ul className='text-zinc-700 space-y-4'>
                <li>
                  <Link
                    to='/search'
                    className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <MagnifyingGlassIcon className='w-4 h-4 text-gray-700' />{' '}
                    <p>Search</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <HomeIcon className='w-4 h-4 text-gray-700' /> <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <BuildingOfficeIcon className='w-4 h-4 text-gray-700' />{' '}
                    <p>About</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <PhoneIcon className='w-4 h-4 text-gray-700' />{' '}
                    <p>Contact</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/cart'
                    className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <ShoppingBagIcon className='w-4 h-4 text-gray-700' />{' '}
                    <p>Cart</p>
                    {
                      <p className='absolute -top-1 -right-1 bg-orange-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
                        {items.length}
                      </p>
                    }
                  </Link>
                </li>
              </ul>
              {isLoading ? null : isAuthenticated ? (
                <button
                  onClick={() => loginWithRedirect()}
                  className='ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
                >
                  Logout{' '}
                </button>
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className='ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
                >
                  Login
                </button>
              )}
            </>
          </div>
        ) : (
          <div className='shadow-lg transition-all md:hidden absolute top-full right-0 bg-white h-screen p-4 px-8'>
            <>
              <ul className='text-zinc-700 space-y-4'>
                <li>
                  <Link
                    to='/search'
                    className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <MagnifyingGlassIcon className='w-4 h-4 text-gray-700' />{' '}
                    <p>Search</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <HomeIcon className='w-4 h-4 text-gray-700' /> <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <BuildingOfficeIcon className='w-4 h-4 text-gray-700' />{' '}
                    <p>About</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <PhoneIcon className='w-4 h-4 text-gray-700' />{' '}
                    <p>Contact</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/cart'
                    className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                  >
                    <ShoppingBagIcon className='w-4 h-4 text-gray-700' />{' '}
                    <p>Cart</p>
                    {
                      <p className='absolute -top-1 -right-1 bg-orange-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
                        {items.length}
                      </p>
                    }
                  </Link>
                </li>
              </ul>
              {isLoading ? null : isAuthenticated ? (
                <button
                  onClick={() => loginWithRedirect()}
                  className='ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
                >
                  Logout{' '}
                </button>
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className='ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
                >
                  Login
                </button>
              )}
            </>
          </div>
        )}

        <button className='block md:hidden' onClick={handleToggleMenu}>
          <Bars3Icon className='w-6 h-6' />
        </button>
      </div>
    </header>
  );
};
export default Header;
