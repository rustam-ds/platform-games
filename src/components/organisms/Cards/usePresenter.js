import { useMemo } from 'react';
import { useStoreon } from 'storeon/react';
import { useLocales } from 'src/hooks/useLocales';

export const usePresenter = () => {
  const { gameView } = useStoreon('gameView');
  const locales = useLocales();

  const gamesList = useMemo(() => {
    return [...gameView.games].map(game => {
      if (!game.background_image) {
        game.background_image = locales.components.main.cards.plugPhoto.img;
      }
      return game;
    });
  }, [gameView.games]);

  return {
    cards: gamesList,
  };
};
