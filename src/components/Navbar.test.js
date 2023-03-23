import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Navbar from './Navbar';

describe('Navbar test case', () => {
  test('Navbar test the snapshot case', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
