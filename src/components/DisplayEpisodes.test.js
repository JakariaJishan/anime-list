import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import DisplayEpisodes from './DisplayEpisodes';

const episode = {
  mal_id: 1,
  title: 'Cowboy Bebop',
  store: 4.0,
};

describe('test suite for Episode component', () => {
  it('expects to render a snapshot of the Episode component', () => {
    const episodeTest = render(
      <Provider store={store}>
        <BrowserRouter>
          <DisplayEpisodes episode={episode} />
        </BrowserRouter>
      </Provider>,
    );
    expect(episodeTest).toMatchSnapshot();
  });
});
