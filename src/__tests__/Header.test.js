import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from '../components/Header';
import store from '../store/store';
import { StaticRouter } from 'react-router-dom/server';

test('Logo should be loaded on rendering header', () => {
  const header = render(
    <Provider store={store}>
      <StaticRouter>
        <Header />
      </StaticRouter>
    </Provider>
  );

  //   console.log(header);

  const logo = header.getByTestId('logo');

  expect(logo.href).toBe('http://localhost/');
});
