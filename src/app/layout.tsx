import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { raleway, montserrat } from './fonts';
import StyledComponentsRegistry from './registry';

import ThemeClient from '@/components/ThemeClient';

export const metadata: Metadata = {
  title: 'EasyRecipe',
  description: 'Trending recipes just for you.',
  authors: [{ name: 'Alexandre Machado', url: 'https://alexmachina.dev' }],
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={`${raleway.variable} ${montserrat.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ThemeClient>{children}</ThemeClient>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
