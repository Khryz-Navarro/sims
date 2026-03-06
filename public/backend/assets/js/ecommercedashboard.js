//earnings//
var options = {
    series: [{
        name: "First Half",
        data: [30, 38, 25, 42, 35, 23, 63, 25, 53, 57, 38, 40],
        type: 'line',
    },
    {
        name: "Top Gross",
        data: [20, 38, 38, 72, 55, 63, 43, 55, 33, 45, 30, 60],
        type: 'line',
    },
    {
        name: "Second Half",
        data: [20, 53, 15, 23, 48, 52, 78, 43, 47, 73, 45, 28],
        type: 'line',
    }],
    chart: {
        type: 'line',
        height: 315
    },
    grid: {
        borderColor: 'rgba(167, 180, 201 ,0.2)',
    },
    colors: ['#0162e8', '#f93a5a', 'rgb(34 ,192, 60)'],
    stroke: {
        curve: 'smooth',
        width: [2, 2, 2],
        dashArray: [0, 0, 0]
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: 'top',
        labels: {
            colors: '#74767c',
        },
    },
    yaxis: {
        labels: {
            formatter: function (y) {
                return y.toFixed(0) + "";
            }
        },
        labels: {
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    xaxis: {
        type: 'month',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
        axisBorder: {
            show: true,
            color: 'rgba(167, 180, 201 ,0.2)',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: 'rgba(167, 180, 201 ,0.2)',
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
    }
};
var chart1 = new ApexCharts(document.querySelector("#earnings"), options);
chart1.render();
function earnings() {
    chart1.updateOptions({
        colors: ["rgb(" + myVarVal + ")", "#f93a5a", "#f7a556"],
    })
}
//earnings//

//sales category//
var options = {
    plotOptions: {
        pie: {
            size: 10,
            donut: {
                size: '70%',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '',
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
                        color: '',
                    }

                }
            }
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [125, 34, 51],
    labels: ['Electronics', 'Women\'s', 'Men\'s'],
    chart: {
        type: 'donut',
        fontFamily: 'Poppins, Arial, sans-serif',
        height: 255,
    },
    colors: ['#0162e8', '#f93a5a', 'rgb(247, 165, 86)'],
    legend: {
        show: false,
        fontSize: '13px',
        position: 'bottom',
        labels: {
            colors: '#5d6162',
        },
    },
    responsive: [{
        breakpoint: 0,
        options: {
            chart: {
                width: 100,
            },
            legend: {
                show: true,
                fontSize: '14px',
                position: 'bottom',
            }
        },
    }]
};
var chart9 = new ApexCharts(document.querySelector("#salesDonut"), options);
chart9.render();
function salesDonut() {
    chart9.updateOptions({
        colors: ["rgb(" + myVarVal + ")", '#f93a5a', 'rgb(247, 165, 86)'],
    })
}
//sales category//

