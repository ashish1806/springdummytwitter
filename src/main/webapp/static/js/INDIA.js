$(document).ready(function() {
    $("#map1").click(function () {
        console.log("ass");
        var data = [
            { 'hc-key': 'in-py', value: 0 },
            { 'hc-key': 'in-ld', value: 1 },
            { 'hc-key': 'in-wb', value: 2 },
            { 'hc-key': 'in-up', value: 3 },
            { 'hc-key': 'in-ut', value: 4 },
            { 'hc-key': 'in-jh', value: 5 },
            { 'hc-key': 'in-or', value: 6 },
            { 'hc-key': 'in-br', value: 7 },
            { 'hc-key': 'in-sk', value: 8 },
            { 'hc-key': 'in-ct', value: 9 },
            { 'hc-key': 'in-tn', value: 10 },
            { 'hc-key': 'in-mp', value: 11 },
            { 'hc-key': 'in-2984', value: 12 },
            { 'hc-key': 'in-ga', value: 13 },
            { 'hc-key': 'in-nl', value: 14 },
            { 'hc-key': 'in-mn', value: 15 },
            { 'hc-key': 'in-ar', value: 16 },
            { 'hc-key': 'in-mz', value: 17 },
            { 'hc-key': 'in-tr', value: 18 },
            { 'hc-key': 'in-3464', value: 19 },
            { 'hc-key': 'in-dl', value: 20 },
            { 'hc-key': 'in-hr', value: 21 },
            { 'hc-key': 'in-ch', value: 22 },
            { 'hc-key': 'in-hp', value: 23 },
            { 'hc-key': 'in-jk', value: 24 },
            { 'hc-key': 'in-kl', value: 25 },
            { 'hc-key': 'in-ka', value: 26 },
            { 'hc-key': 'in-ap', value: 27 },
            { 'hc-key': 'in-dn', value: 28 },
            { 'hc-key': 'in-mh', value: 29 },
            { 'hc-key': 'in-as', value: 30 },
            { 'hc-key': 'in-ml', value: 31 },
            { 'hc-key': 'in-pb', value: 32 },
            { 'hc-key': 'in-rj', value: 33 }
        ];


        // Initiate the chart
        $('#container').highcharts('Map', {





            chart: {
                borderWidth: 5
            },

            title: {
                text: 'India TweetCount'
            },
            subtitle: {
                text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/in/in-all.js">countries/in/in-all</a>'
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
                enabled: true
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
                    mapData: Highcharts.maps['countries/in/in-all'],
                    joinBy: ['postal-code', 'hc-key'],
                    dataLabels: {
                        enabled: true,
                        color: 'white',
                        format: '{point.postal-code}:{point.hc-key}'
                       //data: '{point.value}'
                    },
                    name: 'Tweet Count',
                    tooltip: {
                        //pointFormat: '{point.code}: {point.value}/km²'
                    }
                }
            ]
        })
    })
});





/*title: {
 text: 'Highmaps basic demo'
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
 mapData: Highcharts.maps['countries/by/by-all'],
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
 ]*/
