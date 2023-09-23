/* eslint-disable no-undef */
import fixture from './TestComponent.test.fixture';
import TestComponentPO from './TestComponent.test.po';

describe('<TestComponent />', () => {
  const { subtitle, btnLabel } = fixture;
  let page: TestComponentPO;

  beforeEach(() => {
    page = new TestComponentPO();
  });

  it('Renders correctly (snapshot)', () => {
    // Given + When
    const tree = page.createSnapshot({ subtitle: 'subtitle', btnLabel: 'add' });

    // Then
    expect(tree).toMatchSnapshot();
  });

  it('Should display a subtitle', () => {
    // Given
    page.initialize({ subtitle, btnLabel });

    // When
    const { subtitleText } = page;

    // Then
    expect(subtitleText).toBeInTheDocument();
  });

  it('Should display an add button', () => {
    // Given
    page.initialize({ subtitle, btnLabel });

    // When
    const { addBtn } = page;

    // Then
    expect(addBtn).toBeInTheDocument();
  });

  describe('User interactions', () => {
    it('Should display an add button', async () => {
      // Given
      page.initialize({ subtitle, btnLabel });

      // When
      await page.onAddClickBtn();

      // And
      const { titleText } = page;

      // Then
      expect(titleText).toBeInTheDocument();
    });
  });
});
