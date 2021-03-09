import { useStoreon } from 'storeon/react';
import { getCeilCounts } from 'src/utils';

export const usePresenter = () => {
  const { dispatch, gameView } = useStoreon('gameView');

  const handlePageClick = selectedId => {
    dispatch('gameView/set-selectedPage', { value: selectedId.selected + 1 });
    dispatch('gameView/fetch-games', {
      query: '-rating',
    });
  };

  const pagesCount = gameView.pagesCount && getCeilCounts(gameView.pagesCount);

  return {
    loading: gameView.loading,
    count: pagesCount,
    onClick: handlePageClick,
  };
};
