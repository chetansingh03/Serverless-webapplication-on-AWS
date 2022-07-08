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
    var name = document.forms["myForm"]["fname"].value;
    if (name.length < 4) {
        seterror("name", "*Length of name is too short!");
        returnval = false;
    }
    if (name.length > 15) {
        seterror("name", "*Length of name is too long!");
        returnval = false;
    }

    var email = document.forms["myForm"]["femail"].value;
    if (email.length > 40) {
        seterror("email", "*Email length is too long!");
        returnval = false;
    }

    var password = document.forms["myForm"]["fpass"].value;
    if (password.length < 6) {
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }
    if (password.length > 25) {
        seterror("pass", "*Password should be atmost 25 characters long!");
        returnval = false;
    }

    var cpassword = document.forms["myForm"]["fconfirm"].value;
    if (cpassword != password) {
        seterror("confirm", "*Password and Confirm password should be same!");
        returnval = false;
    }

    return returnval;
}