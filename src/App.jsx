import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import useOnlineStatus from './hooks/useOnlineStatus';

const App = () => {
  const isOnline = useOnlineStatus();
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
