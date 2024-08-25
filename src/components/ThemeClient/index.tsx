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

  const themes = {
    dark: darkTheme,
    light: lightTheme,
  };

  const onChangeTheme = useCallback(
    (newTheme: string) => {
      if (theme.name === newTheme) return;
      setTheme(themes[newTheme as keyof typeof themes]);
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeClient;
