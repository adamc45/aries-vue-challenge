export function calculateMaxLoss(graphData) {
  if (!Array.isArray(graphData)) {
    return 0;
  }
  const calculations = graphData.map((data) => data.yAxis);
  return Math.min(...calculations);
}
