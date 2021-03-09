import React, { useMemo } from 'react';
import { Game } from 'src/components/organisms/Game';

export const GamePage = () => {
  return useMemo(() => <Game />, []);
};
