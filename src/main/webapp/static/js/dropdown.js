$(document).ready(function() {
    $("#myflag3").click(function () {
        console.log("142342");



        //create a form
        var f = document.createElement("form");
        f.setAttribute('method',"post");
        f.setAttribute('action',"submit.php");

        //create input element
        var i = document.createElement("input");
        i.type = "text";
        i.name = "user_name";
        i.id = "user_name1";


        var j = document.createElement("input");
        j.type = "text";
        j.name = "user_name";
        j.id = "user_name2";

        //create a checkbox


        //create a button
        var s = document.createElement("input");
        s.type = "submit";
        s.value = "Submit";

        // add all elements to the form
        f.appendChild(i);
        f.appendChild(j);
        f.appendChild(s);

        // add the form inside the body
        $("body").append(f);   //using jQuery or
        document.getElementsByTagName('body')[0].appendChild(f); //pure javascript






//        var createform = document.createElement('form'); // Create New Element Form
//        createform.setAttribute("action", ""); // Setting Action Attribute on Form
//        createform.setAttribute("method", "post"); // Setting Method Attribute on Form
//
//
////        var heading = document.createElement('h2'); // Heading of Form
////        heading.innerHTML = "Contact Form ";
////        createform.appendChild(heading);
////
////        var line = document.createElement('hr'); // Giving Horizontal Row After Heading
////        createform.appendChild(line);
////
////        var linebreak = document.createElement('br');
////        createform.appendChild(linebreak);
////
////        var namelabel = document.createElement('label'); // Create Label for Name Field
////        namelabel.innerHTML = "Your Name : "; // Set Field Labels
////        createform.appendChild(namelabel);
//
//        var inputelement = document.createElement('input'); // Create Input Field for Name
//        inputelement.setAttribute("type", "text");
//        inputelement.setAttribute("name", "dname");
//        createform.appendChild(inputelement);
//
//        var linebreak = document.createElement('br');
//        createform.appendChild(linebreak);
//
//        var emaillabel = document.createElement('label'); // Create Label for E-mail Field
//        emaillabel.innerHTML = "Your Email : ";
//        createform.appendChild(emaillabel);
//
//        var emailelement = document.createElement('input'); // Create Input Field for E-mail
//        emailelement.setAttribute("type", "text");
//        emailelement.setAttribute("name", "demail");
//        createform.appendChild(emailelement);
//
//        var emailbreak = document.createElement('br');
//        createform.appendChild(emailbreak);
//
//        var messagelabel = document.createElement('label'); // Append Textarea
//        messagelabel.innerHTML = "Your Message : ";
//        createform.appendChild(messagelabel);
//
//        var texareaelement = document.createElement('textarea');
//        texareaelement.setAttribute("name", "dmessage");
//        createform.appendChild(texareaelement);
//
//        var messagebreak = document.createElement('br');
//        createform.appendChild(messagebreak);
//
//        var submitelement = document.createElement('input'); // Append Submit Button
//        submitelement.setAttribute("type", "submit");
//        submitelement.setAttribute("name", "dsubmit");
//        submitelement.setAttribute("value", "Submit");
//        createform.appendChild(submitelement);
    });
});