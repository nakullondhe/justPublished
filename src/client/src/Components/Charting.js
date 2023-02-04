import React from 'react'
import Chart from 'chart.js/auto';

const Charting = () => {
  const chartRef = React.useRef(null);
  React.useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
          },
        ],
      },
      options: {
        //Customize chart options
        maintainAspectRatio: false
      },
    });
  }, []);
  
  return ( 
    <div>
      <canvas id="myChart" ref={chartRef} height="300"/>
    </div>
   );
}
 
export default Charting;