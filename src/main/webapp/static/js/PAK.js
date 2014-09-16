$(document).ready(function() {
    $("#map2").click(function () {
        console.log("ass");
        {

            // Prepare demo data
            var data = [
                { 'hc-key': 'pk-ta', value: 0 },
                { 'hc-key': 'pk-is', value: 1 },
                { 'hc-key': 'pk-pb', value: 2 },
                { 'hc-key': 'pk-nw', value: 3 },
                { 'hc-key': 'pk-jk', value: 4 },
                { 'hc-key': 'pk-sd', value: 5 },
                { 'hc-key': 'pk-ba', value: 6 },
                { 'hc-key': 'pk-na', value: 7 }
            ];


            $('#container').highcharts('Map', {





                chart: {
                    borderWidth: 5
                },

                title: {
                    text: 'Pakistan TweetCount'
                },
                subtitle: {
                    text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/pk/pk-all.js">countries/in/in-all</a>'
                },

                legend: {
                    layout: 'horizontal',
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    verticalAlign: 'top',
                    y: 25
                },

                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },

                colorAxis: {
                    min: 1,
                    type: 'logarithmic',
                    minColor: '#EEEEFF',
                    maxColor: '#000022',
                    stops: [
                        [0, '#EFEFFF'],
                        [0.5, '#4444FF'],
                        [1, '#000022']
                    ]
                },

                series: [
                    {
                        animation: {
                            duration: 1000
                        },
                        data: data,
                        mapData: Highcharts.maps['countries/pk/pk-all'],
                        joinBy: 'hc-key',
                        dataLabels: {
                            enabled: true,
                            color: 'white',
                            format: '{point.name}',
                            data: '{hc-key}:  {value}'
                        },
                        name: 'Tweet Count',
                        tooltip: {
                            pointFormat: '{hc-key}: {value}/km²'
                        }
                    }
                ]
            });
        }

    });
});







// Initiate the chart
/*$('#container').highcharts('Map', {

 title: {
 text: 'Highmaps basic demo'
 },

 subtitle: {
 text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/pk/pk-all.js">countries/pk/pk-all</a>'
 },

 mapNavigation: {
 enabled: true,
 buttonOptions: {
 verticalAlign: 'bottom'
 }
 },

 colorAxis: {
 min: 0
 },

 series: [
 {
 data: data,
 mapData: Highcharts.maps['countries/pk/pk-all'],
 joinBy: 'hc-key',
 name: 'Random data',
 states: {
 hover: {
 color: '#BADA55'
 }
 },
 dataLabels: {
 enabled: true,
 format: '{point.name}'
 }
 }
 ]
 });
 };
 });
 });*/
