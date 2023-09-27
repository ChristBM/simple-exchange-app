import { ComboboxItem } from '@mantine/core';
import { RateDataType } from '@exCalcViews/HomePageLayout/Interfaces';

export default function transformRatesData(rates: RateDataType): ComboboxItem[] {
  const rateEntries = Object.entries(rates);

  return rateEntries.map((item) => ({
    label: item[0], // "USD"
    value: `${item[0]}-${item[1]}`, // "USD-1.2345"
  }));
}
