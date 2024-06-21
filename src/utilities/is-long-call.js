import { isNullOrUndefined } from './is-null-or-undefined';
import { LONG_CALL, LONG } from '../constants';

export function isLongCall(input) {
  if (isNullOrUndefined(input)) {
    return false;
  }
  return input.long_short === LONG && input.type === LONG_CALL;
}
