/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from 'react-test-renderer';
import Result from '.';

describe('<Result/> snapshot', () => {
  it('Renders correctly', () => {
    // Given + When
    const tree = create(<Result />).toJSON();

    // Then
    expect(tree).toMatchSnapshot();
  });
});
