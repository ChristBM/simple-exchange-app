/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable class-methods-use-this */
import { render, screen, userEvent } from '@common/test';

import { SELECT_ERROR_MSG } from '@exCalcComponents/Calculator/useCalculator.vm';
import fixture, { TEST_AMOUNT } from './HomePageLayout.test.fixture';
import { HomePageLayoutProps } from './Interfaces';
import HomePageLayout, { HOME_DEFAULT_PROPS } from '.';

export default class HomePageLayoutPO {
  get defaultTitle(): HTMLElement {
    return screen.getByRole('heading', { name: HOME_DEFAULT_PROPS.title }) as HTMLElement;
  }

  get calculatorTitle(): HTMLElement {
    return screen.getByRole('heading', { name: fixture.title }) as HTMLElement;
  }

  get convertBtn(): HTMLElement {
    return screen.getByRole('button', { name: /convert/i }) as HTMLElement;
  }

  get allSelectErrorMessages(): HTMLElement[] {
    return screen.queryAllByText(SELECT_ERROR_MSG) as HTMLElement[];
  }

  get amountNumberInput(): HTMLElement {
    return screen.getByLabelText(/amount/i) as HTMLElement;
  }

  get selectFrom(): HTMLElement {
    return screen.getByTestId('from-select-id') as HTMLElement;
  }

  get selectTo(): HTMLElement {
    return screen.getByTestId('to-select-id') as HTMLElement;
  }

  get conversionResult(): HTMLElement {
    return screen.getByTestId('conversion-result-id') as HTMLElement;
  }

  get exchangeRateResult(): HTMLElement {
    return screen.getByTestId('exchange-rate-result-id') as HTMLElement;
  }

  initialize(props: HomePageLayoutProps) {
    render(<HomePageLayout {...props} />);
  }

  async typeAmount(): Promise<void> {
    await userEvent.type(await this.amountNumberInput, `${TEST_AMOUNT}`);
  }

  async selectFromCurrency(): Promise<void> {
    await userEvent.click(await this.selectFrom);
    await userEvent.click(await screen.getAllByText('USD')[0]);
  }

  async selectToCurrency(): Promise<void> {
    await userEvent.click(await this.selectTo);
    await userEvent.click(await screen.getAllByText('MXN')[1]);
  }

  async clickOnConvertBtn(): Promise<void> {
    await userEvent.click(await this.convertBtn);
  }
}
