import { api } from './index';
import { url, pageSize } from 'src/config';

export const gamesService = {
  get: async options =>
    api.get(url, {
      params: {
        ordering: options.query,
        parent_platforms: options.platformNumber,
        search: options.search,
        page: options.selectedPage,
        page_size: pageSize,
      },
    }),
};

export const gameService = {
  get: async options => api.get(`${url}/${options.id}`),
};

export const platformService = {
  get: async options => api.get(options.url),
};
