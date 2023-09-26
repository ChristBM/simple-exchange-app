// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import calcConversion, { calcRate } from '@exCalcUtils/functions/calcConversion';
import CALCULATOR_DEFAULT_PROPS from '@exCalcComponents/Calculator/DefaultCurrencies';
import { HomePageLayoutProps } from './Interfaces';

const fixture: HomePageLayoutProps = {
  title: faker.lorem.words(1),
};

export const TEST_AMOUNT = 1.5;
const fromRate = parseFloat(CALCULATOR_DEFAULT_PROPS.currencies[0].value); // USD
const toRate = parseFloat(CALCULATOR_DEFAULT_PROPS.currencies[1].value); // MXN

export const conversionRes = calcConversion({
  amount: TEST_AMOUNT,
  fromRate,
  toRate,
});

export const exRateRes = calcRate({
  fromRate,
  toRate,
});

export default fixture;
