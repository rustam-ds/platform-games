import { useEffect, useMemo, useState } from 'react';
import { gamesService, platformService } from 'src/api/services';
import { getCeilCounts } from 'src/utils';
import { useLocales } from 'src/hooks/useLocales';

export const usePresenter = () => {
  const [games, setGames] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortParams, setSortParams] = useState('-rating');
  const [platformNumber, setPlatformNumber] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [selectedPage, setSelectedPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [_, setError] = useState('');

  const locales = useLocales();

  const fetchPlatforms = async url => {
    try {
      const response = await platformService.get(url);
      setPlatforms(response.data.results);
    } catch (error) {
      setError(error);
    }
  };

  const fetchGames = async params => {
    try {
      setLoading(true);
      const response = await gamesService.get(params);
      setGames(response.data.results);
      setPagesCount(response.data.count);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchingValues = {
    query: sortParams,
    platformNumber,
    search: inputValue,
    selectedPage,
  };

  useEffect(() => {
    fetchGames(fetchingValues);
    fetchPlatforms('platforms/lists/parents');
  }, []);

  const changeSortParamsAndFetchIt = value => {
    setSortParams(value);

    fetchGames({
      ...fetchingValues,
      query: value,
    });
  };

  const changePlatformNumberAndFetchIt = value => {
    setPlatformNumber(value);

    fetchGames({
      ...fetchingValues,
      platformNumber: value,
    });
  };

  const changeInputValueAndFetchIt = value => {
    setInputValue(value);

    fetchGames({
      ...fetchingValues,
      search: value,
    });
  };

  const changePageAndFetchIt = value => {
    setSelectedPage(value.selected + 1);

    fetchGames({
      ...fetchingValues,
      selectedPage: value.selected + 1,
    });
  };

  const gamesList = useMemo(() => {
    return [...games].map(game => {
      if (!game.background_image) {
        game.background_image = locales.components.main.cards.plugPhoto.img;
      }
      return game;
    });
  }, [games]);

  const count = pagesCount && getCeilCounts(pagesCount);

  return {
    gamesList,
    platforms,
    loading,
    count,
    changeSortParamsAndFetchIt,
    changePlatformNumberAndFetchIt,
    changeInputValueAndFetchIt,
    changePageAndFetchIt,
    fetchGames,
    fetchPlatforms,
  };
};
