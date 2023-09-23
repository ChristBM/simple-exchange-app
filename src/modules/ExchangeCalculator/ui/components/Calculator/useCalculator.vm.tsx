import {
  ButtonProps, NumberInputProps, SelectProps, useComputedColorScheme,
} from '@mantine/core';

export default function useCalculator() {
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const amountNumberInput: NumberInputProps = {
    label: 'Amount',
    description: 'How much would you like to convert?',
    placeholder: 'Enter an amount',
    radius: 'md',
    thousandSeparator: ',',
    allowNegative: false,
    decimalScale: 2,
    min: 0,
    required: true,

    error: false,
    disabled: false,
  };

  const selectCurrencyFrom: SelectProps = {
    label: 'From',
    description: 'From which currency do you want to convert to?',
    placeholder: 'Select a currency',
    data: ['Euro', 'Dollar', 'Peso', 'Libra', 'Bitcoin', 'Balboa', 'Belly'], // string[] o { value: string; label: string; disabled?: boolean }[] o { group: string; item: string[]; }[]
    nothingFoundMessage: 'Sorry, we do not have this coin :(',
    radius: 'md',
    allowDeselect: false,
    checkIconPosition: 'right',
    searchable: true,
    limit: 5,
    maxDropdownHeight: 200,
    required: true,

    error: false,
    disabled: false,
  };

  const selectCurrencyTo: SelectProps = {
    label: 'To',
    description: 'What currency do you want to convert into?',
    placeholder: 'Select a currency',
    data: ['Euro', 'Dollar', 'Peso', 'Libra', 'Bitcoin', 'Balboa', 'Belly'], // string[] o { value: string; label: string; disabled?: boolean }[] o { group: string; item: string[]; }[]
    nothingFoundMessage: 'Sorry, we do not have this coin :(',
    allowDeselect: false,
    checkIconPosition: 'right',
    searchable: true,
    limit: 5,
    maxDropdownHeight: 200,
    required: true,

    error: false,
    disabled: false,
  };

  const convertButtonProps: ButtonProps = {
    size: 'md',
    justify: 'space-around',
    variant: 'gradient',
    radius: 'md',
    loading: false, // boolean
    loaderProps: { type: 'dots' },
  };

  return {
    computedColorScheme,
    amountNumberInput,
    selectCurrencyFrom,
    selectCurrencyTo,
    convertButtonProps,
  };
}
