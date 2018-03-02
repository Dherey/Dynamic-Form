function next1(){
    document.getElementById("error").style.display="block";
    document.getElementById("first").style.display="block";
}

function next2(){
    document.getElementById("first").style.display="block";
    document.getElementById("second").style.display="block";
    document.getElementById("newname").innerHTML= "Hey,  " + document.getElementById("name").value+ ",  How Old Are You? ";
}

function next3(){
    document.getElementById("second").style.display="block";
    document.getElementById("third").style.display="block";
    var age = parseInt(document.getElementById("age").value);
}

function agevalidation(){
    var age = parseInt(document.getElementById("age").value);
    if(age>15 && age<=25){
        document.getElementById("second").style.display="block";
        document.getElementById("second").ondblclick =next4();
    }
    else{
        document.getElementById("second").style.display="block";
        document.getElementById("second").ondblclick = error();
    }
}

function error(){
    document.getElementById("error").style.display="block";
    document.getElementById("errorp").innerHTML = "Sorry It Seems You Are Not Within The Age Range, " + document.getElementById("name").value +" You Are Not Quallified For This Programme Please Try Again Some Other time";
}

function success(){
    document.getElementById("success").style.display="block";
    document.getElementById("successp").innerHTML = "Congrats, " + document.getElementById("name").value +
    " <br>Congrats "  + document.getElementById("name").value +" You Will Be Contacted Shortly For Your Work Placement FOR 2018";
}

function next4(){
    document.getElementById("third").style.display="none";
    document.getElementById("fourth").style.display="block";
}

function next5(){
    document.getElementById("fourth").style.display="block";
    document.getElementById("fifth").style.display= "block";
}

function next6(){
    var cgpa = document.getElementById("cgpa").value;
    if(cgpa>=3.5&& cgpa<=5.0){
        document.getElementById("fifth").style.display="block";
        document.getElementById("sixth").style.display= "block";
    }
    else{
        document.getElementById("fifth").style.display="block";
        document.getElementById("fifth").ondblclick= error();
    }
}

function next7(){
    document.getElementById("sixth").style.display="block";
    document.getElementById("seventh").style.display= "block";
}

function next8(){
    document.getElementById("seventh").style.display="block";
    document.getElementById("eighth").style.display= "block";
}

function next9(){
    document.getElementById("eighth").style.display="block";
    document.getElementById("nineth").style.display= "block";
}

function next10(){
    document.getElementById("nineth").style.display= "block";
    document.getElementById("tenth").style.display= "block";
    document.getElementById("peaceout").innerHTML = 

    ("Hey "+document.getElementById("name").value + " , you are "+ 
    document.getElementById("age").value + " years old, <br>you are a "+
    document.getElementById("gender").value + ". <br>Your CGPA is  "+
    document.getElementById("cgpa").value + ". You attend "+
    document.getElementById("uni").value + ", faculty of  "+
    document.getElementById("faculty").value + ", department of  "+
    document.getElementById("dept").value + ". <br>Your Email Address is "+
    document.getElementById("mail").value + "  . " + ". <br>Your Preferred Choice For A Job Is "+
    document.getElementById("job").value + ". <br>Your Preferred Location For A Job Is "+
    document.getElementById("Location").value + "  .");
}



//Copyright 
//Rone-Orugboh Ajoritsedere
//150805515
//400 Level Computer Science UNILAG
//CSC 405




