import { calculateNetGainForLongPut } from '../utilities';

describe('calculateNetGainForLongPut', () => {

  test('accounts for null', () => {
    const value = calculateNetGainForLongPut(null);
    const expectation = value === 0;
    expect(expectation).toEqual(true);
  })

  test('accounts for undefined', () => {
    const value = calculateNetGainForLongPut(undefined);
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
    // strike_price - 50 - input.ask
    const value = calculateNetGainForLongPut(data, 50).toFixed(2);
    const expectation = value === (37.96).toFixed(2);
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
    const value = calculateNetGainForLongPut(data, 200).toFixed(2);
    const expectation = value === (-12.04).toFixed(2);
    expect(expectation).toEqual(true);
  })

})
