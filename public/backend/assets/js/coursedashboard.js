var options = {
	chart: {
		height: 290,
		type: "line",
		stacked: false,
        fontFamily: 'poppins, sans-serif',
	},
	dataLabels: {
		enabled: false
	},
	colors: ['rgb(1, 98, 232)','rgb(238, 51 ,94)', 'rgb(34, 192 ,60)'],
	series: [{
		name: 'Applications',
		type: 'column',
		data: [53, 61, 42, 57, 33, 42, 57, 31, 64, 72, 45, 35],
	}, {
		name: "Shortlisted",
		type: "column",
		data: [43, 51, 32, 47, 23, 32, 47, 21, 54, 62, 35, 25]
	}, {
		name: 'Hired',
		type: 'line',
		data: [24, 50, 31, 57, 32, 63, 31, 51, 26, 47, 23, 47],
	}],
  stroke: {
    width: [2, 2, 2],
    curve: 'smooth',
    endingShape: 'rounded',
  },
	plotOptions: {
		bar: {
			columnWidth: '45%',
		}
	},
	fill: {
		opacity: [1, 1, 1]
	},
	grid: {
		borderColor: '#f2f6f7',
	},
	legend: {
		show: false,
		position: 'top',
		fontWeight: 500,
		fontSize: 13,
		markers: {
			width: 10,
			height: 10,
			shape: 'square',
			radius: 5,
		}
	},
	yaxis: {
		min: 0,
		forceNiceScale: true,
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
			}
		}
	},
	toolbar:{
		show: false,
	},
	xaxis: {
		type: 'month',
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
			rotate: -90
		}
	},
	tooltip: {
		enabled: true,
		shared: false,
		intersect: true,
		x: {
			show: false
		}
	},
};
var chart9 = new ApexCharts(document.querySelector("#coursescompleted"), options);
chart9.render();
function coursescompleted() {
	chart9.updateOptions({
		colors: ["rgb(" + myVarVal + ")", 'rgb(238, 51 ,94)', 'rgb(34, 192 ,60)'],
	})
}

/* Ethereum Chart */
var options = {
    series: [
      {
        data: [14, 48, 20, 64, 10, 55, 45, 75, 35],
      },
    ],
    chart: {
      sparkline: {
        enabled: true,
      },
      type: "line",
      height: 50,
      width: 100,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ["rgb(1, 98, 232)"],
    stroke: {
      width: [2],
      curve: ["smooth"],
    },
    xaxis: {
      crosshairs: {
        show: false,
      },
    },
  };

  var chart3 = new ApexCharts(document.querySelector("#totalusers"), options);
chart3.render();
function totalusers() {
	chart3.updateOptions({
		colors: ["rgb(" + myVarVal + ")"],
	})
}
  
  function ethCoin() {
    function rgbToHex(r, g, b) {
      return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
    }
    chartethCoin.updateOptions({
      colors: [
        rgbToHex(
          myVarVal.split(",")[0],
          myVarVal.split(",")[1],
          myVarVal.split(",")[2]
        ),
      ],
    });
  }
  var options1 = {
    series: [
      {
        data: [14, 48, 20, 64, 10, 55, 45, 75, 35],
      },
    ],
    chart: {
      sparkline: {
        enabled: true,
      },
      type: "line",
      height: 50,
      width: 100,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ["rgb(238, 51, 94)"],
    stroke: {
      width: [2],
      curve: ["smooth"],
    },
    xaxis: {
      crosshairs: {
        show: false,
      },
    },
  };
  var chart1 = new ApexCharts(document.querySelector("#accesstime"), options1);
  chart1.render();

  var options = {
    series: [
      {
        data: [14, 48, 20, 64, 10, 55, 45, 75, 35],
      },
    ],
    chart: {
      sparkline: {
        enabled: true,
      },
      type: "line",
      height: 50,
      width: 100,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ["rgb(34 ,192 ,60)"],
    stroke: {
      width: [2],
      curve: ["smooth"],
    },
    xaxis: {
      crosshairs: {
        show: false,
      },
    },
  };
  document.getElementById("totalearning").innerHTML = "";
  var chartethCoin = new ApexCharts(document.querySelector("#totalearning"), options);
  chartethCoin.render();
  
  function ethCoin() {
    function rgbToHex(r, g, b) {
      return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
    }
    chartethCoin.updateOptions({
      colors: [
        rgbToHex(
          myVarVal.split(",")[0],
          myVarVal.split(",")[1],
          myVarVal.split(",")[2]
        ),
      ],
    });
  }

  var options1 = {
    series: [
      {
        data: [14, 48, 20, 64, 10, 55, 45, 75, 35],
      },
    ],
    chart: {
      sparkline: {
        enabled: true,
      },
      type: "line",
      height: 50,
      width: 100,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ["rgb(251, 188 ,11)"],
    stroke: {
      width: [2],
      curve: ["smooth"],
    },
    xaxis: {
      crosshairs: {
        show: false,
      },
    },
  };
  var chart1 = new ApexCharts(document.querySelector("#totalvedio"), options1);
  chart1.render();
  
  /* Ethereum Chart 1*/

  /* top course categories */
  var options = {
    series: [1754, 1234, 878,765],
    labels: ["IT ", "Finanace", "Consultancy" , "Sales"],
    chart: {
        height: 210,
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
        width: 2,
        dashArray: 0,
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '80%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        offsetY: -4
                    },
                    value: {
                        show: true,
                        fontSize: '18px',
                        color: undefined,
                        offsetY: 8,
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
        right:30
      }
    },
    colors: ['#f93a5a','rgb( 34 ,192, 60)','rgb(0 ,185, 255)','#0162e8','rgb(251, 188 ,11)'],
};

var chart = new ApexCharts(document.querySelector("#course-categories"), options);
chart.render();
function coursecategories() {
	chart.updateOptions({
    colors: ['#f93a5a','rgb( 34 ,192, 60)','rgb(0 ,185, 255)',"rgb(" + myVarVal + ")",'rgb(251, 188 ,11)'],
	})
}

  /* top course categories */