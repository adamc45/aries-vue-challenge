export function calculateGraphData(lookup) {
  const isValid = lookup instanceof Map;
  if (!isValid) {
    return [];
  }
  return Array.from(lookup.keys()).map((key) => {
    // key => number, value => number[]
    const gains = lookup.get(key).reduce((reducer, value) => {
      if (typeof value !== 'number') {
        return reducer;
      }
      // can't graph Infinity's so skip them
      if (!isFinite(value)) {
        return reducer;
      }
      return reducer + value;
    }, 0);
    return {
      xAxis: key,
      yAxis: gains
    };
  });
}
