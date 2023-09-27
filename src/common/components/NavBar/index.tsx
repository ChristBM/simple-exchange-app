'use client';

import { ActionIcon } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import useNavBar from './useNavBar.vm';
import { IconMoonWrapper, IconSunWrapper, NavBarWrapper } from './styles';

export default function NavBar() {
  const { showSunIcon, handleChangeColorScheme } = useNavBar();

  return (
    <NavBarWrapper>
      <ActionIcon
        onClick={handleChangeColorScheme}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <IconSunWrapper $show={showSunIcon}>
          <IconSun stroke={1.5} />
        </IconSunWrapper>

        <IconMoonWrapper $show={!showSunIcon}>
          <IconMoon stroke={1.5} />
        </IconMoonWrapper>
      </ActionIcon>
    </NavBarWrapper>
  );
}
