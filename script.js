var day = document.getElementById("dd");
var month = document.getElementById("mm");
var year = document.getElementById("yyyy");
var button = document.getElementById("request");
var reday = document.getElementById("day");
var remon = document.getElementById("month");
var reyear = document.getElementById("year");
var erday = document.getElementById("errdd");
var ermon = document.getElementById("errmm");
var eryer = document.getElementById("erryy");

const currentDate = new Date(); 
const cuyear = currentDate.getFullYear();
const cumonth = currentDate.getMonth() + 1;
const cuday = currentDate.getDate();

button.addEventListener("click", getinput);

function getinput(){
    var usday = day.value;
    var usmon = month.value;
    var usyear = year.value;

    day.style.borderColor ='hsl(0, 0%, 86%)'
    month.style.borderColor ='hsl(0, 0%, 86%)'
    year.style.borderColor ='hsl(0, 0%, 86%)'

    const myLabel = document.querySelector('label[for="dd"]');
    const myLabe2 = document.querySelector('label[for="mm"]');
    const myLabe3 = document.querySelector('label[for="yyyy"]');

    erday.innerHTML ='';
    ermon.innerHTML ='';
    eryer.innerHTML ='';

    myLabel.style.color = 'hsl(0, 0%, 8%)'
    myLabe2.style.color = 'hsl(0, 0%, 8%)'
    myLabe3.style.color = 'hsl(0, 0%, 8%)'

    
    if(usday==''){
        erday.innerHTML ='This field is required';
        myLabel.style.color = 'crimson'
        day.style.borderColor = 'crimson'
    }
    else if(usday > 31){
        erday.innerHTML ='Must be a valid date';
        myLabel.style.color = 'crimson'
        day.style.borderColor = 'crimson'
    }
    else{
    var aday = cuday - usday;
    if(aday <=0){
    reday.innerHTML = usday;
    }
    else{
    reday.innerHTML = aday;
    }
    }   

    
    if(usmon==''){
        ermon.innerHTML ='This field is required';
        myLabe2.style.color = 'crimson'
        month.style.borderColor = 'crimson'
    }
    else if(usmon > 12){
        ermon.innerHTML ='Must be a valid month';
        myLabe2.style.color = 'crimson'
        month.style.borderColor = 'crimson'
    }
    else{
    var amon = cumonth - usmon;
    if(amon <0){
    remon.innerHTML = usmon;
    }
    else{
    remon.innerHTML = amon;
    }
    }  

    if(usyear==''){
        eryer.innerHTML ='This field is required';
        myLabe3.style.color = 'crimson'
        year.style.borderColor  = 'crimson'
    }
    else if(usyear > cuyear){
        eryer.innerHTML ='Must be a valid year';
        myLabe3.style.color = 'crimson'
        year.style.borderColor  = 'crimson'
    }
    else{
        var  ayear = cuyear - usyear;
        reyear.innerHTML = ayear;
    }  

}