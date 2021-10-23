
function show_sign_window(){
    let pop_up = document.querySelector("#sign");
    pop_up.style.visibility = 'visible';
}

function close_sign_window(){
    let pop_up = document.querySelector("#sign");
    pop_up.style.visibility = 'hidden';
}

function register_but(){
    if(document.querySelector("#reg_form1").style.visibility == "hidden"){
    document.querySelector("#reg_form1").style.visibility = "visible";
    document.querySelector("#reg_form2").style.visibility = "visible";
    }
    else{}
}

function signin_but(){
    if(document.querySelector("#reg_form1").style.visibility == "visible"){
        document.querySelector("#reg_form1").style.visibility = "hidden";
        document.querySelector("#reg_form2").style.visibility = "hidden";
    }
    else{}
}
