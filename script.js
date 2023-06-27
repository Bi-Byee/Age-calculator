var dday = document.getElementById("dd");
var dmonth = document.getElementById("mm");
var dyear = document.getElementById("yyyy");
var button = document.getElementById("request");
var reday = document.getElementById("day");
var remon = document.getElementById("month");
var reyear = document.getElementById("year");
var erday = document.getElementById("errdd");
var ermon = document.getElementById("errmm");
var eryer = document.getElementById("erryy");

const currentDate = new Date();

button.addEventListener("click", getinput);

function getinput(){
    var usday = dday.value;
    var usmon = dmonth.value;
    var usyear = dyear.value;

    var years = currentDate.getFullYear() - usyear;
    var months = currentDate.getMonth() - usmon;
    var days = currentDate.getDate() - usday;

    dday.style.borderColor ='hsl(0, 0%, 86%)'
    dmonth.style.borderColor ='hsl(0, 0%, 86%)'
    dyear.style.borderColor ='hsl(0, 0%, 86%)'

    const myLabel = document.querySelector('label[for="dd"]');
    const myLabe2 = document.querySelector('label[for="mm"]');
    const myLabe3 = document.querySelector('label[for="yyyy"]');

    erday.innerHTML ='';
    ermon.innerHTML ='';
    eryer.innerHTML ='';

    myLabel.style.color = 'hsl(0, 0%, 8%)'
    myLabe2.style.color = 'hsl(0, 0%, 8%)'
    myLabe3.style.color = 'hsl(0, 0%, 8%)'
 
    if (months < 0 || (months === 0 && days < 0)) {
        years--; // Subtract 1 from the years if the current date is before the birth date
        months += 12; // Add 12 months to the months
        console.log('here')
      }
      
      if (days < 0) {
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
        days += lastMonth.getDate(); // Add the number of days in the last month
        months--;
        console.log('here2')
      }


    switch(usday){
        case '':erday.innerHTML ='This field is required';
                myLabel.style.color = 'crimson'
                dday.style.borderColor = 'crimson'
                break;

        case (usday > 31 ): erday.innerHTML ='Must be a valid date';
                            myLabel.style.color = 'crimson';
                            dday.style.borderColor = 'crimson';
                            break;

        default:reday.innerHTML = days;
                break;
    }
    
    switch(usmon){
        case '':ermon.innerHTML ='This field is required';
                myLabe2.style.color = 'crimson'
                dmonth.style.borderColor = 'crimson'
                break;

        case (usday > 31 ): ermon.innerHTML ='Must be a valid month';
                            myLabe2.style.color = 'crimson'
                            dmonth.style.borderColor = 'crimson'
                            break;

        default:remon.innerHTML = months;
                break;
    }
    
    switch(usyear){
        case '':eryer.innerHTML ='This field is required';
                myLabe3.style.color = 'crimson'
                dyear.style.borderColor  = 'crimson'
                break;

        case (usday > 31 ): eryer.innerHTML ='Must be a valid year';
                            myLabe3.style.color = 'crimson'
                            dyear.style.borderColor  = 'crimson'
                            break;

        default:reyear.innerHTML = years;
                break;
    } 

}
