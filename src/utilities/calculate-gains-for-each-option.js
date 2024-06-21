import { calculateNetGainForLongCall } from './calculate-net-gain-for-long-call';
import { calculateNetGainForLongPut } from './calculate-net-gain-for-long-put';
import { calculateNetGainForShortPut } from './calculate-net-gain-for-short-put';
import { isLongCall } from './is-long-call';
import { isLongPut } from './is-long-put';
import { isShortPut } from './is-short-put';

export function calculateGainsForEachOption(optionsData) {
  const lookup = new Map();
  if (!Array.isArray(optionsData)) {
    return lookup;
  }
  optionsData
    .map((data) => {
      lookup.set(data.strike_price, []);
      return data;
    })
    .map((data) => {
      const value = new Set();
      optionsData.map((innerData) => {
        if (data === innerData) {
          return;
        }
        value.add(innerData);
      });
      // we are considering the final price for each option as the strike_price for all the other options. We then group by the final price
      // to determine how all other options would fare if that was the final price.
      Array.from(value.keys()).map((innerData) => {
         // I didn't see any short calls in the provided data so haven't set anything up for that
        const key = lookup.get(innerData.strike_price);
        if (isLongCall(data)) {
          const gain = calculateNetGainForLongCall(data, innerData.strike_price);
          key.push(gain);
        }
        if (isLongPut(data)) {
          const gain = calculateNetGainForLongPut(data, innerData.strike_price);
          key.push(gain);
        }
        if (isShortPut(data)) {
          const gain = calculateNetGainForShortPut(data, innerData.strike_price);
          key.push(gain);
        }
      });
    });
  return lookup;
}
