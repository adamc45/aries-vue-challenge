import { calculateGraphData } from '../utilities';

function specificExampleIsValid(data) {
  return (
    data[0].yAxis === 15 &&
    data[0].xAxis === 12345 &&
    data[1].yAxis === 24 &&
    data[1].xAxis === 789
  )
}

describe('calculateGraphData', () => {

  test('accounts for null', () => {
    const value = calculateGraphData(null);
    const expectation = Array.isArray(value) && value.length === 0;
    expect(expectation).toEqual(true);
  })

  test('accounts for undefined', () => {
    const value = calculateGraphData(undefined);
    const expectation = Array.isArray(value) && value.length === 0;
    expect(expectation).toEqual(true);
  })

  test('specific example of calculated values', () => {
    const data = new Map([
      [12345, [1, 2, 3, 4, 5]],
      [789, [7, 8, 9]]
    ])
    const value = calculateGraphData(data);
    const expectation = specificExampleIsValid(value) === true;
    expect(expectation).toEqual(true);
  })

})
