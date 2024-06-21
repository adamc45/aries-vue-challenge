import Chart from 'chart.js/auto';

// This is the only function that has no tests around it since mocking document in tests sounds like a not so easy thing to do.
export function drawGraph(graphData, domNode) {
  if (!Array.isArray(graphData)) {
    return;
  }
  const isValid = domNode instanceof HTMLCanvasElement;
  if (!isValid) {
    return;
  }
  const ctx = domNode.getContext('2d');
  // labels, types, etc could come from another argument to drawGraph to make it more versatile for other use cases
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: graphData.map(data => data.xAxis.toString()),
      datasets: [{
        label: 'Profit/Loss',
        data: graphData.map(data => data.yAxis),
        borderColor: 'blue',
        borderWidth: 1,
        fill: false
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}
