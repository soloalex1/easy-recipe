'use client';

import {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useCallback,
} from 'react';
import { ThemeProvider } from 'styled-components';

import { theme as lightTheme, darkTheme, GlobalStyle } from '@/app/styles';
import { ThemeContextData, Theme } from '@/types';

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

const ThemeClient = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.name === 'dark' ? lightTheme : darkTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeClient;
