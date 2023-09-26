import { ComboboxItem } from '@mantine/core';

export type CalculatorProps = {
  currencies?: ComboboxItem[];
};

export type CalculatorArgs = {
  currencies: ComboboxItem[];
};
// { value: string; label: string; disabled?: boolean }[]

export interface RateType {
  rate: number;
  currency: string;
}

export interface ConversionType {
  result: number;
  currency: string;
}

export interface ExchangeRateType {
  fromCurrency: string;
  result: number;
  toCurrency: string;
}

export interface SelectErrorsType {
  fromError: string | boolean;
  toError: string | boolean;
}

export interface CalcStateType {
  amount: number;
  from: RateType;
  to: RateType;
  conversion?: ConversionType;
  exchangeRate?: ExchangeRateType;
  errorField?: SelectErrorsType;
}

export type ACTION_TYPE_CALC =
  | { type: 'SET_AMOUNT'; payload: number }
  | { type: 'SET_FROM'; payload: RateType; }
  | { type: 'SET_TO'; payload: RateType; }
  | { type: 'SET_CONVERSION'; payload: ConversionType; }
  | { type: 'SET_EXCHANGE_RATE'; payload: ExchangeRateType; }
  | { type: 'SET_SELECT_ERRORS'; payload: SelectErrorsType; };
