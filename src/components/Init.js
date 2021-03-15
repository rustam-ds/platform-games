import { useState, useEffect } from 'react';

export const InitProvider = props => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  return init && props.children;
};
