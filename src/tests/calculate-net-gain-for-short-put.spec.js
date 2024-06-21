import { calculateNetGainForShortPut } from '../utilities';

describe('calculateNetGainForShortPut', () => {

  test('accounts for null', () => {
    const value = calculateNetGainForShortPut(null);
    const expectation = value === 0;
    expect(expectation).toEqual(true);
  })

  test('accounts for undefined', () => {
    const value = calculateNetGainForShortPut(undefined);
    const expectation = value === 0;
    expect(expectation).toEqual(true);
  })

  test('calculates the right price when the ending price is less than the strike price', () => {
    const data = {
      "strike_price": 100, 
      "type": "Call", 
      "bid": 10.05, 
      "ask": 12.04, 
      "long_short": "long", 
      "expiration_date": "2025-12-17T00:00:00Z"
    }
    // bid - (strike_price - 50);
    const value = calculateNetGainForShortPut(data, 50).toFixed(2);
    const expectation = value === (-39.95).toFixed(2);
    expect(expectation).toEqual(true);
  })

  test('calculates the right price when the ending price is greater than the strike price', () => {
    const data = {
      "strike_price": 100, 
      "type": "Call", 
      "bid": 10.05, 
      "ask": 12.04, 
      "long_short": "long", 
      "expiration_date": "2025-12-17T00:00:00Z"
    };
    const value = calculateNetGainForShortPut(data, 200).toFixed(2);
    const expectation = value === (-10.05).toFixed(2);
    expect(expectation).toEqual(true);
  })

})
