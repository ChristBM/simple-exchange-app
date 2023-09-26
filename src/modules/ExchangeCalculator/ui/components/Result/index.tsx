import { IconArrowsExchange } from '@tabler/icons-react';

import { ResultProps } from './Interfaces';
import {
  ConversionReadOnly,
  ConversionResultWrapper,
  CurrencyText,
  ExchangeResultWrapper,
  ResultLabelText,
  ResultSectionWrapper,
  ResultWrapper,
} from './styles';

const RESULT_DEFAULT_PROPS = {
  labelA: 'Conversion Result:',
  labelB: 'Exchange Rate:',
  conversion: {
    result: 0,
    currency: '---',
  },
  exchangeRate: {
    fromCurrency: '---',
    result: 1,
    toCurrency: '---',
  },
};

export default function Result({
  labelA = RESULT_DEFAULT_PROPS.labelA,
  labelB = RESULT_DEFAULT_PROPS.labelB,
  conversion = RESULT_DEFAULT_PROPS.conversion,
  exchangeRate = RESULT_DEFAULT_PROPS.exchangeRate,
}: ResultProps) {
  return (
    <ResultWrapper>
      <ResultSectionWrapper>
        <ResultLabelText>{labelA}</ResultLabelText>

        <ConversionResultWrapper>
          <ConversionReadOnly type="text" readOnly value={conversion.result} />

          <CurrencyText>{conversion.currency}</CurrencyText>
        </ConversionResultWrapper>
      </ResultSectionWrapper>

      <ResultSectionWrapper>
        <ResultLabelText>{labelB}</ResultLabelText>

        <ExchangeResultWrapper>
          <p>1</p>
          <CurrencyText>{exchangeRate.fromCurrency}</CurrencyText>

          <div>
            <IconArrowsExchange
              stroke={2}
              color="purple"
              size={20}
              style={{ paddingBlockStart: '3px' }}
            />
          </div>

          <ConversionReadOnly type="text" readOnly value={exchangeRate.result} />

          <CurrencyText>{exchangeRate.toCurrency}</CurrencyText>
        </ExchangeResultWrapper>
      </ResultSectionWrapper>
    </ResultWrapper>
  );
}
