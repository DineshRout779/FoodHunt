import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import useOnlineStatus from './hooks/useOnlineStatus';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from './features/app/appSlice';

const App = () => {
  const { pathname } = useLocation();
  const isOnline = useOnlineStatus();
  const { isMenuOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    // close menu, if open
    isMenuOpen && dispatch(closeMenu());
  }, [pathname]);

  return (
    <>
      {isOnline ? (
        <>
          <Toaster />
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <div className='flex flex-col justify-center items-center min-h-screen'>
          <h1 className='text-4xl font-bold'>Oops! Connection lost</h1>
          <p>
            Looks like you're offline, please check your internet connection.
          </p>
        </div>
      )}
    </>
  );
};

export default App;
