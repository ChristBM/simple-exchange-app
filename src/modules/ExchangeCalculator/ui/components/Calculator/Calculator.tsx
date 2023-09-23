'use client';

import { Button, NumberInput, Select } from '@mantine/core';
import { IconArrowsExchange2, IconCash, IconCoins } from '@tabler/icons-react';

import useCalculator from './useCalculator.vm';
import {
  ButtonSectionWrapper,
  CalculatorWrapper,
  InputSectionWrapper,
  ResultsSectionWrapper,
} from './styles';

export default function Calculator() {
  const {
    computedColorScheme,
    amountNumberInput,
    selectCurrencyFrom,
    selectCurrencyTo,
    convertButtonProps,
  } = useCalculator();

  return (
    <CalculatorWrapper $scheme={computedColorScheme}>
      <InputSectionWrapper>
        <NumberInput
          leftSection={<IconCoins size={18} />}
          min={amountNumberInput.min}
          label={amountNumberInput.label}
          radius={amountNumberInput.radius}
          required={amountNumberInput.required}
          description={amountNumberInput.description}
          placeholder={amountNumberInput.placeholder}
          decimalScale={amountNumberInput.decimalScale}
          allowNegative={amountNumberInput.allowNegative}
          thousandSeparator={amountNumberInput.thousandSeparator}
          error={amountNumberInput.error}
          disabled={amountNumberInput.disabled}
          // value={value}
          // onChange={setValue}
        />

        <Select
          leftSection={<IconCash size={18} />}
          label={selectCurrencyFrom.label}
          data={selectCurrencyFrom.data}
          limit={selectCurrencyFrom.limit}
          radius={selectCurrencyFrom.radius}
          required={selectCurrencyFrom.required}
          searchable={selectCurrencyFrom.searchable}
          description={selectCurrencyFrom.description}
          placeholder={selectCurrencyFrom.placeholder}
          allowDeselect={selectCurrencyFrom.allowDeselect}
          checkIconPosition={selectCurrencyFrom.checkIconPosition}
          maxDropdownHeight={selectCurrencyFrom.maxDropdownHeight}
          nothingFoundMessage={selectCurrencyFrom.nothingFoundMessage}
          error={selectCurrencyFrom.error}
          disabled={selectCurrencyFrom.disabled}
          // value={value}
          // onChange={setValue}
        />

        <Select
          leftSection={<IconCash size={18} />}
          label={selectCurrencyTo.label}
          data={selectCurrencyTo.data}
          limit={selectCurrencyTo.limit}
          radius={selectCurrencyTo.radius}
          required={selectCurrencyTo.required}
          searchable={selectCurrencyTo.searchable}
          description={selectCurrencyTo.description}
          placeholder={selectCurrencyTo.placeholder}
          allowDeselect={selectCurrencyTo.allowDeselect}
          checkIconPosition={selectCurrencyTo.checkIconPosition}
          maxDropdownHeight={selectCurrencyTo.maxDropdownHeight}
          nothingFoundMessage={selectCurrencyTo.nothingFoundMessage}
          error={selectCurrencyTo.error}
          disabled={selectCurrencyTo.disabled}
          // onChange={setValue}
          // value={value}
        />
      </InputSectionWrapper>

      <ButtonSectionWrapper>
        <Button
          leftSection={<IconArrowsExchange2 size={18} />}
          size={convertButtonProps.size}
          radius={convertButtonProps.radius}
          justify={convertButtonProps.justify}
          variant={convertButtonProps.variant}
          loading={convertButtonProps.loading}
          loaderProps={convertButtonProps.loaderProps}
        >
          Convert
        </Button>
      </ButtonSectionWrapper>

      <ResultsSectionWrapper>
        <div>
          Conversion Result:
        </div>

        <div>
          Exchange Rate:
        </div>
      </ResultsSectionWrapper>
    </CalculatorWrapper>
  );
}
