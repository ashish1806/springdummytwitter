$(document).ready(function() {
$('#container').highcharts({
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Tweet Count'
    },
    subtitle: {
        text: 'Source: Twitter'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b',
            hour:'%e.%b %H :%M'
        },
        title: {
            text: 'Time'
        }
    },
    yAxis: {
        title: {
            text: 'Number Of Tweets'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: "brand",
        data: [
            [1409820941906, 10   ],
            [1409828141906, 40 ],
            [1409835341906, 30 ]
        ]
    }]
});
});




//$(document).ready(function() {
//
////$(function () {
//    $('#container').highcharts({
//        chart: {
//            type: 'spline'
//        },
//        title: {
//            text: 'Snow depth at Vikjafjellet, Norway'
//        },
//        subtitle: {
//            text: 'Irregular time data in Highcharts JS'
//        },
//        xAxis: {
//            type: 'datetime',
//            dateTimeLabelFormats: { // don't display the dummy year
//                month: '%e. %b',
//                year: '%b',
//                hour:'%e.%b %H :%M'
//            },
//            title: {
//                text: 'Date'
//            }
//        },
//        yAxis: {
//            title: {
//                text: 'Snow depth (m)'
//            },
//            min: 0
//        },
//        tooltip: {
//            headerFormat: '<b>{series.name}</b><br>',
//            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
//        },
//
//        series: [{
//            name: 'Winter 2007-2008',
//            // Define the data points. All series have a dummy year
//            // of 1970/71 in order to be compared on the same x axis. Note
//            // that in JavaScript, months start at 0 for January, 1 for February etc.
//            data: [
//                [1409820941906, 0   ],
//                [1409828141906, 0.6 ],
//                [1409835341906, 0.7 ]
//            ]
//        }]
//    });
//});