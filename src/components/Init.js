import React, { useEffect } from 'react';
import { useStoreon } from 'storeon/react';

export const InitProvider = props => {
  const { dispatch } = useStoreon();

  useEffect(() => {
    dispatch('app/init');
  }, []);

  return <>{props.children}</>;
};
