import { isNullOrUndefined } from './is-null-or-undefined';
import { LONG, PUT_CALL } from '../constants';

export function isLongPut(input) {
  if (isNullOrUndefined(input)) {
    return false;
  }
  return input.long_short === LONG && input.type === PUT_CALL;
}
