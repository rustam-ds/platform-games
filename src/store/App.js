const initialState = {
  isInit: false,
};

export const app = store => {
  store.on('@init', () => ({
    app: { ...initialState },
  }));
  store.on('app/init', () => {
    store.dispatch('app/set-isInit', { value: true });
    store.dispatch('gameView/fetch-games', { query: '-rating' });
    store.dispatch('gameView/fetch-platform', {
      url: 'platforms/lists/parents',
    });
  });
  store.on('app/set-isInit', (state, data) => ({
    app: { ...state.app, isInit: data.value },
  }));
};
