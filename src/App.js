import React from 'react';
import { Providers } from 'src/Providers';
import { Layout } from 'src/components/Layout';
import { Routes } from 'src/Routes';

export const App = props => (
  <Providers>
    <Layout>
      <Routes>{props.children}</Routes>
    </Layout>
  </Providers>
);
