import { useContext } from 'react';
import { LocaleContext } from 'src/context';

export const useLocales = () => useContext(LocaleContext);
