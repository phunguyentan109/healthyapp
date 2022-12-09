import { useEffect, useRef } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { dataOne, dataSecond } from './sample'
import './_style.scss'

type Props = {
  height: number
  bg: string
}

function LineChart(props: Props) {
  const chartRef = useRef<any>()

  const createSeries = (
    seriesData: { date: number; value: number }[],
    color: string
  ): any => {
    const { chart, root, xAxis, yAxis } = chartRef.current

    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: 'Series',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        valueXField: 'date',
        tooltip: am5.Tooltip.new(root, {
          labelText: '{valueY}',
        }),
        stroke: am5.color(color),
      })
    )

    series.strokes.template.setAll({
      strokeWidth: 3,
    })

    series.data.setAll(seriesData)

    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: series.get('stroke'),
        }),
      })
    })

    return series
  }

  useEffect(() => {
    let root = am5.Root.new('line')

    const theme = am5themes_Animated.new(root)
    theme.rule('Grid').setAll({
      stroke: am5.color('#777777'),
    })
    theme.rule('AxisLabel').setAll({
      fill: am5.color('#ffffff'),
      fontSize: 12,
    })
    root.setThemes([theme])

    root._logo?.dispose()

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        panX: false,
        layout: root.verticalLayout,
      })
    )
    chart.leftAxesContainer.set('forceHidden', true)
    chart.bottomAxesContainer.set('paddingBottom', 0)

    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: {
          timeUnit: 'month',
          count: 1,
        },
        markUnitChange: false,
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 10,
        }),
      })
    )
    let xRenderer = xAxis.get('renderer')
    xRenderer.grid.template.setAll({
      strokeWidth: 2,
      location: 0.5,
    })

    const monthStyle = "font-family: 'Inter',sans-serif;font-weight: 400;font-size:12px;"
    const unitStyle =
      "font-family: 'Noto Light',sans-serif;font-weight: 300;font-size:8px;"

    xRenderer.labels.template.adapters.add('html', function () {
      let month = `<span style="${monthStyle}">{value.formatDate('M')}</span>`
      let unit = `<span style="${unitStyle}">月</span>`
      return `<div style="color: white;">${month}${unit}</div>`
    })

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    )
    let yRenderer = yAxis.get('renderer')
    yRenderer.grid.template.setAll({
      strokeOpacity: 0,
    })

    chartRef.current = { chart, root, xAxis, yAxis }

    let seriesOne = createSeries(dataOne, '#8FE9D0')
    seriesOne.appear()

    let seriesSecond = createSeries(dataSecond, '#FFCC21')
    seriesSecond.appear()

    return () => {
      root.dispose()
    }
  }, [])

  return <div id='line' className='chartWrapper' style={{ height: props.height }} />
}

export default LineChart
