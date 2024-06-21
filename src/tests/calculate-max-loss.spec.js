import { calculateMaxLoss } from '../utilities';

describe('calculateMaxLoss', () => {

  test('accounts for null', () => {
    const value = calculateMaxLoss(null);
    const expectation = value === 0;
    expect(expectation).toEqual(true);
  })

  test('accounts for undefined', () => {
    const value = calculateMaxLoss(undefined);
    const expectation = value === 0;
    expect(expectation).toEqual(true);
  })

  test('calculates the correct value when all numbers are positive', () => {
    const data = [
      {
        xAxis: 50,
        yAxis: 50
      },
      {
        xAxis: 100,
        yAxis: 100
      }
    ];
    const value = calculateMaxLoss(data);
    const expectation = value === 50;
    expect(expectation).toEqual(true);
  })

  test('calculates the correct value when there are a mix of positive and negative numbers', () => {
    const data = [
      {
        xAxis: 50,
        yAxis: 0
      },
      {
        xAxis: 100,
        yAxis: -50
      }
    ];
    const value = calculateMaxLoss(data);
    const expectation = value === -50;
    expect(expectation).toEqual(true);
  })

})
