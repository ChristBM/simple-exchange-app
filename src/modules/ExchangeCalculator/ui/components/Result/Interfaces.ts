import { ConversionType, ExchangeRateType } from '@exCalcComponents/Calculator/Interfaces';

export type ResultProps = {
  labelA?: string;
  labelB?: string;
  conversion?: ConversionType;
  exchangeRate?: ExchangeRateType;
}
