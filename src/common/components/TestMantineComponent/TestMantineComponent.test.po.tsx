/* eslint-disable class-methods-use-this */
import {
  render,
  screen,
  // create,
} from '@common/test';

import TestMantineComponent from '.';

export default class TestMantineComponentPO {
  get convertBtn(): HTMLElement {
    return screen.getByRole('button', { name: /convert/i }) as HTMLElement;
  }

  initialize() {
    render(<TestMantineComponent />);
  }

  /*
    See the note below:
    createSnapshot() {
      return create(<TestMantineComponent />).toJSON();
    }
  */
}

/*
  Note:
  Snapshot tests for components that have other Mantine components
  are meaningless, since attributes such as: id, htmlFor and aria-describedby
  are randomly generated on each test run. It makes no sense to mock these
  components if you want to get serious results.
*/
