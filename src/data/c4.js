const chartoptions4 = {
  series: [
    {
      name: "Author",
      data: [15, 25, 25, 25, 30, 35, 40]
    },
    {
      name: "Customer",
      data: [45, 55, 70, 70, 55, 60, 70]
    }
  ],
  options: {
    colors: ["#5D79FF", "#eee"],
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        endingShape: "rounded"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: [
        "1 Aug",
        "2 Aug",
        "3 Aug",
        "4 Aug",
        "5 Aug",
        "6 Aug",
        "7 Aug"
      ]
    },
    grid: {
      row: {
        colors: undefined,
        opacity: 0.2
      },
      column: {
        colors: undefined,
        opacity: 0.2
      }
    },
    yaxis: {
      // title: {
      //   text: "$ (thousands)"
      // }
      tickAmount: 10
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      itemMargin: {
        horizontal: 5,
        vertical: 25
      },
      markers: {
        width: 25,
        height: 8,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 8,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        }
      }
    }
  }
};
export default chartoptions4;
