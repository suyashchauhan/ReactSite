function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  // console.log(series);
  return series;
}
const chartoptions3 = {
  series: [
    {
      name: "South",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        10,
        {
          min: 15,
          max: 60
        }
      )
    }
  ],
  options: {
    chart: {
      type: "area",
      height: 100,
      stacked: true,
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        }
      },
      toolbar: {
        show: false
      }
    },
    colors: ["#5D79FF", "#656C9A", "#AFB4D4"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8
      }
    },
    toolbar: { show: false },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ],

    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left"
    },
    grid: { show: false },
    xaxis: {
      show: false,
      labels: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  }
};
export default chartoptions3;
