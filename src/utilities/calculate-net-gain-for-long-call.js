import { isNullOrUndefined } from './is-null-or-undefined';

export function calculateNetGainForLongCall(input, endingPrice) {
  if (isNullOrUndefined(input)) {
    return 0;
  }
  if (endingPrice < input.strike_price) {
    return -input.ask;
  }
  return endingPrice - input.strike_price - input.ask;
}
