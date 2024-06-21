import { isLongCall } from '../utilities';

describe('isLongCall', () => {

  test('accounts for null', () => {
    const value = isLongCall(null);
    const expectation = value === false;
    expect(expectation).toEqual(true);
  })

  test('accounts for undefined', () => {
    const value = isLongCall(undefined);
    const expectation = value === false;
    expect(expectation).toEqual(true);
  })

  test('calculates the correct value presented with a long call option', () => {
    const data = {
      "strike_price": 100, 
      "type": "Call", 
      "bid": 10.05, 
      "ask": 12.04, 
      "long_short": "long", 
      "expiration_date": "2025-12-17T00:00:00Z"
    };
    const value = isLongCall(data);
    const expectation = value === true;
    expect(expectation).toEqual(true);
  })

  test('calculates the correct value when not presented with a long call option', () => {
    const data = {
      "strike_price": 100, 
      "type": "Call", 
      "bid": 10.05, 
      "ask": 12.04, 
      "long_short": "short", 
      "expiration_date": "2025-12-17T00:00:00Z"
    };
    const value = isLongCall(data);
    const expectation = value === false;
    expect(expectation).toEqual(true);
  })

})
