const chartoptions = {
  series: [44, 55, 41],
  options: {
    chart: {
      type: "donut"
    },
    labels: ["HTML", "CSS", "Angular"],
    dataLabels: {
      enabled: false
    },

    colors: ["#5D79FF", "#656C9A", "#AFB4D4"],
    fill: {
      colors: ["#5D79FF", "#656C9A", "#AFB4D4"]
    },
    tooltip: {
      custom: function (val) {
        // console.log(val);
        return (
          '<div class="arrow_box">' +
          "<span>" +
          +val.series[val.seriesIndex] +
          "</span>" +
          "</div>"
        );
      }
    },
    legend: { position: "left" },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            // name: {
            //   show: true
            // },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return val;
              }
            }
            // total: {
            //   show: true,
            //   formatter: function (w) {
            //     return "ok";
            //   }
            // }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250
          }
        }
      }
    ]
  }
};
export default chartoptions;
