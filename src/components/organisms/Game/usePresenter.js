import { useEffect, useState } from 'react';
import { gameService } from 'src/api/services';

export const usePresenter = () => {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(false);
  const [_, setError] = useState('');

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      setLoading(true);
      const id = location.pathname.split('/')[2];
      const response = await gameService.get('gameView/fetch-game', { id });
      setGame(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    game,
    loading,
  };
};
