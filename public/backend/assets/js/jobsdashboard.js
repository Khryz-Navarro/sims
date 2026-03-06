var options = {
    series: [
        {
            name: "Online",
            data: [60, 41, 70, 42, 95, 60, 39, 77, 56, 61, 105, 55],
            type: 'area',
        },
        {
            name: 'Offline',
            data: [33, 65, 54, 99, 60, 48, 82, 57, 95, 46, 82, 67],
            type: 'line',
        }
    ],
    chart: {
        height: 278,

        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [2, 2],
        curve: 'smooth',
        dashArray: [0, 5]
    },
    colors: ['rgb(1, 98, 232)', 'rgba(238, 51, 94,0.8)'],
    title: {
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'center',
        fontWeight: 600,
        fontSize: '12px',
        tooltipHoverFormatter: function (val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        },
        labels: {
            colors: '#74767c',
        },
        markers: {
            width: 9,
            height: 9,
            strokeWidth: 0,
            radius: 12,
            offsetX: 0,
            offsetY: 0
        },
    },
    markers: {
        discrete: [
            {
                seriesIndex: 0,
                dataPointIndex: 7,
                fillColor: '#fff',
                strokeColor: 'rgb(1, 98, 232)',
                size: 5,
                shape: "circle"
            }, {
                seriesIndex: 1,
                dataPointIndex: 2,
                fillColor: '#fff',
                strokeColor: 'rgb(238, 51, 94)',
                size: 5,
                shape: "circle"
            },
            {
                seriesIndex: 1,
                dataPointIndex: 6,
                fillColor: '#fff',
                strokeColor: 'rgb(238, 51, 94)',
                size: 5,
                shape: "circle"
            }],
        hover: {
            sizeOffset: 6
        }
    },
    xaxis: {
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
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
            rotate: -90,
        },
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
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    tooltip: {
        y: [
            {
                title: {
                    formatter: function (val) {
                        return val + " (mins)"
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val + " per session"
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        ]
    },
    grid: {
        show: true,
        borderColor: 'rgba(119, 119, 142, 0.1)',
        strokeDashArray: 4,
    },
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
                        opacity: 0.5
                    },
                    {
                        offset: 100,
                        color: 'transparent',
                        opacity: 0.5
                    }
                ],
                [
                    {
                        offset: 0,
                        color: 'rgba(238, 51, 94,0.8)',
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: 'rgba(238, 51, 94,0.8)',
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'rgba(238, 51, 94,0.8)',
                        opacity: 1
                    }
                ],
            ]
        }
    },
};
var chart2 = new ApexCharts(document.querySelector("#vacancystatus"), options);
chart2.render();

function vacancystatus() {
    chart2.updateOptions({
        colors: ["rgb(" + myVarVal + ")", 'rgba(238, 51, 94,0.8)'],
    })
}


var swiper = new Swiper(".swiper-vertical", {
    direction: "vertical",
    slidesPerView: 4,
    spaceBetween: 0,
    mousewheel: true,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    }
});


var options1 = {
    series: [1754, 1234],
    labels: ["Accepted", "Rejected"],
    chart: {
        height: 260,
        type: "donut",
    },
    dataLabels: {
        enabled: false,
    },

    legend: {
        show: false,
    },
    stroke: {
        show: true,
        curve: "smooth",
        lineCap: "round",
        colors: "#fff",
        width: 0,
        dashArray: 0,
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: "85%",
                background: "transparent",
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: "20px",
                        color: "#495057",
                        offsetY: -4,
                    },
                    value: {
                        show: true,
                        fontSize: "18px",
                        color: undefined,
                        offsetY: 8,
                        formatter: function (val) {
                            return val + "%";
                        },
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: "Total",
                        fontSize: "22px",
                        fontWeight: 600,
                        color: "#495057",
                    },
                },
            },
        },
    },

    colors: ["rgb(1, 98, 232)", "rgb(238, 51 ,94)"],
};
var chart9 = new ApexCharts(document.querySelector("#acceptanceratio"), options1);
chart9.render();

function acceptanceratio() {
    chart9.updateOptions({
        colors: ["rgb(" + myVarVal + ")", "rgb(238, 51 ,94)"],
    })
}

// var options8 = {
//     series: [
//         {
//             name: 'Actual',
//             data: [
//                 {
//                     x: 'Recruited',
//                     y: 300,
//                     goals: [
//                         {
//                             name: 'Expected',
//                             value: 350,
//                             strokeHeight: 5,
//                             strokeColor: 'rgb(1, 98, 232)'
//                         }
//                     ]
//                 },
//                 {
//                     x: 'Shortlisted',
//                     y: 500,
//                     goals: [
//                         {
//                             name: 'Expected',
//                             value: 550,
//                             strokeHeight: 5,
//                             strokeColor: 'rgb(34 ,192 ,60)'
//                         }
//                     ]
//                 },
//                 {
//                     x: 'Rejected',
//                     y: 1000,
//                     goals: [
//                         {
//                             name: 'Expected',
//                             value: 1050,
//                             strokeHeight: 5,
//                             strokeColor: 'rgb(238, 51, 94)'
//                         }
//                     ]
//                 },
//                 {
//                     x: 'Blocked',
//                     y: 1500,
//                     goals: [
//                         {
//                             name: 'Expected',
//                             value:1550,
//                             strokeHeight: 5,
//                             strokeColor: 'rgb(251, 188, 11)'
//                         }
//                     ]
//                 }
//             ]
//         }
//     ],
//     chart: {
//         height: 320,
//         type: 'bar'
//     },
//     plotOptions: {
//         bar: {
//             columnWidth: '50%',
//             distributed: true,
//         }
//     },
//     colors: ['rgba(1, 98, 232,0.4)', "rgba(34 ,192 ,60,0.4)", "rgba(238, 51, 94, 0.4)", "rgba(251, 188, 11, 0.4)"],
//     dataLabels: {
//         enabled: false
//     },
//     grid: {
//       show: false,
//       borderColor: '#f1f1f1',
//       strokeDashArray: 3
//     },
//     legend: {
//         show: false,
//         showForSingleSeries: true,
//         customLegendItems: ['Actual', 'Expected'],
//     },
//     xaxis: {
//         labels: {
//             show: true,
//             style: {
//                 colors: "#8c9097",
//                 fontSize: '11px',
//                 fontWeight: 600,
//                 cssClass: 'apexcharts-xaxis-label',
//             },
//         }
//     },
//     yaxis: {
//         labels: {
//             show: true,
//             style: {
//                 colors: "#8c9097",
//                 fontSize: '11px',
//                 fontWeight: 600,
//                 cssClass: 'apexcharts-xaxis-label',
//             },
//         }
//     }
// };
// var chart8 = new ApexCharts(document.querySelector("#acquisitions"), options8);
// chart8.render();