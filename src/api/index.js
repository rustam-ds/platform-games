import axios from 'axios';
import { baseUrl } from 'src/config';

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
