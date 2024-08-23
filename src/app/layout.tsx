import type { Metadata } from 'next';
import StyledComponentsRegistry from './registry';
import { ContainerProps } from '@/types';

export const metadata: Metadata = {
  title: 'EasyRecipe',
  description: 'Trending recipes just for you.',
  authors: [{ name: 'Alexandre Machado', url: 'https://alexmachina.dev' }],
};

const RootLayout = ({ children }: ContainerProps) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
