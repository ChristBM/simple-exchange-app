// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { HomePageLayoutProps } from './Interfaces';

const fixture: HomePageLayoutProps = {
  title: faker.lorem.words(1),
};

export default fixture;
