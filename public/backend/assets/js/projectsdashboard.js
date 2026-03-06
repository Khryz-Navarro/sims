var options2 = {
    series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 90,
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    curve: 'smooth',
    width: '2',
  },
  
  colors:['rgb(1, 98, 232)'],
  tooltip: {
    fixed: {
      enabled: false
    },
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
  }
  };
  var chart9 = new ApexCharts(document.querySelector("#compltedprojects"), options2);
chart9.render();

function compltedprojects() {
    chart9.updateOptions({
        colors: ["rgb(" + myVarVal + ")"],
    })
}

  var options2 = {
    series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 90,
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    curve: 'smooth',
    width: '2',
  },
  
  colors:['rgb(238, 51,94)'],
  tooltip: {
    fixed: {
      enabled: false
    },
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
  }
  };
  
  var chart2 = new ApexCharts(document.querySelector("#overdueprojects"), options2);
  chart2.render();

  var options2 = {
    series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 90,
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    curve: 'smooth',
    width: '2',
  },
  
  colors:['rgb(34 ,192, 60)'],
  tooltip: {
    fixed: {
      enabled: false
    },
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
  }
  };
  
  var chart2 = new ApexCharts(document.querySelector("#pendingprojects"), options2);
  chart2.render();

  //projects analysis//

  var options = {
    series: [{
      name: 'Sales',
      type: "column",
      data: [100, 210, 180, 324, 230, 320, 256, 430, 350, 350, 510, 610]
    }, {
      name: "Profit",
      type: "line",
      data: [200, 320, 370, 350, 540, 480, 500,580,600,680,720,810],
    }, {
      name: "Growth",
      type: "line",
      data: [300, 450, 470, 450, 640, 580, 600,680,700,880,820,910],
    }],
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 7,
        left: 0,
        blur: 1,
        color: ["transparent", "rgb(235, 173, 126)", 'rgb(151, 186, 125)'],
        opacity: 0.05,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        borderRadius: 2
      },
    },
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 3
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [0, 2, 2],
      curve: "smooth",
    },
    legend: {
      show: true,
      fontSize: "12px",
      position: 'bottom',
      horizontalAlign: 'center',
      fontWeight: 500,
      height: 40,
      offsetX: 0,
      offsetY: 10,
      labels: {
        colors: '#9ba5b7',
      },
      markers: {
        width: 10,
        height: 10,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        offsetX: 0,
        offsetY: 0
      },
    },
    colors: ["rgb(1, 98, 232)", "rgb(238 ,51 ,94)", 'rgb(34 ,192 ,60)'],
    yaxis: {
      title: {
        style: {
          color: '#adb5be',
          fontSize: '14px',
          fontFamily: 'poppins, sans-serif',
          fontWeight: 600,
          cssClass: 'apexcharts-yaxis-label',
        },
      },
      labels: {
        formatter: function (y) {
          return y.toFixed(0) + "";
        },
        show: true,
        style: {
          colors: "#8c9097",
          fontSize: '11px',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-label',
        },
      }
    },
    xaxis: {
      type: "month",
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
        show: true,
        color: 'rgba(119, 119, 142, 0.05)',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: 'rgba(119, 119, 142, 0.05)',
        width: 6,
        offsetX: 0,
        offsetY: 0
      },
      labels: {
        rotate: -90,
        style: {
          colors: "#8c9097",
          fontSize: '11px',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-label',
        },
      }
    },
    fill: {
      opacity: 1
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
  }

  var chart5 = new ApexCharts(document.querySelector("#projectsanalysis"), options);
  chart5.render();
  
  function projectsanalysis() {
      chart5.updateOptions({
          colors: ["rgb(" + myVarVal + ")","rgb(238 ,51 ,94)", 'rgb(34 ,192 ,60)'],
      })
  }

  //projects analysis//

  //total clients//
  var options = {
    series: [{
      name: 'Sales',
      type: "bar",
      data: [300, 410, 550, 424, 330, 320, 456, 530, 450, 350, 410, 510,420,330,300,420]
    }],
    chart: {
      redrawOnWindowResize: true,
      height: 215,
      type: 'bar',
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        borderRadius: 2
      },
    },
    grid: {
      show: false,
      borderColor: '#f1f1f1',
      strokeDashArray: 3
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false,
      fontSize: "12px",
      position: 'bottom',
      horizontalAlign: 'center',
      fontWeight: 500,
      height: 40,
      offsetX: 0,
      offsetY: 10,
      labels: {
        colors: '#9ba5b7',
      },
      markers: {
        width: 10,
        height: 10,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        offsetX: 0,
        offsetY: 0
      },
    },
    colors: ["rgba(255,255,255,0.9)"],
    yaxis: {
        show: false,
      title: {
        style: {
          color: '#adb5be',
          fontSize: '14px',
          fontFamily: 'poppins, sans-serif',
          fontWeight: 600,
          cssClass: 'apexcharts-yaxis-label',
        },
      },
      labels: {
        show: false,
        formatter: function (y) {
          return y.toFixed(0) + "";
        },
        style: {
          colors: "#8c9097",
          fontSize: '11px',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-label',
        },
      }
    },
    xaxis: {
      show: false,
      type: "month",
      axisBorder: {
        show: false,
        color: 'rgba(119, 119, 142, 0.05)',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: false,
        borderType: 'solid',
        color: 'rgba(119, 119, 142, 0.05)',
        width: 6,
        offsetX: 0,
        offsetY: 0
      },
      labels: {
        show: false,
        rotate: -90,
        style: {
          colors: "#8c9097",
          fontSize: '11px',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-label',
        },
      }
    },
    fill: {
      opacity: 1
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
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0,
            inverseColors: false,
            gradientToColors: ["rgba(255,255,255,0.8)"],
            opacityFrom: [0.6,0.8,1],
            opacityTo: [0.6, 1, 1],
            stops: [0, 90, 100]
        }
    },
  }

  document.querySelector("#totalclients").innerHTML = '';
  var chart = new ApexCharts(document.querySelector("#totalclients"), options);
  chart.render();
  //total clients


  //task overview//
  var options = {
    series: [
      {
        name: "Revenue",
        data: [55, 52, 55, 52, 55, 55, 58, 58, 53, 55, 54, 55, 53],
      },
    ],
    chart: {
      height: 150,
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1.4],
      show: true,
      curve: ["smooth"],
    },
    xaxis: {
      crosshairs: {
        show: false,
      },
    },
    legend: {
      show: false,
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
    colors: ["rgb(1, 98, 232)"],
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
                color: 'rgba(1, 98, 232,0.1)',
                opacity: 1
              },
              {
                offset: 100,
                color: 'rgba(1, 98, 232,0.1)',
                opacity: 0.8
              }
            ],
          ]
      },
  },
  };
  document.getElementById("totalRevenue").innerHTML = "";
  var charttotalRevenue = new ApexCharts(
    document.querySelector("#totalRevenue"),
    options
  );
  charttotalRevenue.render();
  
  function totalRevenue() {
    function rgbToHex(r, g, b) {
      return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
    }
    charttotalRevenue.updateOptions({
      colors: [
        rgbToHex(
          myVarVal.split(",")[0],
          myVarVal.split(",")[1],
          myVarVal.split(",")[2]
        ),
      ],
    });
  }
  //task overview//