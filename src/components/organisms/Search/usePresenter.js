import { useCallback } from 'react';
import { useStoreon } from 'storeon/react';

export const usePresenter = () => {
  const { dispatch, gameView } = useStoreon('gameView');

  const getInputValueAndDispatchIt = useCallback(
    event => {
      dispatch('gameView/set-inputValue', {
        value: event.target.value,
      });
      dispatch('gameView/fetch-games', {
        query: '-rating',
        search: event.target.value,
      });
    },
    [gameView.platforms, gameView.games]
  );

  return {
    value: gameView.inputValue,
    onChange: getInputValueAndDispatchIt,
  };
};
