//revenue//
var options = {
	chart: {
		height: 300,
		type: "line",
		stacked: false,
        fontFamily: 'poppins, sans-serif',
	},
	dataLabels: {
		enabled: false
	},
	series: [{
		name: 'Sales',
		type: 'column',
		data: [106, 150, 230, 212, 134, 112, 225, 128, 87, 200, 253, 167],
	},{
		name: 'Revenue',
		type: 'line',
		data: [35, 52, 86, 65, 102, 70, 152, 87, 55, 92, 170, 80],
	}],
	stroke: {
		width: [0,2],
		  curve: 'smooth'
	},
	plotOptions: {
		bar: {
			columnWidth: '20%',
		}
	},
	fill: {
		opacity: [1, 1]
	},
	grid: {
		borderColor: '#f2f6f7',
	},
	legend: {
		show: true,
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
	colors: ['#0162e8', '#f93a5a'],
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
var chart1 = new ApexCharts(document.querySelector("#revenue"), options);
chart1.render();
function revenue() {
	chart1.updateOptions({
		colors: ["rgb(" + myVarVal + ")", "#f93a5a"],
	})
}
//revenue//

//lead by source//
var options = {
    series: [40, 30, 25, 20, 45],
    labels: ['New Deal', 'Lost Deal', 'Won Deal','Proposal Deal','Referral Deal'],
    chart: {
        type: 'polarArea',
        height: 280
    },
    stroke: {
        colors: ['#fff'],
        width: 0
    },
    fill: {
        opacity: 1
    },
    legend: {
        show: false,
        position: 'bottom',
        itemMargin: {
            horizontal: 5,
            vertical: 5
        },
        fontFamily: "Montserrat",
    },
    dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 7,
        left: 10,
        blur: 3,
        color: '#000',
        opacity: 1
    },
    plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          },
          spokes: {
            strokeWidth: 0
          },
        }
      },
      grid: {
        padding: {
          top: 30,
          bottom: -30
        }
      },
    yaxis: {
        show: false
      },
      
	colors: ['#f93a5a','#f7a556','rgb( 34 ,192, 60)','rgb(0 ,185, 255)','#0162e8'],
};
var chart9 = new ApexCharts(document.querySelector("#leadbysouce"), options);
chart9.render();

function leadbysouce() {
    chart9.updateOptions({
        colors: ['#f93a5a','#f7a556','rgb( 34 ,192, 60)','rgb(0 ,185, 255)',"rgb(" + myVarVal + ")"],
    })
}

//lead  by source//


 // linegraph1
 var options = {
    chart: {
        type: 'line',
        height: 30,
        width: 100,
        sparkline: {
        enabled: true
        },
        dropShadow: {
        enabled: false,
        blur: 3,
        opacity: 0.2,
        }
        },
        stroke: {
        show: true,
        curve: 'straight',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,
        },
        fill: {
        gradient: {
        enabled: false
        }
    },
    series: [{
        name: 'Total Income',
        data: [0, 30, 10, 35, 26, 31, 14, 22, 40, 12]
    }],
    yaxis: {
        min: 0
    },
	colors: ['#0a9ae1'],
};
var chart2 = new ApexCharts(document.querySelector("#line-graph1"), options);
chart2.render();

//linegarph2
var options = {
    chart: {
        type: 'line',
        height: 30,
        width: 100,
        sparkline: {
        enabled: true
        },
        dropShadow: {
        enabled: false,
        blur: 3,
        opacity: 0.2,
        }
        },
        stroke: {
        show: true,
        curve: 'straight',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,
        },
        fill: {
        gradient: {
        enabled: false
        }
    },
    series: [{
        name: 'Total Income',
        data: [0, 20, 15, 25, 15, 25, 6, 25, 32, 15]
    }],
    yaxis: {
        min: 0
    },
	colors: ['#ff516e'],
};
var chart3 = new ApexCharts(document.querySelector("#line-graph2"), options);
chart3.render();

//linegraph3
var options = {
    chart: {
        type: 'line',
        height: 30,
        width: 100,
        sparkline: {
        enabled: true
        },
        dropShadow: {
        enabled: false,
        blur: 3,
        opacity: 0.2,
        }
        },
        stroke: {
        show: true,
        curve: 'straight',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,
        },
        fill: {
        gradient: {
        enabled: false
        }
    },
    series: [{
        name: 'Total Income',
        data: [0, 10, 30, 12, 16, 25, 4, 35, 26, 15]
    }],
    yaxis: {
        min: 0
    },
	colors: ['#28b98a'],
};
var chart4 = new ApexCharts(document.querySelector("#line-graph3"), options);
chart4.render();

//linegraph4
var options = {
    chart: {
        type: 'line',
        height: 30,
        width: 100,
        sparkline: {
        enabled: true
        },
        dropShadow: {
        enabled: false,
        blur: 3,
        opacity: 0.2,
        }
        },
        stroke: {
        show: true,
        curve: 'straight',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,
        },
        fill: {
        gradient: {
        enabled: false
        }
    },
    series: [{
        name: 'Total Income',
        data: [0, 12, 19, 26, 10, 18, 8, 17, 35, 14]
    }],
    yaxis: {
        min: 0
    },
	colors: ['#f48846'],
};
var chart5 = new ApexCharts(document.querySelector("#line-graph4"), options);
chart5.render();

//linegraph5
var options = {
    chart: {
        type: 'line',
        height: 30,
        width: 100,
        sparkline: {
        enabled: true
        },
        dropShadow: {
        enabled: false,
        blur: 3,
        opacity: 0.2,
        }
        },
        stroke: {
        show: true,
        curve: 'straight',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,
        },
        fill: {
        gradient: {
        enabled: false
        }
    },
    series: [{
        name: 'Total Income',
        data: [12, 8, 19, 26, 10, 18, 8, 17, 35, 14]
    }],
    yaxis: {
        min: 0
    },
	colors: ['#673ab7'],
};
var chart5 = new ApexCharts(document.querySelector("#line-graph5"), options);
chart5.render();