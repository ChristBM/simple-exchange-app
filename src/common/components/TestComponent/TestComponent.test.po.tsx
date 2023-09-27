/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import fixture from './TestComponent.test.fixture';
import { TestComponentProps } from './Interfaces';
import TestComponent from '.';

export default class TestComponentPO {
  get subtitleText(): HTMLElement {
    return screen.getByText(fixture.subtitle) as HTMLElement;
  }

  get addBtn(): HTMLElement {
    return screen.getByRole('button', { name: fixture.btnLabel }) as HTMLElement;
  }

  get titleText(): HTMLElement {
    return screen.queryByRole('heading', { name: /hello/i }) as HTMLElement;
  }

  initialize(props: TestComponentProps) {
    render(<TestComponent {...props} />);
  }

  createSnapshot(props: TestComponentProps) {
    return renderer.create(<TestComponent {...props} />).toJSON();
  }

  async onAddClickBtn(): Promise<void> {
    await userEvent.click(await this.addBtn);
  }
}
