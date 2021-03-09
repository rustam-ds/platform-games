import { useCallback } from 'react';
import { useStoreon } from 'storeon/react';

export const usePresenter = () => {
  const { dispatch, gameView } = useStoreon('gameView');

  const getSortedGames = useCallback(
    event => {
      switch (+event.target.value) {
        case 1:
          dispatch('gameView/fetch-games', { query: '-rating' });
          break;
        case 2:
          dispatch('gameView/fetch-games', { query: 'rating' });
          break;
        case 3:
          dispatch('gameView/fetch-games', {
            query: '-released',
          });
          break;
        case 4:
          dispatch('gameView/fetch-games', { query: 'released' });
          break;
      }
    },
    [gameView.games]
  );

  return {
    onChange: getSortedGames,
  };
};
