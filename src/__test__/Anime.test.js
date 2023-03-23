import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Anime from '../components/Anime';
import store from '../redux/store';

const mockStore = configureStore([]);

describe('anime redux state tests', () => {
  it('expects to initially set anime as an empty object', () => {
    const state = store.getState().animeList;
    const initialState = {
      animeList: [],
      loading: false,
    };
    expect(state).toEqual(initialState);
  });
  it('expects to display one  anime from mock store', () => {
    const anime = [
      {
        mal_id: 1,
        title: 'Cowboy Bebop',
        episodes: 26,
        images: {
          jpg: { image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg' },
        },
      },

    ];
    const state = {
      animeList: {
        anime,
        loading: false,
      },
    };
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Anime anime={anime[0]} />
        </BrowserRouter>
      </Provider>,
    );
    const animeName = screen.getByText('Cowboy Bebop');
    expect(animeName).toBeInTheDocument();
  });
});
