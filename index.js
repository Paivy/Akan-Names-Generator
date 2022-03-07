//This is a function used to refresh the form after it gets name
function formReset(){
    document.getElementById('form_data').reset();
}

function akanForm(){
    var gender = document.getElementById('gender').value;
    var birthday = document.getElementById('birthday').value;
    

    //an array of birthdays in accordance to the name
    const akanArray = [
        [ 'Sunday', 'Kwasi', 'Akosua'],
        [ 'Monday', 'Kwado', 'Adwoa'],
        [ 'Tuesday', 'Kwabena', 'Abenaa'],
        [ 'Wednesday','Kwaku', 'Akua'],
        [ 'Thursday', 'Yaw', 'Yaa'],
        [ 'Friday', 'Kofi', 'Afua'],
        [ 'Saturday', 'Kwame', 'Ama'],
    ];
    //check for the day of birth from the birthday inputed
    const d = new Date(birthday);
    let day = d.getDay();
    let year = d.getFullYear();
    

    var dayofTheWeek = akanArray[day][0];
    var maleName = akanArray[day][1];
    var femaleName = akanArray[day][2];
    const output = document.getElementById('message');
    console.log(dayofTheWeek);


    // conditional statements

    if (gender == ''){
        alert('Kindly specify the gender');
    }else if (year >=2021){
            alert('Kindly give a valid birthday');
        }else if (gender == 'male'){
            output.innerHTML =
            'You were born on a ' +
            dayofTheWeek +
            ' and your name is ' +
            maleName;
        }else if (gender == 'female'){
            output.innerHTML =
            'You were born on a ' +
            dayofTheWeek +
            ' and your akan name is ' +
            femaleName;
        }
        formReset();

}



    


