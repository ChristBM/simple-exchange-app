import transformRatesData from '@exCalcUtils/functions/transformRatesData';
import HomePageLayout from '@exCalcViews/HomePageLayout';
import { DataFromAPI } from '@exCalcViews/HomePageLayout/Interfaces';

const baseURL = process.env.BASE_URL;
const apiKey = process.env.API_KEY;
// use your own key, you can obtain one from this link:
// https://exchangeratesapi.io/

async function getData() {
  const res = await fetch(
    `${baseURL}latest?access_key=${apiKey}`,
    { next: { revalidate: 600 } }, // cache-revalidation every 10 minutes
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data: DataFromAPI = await getData();
  const calculatorCurrencies = transformRatesData(data.rates);

  return (
    <HomePageLayout calculatorCurrencies={calculatorCurrencies} />
  );
}
