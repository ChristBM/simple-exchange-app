/* eslint-disable no-undef */
import fixture, { conversionRes, exRateRes } from './HomePageLayout.test.fixture';
import HomePageLayoutPO from './HomePageLayout.test.po';

describe('<HomePageLayout />', () => {
  let page: HomePageLayoutPO;
  const { title } = fixture;

  beforeEach(() => {
    page = new HomePageLayoutPO();
  });

  it('Should display a title by default', () => {
    // Given
    page.initialize({});

    // When
    const { defaultTitle } = page;

    // Then
    expect(defaultTitle).toBeInTheDocument();
  });

  it('Should display a title', () => {
    // Given
    page.initialize({ title });

    // When
    const { calculatorTitle } = page;

    // Then
    expect(calculatorTitle).toBeInTheDocument();
  });

  describe('User interactions', () => {
    it('Should display an error message when a currency is not selected and the convert button is clicked', async () => {
      // Given
      page.initialize({ title });

      // When
      await page.clickOnConvertBtn();
      const { allSelectErrorMessages } = page;

      // Then
      expect(allSelectErrorMessages).toHaveLength(2);
    });

    it('should remove error messages when the user selects a currency', async () => {
      // Given
      page.initialize({ title });

      // When
      await page.clickOnConvertBtn();
      // And
      await page.selectFromCurrency();
      // And
      await page.selectToCurrency();
      const { allSelectErrorMessages } = page;

      // Then
      expect(allSelectErrorMessages).toHaveLength(0);
    });

    it('Should show the result of the conversion and the exchange rate', async () => {
      // Given
      page.initialize({ title });

      // When
      await page.typeAmount();
      // And
      await page.selectFromCurrency();
      // And
      await page.selectToCurrency();
      // And
      await page.clickOnConvertBtn();
      const { conversionResult, exchangeRateResult } = page;

      // Then
      expect(conversionResult).toHaveValue(conversionRes.toString());
      // And
      expect(exchangeRateResult).toHaveValue(exRateRes.toString());
    });
  });
});
