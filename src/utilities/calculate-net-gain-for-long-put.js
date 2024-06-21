import { isNullOrUndefined } from './is-null-or-undefined';

export function calculateNetGainForLongPut(input, endingPrice) {
  if (isNullOrUndefined(input)) {
    return 0;
  }
  if (endingPrice > input.strike_price) {
    return -input.ask;
  }
  return input.strike_price - endingPrice - input.ask;
}
