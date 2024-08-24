'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/app/styles';

const ThemeClient = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeClient;
