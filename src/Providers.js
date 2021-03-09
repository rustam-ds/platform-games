import React from 'react';
import { StoreContext } from 'storeon/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, vars } from 'src/theme';
import { LocaleContext } from 'src/context';
import { store } from 'src/store';
import GlobalStyle from 'src/theme/GlobalStyle';
import { locales } from 'src/locales';

import { InitProvider } from 'src/components/Init';

export const Providers = props => {
  return (
    <ThemeProvider theme={vars}>
      <BrowserRouter>
        <GlobalStyle />
        <LocaleContext.Provider value={locales}>
          <StoreContext.Provider value={store}>
            <InitProvider>{props.children}</InitProvider>
          </StoreContext.Provider>
        </LocaleContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
