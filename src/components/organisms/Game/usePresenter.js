import { useEffect } from 'react';
import { useStoreon } from 'storeon/react';

export const usePresenter = () => {
  const { dispatch, gameView } = useStoreon('gameView');

  useEffect(() => {
    const id = location.pathname.split('/')[2];
    dispatch('gameView/fetch-game', { id });
  }, []);

  return {
    game: gameView.game,
    loading: gameView.loading,
  };
};
