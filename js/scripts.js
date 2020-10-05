
       
    function myFunction(){

        var gender = document.querySelector('input[name="Gender"]:checked').value;

        var myStringDate = document.getElementById("dateProvided").value;

        var days = new Array(7);
        days[0] = "Sunday";
        days[1] = "Monday";
        days[2] = "Tuesday";
        days[3] = "Wednesday";
        days[4] = "Thursday";
        days[5] = "Friday";
        days[6] = "Saturday";

        var maleAkanNames =  ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        var femaleAkanNames =  ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

        var myDate = new Date(myStringDate);
        var dayOfWeek = myDate.getDay();
        var userDate = days[dayOfWeek];
        var maleAkanName = maleAkanNames[dayOfWeek];
        var femaleAkanName = femaleAkanNames[dayOfWeek];

        document.getElementById("message").innerHTML = "I was born on a " + userDate + "!";
        
     
        if (gender === "male") {
            document.getElementById("Akan Name").innerHTML = "My Akan name is " + maleAkanName + "!";
        }
        else {
            document.getElementById("Akan Name").innerHTML = "My Akan name is " + femaleAkanName + "!";
        }
    }