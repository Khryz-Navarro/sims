
 var options = {
	series: [
		{
			type: "area",
			name: "This Year",
			data: [30, 32, 20, 23, 35, 37, 55, 30, 29, 19, 18, 40],
		},
		{
			type: "line",
			name: "Previous Year",
			data: [40, 42, 30, 32, 14, 15, 24, 25, 35, 36, 30, 45],
		}
	],
	chart: {
		height: 350,
		toolbar: {
			show: false
		},
	},
	plotOptions: {
		bar: {
			columnWidth: "40%",
			borderRadius: 4,
		}
	},
	colors: ['rgb(1, 98, 232)', 'rgba(238, 51, 94)'],
	fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            type: "vertical",
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "rgba(1, 98, 232,0.1)",
                        opacity: 50
                    },
                    {
                        offset: 75,
                        color: "rgba(1, 98, 232,0.1)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'rgba(1, 98, 232,0.1)',
                        opacity: 1
                    }
                ],	
                [
                    {
                        offset: 0,
                        color: 'rgba(238, 51, 94)',
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: 'rgba(238, 51, 94)',
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'rgba(238, 51, 94)',
                        opacity: 1
                    }
                ],
            ]
        }
    },
	dataLabels: {
		enabled: false,
	},
	legend: {
        show: false,
        fontSize: '13px',
        position: 'bottom',
        labels: {
            colors: '#5d6162',
        },
    },
	stroke: {
		curve: 'smooth',
		width: [2, 2],
		lineCap: 'round',
		dashArray: [0, 4]
	},
	grid: {
		borderColor: "#edeef1",
		strokeDashArray: 4,
		xaxis: {
			lines: {
				show: true
			}
		},
		yaxis: {
			lines: {
				show: false
			}
		}
	},
	yaxis: {
		axisBorder: {
			show: true,
			color: "rgba(119, 119, 142, 0.05)",
			offsetX: 0,
			offsetY: 0,
		},
		axisTicks: {
			show: true,
			borderType: "solid",
			color: "rgba(119, 119, 142, 0.05)",
			width: 6,
			offsetX: 0,
			offsetY: 0,
		},
		labels: {
			formatter: function (y) {
				return y.toFixed(0) + "";
			},
		},
	},
	xaxis: {
		type: "month",
		categories: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"sep",
			"oct",
			"nov",
			"dec",
		],
		axisBorder: {
			show: false,
			color: "rgba(119, 119, 142, 0.05)",
			offsetX: 0,
			offsetY: 0,
		},
		axisTicks: {
			show: false,
			borderType: "solid",
			color: "rgba(119, 119, 142, 0.05)",
			width: 6,
			offsetX: 0,
			offsetY: 0,
		},
		labels: {
			rotate: -90,
		},
	},
	tooltip: {
		enabled: true,
		theme: "dark",
	}
};
var chart2 = new ApexCharts(document.querySelector("#nft-statistics"), options);
chart2.render();

function nftstatistics() {
    chart2.updateOptions({
        colors: ["rgb(" + myVarVal + ")", "rgba(238, 51, 94)"],
    })
}


// for featured collections
var swiper = new Swiper(".pagination-dynamic", {
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
		clickable: true,
	},
	loop: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false
	}
});