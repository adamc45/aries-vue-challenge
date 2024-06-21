import { isNullOrUndefined } from './is-null-or-undefined';
import { PUT_CALL, SHORT } from '../constants';

export function isShortPut(input) {
  if (isNullOrUndefined(input)) {
    return false;
  }
  return input.long_short === SHORT && input.type === PUT_CALL;
}
