var sec = 00;
var min = 00;
var hour = 00;


var secVal = document.getElementById("sec");
var minVal = document.getElementById("min");
var hourVal = document.getElementById("hour");


var interval;

function renderVal(){
    secVal.innerHTML= sec;
    minVal.innerHTML= min;
    hourVal.innerHTML= hour;
}


function timestart(){
    startbtn.disabled = true;
    stopbtn.disabled = false;
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
        if(min == 60){
            hour++;
            min = 0;
        }
    }
    renderVal();
    console.log(sec);
}


function timer(){
    interval = setInterval(function(){
        timestart();
    },1000);
}


function stopTimer(){
    stopbtn.disabled = true;
    startbtn.disabled = false;
    clearInterval(interval);
}


function resettime(){
    sec = 0;
    min = 0;
    hour = 0;
    stopTimer();
    renderVal();
}




  



