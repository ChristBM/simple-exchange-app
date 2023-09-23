/* eslint-disable no-undef */
import fixture from './HomePageLayout.test.fixture';
import HomePageLayoutPO from './HomePageLayout.test.po';

describe('<HomePageLayout />', () => {
  let page: HomePageLayoutPO;
  const { title } = fixture;

  beforeEach(() => {
    page = new HomePageLayoutPO();
  });

  it('Should display a title', () => {
    // Given
    page.initialize({ title });

    // When
    const { calculatorTitle } = page;

    // Then
    expect(calculatorTitle).toBeInTheDocument();
  });
});
