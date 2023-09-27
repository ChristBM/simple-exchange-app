/* eslint-disable no-undef */
import TestMantineComponentPO from './TestMantineComponent.test.po';

describe('<TestMantineComponent />', () => {
  let page: TestMantineComponentPO;

  beforeEach(() => {
    page = new TestMantineComponentPO();
  });

  /* it('Renders correctly (snapshot)', () => {
    // Given + When
    const tree = page.createSnapshot();

    // Then
    expect(tree).toMatchSnapshot();
  }); */

  it('Should display a convert button', () => {
    // Given
    page.initialize();

    // When
    const { convertBtn } = page;

    // Then
    expect(convertBtn).toBeInTheDocument();
  });
});
