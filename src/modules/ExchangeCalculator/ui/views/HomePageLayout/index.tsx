import Calculator from '@exCalcComponents/Calculator';
import CalculatorTitle from '@exCalcComponents/CalculatorTitle';
import CALCULATOR_DEFAULT_PROPS from '@exCalcComponents/Calculator/DefaultCurrencies';

import { HomeSection, HomeWrapper } from './styles';
import { HomePageLayoutProps } from './Interfaces';

export const HOME_DEFAULT_PROPS = {
  title: 'Simple Exchange Rate Calculator',
  calculatorCurrencies: CALCULATOR_DEFAULT_PROPS.currencies,
};

export default function HomePageLayout({
  title = HOME_DEFAULT_PROPS.title,
  calculatorCurrencies = HOME_DEFAULT_PROPS.calculatorCurrencies,
}: HomePageLayoutProps) {
  return (
    <HomeWrapper>
      <HomeSection>
        <CalculatorTitle title={title} />
      </HomeSection>

      <HomeSection>
        <Calculator currencies={calculatorCurrencies} />
      </HomeSection>
    </HomeWrapper>
  );
}
