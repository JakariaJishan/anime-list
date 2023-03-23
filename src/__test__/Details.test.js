import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import DisplayEpisodes from '../components/DisplayEpisodes';
import store from '../redux/store';

const mockStore = configureStore([]);

describe('Episodes redux state tests', () => {
  it('expects to initially set anime as an empty object', () => {
    const state = store.getState().episodeList;
    const initialState = {
      episodeList: [],
      loading: false,
    };
    expect(state).toEqual(initialState);
  });
  it('expects to display one anime episode from mock store', () => {
    const episodes = [
      {
        title: 'naruto',
        score: 4.0,
        mal_id: 1,
      },
    ];
    const state = {
      episodeList: {
        episodes,
        loading: false,
      },
    };
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DisplayEpisodes episode={episodes[0]} />
        </BrowserRouter>
      </Provider>,
    );
    const episodeName = screen.getByText('naruto');
    expect(episodeName).toBeInTheDocument();
  });
});
