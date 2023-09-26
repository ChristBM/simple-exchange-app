/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import defaultTheme from '@common/styles/DefaultTheme';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={defaultTheme}>{children}</MantineProvider>
    ),
  });
}
