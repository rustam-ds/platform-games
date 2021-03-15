import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, vars } from 'src/theme';
import { LocaleContext } from 'src/context';
import GlobalStyle from 'src/theme/GlobalStyle';
import { locales } from 'src/locales';

import { InitProvider } from 'src/components/Init';

export const Providers = props => (
  <ThemeProvider theme={vars}>
    <BrowserRouter>
      <GlobalStyle />
      <LocaleContext.Provider value={locales}>
        <InitProvider>{props.children}</InitProvider>
      </LocaleContext.Provider>
    </BrowserRouter>
  </ThemeProvider>
);
