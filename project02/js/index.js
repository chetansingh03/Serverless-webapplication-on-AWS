"use strict";

function clearError() {
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
    clearError();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms["myForm"]["fname"].value;
    if (name.length < 4) {
        seterror("name", "*Name is not valid!");
        returnval = false;
    }
    if (name.length > 20) {
        seterror("name", "*Name is not valid!");
        returnval = false;
    }

    var password = document.forms["myForm"]["fpass"].value;

    if (password.length < 6) {
        seterror("pass", "*Password is not valid!");
        returnval = false;
    }
    if (password.length > 25) {
        seterror("pass", "*Password is not valid!");
        returnval = false;
    }
    return returnval;
}