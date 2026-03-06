var options = {
	series: [{
		name: 'Income',
			  type: "column",
		data: [20, 30, 40, 20, 30, 40, 25, 35, 45, 20, 30, 40]
	  },{
			  name: "Expenses",
			  type: "area",
			  data: [40, 50, 60, 30, 40, 55, 35, 55, 65, 40, 50, 60],
	  }],
	chart: {
		redrawOnWindowResize: true,
		animations: {
			enabled: false,
			animateGradually: {
				enabled: false,
			},
			dynamicAnimation: {
				enabled: false,
			}
		},
		height: 380,
		toolbar: {
			show: false
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 5,
			left: 0,
			blur: 5,
			color: ["rgb(1, 98, 232)", '#ee335e'],
			opacity: 0.1,
		},
	},
	plotOptions: {
	  bar: {
		horizontal: false,
		columnWidth: '18%',
		borderRadius: 5
	  },
	},
	dataLabels: {
	  enabled: false
	},
	stroke: {
		width: [0, 2],
		curve: "smooth",
		dashArray: [0, 0],
	},
	legend: {
		show: true,
		position: "top",
		horizontalAlign: "center",
		fontSize: "12px",
		fontFamily: "Helvetica, Arial",
		fontWeight: 600,
		labels: {
			colors: '#9ba5b7',
		},
	},
	colors: ["rgb(1, 98, 232)", '#ee335e'],
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
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep','Oct', 'Nov', 'Dec'],
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
		marker: {
			fillColors: ['rgb(1, 98, 232)', '#ee335e']
		}
	},
	fill: {
		colors: undefined,
		opacity: 0.025,
		type: ['solid', 'solid'],
		gradient: {
			shade: 'light',
			type: "horizontal",
			shadeIntensity: 0.5,
			gradientToColors: ['#ee335e'],
			inverseColors: true,
			opacityFrom: 0.35,
          	opacityTo: 0.05,
			stops: [0, 50, 100],
			colorStops: ['#ee335e']
		}
	}
}

document.querySelector("#statistics").innerHTML = '';
var chart = new ApexCharts(document.querySelector("#statistics"), options);
chart.render();

function totalRevenueChart() {
	chart.updateOptions({
		colors: ["rgb(" + myVarVal + ")", "#ee335e"],
	})
}
/* Total Revenue Chart Closed */
