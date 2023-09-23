/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable class-methods-use-this */
import { render, screen } from '@common/test';

import fixture from './HomePageLayout.test.fixture';
import { HomePageLayoutProps } from './Interfaces';
import HomePageLayout from '.';

export default class HomePageLayoutPO {
  get calculatorTitle(): HTMLElement {
    return screen.getByRole('heading', { name: fixture.title }) as HTMLElement;
  }

  initialize(props: HomePageLayoutProps) {
    render(<HomePageLayout {...props} />);
  }
}
