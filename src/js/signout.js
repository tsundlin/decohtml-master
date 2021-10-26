

function signout() {
    
    let login=localStorage.getItem("login_status");
    console.log(login);
    var u1 =document.getElementById("account");
    var u2 =document.getElementById("signout");
    console.log(login);
    if (login==1) {
        console.log("block");
        u1.style.display = "none";    
        u2.style.display = "block";   
    } else {
        console.log("none");
        u1.style.display = "block";     
        u2.style.display = "none";   
    }
}

function logout(){
    if (confirm("Do you want to log out?")){
        localStorage["login_status"]=0;
        localStorage["username"]=null;
        setTimeout(function(){
            window.location.href = "index.html";
        },600);
    }else{
        localStorage["login_status"]=1;
        
    }
    
    
}
