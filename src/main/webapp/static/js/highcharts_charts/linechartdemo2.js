////$(document).ready(function() {
////    $('#container2').click(function () {
////        var options = {
////            chart: {
////                renderTo: 'container2',
////                type: 'line'
////            },
////            title: {
////                text: 'PayOff Curve'
////            },
////            legend: {
////                layout: 'vertical',
////                align: 'right',
////                verticalAlign: 'middle',
////                borderWidth: 0
////            },
////            series: []
////        };
////
////        options.series = JSON;
////
////        // Create the chart
////        var chart = new Highcharts.Chart(options);
////    });
////});
//
//$(document).ready(function() {
//    //$('#container2')
//
//    var options = {
//        chart: {
//            renderTo: 'container',
//            type: 'spline'
//        },
//        series: [{}]
//    };
//
//    $.getJSON('data.json', function(data) {
//        options.series[0].data = data;
//        var chart = new Highcharts.Chart(options);
//    });
//
//});