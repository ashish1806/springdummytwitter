$(document).ready(function() {
    $("#containernew").click(function () {
//        $.getJSON('datas1.json', function (data1)
//        {
//            $.getJSON('datas2.json', function (data2)
//            {



           var categories=[1,2,3,4,5,6,7,8,9,10,11,12];
            var data1 = [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];
           var data2 = [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8];
            $(function () {
                $('#containernew').highcharts({
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: 'Monthly Average Temperature'
                    },
                    subtitle: {
                        text: 'Source: WorldClimate.com'
                    },
                    xAxis: {
                        categories: categories
                    },
                    yAxis: {
                        title: {
                            text: 'Temperature (°C)'
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
                    series: [
                        {
                            name: 'Tokyo',
                            data: data1
                        },
                        {
                            name: 'London',
                            data: data2
                        }
                    ]
                });
            });
        });
//    });
//    });
});