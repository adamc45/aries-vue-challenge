import { calculateMaxProfit } from '../utilities';

describe('calculateMaxProfit', () => {

  test('accounts for null', () => {
    const value = calculateMaxProfit(null);
    const expectation = value === 0;
    expect(expectation).toEqual(true);
  })

  test('accounts for undefined', () => {
    const value = calculateMaxProfit(undefined);
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
    const value = calculateMaxProfit(data);
    const expectation = value === 100;
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
    const value = calculateMaxProfit(data);
    const expectation = value === 0;
    expect(expectation).toEqual(true);
  })

})
