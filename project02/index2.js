function clearErrors() {
    errors = document.getElementsByClassName("formerror");
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    //sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var namee = document.forms["myForm"]["username"].value;
    if (namee.length < 4) {
        seterror("name", "*Length of name is too short!");
        returnval = false;
    }
    if (namee.length === 0) {
        seterror("name", "");
        returnval = false;
    }
    if (namee.length > 15) {
        seterror("name", "*Length of name is too long!");
        returnval = false;
    }

    var email = document.forms["myForm"]["email"].value;
    if (email.length > 40) {
        seterror("email", "*Email length is too long!");
        returnval = false;
    }
    if (email.length === 0) {
        seterror("email", "");
        returnval = false;
    }

    var password = document.forms["myForm"]["password"].value;
    if (password.length < 6) {
        seterror("password", "*Password should be atleast 6 characters long!");
        returnval = false;
    }
    if (password.length === 0) {
        seterror("password", "");
        returnval = false;
    }
    if (password.length > 25) {
        seterror("password", "*Paasword is too long!");
        returnval = false;
    }

    var cpassword = document.forms["myForm"]["confirm"].value;
    if (cpassword != password) {
        seterror("confirm", "*Password and Confirm password should be same!");
        returnval = false;
    }
    if (cpassword.length === 0) {
        seterror("confirm", "");
        returnval = false;
    }

    return returnval;
}