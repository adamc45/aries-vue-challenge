import { calculateBreakevenPoints } from '../utilities';

describe('calculateBreakevenPoints', () => {

  test('accounts for null', () => {
    const value = calculateBreakevenPoints(null);
    const expectation = Array.isArray(value) && value.length === 0;
    expect(expectation).toEqual(true);
  })

  test('accounts for undefined', () => {
    const value = calculateBreakevenPoints(undefined);
    const expectation = Array.isArray(value) && value.length === 0;
    expect(expectation).toEqual(true);
  })

  test('filters out all data elements', () => {
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
    const value = calculateBreakevenPoints(data);
    const expectation = value.length === 0;
    expect(expectation).toEqual(true);
  })

  test('returns 1 element', () => {
    const data = [
      {
        xAxis: 50,
        yAxis: 0
      },
      {
        xAxis: 100,
        yAxis: 100
      }
    ];
    const value = calculateBreakevenPoints(data);
    const expectation = value.length === 1;
    expect(expectation).toEqual(true);
  })

})
