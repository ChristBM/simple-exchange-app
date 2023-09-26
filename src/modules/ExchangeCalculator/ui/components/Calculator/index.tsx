'use client';

import { Button, NumberInput, Select } from '@mantine/core';
import { IconArrowsExchange2, IconCash, IconCoins } from '@tabler/icons-react';

import Result from '@exCalcComponents/Result';
import CALCULATOR_DEFAULT_PROPS from './DefaultCurrencies';
import { CalculatorProps } from './Interfaces';
import useCalculator from './useCalculator.vm';
import {
  ButtonSectionWrapper,
  CalculatorWrapper,
  InputSectionWrapper,
  ResultsSectionWrapper,
} from './styles';

export default function Calculator({
  currencies = CALCULATOR_DEFAULT_PROPS.currencies,
  convertBtnLabel = CALCULATOR_DEFAULT_PROPS.convertBtnLabel,
}: CalculatorProps) {
  const {
    computedColorScheme,
    amountNumberInput,
    selectCurrencyFrom,
    selectCurrencyTo,
    convertButtonProps,
    resultProps,
  } = useCalculator({ currencies });

  return (
    <CalculatorWrapper $scheme={computedColorScheme}>
      <InputSectionWrapper>
        <NumberInput
          leftSection={<IconCoins size={18} />}
          min={amountNumberInput.min}
          label={amountNumberInput.label}
          error={amountNumberInput.error}
          radius={amountNumberInput.radius}
          required={amountNumberInput.required}
          onChange={amountNumberInput.onChange}
          description={amountNumberInput.description}
          placeholder={amountNumberInput.placeholder}
          decimalScale={amountNumberInput.decimalScale}
          allowNegative={amountNumberInput.allowNegative}
          thousandSeparator={amountNumberInput.thousandSeparator}
        />

        <Select
          data-testid="from-select-id"
          leftSection={<IconCash size={18} />}
          data={selectCurrencyFrom.data}
          label={selectCurrencyFrom.label}
          error={selectCurrencyFrom.error}
          radius={selectCurrencyFrom.radius}
          required={selectCurrencyFrom.required}
          onChange={selectCurrencyFrom.onChange}
          searchable={selectCurrencyFrom.searchable}
          description={selectCurrencyFrom.description}
          placeholder={selectCurrencyFrom.placeholder}
          allowDeselect={selectCurrencyFrom.allowDeselect}
          checkIconPosition={selectCurrencyFrom.checkIconPosition}
          maxDropdownHeight={selectCurrencyFrom.maxDropdownHeight}
          nothingFoundMessage={selectCurrencyFrom.nothingFoundMessage}
        />

        <Select
          data-testid="to-select-id"
          leftSection={<IconCash size={18} />}
          data={selectCurrencyTo.data}
          label={selectCurrencyTo.label}
          error={selectCurrencyTo.error}
          radius={selectCurrencyTo.radius}
          required={selectCurrencyTo.required}
          onChange={selectCurrencyTo.onChange}
          searchable={selectCurrencyTo.searchable}
          description={selectCurrencyTo.description}
          placeholder={selectCurrencyTo.placeholder}
          allowDeselect={selectCurrencyTo.allowDeselect}
          checkIconPosition={selectCurrencyTo.checkIconPosition}
          maxDropdownHeight={selectCurrencyTo.maxDropdownHeight}
          nothingFoundMessage={selectCurrencyTo.nothingFoundMessage}
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
          onClick={convertButtonProps.onClick}
        >
          {convertBtnLabel}
        </Button>
      </ButtonSectionWrapper>

      <ResultsSectionWrapper>
        <Result
          labelA={resultProps.labelA}
          labelB={resultProps.labelB}
          conversion={resultProps.conversion}
          exchangeRate={resultProps.exchangeRate}
        />
      </ResultsSectionWrapper>
    </CalculatorWrapper>
  );
}
