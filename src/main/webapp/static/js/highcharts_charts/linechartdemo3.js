//<script type="text/javascript">
//$(function () {
//    var chart;
//    $(document).ready(function() {
//    $.getJSON("data1.json", function(json) {
//
//    chart = new Highcharts.Chart({
//    chart: {
//    renderTo: 'container4',
//    type: 'scatter',
//    marginRight: 175,
//    marginBottom: 50
//    },
//    title: {
//    text: 'Comfort Level',
//    x: -20 //center
//    },
//    subtitle: {
//    text: '',
//    x: -20
//    },
//    xAxis: {
//    title: {
//    enabled: true,
//    text: 'Temp (F)'
//    },
//    min: 60,
//    max: 85,
//    startOnTick: true,
//    endOnTick: true,
//    showLastLabel: true
//    },
//    yAxis:  {
//    title: {
//    text: 'Humidity (%RH)'
//    },
//    min: 30,
//    max: 100
//    },
//    plotOptions: {
//    scatter: {
//    marker: {
//    radius: 5,
//    states: {
//    hover: {
//    enabled: true,
//    lineColor: 'rgb(100,100,100)'
//    }
//    }
//    },
//    states: {
//    hover: {
//    marker: {
//    enabled: false
//    }
//    }
//    },
//    tooltip: {
//    headerFormat: '<b>{series.name}</b><br>',
//    pointFormat: '{point.x} F, {point.y} %RH'
//    }
//    },
//    series: [{
//    name: 'Night',
//    data: json[1]
//    }, {
//    name: 'Night',
//    data: json[2]
//    });
//    });
//
//    });
//
//    });
//    </script>