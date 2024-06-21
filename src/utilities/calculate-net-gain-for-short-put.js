import { isNullOrUndefined } from './is-null-or-undefined';

export function calculateNetGainForShortPut(input, endingPrice) {
  if (isNullOrUndefined(input)) {
    return 0;
  }
  if (endingPrice > input.strike_price) {
    return -input.bid;
  }
  return input.bid - (input.strike_price - endingPrice);
}
