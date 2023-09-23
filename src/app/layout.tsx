import '@mantine/core/styles.css';
import '@common/styles/globals.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
        <MantineProvider theme={defaultTheme} defaultColorScheme="auto">{children}</MantineProvider>
      </body>
    </html>
  );
}
