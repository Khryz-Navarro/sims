//performance by category//
var options = {
    series: [
      {
        name: "Designing",
        type: "bar",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 40],
      },
      {
        name: "Development",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 44],
      },
      {
        name: "SEO",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 11],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      height: 290,
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 1, 1],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
      },
    },
    colors: [
      "rgba(1, 98, 232, 0.95)",
      "rgba(1, 98, 232, 0.05)",
      "rgb(238, 51, 94)",
    ],
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.65,
        opacityTo: 0.15,
        stops: [0, 100, 100, 100],
      },
    },
  
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "month",
    },
    yaxis: {
      title: {
        text: "Points",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
    legend: {
      show: false,
    },
  };
  
  var chart1 = new ApexCharts(document.querySelector("#performanceReport"), options);
  chart1.render();
  function performanceReport() {
    chart1.updateOptions({
      colors: [
        "rgba(" + myVarVal + ", 0.95)",
        "rgba(" + myVarVal + ", 0.05)",
        "rgb(238, 51, 94)",
      ],
    });
  
  }
var options = {
    series: [{
        name: 'Designing',
        type: 'column',
        data: [53, 37, 28, 47, 53, 22, 57, 41, 44, 22, 45, 55]
    }, {
        name: 'Development',
        type: 'column',
        data: [37, 22, 20, 33, 30, 17, 45, 28, 35, 18, 37, 48]
    }, {
        name: 'SEO',
        type: 'line',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
    },
    ],
    chart: {
        toolbar: {
            show: false
        },
        height: 300,
        type: 'line',
        stacked: false,
        fontFamily: 'Poppins, sans-serif',
    },
    grid: {
        borderColor: '#f5f4f4',
        strokeDashArray: 3
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: undefined,
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: [
        {
            show: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: false,
                color: '#4eb6d0'
            },
        }
    ],
    tooltip: {
        enabled: true,
    },
    legend: {
        show: true,
        position: "top",
        offsetX: 0,
        offsetY: 8,
        markers: {
            width: 10,
            height: 10,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 2,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
    },
    stroke: {
			show: true,
			width: [1, 1, 2],
            curve: 'smooth',
    },
    plotOptions: {
        bar: {
            columnWidth: "30%",
            borderRadius: 3
        }
    },
    colors: ["rgb(1, 98, 232)", "rgb(238, 51, 94)", "rgb(34 ,192 ,60)"]
};
// var chart1 = new ApexCharts(document.querySelector("#performanceReport"), options);
// chart1.render();
//performance by category//

//jobs summery//
var options = {
    series: [1754, 634, 878, 470],
    labels: ["Published", "Private", "Onhold", "Rejected"],
    chart: {
        height: 290,
        type: 'donut',
    },
    dataLabels: {
        enabled: false,
    },

    legend: {
        show: false,
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
    },
    plotOptions: {
        pie: {
            startAngle: -100,
            endAngle: 100,
            offsetY: 10,
            expandOnClick: false,
            donut: {
                size: '75%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        offsetY: -25
                    },
                    value: {
                        show: true,
                        fontSize: '15px',
                        color: undefined,
                        offsetY: -20,
                        formatter: function (val) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total',
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#495057',
                    }

                }
            }
        }
    },
    grid: {
      padding: {
        bottom: -100
      }
    },
    colors: ['#0162e8','#f93a5a','rgb( 34 ,192, 60)','rgb(0 ,185, 255)'],
};
var chart2 = new ApexCharts(document.querySelector("#jobsummery"), options);
chart2.render();

function jobsummery() {
    chart2.updateOptions({
        colors: ["rgb(" + myVarVal + ")", '#f93a5a','rgb( 34 ,192, 60)','rgb(0 ,185, 255)'],
    })
}
//jobs summery//

