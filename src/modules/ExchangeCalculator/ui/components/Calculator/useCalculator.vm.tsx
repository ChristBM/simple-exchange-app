import { useEffect, useReducer } from 'react';
import {
  ButtonProps, ElementProps, NumberInputProps, SelectProps, useComputedColorScheme,
} from '@mantine/core';

import optFinder from '@exCalcUtils/functions/optFinder';
import { ResultProps } from '@exCalcComponents/Result/Interfaces';
import calcConversion, { calcRate } from '@exCalcUtils/functions/calcConversion';
import calcReducer, { CalcInitialState } from './Reducer';
import { CalculatorArgs } from './Interfaces';

export const SELECT_ERROR_MSG = 'Please select a currency';

export default function useCalculator({ currencies }: CalculatorArgs) {
  const [{
    amount, from, to, conversion, exchangeRate, errorField,
  }, dispatch] = useReducer(calcReducer, CalcInitialState);

  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  useEffect(() => {
    if (errorField && from.currency) {
      dispatch({
        type: 'SET_SELECT_ERRORS',
        payload: {
          fromError: false,
          toError: errorField.toError,
        },
      });
    }

    if (errorField && to.currency) {
      dispatch({
        type: 'SET_SELECT_ERRORS',
        payload: {
          fromError: errorField.fromError,
          toError: false,
        },
      });
    }
  }, [from.currency, to.currency]);

  const amountNumberInput: NumberInputProps = {
    label: 'Amount',
    description: 'How much would you like to convert?',
    placeholder: 'Enter an amount',
    radius: 'md',
    thousandSeparator: ',',
    allowNegative: false,
    decimalScale: 3,
    min: 0,
    defaultValue: 0,
    onChange: (value) => {
      dispatch({ type: 'SET_AMOUNT', payload: value as number });
    },
  };

  const selectCurrencyFrom: SelectProps = {
    label: 'From',
    description: 'From which currency do you want to convert to?',
    placeholder: 'Select a currency',
    data: currencies,
    nothingFoundMessage: 'Sorry, we do not have this currency',
    radius: 'md',
    allowDeselect: false,
    checkIconPosition: 'right',
    searchable: true,
    maxDropdownHeight: 200,
    required: true,
    error: errorField?.fromError,
    onChange: (value) => {
      const opt = optFinder(currencies, value ?? '');

      if (value && opt) {
        dispatch({
          type: 'SET_FROM',
          payload: {
            rate: parseFloat(opt.value),
            currency: opt?.label,
          },
        });
      }
    },
  };

  const selectCurrencyTo: SelectProps = {
    label: 'To',
    description: 'What currency do you want to convert into?',
    placeholder: 'Select a currency',
    data: currencies,
    nothingFoundMessage: 'Sorry, we do not have this currency',
    radius: 'md',
    allowDeselect: false,
    checkIconPosition: 'right',
    searchable: true,
    maxDropdownHeight: 200,
    required: true,
    error: errorField?.toError,
    onChange: (value) => {
      const opt = currencies.find((item) => item.value === value);

      if (value && opt) {
        dispatch({
          type: 'SET_TO',
          payload: {
            rate: parseFloat(opt.value),
            currency: opt?.label,
          },
        });
      }
    },
  };

  const convertButtonProps: ButtonProps & ElementProps<'button', keyof ButtonProps> = {
    size: 'md',
    radius: 'md',
    variant: 'gradient',
    justify: 'space-around',
    onClick: () => {
      if (from.currency && to.currency) {
        dispatch({
          type: 'SET_CONVERSION',
          payload: {
            result: calcConversion({ amount, fromRate: from.rate, toRate: to.rate }),
            currency: to.currency,
          },
        });

        dispatch({
          type: 'SET_EXCHANGE_RATE',
          payload: {
            fromCurrency: from.currency,
            result: calcRate({ fromRate: from.rate, toRate: to.rate }),
            toCurrency: to.currency,
          },
        });
      } else {
        dispatch({
          type: 'SET_SELECT_ERRORS',
          payload: {
            fromError: from.currency.length === 0 ? SELECT_ERROR_MSG : false,
            toError: to.currency.length === 0 ? SELECT_ERROR_MSG : false,
          },
        });
      }
    },
  };

  const resultProps: ResultProps = {
    labelA: 'Conversion Result:',
    labelB: 'Exchange Rate:',
    conversion,
    exchangeRate,
  };

  return {
    computedColorScheme,
    amountNumberInput,
    selectCurrencyFrom,
    selectCurrencyTo,
    convertButtonProps,
    resultProps,
  };
}
