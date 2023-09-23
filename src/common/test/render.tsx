/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
import { render as testingLibraryRender } from '@testing-library/react';
import { create as rendererCreate } from 'react-test-renderer';
import { MantineProvider } from '@mantine/core';
import defaultTheme from '@common/styles/DefaultTheme';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={defaultTheme}>{children}</MantineProvider>
    ),
  });
}

export function create(ui: React.ReactElement) {
  return rendererCreate((
    <MantineProvider theme={defaultTheme}>
      {ui}
    </MantineProvider>
  ));
}
