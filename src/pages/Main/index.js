import React, { useMemo } from 'react';
import { Main } from 'src/components/organisms/Main';

export const MainPage = () => {
  return useMemo(() => <Main />, []);
};
