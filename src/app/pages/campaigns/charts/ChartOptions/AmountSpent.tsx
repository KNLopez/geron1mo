import {getCSSVariableValue} from '../../../../../_metronic/assets/ts/_utils'

const labelColor = getCSSVariableValue('--bs-gray-500')
const borderColor = getCSSVariableValue('--bs-gray-200')
const baseColor = getCSSVariableValue('--bs-info')
const lightColor = getCSSVariableValue('--bs-light-info')

const AMOUNT_SPENT_OPTIONS = {
  series: [
    {
      name: 'Amount Spent',
      data: [5000, 4500, 5000, 2000, 4000, 7000, 7000],
    },
  ],
  chart: {
    fontFamily: 'inherit',
    type: 'area',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {},
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: 'solid',
    opacity: 1,
  },
  stroke: {
    curve: 'smooth',
    show: true,
    width: 3,
    colors: [baseColor],
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: labelColor,
        fontSize: '12px',
      },
    },
    crosshairs: {
      position: 'front',
      stroke: {
        color: baseColor,
        width: 1,
        dashArray: 3,
      },
    },
    tooltip: {
      enabled: true,
      formatter: undefined,
      offsetY: 0,
      style: {
        fontSize: '12px',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: labelColor,
        fontSize: '12px',
      },
    },
  },
  states: {
    normal: {
      filter: {
        type: 'none',
        value: 0,
      },
    },
    hover: {
      filter: {
        type: 'none',
        value: 0,
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: 'none',
        value: 0,
      },
    },
  },
  tooltip: {
    style: {
      fontSize: '12px',
    },
    y: {
      formatter: function (val: any) {
        return '$' + val
      },
    },
  },
  colors: [lightColor],
  grid: {
    borderColor: borderColor,
    strokeDashArray: 4,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  markers: {
    strokeColors: baseColor,
    strokeWidth: 3,
  },
}

export default AMOUNT_SPENT_OPTIONS
