//$(function () {
//
//    console.log("qrwe");
//    // Get the CSV and create the chart
//    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=analytics.csv&callback=?', function (csv) {
//
//        $('#container').highcharts({
//
//            data: {
//                csv: csv
//            },
//
//            title: {
//                text: 'Daily visits at www.highcharts.com'
//            },
//
//            subtitle: {
//                text: 'Source: Google Analytics'
//            },
//
//            xAxis: {
//                tickInterval: 7 * 24 * 3600 * 1000, // one week
//                tickWidth: 0,
//                gridLineWidth: 1,
//                labels: {
//                    align: 'left',
//                    x: 3,
//                    y: -3
//                }
//            },
//
//            yAxis: [{ // left y axis
//                title: {
//                    text: null
//                },
//                labels: {
//                    align: 'left',
//                    x: 3,
//                    y: 16,
//                    format: '{value:.,0f}'
//                },
//                showFirstLabel: false
//            }, { // right y axis
//                linkedTo: 0,
//                gridLineWidth: 0,
//                opposite: true,
//                title: {
//                    text: null
//                },
//                labels: {
//                    align: 'right',
//                    x: -3,
//                    y: 16,
//                    format: '{value:.,0f}'
//                },
//                showFirstLabel: false
//            }],
//
//            legend: {
//                align: 'left',
//                verticalAlign: 'top',
//                y: 20,
//                floating: true,
//                borderWidth: 0
//            },
//
//            tooltip: {
//                shared: true,
//                crosshairs: true
//            },
//
//            plotOptions: {
//                series: {
//                    cursor: 'pointer',
//                    point: {
//                        events: {
//                            click: function (e) {
//                                hs.htmlExpand(null, {
//                                    pageOrigin: {
//                                        x: e.pageX,
//                                        y: e.pageY
//                                    },
//                                    headingText: this.series.name,
//                                    maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
//                                        this.y + ' visits',
//                                    width: 200
//                                });
//                            }
//                        }
//                    },
//                    marker: {
//                        lineWidth: 1
//                    }
//                }
//            },
//
//            series: [{
//                name: 'All visits',
//                lineWidth: 4,
//                marker: {
//                    radius: 4
//                }
//            }, {
//                name: 'New visitors'
//            }]
//        });
//    });
//
//});


$(function () {
    $('#container').highcharts({
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
            data: [216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5],
            lineWidth: 5
        }]
    });
});