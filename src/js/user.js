
		






function checkstatus() {
    
    let login=localStorage.getItem("login_status");
    console.log(login);
    var u1 =document.getElementById("scoreboard");
    console.log(login);
    if (login==1) {
        console.log("block");
        u1.style.display = "block";    
    } else {
        console.log("none");
        u1.style.display = "none";     
    }
}


