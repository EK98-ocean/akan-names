
var dayOfTheWeek = function (cc, yy,dd, mm) {
    return (((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd) % 7;
    }
    
    //cc = century digits 
    //yy = year digits
    // mm = month digits
    // dd = day digits
    
    var cc = parseInt(prompt("Enter the first two digits of the year of your birth (e.g. if you were born in 1990, enter '19'):"));
    var yy = parseInt(prompt("Enter the last two digits of the year of your birth (e.g. if you were born in 1990, enter '90'):"));
    var mm = parseInt(prompt("Enter the month of your birth in number form (e.g. Jan =1, Feb =2 e.t.c):"));
    var dd = parseInt(prompt("Enter the day of your birth (e.g. if date of birth is 1st September, enter 1:"));