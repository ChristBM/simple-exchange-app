import { ComboboxItem } from '@mantine/core';

export type HomePageLayoutProps = {
  title?: string;
  calculatorCurrencies?: ComboboxItem[]
}

/* Data Fetching */
export interface RateDataType {
  [key: string]: number
}

export interface DataFromAPI {
  success: boolean;
  timestamp: number;
  base: string;
  date: Date;
  rates: RateDataType;
}
