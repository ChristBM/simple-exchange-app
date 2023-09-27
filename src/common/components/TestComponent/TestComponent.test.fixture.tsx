// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { TestComponentProps } from './Interfaces';

const fixture: TestComponentProps = {
  subtitle: faker.lorem.words(1),
  btnLabel: faker.lorem.words(1),
};

export default fixture;
