'use client';

import { ActionIcon } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

import { NavBarWrapper } from './styles';
import useNavBar from './useNavBar.vm';

export default function NavBar() {
  const { computedColorScheme, handleChangeColorScheme } = useNavBar();

  return (
    <NavBarWrapper>
      <ActionIcon
        onClick={handleChangeColorScheme}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        {computedColorScheme === 'dark' && <IconSun stroke={1.5} />}
        {computedColorScheme === 'light' && <IconMoon stroke={1.5} />}
      </ActionIcon>
    </NavBarWrapper>
  );
}
