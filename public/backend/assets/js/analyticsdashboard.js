var options = {
    series: [{
        name: 'series1',
        data: [12, 40, 35, 51, 48, 62, 99]
      },{
        name: 'series2',
        data: [20, 72, 59, 65, 57, 79, 110]
      }],
    chart: {
        height: 150,
        type: 'line',
        toolbar: {
            show: false
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            left: 3,
            blur: 3,
            color: '#000',
            opacity: 0.05
        },
      },
    dataLabels: {
        enabled: false
    },
    grid: {
        show: false,
        borderColor: 'transparent',
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        dashArray: [0, 6],
    },
    colors: ["rgba(255,255,255,0.8)", "rgba(255,255,255,0.3)"],
    // fill: {
    // 	colors: [myVarVal],
    // },
    legend: {
        show: false
    },
    xaxis: {
        type: 'week',
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
      enabled: false,
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var chart = new ApexCharts(document.querySelector("#activeusers"), options);
chart.render();

/* Bounce rate Chart */
var total = {
    series: [{
        data: [98, 110, 90, 145, 105, 112, 87, 148, 102]
    }],
    chart: {
        height: 50,
        type: 'area',
        fontFamily: 'Poppins, sans-serif',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    tooltip: {
        enabled: true,
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: undefined,
    },
    grid: {
        borderColor: 'transparent',
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },
    colors: ["rgb(1, 98, 232)"],
    stroke: {
        width: [1.5],
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
            colorStops: [
              [
                {
                  offset: 0,
                  color: 'rgba(1, 98, 232,0.2)',
                  opacity: 1
                },
                {
                  offset: 60,
                  color: 'rgba(1, 98, 232,0.2)',
                  opacity: 0.1
                }
              ],
            ]
        },
    },
};
var chart7 = new ApexCharts(document.querySelector("#analytics-bouncerate"), total);
chart7.render();

function analyticsbouncerate() {
    chart7.updateOptions({
        colors: ["rgba(" + myVarVal + ")"],
    })
}
/* Bounce rate Chart */

/* sessions Chart */
var total = {
    series: [{
        data: [98, 110, 90, 145, 105, 112, 87, 148, 102]
    }],
    chart: {
        height: 50,
        type: 'area',
        fontFamily: 'Poppins, sans-serif',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    tooltip: {
        enabled: true,
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: undefined,
    },
    grid: {
        borderColor: 'transparent',
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },
    colors: ["rgba(238 ,51 ,94)"],
    stroke: {
        width: [1.5],
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
            colorStops: [
              [
                {
                  offset: 0,
                  color: 'rgba(238 ,51 ,94,0.2)',
                  opacity: 1
                },
                {
                  offset: 60,
                  color: 'rgba(238 ,51 ,94,0.2)',
                  opacity: 0.1
                }
              ],
            ]
        },
    },
};
var total = new ApexCharts(document.querySelector("#analytics-sessions"), total);
total.render();
function bounceRate() {
    total.updateOptions({
        colors: ["rgba(" + myVarVal + ")"],
    })
}
/* sessions Chart */

/* visitors Chart */
var total = {
    series: [{
        data: [98, 110, 90, 145, 105, 112, 87, 148, 102]
    }],
    chart: {
        height: 50,
        type: 'area',
        fontFamily: 'Poppins, sans-serif',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    tooltip: {
        enabled: true,
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: undefined,
    },
    grid: {
        borderColor: 'transparent',
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },
    colors: ["rgba(34, 192 ,60)"],
    stroke: {
        width: [1.5],
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
            colorStops: [
              [
                {
                  offset: 0,
                  color: 'rgba(34, 192 ,60,0.2)',
                  opacity: 1
                },
                {
                  offset: 60,
                  color: 'rgba(34, 192 ,60,0.2)',
                  opacity: 0.1
                }
              ],
            ]
        },
    },
};
var total = new ApexCharts(document.querySelector("#analytics-visitors"), total);
total.render();
function bounceRate() {
    total.updateOptions({
        colors: ["rgba(" + myVarVal + ")"],
    })
}
/* visitors Chart */

/* pageviews Chart */
var total = {
    series: [{
        data: [98, 110, 90, 145, 105, 112, 87, 148, 102]
    }],
    chart: {
        height: 50,
        type: 'area',
        fontFamily: 'Poppins, sans-serif',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    tooltip: {
        enabled: true,
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: undefined,
    },
    grid: {
        borderColor: 'transparent',
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },
    colors: ["rgba(251, 188 ,11)"],
    stroke: {
        width: [1.5],
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
            colorStops: [
              [
                {
                  offset: 0,
                  color: 'rgba(251, 188 ,11,0.2)',
                  opacity: 1
                },
                {
                  offset: 60,
                  color: 'rgba(251, 188 ,11,0.2)',
                  opacity: 0.1
                }
              ],
            ]
        },
    },
};
var total = new ApexCharts(document.querySelector("#analytics-views"), total);
total.render();
function bounceRate() {
    total.updateOptions({
        colors: ["rgba(" + myVarVal + ")"],
    })
}

/* pageviews Chart */

//overalsession//
var options1 = {
    series: [
      {
        name: "Views",
        data: [144, 155, 141, 142, 122, 143, 121, 135, 156, 127, 143, 127],
      },
      {
        name: "Followers",
        data: [133, 21, 32, 37, 123, 32, 47, 131, 54, 132, 20, 138],
      },
      {
        name: "Sessions",
        data: [30, 125, 36, 30, 45, 135, 64, 51, 59, 136, 39, 51],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      fontFamily: "'Roboto', sans-serif",
      fontWeight:'600',
      height: 370,  
      stacked: true,
    },
    colors: ['rgb(1, 98, 232)', 'rgb(238, 51 ,94)','rgb(247, 165, 86)'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",
        borderRadius: "4"
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "top",
      offsetX: 0,
      offsetY: 8,
      fontSize:'14px',
      markers: {
        width: 9,
        height: 9,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      categories: [
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
  
    },
    yaxis: {
      tickAmount: 4,
    },
  };

  var chart2 = new ApexCharts(document.querySelector("#sessionoverview"), options1);
chart2.render();

function sessionoverview() {
    chart2.updateOptions({
        colors: ["rgb(" + myVarVal + ")", 'rgb(238, 51 ,94)','rgb(247, 165, 86)'],
    })
}
//overalsession//

/* Leads By Source Chart */
var options = {
    series: [31, 21, 15, 53],
    chart: {
      width: 220,
      type: 'pie',
          sparkline: {
              enabled: true
          }
    },
    legend: {
      show: false,
    },
    stroke: {
        width: 0
    },
    colors: ['#f93a5a','rgb( 34 ,192, 60)','rgb(0 ,185, 255)','#0162e8','rgb(251, 188 ,11)'],
    labels: ["Desktop", "Laptop", "Tablet", "Mobile"],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          enabled: true,
          position: 'bottom',
        }
      }
    }]
  };
  var chart4 = new ApexCharts(document.querySelector("#sourcechart"), options);
chart4.render();

function sourcechart() {
    chart4.updateOptions({
        colors: ['#f93a5a','rgb( 34 ,192, 60)','rgb(0 ,185, 255)',"rgb(" + myVarVal + ")",'rgb(251, 188 ,11)'],
    })
}
/* Leads By Source Chart */

/* Impressions Chart */
var options = {
    chart: {
        height: 130,
        width: 130,
        type: "radialBar",
    },

    series: [48],
    colors: ["rgb(1, 98, 232)"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "50%",
                background: "#fff"
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#23b7e5",
                    fontSize: "10px",
                    show: false
                },
                value: {
                    offsetY: 5,
                    color: "#23b7e5",
                    fontSize: "12px",
                    show: true,
                    fontWeight: 800
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Followers"]
};
var chart5 = new ApexCharts(document.querySelector("#impressions"), options);
chart5.render();

function impressions() {
    chart5.updateOptions({
        colors: ["rgb(" + myVarVal + ")"],
    })
}
/* Impressions Chart */

/* total users Chart */
var options = {
    chart: {
        height: 130,
        width: 130,
        type: "radialBar",
    },

    series: [48],
    colors: ["rgb(238, 51 ,94)"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "50%",
                background: "#fff"
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#23b7e5",
                    fontSize: "10px",
                    show: false
                },
                value: {
                    offsetY: 5,
                    color: "#23b7e5",
                    fontSize: "12px",
                    show: true,
                    fontWeight: 800
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Followers"]
};
document.querySelector("#totalusers").innerHTML = ""
var chart6 = new ApexCharts(document.querySelector("#totalusers"), options);
chart6.render();
/* total users Chart */