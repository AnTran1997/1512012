document.addEventListener("DOMContentLoaded",function(){
    
});

function submitForm(){
    if (validateForm()){
        alert("Submit form successfully. Thank you!");
        location.reload();
    }
}

function validateForm(){
    var firstName = getValueOfInput("firstNameForm","fName");
    var lastName = getValueOfInput("lastNameForm","lName");
    var birthday = getValueOfInput("lastNameForm","birthDay");

    //check if required fields are empty
    if (isEmpty(firstName) || isEmpty(lastName) || isEmpty(birthday))
    {
        alert("You must fill out (*) fields");
        return false;
    }

    //check validation of First Name and Last Name
    if (stringContainsOnlySpace(firstName) || stringContainsOnlySpace(lastName))
    {
        alert("Name is invalid! Please input your Name again");
        return false;
    }
    if (!validateName(firstName) || !validateName(lastName)){
        alert("! First Name and Last Name only contain characters and space");
        return false;
    } 


    //check validation of birthday
    if (!validateDate(birthday)){
        alert("! Your birthday is not right format");   //Note: year is not more than 2017
        return false;
    }

    return true;
}

//Check if value in input form is empty
function isEmpty(str){
    if (str == ""){
        return true;
    }
    return false;
}

//Check First Name and Last Name are only allowed to contain characters and space
function validateName(name){
    if (/^[a-zA-Z ]+$/.test(name)){
        return true;
    } 
    return false;
}

function getValueOfInput(formName, labelName){
    return document.forms[formName][labelName].value;
}

//Check if string (First Name and Last Name) only contains white space
function stringContainsOnlySpace(str){
    var txt = str.replace(/\s/g, "");   //replace " " in string by ""
    if (txt.length == 0){
        return true;
    }
    return false;
}

//Check inputted birthday
function validateDate(dateString)
{
    // First check for the pattern
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 2017 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};

//Get value of selected option from tag <select> HTML
function selectOption(id){
    var selectedOption = document.getElementById(id);
    return selectedOption.options[selectedOption.selectedIndex].text;
}



