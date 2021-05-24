const chartoptions2 = {
  series: [
    {
      name: "PRODUCT A",
      data: [44, 55, 41, 6, 22, 43]
    },
    {
      name: "PRODUCT B",
      data: [13, 23, 20, 60, 13, 27]
    }
  ],
  colors: ["#5D79FF", "#656C9A"],
  options: {
    grid: { show: false },
    xaxis: {
      show: false,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      show: false
    },

    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      colors: ["#5D79FF", "#eee"],
      opacity: 1
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: false,
        columnWidth: 14
      }
    },
    legend: {
      show: false

      // position: "right",
      // offsetY: 40
    }
  }
};
export default chartoptions2;
