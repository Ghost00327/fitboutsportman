<template>
  <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
  />
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { ref} from "vue";
import {COLORS} from "@/partials/utils.js"

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

interface Props {
  chartId?: string,
  datasetIdKey?: string,
  width?: number,
  height?: number,
  cssClasses?: string,
  styles?: any,
  plugins?: any,
  labels: string[],
  data: number[]
}

const props = withDefaults(defineProps<Props>(), {
  chartId: "bar-chart",
  datasetIdKey: "label",
  width: 1000,
  height: 500,
  cssClasses: '',
  styles: {},
  plugins: {},
})

const chartData = ref({
  labels: props.labels,
  datasets: [
    {
      data: props.data,
      backgroundColor: [COLORS.EMERALD],
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  }
})
</script>
