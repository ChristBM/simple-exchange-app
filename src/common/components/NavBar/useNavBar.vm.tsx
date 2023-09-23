import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';

export default function useNavBar() {
  const { setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const handleChangeColorScheme = () => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');

  return { computedColorScheme, handleChangeColorScheme };
}
