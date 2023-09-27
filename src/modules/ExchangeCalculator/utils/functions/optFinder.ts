import { ComboboxItem } from '@mantine/core';

const optFinder = (arr: ComboboxItem[], val: string) => arr.find((item) => item.value === val);

export default optFinder;
