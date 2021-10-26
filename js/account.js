/** 
function show_sign_window(){
    let pop_up = document.querySelector("#sign");
    pop_up.style.visibility = 'visible';
}

function close_sign_window(){
    let pop_up = document.querySelector("#sign");
    pop_up.style.visibility = 'hidden';
}

function register_but(){
    document.querySelector("#reg_firstname").style.visibility == "hidden";
    document.querySelector("#reg_firstname").style.visibility = "visible";
    document.querySelector("#reg_lastname").style.visibility = "visible";
}

function signin_but(){
    if(document.querySelector("#reg_firstname").style.visibility == "visible"){
        document.querySelector("#reg_firstname").style.visibility = "hidden";
        document.querySelector("#reg_lastname").style.visibility = "hidden";
    }
    else{}
}

*/

function sign_up(){
	let container = document.getElementById('container');
	container.classList.add("right-panel-active");
}

function sign_in(){
	let container = document.getElementById('container');
	container.classList.remove("right-panel-active");
}
