import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';

export default function useNavBar() {
  const { setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const handleChangeColorScheme = () => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');

  const showSunIcon = computedColorScheme === 'light';

  return { showSunIcon, handleChangeColorScheme };
}
