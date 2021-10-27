
		






function checkstatus() {
    
    let login=localStorage.getItem("login_status");
    console.log(login);
    var u1 =document.getElementById("scoreboard");
    var u2 =document.getElementById("nologin");
    if (login==1) {
        console.log("block");
        u1.style.display = "block";    
        u2.style.display = "none";  
    } else {
        console.log("nologin");
        u1.style.display = "none";     
        u2.style.display = "block";  
    }
}


function goto_signin(){
    setTimeout(function(){
        window.location.href = "login.html";
    },600);
}

