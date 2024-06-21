import { calculateNetGainForLongCall } from '../utilities';

describe('calculateNetGainForLongCall', () => {

  test('accounts for null', () => {
    const value = calculateNetGainForLongCall(null);
    const expectation = value === 0;
    expect(expectation).toEqual(true);
  })

  test('accounts for undefined', () => {
    const value = calculateNetGainForLongCall(undefined);
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
    const value = calculateNetGainForLongCall(data, 50);
    const expectation = value === -12.04;
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
    const value = calculateNetGainForLongCall(data, 200).toFixed(2);
    // 200 - strike_price - ask
    const expectation = value === (87.96).toFixed(2);
    expect(expectation).toEqual(true);
  })

})
