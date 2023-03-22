import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import Anime from "./Anime";

const anime = {
  mal_id: 1,
  title: "Cowboy Bebop",
  episodes: 26,
  images: {
    jpg: { image_url: "https://cdn.myanimelist.net/images/anime/4/19644.jpg" },
  },
};

describe("test suite for Anime component", () => {
  it("expects to render a snapshot of the Anime component", () => {
    const animeTest = render(
      <Provider store={store}>
        <BrowserRouter>
          <Anime anime={anime} />
        </BrowserRouter>
      </Provider>
    );
    expect(animeTest).toMatchSnapshot();
  });
});
