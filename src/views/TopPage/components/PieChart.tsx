import React, { useEffect, useRef } from 'react'
import * as am5 from '@amcharts/amcharts5'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import * as am5percent from '@amcharts/amcharts5/percent'
import { progressData } from '../samples'

type Props = {}

function PieChart(props: Props) {
  useEffect(() => {
    let root = am5.Root.new('pie')

    root.setThemes([am5themes_Animated.new(root)])

    root._logo?.dispose()

    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      })
    )

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        radius: am5.percent(95),
        innerRadius: am5.percent(91),
        valueField: 'amount',
        categoryField: 'name',
        alignLabels: false,
      })
    )

    series.slices.template.setAll({
      templateField: 'settings',
      shadowColor: am5.color('#FC7400'),
      shadowBlur: 6,
    })

    series.get('colors')?.set('colors', [am5.color('#ffffff')])

    series.labels.template.set('forceHidden', true)
    series.ticks.template.setAll({
      forceHidden: true,
    })

    series.data.setAll(progressData)

    let label = series.children.push(
      am5.Label.new(root, {
        fill: am5.color('#ffffff'),
        fontSize: 40,
        centerX: am5.percent(50),
        centerY: am5.percent(50),
        populateText: true,
      })
    )
    series.events.once('datavalidated', function () {
      let workingData = series.dataItems.find(
        (d) => (d.dataContext as { [key: string]: any }).name === 'Working'
      )

      let percent = workingData?._settings?.valuePercentTotal
      let value = workingData?._settings?.value
      let valueSum = series.getPrivate('valueSum')

      if (value && valueSum && percent) {
        let shadowStyle = 'text-shadow: 0px 0px 6px #FC7400;'
        let divStyle = `font-family:'Inter',sans-serif;font-weight:400;color:#ffffff;`
        let remainStyle = `font-size: 18px;margin-right: 5px;`
        let percentStyle = `font-size: 30px;`

        let remainHtml = `<span style="${remainStyle}">${
          valueSum - value
        } / ${valueSum}</span>`
        let percentHtml = `<span style="${percentStyle}">${percent}%</span>`

        label.set(
          'html',
          `<div style="${divStyle}${shadowStyle}">${remainHtml}${percentHtml}</div>`
        )
      }
    })

    return () => {
      root.dispose()
    }
  }, [])

  return <div id='pie' style={{ height: 280, width: '100%' }} />
}

export default PieChart
