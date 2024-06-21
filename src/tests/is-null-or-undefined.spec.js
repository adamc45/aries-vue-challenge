import { isNullOrUndefined } from '../utilities';

describe('isNullOrUndefined', () => {

  test('is correct for null', () => {
    const value = isNullOrUndefined(null);
    const expectation = value === true;
    expect(expectation).toEqual(true);
  })

  test('is correct for undefined', () => {
    const value = isNullOrUndefined(undefined);
    const expectation = value === true;
    expect(expectation).toEqual(true);
  })

})
