
		






function checkstatus() {
    
    let login=localStorage.getItem("login_status");
    console.log(login);
    var u1 =document.getElementById("scoreboard");
    var u2 =document.getElementById("nologin");
    
    if (login==1) {
        console.log("block");
        u1.style.display = "block";    //if login, display scoreboard
        u2.style.display = "none";  //hide alert login
    } else {
        console.log("nologin");
        u1.style.display = "none";     //hide scoreboard
        u2.style.display = "block";  //alert user login
    }
}


function goto_signin(){
    setTimeout(function(){
        window.location.href = "login.html";//goto login page
    },600);
}

