import '@mantine/core/styles.css';
import '@common/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

import NavBar from '@common/components/NavBar';
import defaultTheme from '@common/styles/DefaultTheme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body className={inter.className}>
        <MantineProvider theme={defaultTheme} defaultColorScheme="dark">
          <>
            <NavBar />
            {children}
          </>
        </MantineProvider>
      </body>
    </html>
  );
}
