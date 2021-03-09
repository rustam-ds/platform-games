import { gamesService, gameService, platformService } from 'src/api/services';

const initialState = {
  games: [],
  error: '',
  platforms: [],
  loading: false,
  platformNumber: null,
  inputValue: '',
  game: {},
  selectedPage: 1,
  pagesCount: null,
};

export const gameView = store => {
  store.on('@init', () => ({
    gameView: { ...initialState },
  }));
  store.on('gameView/fetch-games', async (state, data) => {
    try {
      store.dispatch('gameView/set-loading', { value: true });
      const options = {
        ...data,
        platformNumber: state.gameView.platformNumber,
        search: state.gameView.inputValue,
        selectedPage: state.gameView.selectedPage,
      };
      const response = await gamesService.get(options);
      store.dispatch('gameView/set-games', response.data);
      store.dispatch('gameView/set-pagesCount', response.data);
    } catch (error) {
      store.dispatch('gameView/set-error', error);
    } finally {
      store.dispatch('gameView/set-loading', { value: false });
    }
  });
  store.on('gameView/fetch-game', async (state, data) => {
    try {
      store.dispatch('gameView/set-loading', { value: true });
      const response = await gameService.get(data);
      store.dispatch('gameView/set-game', response.data);
    } catch (error) {
      store.dispatch('gameView/set-error', error);
    } finally {
      store.dispatch('gameView/set-loading', { value: false });
    }
  });
  store.on('gameView/fetch-platform', async (state, data) => {
    try {
      const response = await platformService.get(data);
      store.dispatch('gameView/set-platforms', response.data);
    } catch (error) {
      store.dispatch('gameView/set-error', error);
    }
  });
  store.on('gameView/set-games', (state, data) => ({
    gameView: { ...state.gameView, games: data.results },
  }));
  store.on('gameView/set-game', (state, data) => ({
    gameView: { ...state.gameView, game: data },
  }));
  store.on('gameView/set-platforms', (state, data) => ({
    gameView: { ...state.gameView, platforms: data.results },
  }));
  store.on('gameView/set-platformNumber', (state, data) => ({
    gameView: { ...state.gameView, platformNumber: data.value },
  }));
  store.on('gameView/set-inputValue', (state, data) => ({
    gameView: { ...state.gameView, inputValue: data.value },
  }));
  store.on('gameView/set-selectedPage', (state, data) => ({
    gameView: { ...state.gameView, selectedPage: data.value },
  }));
  store.on('gameView/set-pagesCount', (state, data) => ({
    gameView: { ...state.gameView, pagesCount: data.count },
  }));
  store.on('gameView/set-loading', (state, data) => ({
    gameView: { ...state.gameView, loading: data.value },
  }));
  store.on('gameView/set-error', (state, data) => ({
    gameView: { ...state.gameView, error: data },
  }));
};
