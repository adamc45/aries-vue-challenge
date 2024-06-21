<template>
  <div width="400" height="400">
    <h1>Options Profit Calculator</h1>
    <div>
      <p>Max Profit: {{ maxProfit }}</p>
      <p>Max Loss: {{ maxLoss }}</p>
      <p>Break-even Points: {{ breakeven }}</p>
    </div>
    <canvas id="optionsGraph"></canvas>
  </div>
</template>

<script>
  import { calculateBreakevenPoints, calculateGainsForEachOption, calculateGraphData, calculateMaxLoss, calculateMaxProfit, drawGraph, isNullOrUndefined } from '../utilities';
  export default {
    name: 'CodingChallenge',
    computed: {
      breakeven() {
        const breakeven = this.breakEvenPoints
          .filter((data) => !isNullOrUndefined(data) && typeof data === 'number')
          .map((data) => data.toFixed(2))
          .join(', ')
        if (breakeven === '') {
          return 'There are none';
        }
        return breakeven;
      }
    },
    data() {
      return {
        breakEvenPoints: [],
        graphData: [],
        maxLoss: 0,
        maxProfit: 0
      };
    },
    methods: {
      calculateBreakevenPoints() {
        return calculateBreakevenPoints(this.graphData);
      },
      calculateGraphData() {
        const lookup = calculateGainsForEachOption(this.optionsData);
        return calculateGraphData(lookup);
      },
      calculateMaxLoss() {
        return calculateMaxLoss(this.graphData);
      },
      calculateMaxProfit() {
        return calculateMaxProfit(this.graphData);
      },
      drawGraph() {
        drawGraph(this.graphData, document.getElementById('optionsGraph'));
      }
    },
    mounted() {
      this.graphData = this.calculateGraphData();
      this.maxProfit = this.calculateMaxProfit();
      this.maxLoss = this.calculateMaxLoss();
      this.breakEvenPoints = this.calculateBreakevenPoints()
      this.drawGraph();
    },
    props: {
      optionsData: Array
    }
  }
</script>

<style scoped>
</style>
