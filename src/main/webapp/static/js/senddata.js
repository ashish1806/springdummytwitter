$(document).ready(function() {
    var selText;

//        $("#goair").click(function () {

            $(".dropdown-menu li a").click(function () {

                selText = $(this).text();
                console.log(selText);

            console.log("zxcvbn");

            var entity1 = (document.getElementById("tags1").value);
            var entity2 = (document.getElementById("tags2").value);
            var startdate = (document.getElementById("startdate").value);

            startdate = startdate.split("/");
            var newDate = startdate[1] + "/" + startdate[0] + "/" + startdate[2];
            startdate = new Date(newDate).getTime();
//        alert();

//        console.log(entity1);
//        console.log(startdate);

            var enddate = (document.getElementById("enddate").value);

            enddate = enddate.split("/");
            var newDate = enddate[1] + "/" + enddate[0] + "/" + enddate[2];
            enddate = new Date(newDate).getTime();
//        alert();
            console.log(startdate);
            console.log(enddate);


            var text = { "entity1": entity1,
                "entity2": entity2,
                "startdate": startdate,
                "enddate": enddate,
                "format": selText };

//        $.ajax ({
//            url: "./save",
//            type: "POST",
//            data: JSON.stringify(text),
//            dataType: "json",
//            contentType: "application/json; charset=utf-8",
//            success: function(){
//                alert("success ");
//            }
//        });


//        var e=(document.getElementById("Maplist1").value);


//        var e = document.getElementById("qaz").text;
//        var strUser = e.options[e.selectedIndex].value;
//        console.log(e);

        });
    });
//});