import React, { useEffect, useState } from 'react';
import { createChart } from 'lightweight-charts';
import axios from 'axios';
import {useParams} from 'react-router-dom'

function Chart() {
  const ref = React.useRef();
  const params = useParams()

 
  const getData = async () => {
    const resp = await fetch(`https://busy-tan-pike-slip.cyclic.app/${params.coinId}/max`);
    const data = await resp.json();
    return data;
  }

  useEffect(() => {
    const renderChart = async () =>{

        var chart = createChart(ref.current, {width: 710,
          height: 400,
          layout: {
            backgroundColor: '#141823',
            textColor: 'rgba(255, 255, 255, 0.9)',},  
            timeScale: {
              timeVisible: true,
              secondsVisible: true,
           }, grid: {
            vertLines: {
              color: 'rgba(188, 188, 188, 0.06)',
            },
            horzLines: {
              color: ' rgba(188, 188, 188, 0.06)',
            },
          }, 
          
          pane: 0,
        });
      
        const klinedata = await getData();
        let filternumbers = klinedata.filter((d) => d.time).map((d) => ({value: d.value}));
        let arrays =  filternumbers.slice(filternumbers.length - 100, filternumbers.length);
        var results = arrays.map(obj => parseFloat(obj.value));
        const average = results.reduce((a, b) => a + b) / results.length;
        var nine = -Math.floor( Math.log10(average) + 1)
        let precision_number = nine + 4;
        let decimalarr = [0,'.'];
        for(let i = 0; i < precision_number - 1; i++){
          decimalarr.push(0);
        }   
        decimalarr.push(1);
        let minMove_number = parseFloat(decimalarr.join(''));
        console.log(precision_number);

        if (precision_number <= 0){
            precision_number = 2;
            minMove_number = 0.01;
        }

        
        const areaSeries = chart.addAreaSeries({
          priceFormat: {
            type: 'price',
            precision: `${precision_number}`,
            minMove: `${minMove_number}`,
        },
        topColor: 'rgba(37, 55, 237, 0.8)',
        bottomColor: 'rgba(76, 175, 80, 0.04)',
        lineColor: 'rgba(76, 175, 80, 1)',
        lineWidth: 2,
        title: `${params.coinId}`,
        });
        
        areaSeries.setData(klinedata);
        console.log(klinedata);

        const chartContainer = document.getElementById('charts');
        
        new ResizeObserver(entries => {
        if (entries.length === 0 || entries[0].target !== chartContainer) { return; }
        const newRect = entries[0].contentRect;
        chart.applyOptions({ height: newRect.height, width: newRect.width });
      }).observe(chartContainer);
        return () => {
            chart.remove()
          }


    }

    

    const result = renderChart()
    .catch(console.error);

    

   

  }, []);

  return (
    <>
      <div className="charts"ref={ref} />
    </>
  );
}

export default Chart;