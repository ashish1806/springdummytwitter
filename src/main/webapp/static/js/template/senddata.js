$(document).ready(function() {
    var selText;
//
    $("#submit123456").click(function () {

        selText = $(this).text();
        console.log(selText);

        console.log("zxcvbn");

        var format = (document.getElementById("format").value);
        console.log(format);
        var format1 = (document.getElementById("format1").value);
        console.log(format1);
        var format2 = (document.getElementById("format2").value);
        console.log(format2);

        var entity1 = (document.getElementById("tags1").value);
        var entity2 = (document.getElementById("tags2").value);
        var startdate = (document.getElementById("startdate").value);
        console.log(startdate);
        var starttime = (document.getElementById("starttime").value);
//        var startminutes = starttime % 100;
//        var starthours = (starttime) / 100;

        startdate = startdate.split("/");
        console.log(startdate);
        var newDate = startdate[0] + "/" + startdate[1] + "/" + startdate[2] + " " + starttime + ":" + "00";

        console.log(newDate);

        startdate = new Date(newDate).getTime();

        console.log(starttime);
//        console.log(starthours);
//        console.log(startminutes);
        console.log(startdate);

        var enddate = (document.getElementById("enddate").value);
        var endtime = (document.getElementById("endtime").value);
//        var endminutes = endtime % 100;
//        var endhours = (endtime - endminutes) / 100;

        enddate = enddate.split("/");
        var newDate = enddate[0] + "/" + enddate[1] + "/" + enddate[2] + " " + endtime + ":" + "00";

        enddate = new Date(newDate).getTime();

        var startampm = (document.getElementById("startampm").value);
        var endampm = (document.getElementById("endampm").value);
        console.log(startampm);
        console.log(endampm);

        if (startampm == 1) {
            console.log("PM");
            startdate = startdate + 43200000;

        }
        if (endampm == 1) {
            console.log("PM");
            enddate = enddate + 43200000;
        }
        console.log(startdate);
        console.log(enddate);
        console.log(selText);


        var text = { "entity1": entity1,
            "entity2": entity2,
            "startdate": startdate,
            "enddate": enddate,
            "format": selText };


    });


    $(document).ready(function () {
//        $("#container2").ready(function () {

        console.log("positive1");
        $("#submit123456").click(function () {

            console.log("positive2");
//            $("#tweetcount").click(function () {
            console.log("priestzxc");


            $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {


                var datanew = [
                    {'hc-key': 'ru', value: 20 },
                    { 'hc-key': 'us', value: 10 },
                    {'hc-key': 'in', value: 90 }
                ];


                $.each(data, function () {
                    this.code = this.code.toLowerCase();
                });

                var datanew1 = [
                    { 'hc-key': 'dz', value: 0 },
                    { 'hc-key': 'ao', value: 1 },
                    { 'hc-key': 'eg', value: 2 },
                    { 'hc-key': 'bd', value: 3 },
                    { 'hc-key': 'ne', value: 4 },
                    { 'hc-key': 'qa', value: 5 },
                    { 'hc-key': 'na', value: 6 },
                    { 'hc-key': 'bg', value: 7 },
                    { 'hc-key': 'bo', value: 8 },
                    { 'hc-key': 'gh', value: 9 },
                    { 'hc-key': 'pk', value: 10 },
                    { 'hc-key': 'pa', value: 11 },
                    { 'hc-key': 'jo', value: 12 },
                    { 'hc-key': 'eh', value: 13 },
                    { 'hc-key': 'ly', value: 14 },
                    { 'hc-key': 'my', value: 15 },
                    { 'hc-key': 'pr', value: 16 },
                    { 'hc-key': 'kp', value: 17 },
                    { 'hc-key': 'tz', value: 18 },
                    { 'hc-key': 'pt', value: 19 },
                    { 'hc-key': 'kh', value: 20 },
                    { 'hc-key': 'py', value: 21 },
                    { 'hc-key': 'sa', value: 22 },
                    { 'hc-key': 'me', value: 23 },
                    { 'hc-key': 'si', value: 24 },
                    { 'hc-key': 'bf', value: 25 },
                    { 'hc-key': 'ch', value: 26 },
                    { 'hc-key': 'mr', value: 27 },
                    { 'hc-key': 'hr', value: 28 },
                    { 'hc-key': 'cl', value: 29 },
                    { 'hc-key': 'cn', value: 30 },
                    { 'hc-key': 'kn', value: 31 },
                    { 'hc-key': 'jm', value: 32 },
                    { 'hc-key': 'dj', value: 33 },
                    { 'hc-key': 'gn', value: 34 },
                    { 'hc-key': 'fi', value: 35 },
                    { 'hc-key': 'uy', value: 36 },
                    { 'hc-key': 'va', value: 37 },
                    { 'hc-key': 'np', value: 38 },
                    { 'hc-key': 'ma', value: 39 },
                    { 'hc-key': 'ye', value: 40 },
                    { 'hc-key': 'ph', value: 41 },
                    { 'hc-key': 'za', value: 42 },
                    { 'hc-key': 'ni', value: 43 },
                    { 'hc-key': 'cyn', value: 44 },
                    { 'hc-key': 'vi', value: 45 },
                    { 'hc-key': 'sy', value: 46 },
                    { 'hc-key': 'li', value: 47 },
                    { 'hc-key': 'mt', value: 48 },
                    { 'hc-key': 'kz', value: 49 },
                    { 'hc-key': 'mn', value: 50 },
                    { 'hc-key': 'sr', value: 51 },
                    { 'hc-key': 'ie', value: 52 },
                    { 'hc-key': 'dm', value: 53 },
                    { 'hc-key': 'bj', value: 54 },
                    { 'hc-key': 'ng', value: 55 },
                    { 'hc-key': 'be', value: 56 },
                    { 'hc-key': 'tg', value: 57 },
                    { 'hc-key': 'de', value: 58 },
                    { 'hc-key': 'lk', value: 59 },
                    { 'hc-key': 'gb', value: 60 },
                    { 'hc-key': 'gy', value: 61 },
                    { 'hc-key': 'cr', value: 62 },
                    { 'hc-key': 'cm', value: 63 },
                    { 'hc-key': 'kas', value: 64 },
                    { 'hc-key': 'km', value: 65 },
                    { 'hc-key': 'ug', value: 66 },
                    { 'hc-key': 'tm', value: 67 },
                    { 'hc-key': 'tt', value: 68 },
                    { 'hc-key': 'nl', value: 69 },
                    { 'hc-key': 'td', value: 70 },
                    { 'hc-key': 'ge', value: 71 },
                    { 'hc-key': 'ro', value: 72 },
                    { 'hc-key': 'scr', value: 73 },
                    { 'hc-key': 'lv', value: 74 },
                    { 'hc-key': 'bz', value: 75 },
                    { 'hc-key': 'mm', value: 76 },
                    { 'hc-key': 'af', value: 77 },
                    { 'hc-key': 'bi', value: 78 },
                    { 'hc-key': 'by', value: 79 },
                    { 'hc-key': 'gd', value: 80 },
                    { 'hc-key': 'lr', value: 81 },
                    { 'hc-key': 'gr', value: 82 },
                    { 'hc-key': 'ls', value: 83 },
                    { 'hc-key': 'gl', value: 84 },
                    { 'hc-key': 'ad', value: 85 },
                    { 'hc-key': 'mz', value: 86 },
                    { 'hc-key': 'tj', value: 87 },
                    { 'hc-key': 'th', value: 88 },
                    { 'hc-key': 'ht', value: 89 },
                    { 'hc-key': 'mx', value: 90 },
                    { 'hc-key': 'zw', value: 91 },
                    { 'hc-key': 'lc', value: 92 },
                    { 'hc-key': 'in', value: 93 },
                    { 'hc-key': 'vc', value: 94 },
                    { 'hc-key': 'bt', value: 95 },
                    { 'hc-key': 'vn', value: 96 },
                    { 'hc-key': 'no', value: 97 },
                    { 'hc-key': 'cz', value: 98 },
                    { 'hc-key': 'ag', value: 99 },
                    { 'hc-key': 'fj', value: 100 },
                    { 'hc-key': 'hn', value: 101 },
                    { 'hc-key': 'mu', value: 102 },
                    { 'hc-key': 'do', value: 103 },
                    { 'hc-key': 'lu', value: 104 },
                    { 'hc-key': 'il', value: 105 },
                    { 'hc-key': 'sm', value: 106 },
                    { 'hc-key': 'pe', value: 107 },
                    { 'hc-key': 'id', value: 108 },
                    { 'hc-key': 'vu', value: 109 },
                    { 'hc-key': 'mk', value: 110 },
                    { 'hc-key': 'cd', value: 111 },
                    { 'hc-key': 'cg', value: 112 },
                    { 'hc-key': 'is', value: 113 },
                    { 'hc-key': 'et', value: 114 },
                    { 'hc-key': 'um', value: 115 },
                    { 'hc-key': 'co', value: 116 },
                    { 'hc-key': 'ser', value: 117 },
                    { 'hc-key': 'bw', value: 118 },
                    { 'hc-key': 'md', value: 119 },
                    { 'hc-key': 'mg', value: 120 },
                    { 'hc-key': 'ec', value: 121 },
                    { 'hc-key': 'sn', value: 122 },
                    { 'hc-key': 'tl', value: 123 },
                    { 'hc-key': 'fr', value: 124 },
                    { 'hc-key': 'lt', value: 125 },
                    { 'hc-key': 'rw', value: 126 },
                    { 'hc-key': 'zm', value: 127 },
                    { 'hc-key': 'gm', value: 128 },
                    { 'hc-key': 'fo', value: 129 },
                    { 'hc-key': 'gt', value: 130 },
                    { 'hc-key': 'dk', value: 131 },
                    { 'hc-key': 'ua', value: 132 },
                    { 'hc-key': 'au', value: 133 },
                    { 'hc-key': 'at', value: 134 },
                    { 'hc-key': 've', value: 135 },
                    { 'hc-key': 'pw', value: 136 },
                    { 'hc-key': 'ke', value: 137 },
                    { 'hc-key': 'la', value: 138 },
                    { 'hc-key': 'bjn', value: 139 },
                    { 'hc-key': 'tr', value: 140 },
                    { 'hc-key': 'jp', value: 141 },
                    { 'hc-key': 'al', value: 142 },
                    { 'hc-key': 'om', value: 143 },
                    { 'hc-key': 'it', value: 144 },
                    { 'hc-key': 'bn', value: 145 },
                    { 'hc-key': 'tn', value: 146 },
                    { 'hc-key': 'hu', value: 147 },
                    { 'hc-key': 'ru', value: 148 },
                    { 'hc-key': 'lb', value: 149 },
                    { 'hc-key': 'bb', value: 150 },
                    { 'hc-key': 'br', value: 151 },
                    { 'hc-key': 'ci', value: 152 },
                    { 'hc-key': 'rs', value: 153 },
                    { 'hc-key': 'gq', value: 154 },
                    { 'hc-key': 'us', value: 155 },
                    { 'hc-key': 'se', value: 156 },
                    { 'hc-key': 'az', value: 157 },
                    { 'hc-key': 'gw', value: 158 },
                    { 'hc-key': 'sz', value: 159 },
                    { 'hc-key': 'ca', value: 160 },
                    { 'hc-key': 'kv', value: 161 },
                    { 'hc-key': 'kr', value: 162 },
                    { 'hc-key': 'mw', value: 163 },
                    { 'hc-key': 'sk', value: 164 },
                    { 'hc-key': 'cy', value: 165 },
                    { 'hc-key': 'ba', value: 166 },
                    { 'hc-key': 'pga', value: 167 },
                    { 'hc-key': 'sg', value: 168 },
                    { 'hc-key': 'tw', value: 169 },
                    { 'hc-key': 'so', value: 170 },
                    { 'hc-key': 'sol', value: 171 },
                    { 'hc-key': 'uz', value: 172 },
                    { 'hc-key': 'cf', value: 173 },
                    { 'hc-key': 'pl', value: 174 },
                    { 'hc-key': 'kw', value: 175 },
                    { 'hc-key': 'er', value: 176 },
                    { 'hc-key': 'ga', value: 177 },
                    { 'hc-key': 'ee', value: 178 },
                    { 'hc-key': 'es', value: 179 },
                    { 'hc-key': 'iq', value: 180 },
                    { 'hc-key': 'sv', value: 181 },
                    { 'hc-key': 'ml', value: 182 },
                    { 'hc-key': 'st', value: 183 },
                    { 'hc-key': 'ir', value: 184 },
                    { 'hc-key': 'sl', value: 185 },
                    { 'hc-key': 'cnm', value: 186 },
                    { 'hc-key': 'bs', value: 187 },
                    { 'hc-key': 'sb', value: 188 },
                    { 'hc-key': 'nz', value: 189 },
                    { 'hc-key': 'mc', value: 190 },
                    { 'hc-key': 'ss', value: 191 },
                    { 'hc-key': 'kg', value: 192 },
                    { 'hc-key': 'ae', value: 193 },
                    { 'hc-key': 'ar', value: 194 },
                    { 'hc-key': 'sd', value: 195 },
                    { 'hc-key': 'bh', value: 196 },
                    { 'hc-key': 'am', value: 197 },
                    { 'hc-key': 'pg', value: 198 },
                    { 'hc-key': 'cu', value: 199 }
                ];


                $('#container2').highcharts('Map', {

                    chart: {
                        borderWidth: 5
//                            plotBackgroundImage: 'images/background1.jpg'
                    },

                    title: {
                        text: 'World TweetCount'
                    },

                    legend: {
                        layout: 'horizontal',
                        borderWidth: 0,
                        backgroundColor: 'rgba(255,255,255,0.85)',
//                            backgroundImage: 'images/background1.jpg',
                        floating: true,
                        verticalAlign: 'right',
                        y: 25
                    },

                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'bottom'
                        }
                    },

                    colorAxis: {
                        dataClasses: [
                            {
                                name: 'nexus',
                                from: 0,
                                to: 50,
                                color: '#C40401'
                            },
                            {
                                name: 'htc',
                                from: 50,
                                to: 1000,
                                color: '#66FF99'
                            }
                        ],
                        //min: 0,
                        type: 'linear',
                        minColor: '#EEEEFF',
                        maxColor: '#000022',
                        stops: [
                            [0, '#EFEFFF'],
                            [0.5, '#4444FF'],
                            [1, '#000022']
                        ]
                    },

                    plotOptions: {
                        series: {
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: function () {

                                        var name = this.name;
                                        console.log(name);
                                        if (name == "United States of America") {

                                            $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {

                                                // Make codes uppercase to match the map data
                                                $.each(data, function () {
                                                    this.code = this.code.toUpperCase();
                                                });
                                                //console.log(data);
                                                // Instanciate the map
                                                $('#container2').highcharts('Map', {

                                                    chart: {
                                                        borderWidth: 5
//                                                            plotBackgroundImage: 'images/background1.jpg'
                                                    },

                                                    title: {
                                                        text: 'US TweetCount'
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
                                                        dataClasses: [
                                                            {
                                                                name: 'nexus',
                                                                from: 0,
                                                                to: 50,
                                                                color: '#C40401'
                                                            },
                                                            {
                                                                name: 'htc',
                                                                from: 50,
                                                                to: 1000,
                                                                color: '#66FF99'
                                                            }
                                                        ],
                                                        //min: 1,
                                                        type: 'linear',
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
                                                            mapData: Highcharts.maps['countries/us/us-all'],
                                                            //mapData: Highcharts.maps['custom/world'],
                                                            joinBy: ['postal-code', 'code'],
                                                            dataLabels: {
                                                                enabled: false,
                                                                color: 'white'
                                                                //format: '{point.value}:   {point.code}'
                                                                //data: '{point.value}'
                                                            },
                                                            name: 'Tweet Count',
                                                            tooltip: {
                                                                //  pointFormat: '{point.code}: {point.value}/km²'
                                                            }

                                                        }
                                                    ]

                                                });

                                            });
                                        }
                                    }
                                }
                            }
                        }
                    },

                    series: [
                        {
                            animation: {

                                duration: 1000,
                                easing: 'easeOutBounce'
                            },
                            data: datanew1,
                            mapData: Highcharts.maps['custom/world'],
                            //joinBy: 'hc-key' ,
                            joinBy: 'hc-key',
                            name: 'World TweetCount',
                            states: {
                                hover: {
                                    color: '#BADA55'
                                }
                            },
                            dataLabels: {
                                enabled: true,
                                format: '{point.hc-key}'
                            },
                            name: 'Tweet Count',
                            tooltip: {
                                //  pointFormat: '{point.code}: {point.value}/km²'
                            }
                        }
                    ]
                });
            });
        });
//        });
    });
//

    $(document).ready(function () {
//        $("#container2").ready(function () {
        $("#submit123456").click(function () {
            $("#sentimentscore").click(function () {


                console.log("ass");
                var datanew1 = [
                    {
                        "value": 438,
                        "code1": "nj"

                    },
                    {
                        "value": 387.35,
                        "code": "ri"
                    },
                    {
                        "value": 312.68,
                        "code": "ma"
                    },
                    {
                        "value": 271.4,
                        "code": "ct"
                    },
                    {
                        "value": 209.23,
                        "code": "md"
                    },
                    {
                        "value": 195.18,
                        "code": "ny"
                    },
                    {
                        "value": 154.87,
                        "code": "de"
                    },
                    {
                        "value": 114.43,
                        "code": "fl"
                    },
                    {
                        "value": 107.05,
                        "code": "oh"
                    },
                    {
                        "value": 105.8,
                        "code": "pa"
                    },
                    {
                        "value": 86.27,
                        "code": "il"
                    },
                    {
                        "value": 83.85,
                        "code": "ca"
                    },
                    {
                        "value": 72.83,
                        "code": "hi"
                    },
                    {
                        "value": 69.03,
                        "code": "va"
                    },
                    {
                        "value": 67.55,
                        "code": "mi"
                    },
                    {
                        "value": 65.46,
                        "code": "in"
                    },
                    {
                        "value": 63.8,
                        "code": "nc"
                    },
                    {
                        "value": 54.59,
                        "code": "ga"
                    },
                    {
                        "value": 53.29,
                        "code": "tn"
                    },
                    {
                        "value": 53.2,
                        "code": "nh"
                    },
                    {
                        "value": 51.45,
                        "code": "sc"
                    },
                    {
                        "value": 39.61,
                        "code": "la"
                    },
                    {
                        "value": 39.28,
                        "code": "ky"
                    },
                    {
                        "value": 38.13,
                        "code": "wi"
                    },
                    {
                        "value": 34.2,
                        "code": "wa"
                    },
                    {
                        "value": 33.84,
                        "code": "al"
                    },
                    {
                        "value": 31.36,
                        "code": "mo"
                    },
                    {
                        "value": 30.75,
                        "code": "tx"
                    },
                    {
                        "value": 29,
                        "code": "wv"
                    },
                    {
                        "value": 25.41,
                        "code": "vt"
                    },
                    {
                        "value": 23.86,
                        "code": "mn"
                    },
                    {
                        "value": 23.42,
                        "code": "ms"
                    },
                    {
                        "value": 20.22,
                        "code": "ia"
                    },
                    {
                        "value": 19.82,
                        "code": "ar"
                    },
                    {
                        "value": 19.4,
                        "code": "ok"
                    },
                    {
                        "value": 17.43,
                        "code": "az"
                    },
                    {
                        "value": 16.01,
                        "code": "co"
                    },
                    {
                        "value": 15.95,
                        "code": "me"
                    },
                    {
                        "value": 13.76,
                        "code": "or"
                    },
                    {
                        "value": 12.69,
                        "code": "ks"
                    },
                    {
                        "value": 10.5,
                        "code": "ut"
                    },
                    {
                        "value": 8.6,
                        "code": "ne"
                    },
                    {
                        "value": 7.03,
                        "code": "nv"
                    },
                    {
                        "value": 6.04,
                        "code": "id"
                    },
                    {
                        "value": 5.79,
                        "code": "nm"
                    },
                    {
                        "value": 3.84,
                        "code": "sd"
                    },
                    {
                        "value": 3.59,
                        "code": "nd"
                    },
                    {
                        "value": 2.39,
                        "code": "mt"
                    },
                    {
                        "value": 1.96,
                        "code": "wy"
                    },
                    {
                        "value": 0.42,
                        "code": "ak"
                    }
                ];
                $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {

                    // Make codes uppercase to match the map data
                    $.each(data, function () {
                        this.code = this.code.toUpperCase();
                    });

                    // Instanciate the map
                    $('#container2').highcharts('Map', {

                        chart: {
                            borderWidth: 5
//                                plotBackgroundImage: 'images/background1.jpg'
                        },

                        title: {
                            text: 'US TweetCount'
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
                            dataClasses: [
                                {
                                    name: 'nexus',
                                    from: 0,
                                    to: 50,
                                    color: '#C40401'
                                },
                                {
                                    name: 'htc',
                                    from: 50,
                                    to: 1000,
                                    color: '#66FF99'
                                }
                            ],

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
//                    data: [{
//                        name: 'Obama',
//                        color: '#0200D0',
//                        y: parseInt(columns[3][row], 10)
//                    }, {
//                        name: 'McCain',
//                        color: '#C40401',
//                        y: parseInt(columns[4][row], 10)
//                    }],

                                data: data,
                                mapData: Highcharts.maps['countries/us/us-all'],
                                joinBy: ['postal-code', 'code'],
                                dataLabels: {
                                    enabled: true,
                                    color: 'white',
                                    format: '{point.value}:   {point.code}'
                                    //data: '{point.value}'
                                },
                                name: 'Tweet Count',
                                tooltip: {
                                    //  pointFormat: '{point.code}: {point.value}/km²'
                                }
                            }
                        ]
                    });
                });
            });
        });


    });
//    });


    $(document).ready(function () {
//        $("#container2").ready(function () {
        $("#submit123456").click(function () {
            $("#tweetcount").click(function () {


                console.log("ass");
                var datanew1 = [
                    {
                        "value": 438,
                        "code1": "nj"

                    },
                    {
                        "value": 387.35,
                        "code": "ri"
                    },
                    {
                        "value": 312.68,
                        "code": "ma"
                    },
                    {
                        "value": 271.4,
                        "code": "ct"
                    },
                    {
                        "value": 209.23,
                        "code": "md"
                    },
                    {
                        "value": 195.18,
                        "code": "ny"
                    },
                    {
                        "value": 154.87,
                        "code": "de"
                    },
                    {
                        "value": 114.43,
                        "code": "fl"
                    },
                    {
                        "value": 107.05,
                        "code": "oh"
                    },
                    {
                        "value": 105.8,
                        "code": "pa"
                    },
                    {
                        "value": 86.27,
                        "code": "il"
                    },
                    {
                        "value": 83.85,
                        "code": "ca"
                    },
                    {
                        "value": 72.83,
                        "code": "hi"
                    },
                    {
                        "value": 69.03,
                        "code": "va"
                    },
                    {
                        "value": 67.55,
                        "code": "mi"
                    },
                    {
                        "value": 65.46,
                        "code": "in"
                    },
                    {
                        "value": 63.8,
                        "code": "nc"
                    },
                    {
                        "value": 54.59,
                        "code": "ga"
                    },
                    {
                        "value": 53.29,
                        "code": "tn"
                    },
                    {
                        "value": 53.2,
                        "code": "nh"
                    },
                    {
                        "value": 51.45,
                        "code": "sc"
                    },
                    {
                        "value": 39.61,
                        "code": "la"
                    },
                    {
                        "value": 39.28,
                        "code": "ky"
                    },
                    {
                        "value": 38.13,
                        "code": "wi"
                    },
                    {
                        "value": 34.2,
                        "code": "wa"
                    },
                    {
                        "value": 33.84,
                        "code": "al"
                    },
                    {
                        "value": 31.36,
                        "code": "mo"
                    },
                    {
                        "value": 30.75,
                        "code": "tx"
                    },
                    {
                        "value": 29,
                        "code": "wv"
                    },
                    {
                        "value": 25.41,
                        "code": "vt"
                    },
                    {
                        "value": 23.86,
                        "code": "mn"
                    },
                    {
                        "value": 23.42,
                        "code": "ms"
                    },
                    {
                        "value": 20.22,
                        "code": "ia"
                    },
                    {
                        "value": 19.82,
                        "code": "ar"
                    },
                    {
                        "value": 19.4,
                        "code": "ok"
                    },
                    {
                        "value": 17.43,
                        "code": "az"
                    },
                    {
                        "value": 16.01,
                        "code": "co"
                    },
                    {
                        "value": 15.95,
                        "code": "me"
                    },
                    {
                        "value": 13.76,
                        "code": "or"
                    },
                    {
                        "value": 12.69,
                        "code": "ks"
                    },
                    {
                        "value": 10.5,
                        "code": "ut"
                    },
                    {
                        "value": 8.6,
                        "code": "ne"
                    },
                    {
                        "value": 7.03,
                        "code": "nv"
                    },
                    {
                        "value": 6.04,
                        "code": "id"
                    },
                    {
                        "value": 5.79,
                        "code": "nm"
                    },
                    {
                        "value": 3.84,
                        "code": "sd"
                    },
                    {
                        "value": 3.59,
                        "code": "nd"
                    },
                    {
                        "value": 2.39,
                        "code": "mt"
                    },
                    {
                        "value": 1.96,
                        "code": "wy"
                    },
                    {
                        "value": 0.42,
                        "code": "ak"
                    }
                ];
                $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {

                    // Make codes uppercase to match the map data
                    $.each(data, function () {
                        this.code = this.code.toUpperCase();
                    });

                    // Instanciate the map
                    $('#container2').highcharts('Map', {

                        chart: {
                            borderWidth: 5
//                                plotBackgroundImage: 'images/background1.jpg'
                        },

                        title: {
                            text: 'US TweetCount'
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
                            dataClasses: [
                                {
                                    name: 'nexus',
                                    from: 0,
                                    to: 50,
                                    color: '#C40401'
                                },
                                {
                                    name: 'htc',
                                    from: 50,
                                    to: 1000,
                                    color: '#66FF99'
                                }
                            ],

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
//                    data: [{
//                        name: 'Obama',
//                        color: '#0200D0',
//                        y: parseInt(columns[3][row], 10)
//                    }, {
//                        name: 'McCain',
//                        color: '#C40401',
//                        y: parseInt(columns[4][row], 10)
//                    }],

                                data: data,
                                mapData: Highcharts.maps['countries/us/us-all'],
                                joinBy: ['postal-code', 'code'],
                                dataLabels: {
                                    enabled: true,
                                    color: 'white',
                                    format: '{point.value}:   {point.code}'
                                    //data: '{point.value}'
                                },
                                name: 'Tweet Count',
                                tooltip: {
                                    //  pointFormat: '{point.code}: {point.value}/km²'
                                }
                            }
                        ]
                    });
                });
            });
//            });
        });
    });

    $(document).ready(function () {
        $("#submit123456").click(function () {
            console.log("devil");
            $('#container3').highcharts({


                chart: {
                    type: 'spline',
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, 'rgb(96, 96, 96)'],
                            [1, 'rgb(16, 16, 16)']
                        ]
                    }
                },
                title: {
                    style: {
                        color: '#FFF',
                        font: '24px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                    },
                    labels: {
                        style: {
                            color: '#FFF',
                            fontWeight: 'bold'
                        }
                    },
                    text: 'Tweet Count'
                },
                subtitle: {
                    style: {
                        color: '#FFF',
                        font: '20px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                    },
                    text: 'Source: Twitter'
                },
                xAxis: {
                    labels: {
                        style: {
                            color: '#FFF',
                            fontWeight: 'bold'
                        }
                    },
                    type: 'datetime',
                    dateTimeLabelFormats: { // don't display the dummy year
                        month: '%e. %b',
                        year: '%b',
                        hour: '%e.%b %H :%M'
                    },
                    title: {
                        text: 'Time',
                        style: {
                            color: '#FFF',
                            font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                        }
                    }
                },
                yAxis: {
                    labels: {
                        style: {
                            color: '#FFF',
                            fontWeight: 'bold'
                        }
                    },
                    title: {

                        text: 'Number Of Tweets',
                        style: {
                            color: '#FFF',
                            font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                        }

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
                        labels: {
                            style: {
                                color: '#FFF',
                                fontWeight: 'bold'
                            }
                        },
                        style: {
                            color: '#FFF',
                            font: '20px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                        },
                        name: "brand",
                        data: [
                            [1409820941906, 10 ],
                            [1409828141906, 40 ],
                            [1409835341906, 30 ]
                        ]
                    }
                ]
            });
            console.log("devil");
        });
    });


    $(document).ready(function () {
        $("#submit123456").click(function () {
            $("#influential").click(function () {
                console.log("devil");
                $('#container3').highcharts({


                    chart: {
                        type: 'spline',
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, 'rgb(96, 96, 96)'],
                                [1, 'rgb(16, 16, 16)']
                            ]
                        }
                    },
                    title: {
                        style: {
                            color: '#FFF',
                            font: '24px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                        },
                        labels: {
                            style: {
                                color: '#FFF',
                                fontWeight: 'bold'
                            }
                        },
                        text: 'Tweet Count'
                    },
                    subtitle: {
                        style: {
                            color: '#FFF',
                            font: '20px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                        },
                        text: 'Source: Twitter'
                    },
                    xAxis: {
                        labels: {
                            style: {
                                color: '#FFF',
                                fontWeight: 'bold'
                            }
                        },
                        type: 'datetime',
                        dateTimeLabelFormats: { // don't display the dummy year
                            month: '%e. %b',
                            year: '%b',
                            hour: '%e.%b %H :%M'
                        },
                        title: {
                            text: 'Time',
                            style: {
                                color: '#FFF',
                                font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                            }
                        }
                    },
                    yAxis: {
                        labels: {
                            style: {
                                color: '#FFF',
                                fontWeight: 'bold'
                            }
                        },
                        title: {
                            style: {
                                color: '#FFF',
                                font: '24px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                            },
                            text: 'Number Of Tweets',
                            style: {
                                color: '#FFF',
                                font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                            }
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
                            labels: {
                                style: {
                                    color: '#FFF',
                                    fontWeight: 'bold'
                                }
                            },
                            style: {
                                color: '#FFF',
                                font: '20px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                            },
                            name: "brand",
                            data: [
                                [1409820941906, 10 ],
                                [1409828141906, 40 ],
                                [1409835341906, 30 ]
                            ]
                        }
                    ]
                });
                console.log("devil");
            });
        });
    });


    $(document).ready(function () {
        $("#submit123456").click(function () {
            $("#trending").click(function () {
                console.log("devil12345");
//                $('#container3').highcharts({
//
//
//                    chart: {
//                        type: 'spline',
//                        backgroundColor: {
//                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//                            stops: [
//                                [0, 'rgb(96, 96, 96)'],
//                                [1, 'rgb(16, 16, 16)']
//                            ]
//                        }
//                        //plotBackgroundImage: 'images/twitter1.png'
//                    },
//                    title: {
//                        style: {
//                            color: '#FFF',
//                            font: '24px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
//                        },
//                        labels: {
//                            style: {
//                                color: '#FFF',
//                                fontWeight: 'bold'
//                            }
//                        },
//                        text: 'Tweet Count'
//                    },
//                    subtitle: {
//                        style: {
//                            color: '#FFF',
//                            font: '20px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
//                        },
//                        text: 'Source: Twitter'
//                    },
//                    xAxis: {
//                        labels: {
//                            style: {
//                                color: '#FFF',
//                                fontWeight: 'bold'
//                            }
//                        },
//                        type: 'datetime',
//                        style: {
//                            color: '#FFF',
//                            font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
//                        },
//                        dateTimeLabelFormats: { // don't display the dummy year
//                            month: '%e. %b',
//                            year: '%b',
//                            hour: '%e.%b %H :%M'
//                        },
//                        title: {
//                            text: 'Time',
//                            style: {
//                                color: '#FFF',
//                                font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
//                            }
//                        }
//                    },
//                    yAxis: {
//                        labels: {
//                            style: {
//                                color: '#FFF',
//                                fontWeight: 'bold'
//                            }
//                        },
//                        title: {
//                            text: 'Number Of Tweets',
//                            style: {
//                                color: '#FFF',
//                                font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
//                            }
//                        }
//                    },
//                    plotOptions: {
//                        line: {
//                            dataLabels: {
//                                enabled: true
//                            },
//                            enableMouseTracking: true
//                        }
//                    },
//                    series: [
//                        {
//                            labels: {
//                                style: {
//                                    color: '#FFF',
//                                    fontWeight: 'bold'
//                                }
//                            },
//                            style: {
//                                color: '#FFF',
//                                font: '20px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
//                            },
//                            name: "brand",
//                            data: [
//                                [1409820941906, 10 ],
//                                [1409828141906, 40 ],
//                                [1409835341906, 30 ]
//                            ]
//                        }
//                    ]
//                });
//                console.log("devil");
//            });
//        });
//    });
//});


                Highcharts.setOptions({
                    global: {
                        useUTC: false
                    }
                });

                $('#container3').highcharts({
                    chart: {
                        type: 'spline',
                        animation: Highcharts.svg, // don't animate in old IE
                        marginRight: 10,
                        events: {
                            load: function () {

                                // set up the updating of the chart each second
                                var series = this.series[0];
                                setInterval(function () {
                                    var x = (new Date()).getTime(), // current time
                                        y = Math.random();
                                    series.addPoint([x, y], true, true);
                                }, 1000);
                            }
                        }
                    },
                    title: {
                        text: 'Live random data'
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
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: false
                            },
                            enableMouseTracking: false
                        }
                    },
                    series: [
                        {
                            name: 'Random data',
                            data: (function () {
                                // generate an array of random data
                                var data = [],
                                    time = (new Date()).getTime(),
                                    i;

                                for (i = -19; i <= 0; i += 1) {
                                    data.push({

                                        x: time + i * 1000,
//                                        y: Math.random()
                                        y:0
                                    });
                                }
                                return data;
                            }())
                        }
                    ]
                });
            });
        });
    });
});