import { useMemo, useCallback } from 'react';
import { useStoreon } from 'storeon/react';

export const usePresenter = () => {
  const { dispatch, gameView } = useStoreon('gameView');
  const platforms = useMemo(() => gameView.platforms, [gameView.platforms]);

  const getPlatform = useCallback(
    event => {
      if (event.target.value === '-1') {
        dispatch('gameView/set-platformNumber', {
          value: null,
        });
        dispatchGames();
      } else {
        dispatch('gameView/set-platformNumber', {
          value: event.target.value,
        });
        dispatchGames();
      }
    },
    [gameView.platforms, gameView.games]
  );

  const dispatchGames = () =>
    dispatch('gameView/fetch-games', { query: '-rating' });

  const isVisibleElseOption = true;

  return {
    options: platforms,
    onChange: getPlatform,
    isVisibleElseOption: isVisibleElseOption,
  };
};
