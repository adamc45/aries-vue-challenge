export function calculateBreakevenPoints (graphData) {
  if (!Array.isArray(graphData)) {
    return [];
  }
  return graphData.filter((data) => data.yAxis === 0);
}
