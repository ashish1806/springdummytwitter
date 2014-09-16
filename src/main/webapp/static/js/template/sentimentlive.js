$(document).ready(function () {
    console.log("devil12345");

    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    $('#container2').highcharts({
        plotOptions : {
            line : { animation : false },
            series : { animation : false }
        },
        chart: {
            type: 'spline',
//            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    var series1 = this.series[1];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y1 = Math.random()*1000;
                            y2 = Math.random()*1000;
                        series.addPoint([x,y1], true,true);
                        series1.addPoint([x,y2],false,true);
//                        series[1].addPoint([x,y2],true,true);
                    }, 1000);

                }
            }
        },
        title: {
            text: 'Sentiment Score'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#808080'
                }
            ]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [
            {
                name: 'Sentiment Score',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({

                            x: time + i * 1000,
                                        y: 0
//
                        });
                    }
                    return data;
                }())
            },
            {
                name: 'Sentiment Score1',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({

                            x: time + i * 1000,
                                        y: 0
//
                        });
                    }
                    return data;
                }())
            }
        ]
    });
});
