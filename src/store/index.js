import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';
import { app } from './App';
import { gameView } from 'src/store/GameView';

export const store = createStoreon([
  app,
  gameView,
  process.env.NODE_ENV !== 'production' && storeonDevtools,
]);
