import CalculatorTitle from '@exCalcComponents/CalculatorTitle/CalculatorTitle';

import { HomeSection, HomeWrapper } from './styles';
import { HomePageLayoutProps } from './Interfaces';

export const HOME_DEFAULT_PROPS = {
  title: 'Simple Exchange Rate Calculator',
};

export default function HomePageLayout({
  title = HOME_DEFAULT_PROPS.title,
}: HomePageLayoutProps) {
  return (
    <HomeWrapper>
      <HomeSection>
        <CalculatorTitle title={title} />
      </HomeSection>

      <HomeSection>
        Calculator Here
      </HomeSection>
    </HomeWrapper>
  );
}
