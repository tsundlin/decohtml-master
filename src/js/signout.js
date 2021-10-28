

function signout() {
    
    let login=localStorage.getItem("login_status");
    console.log(login);
    var u1 =document.getElementById("account");
    var u2 =document.getElementById("signout");
    console.log(login);
    if (login==1) {
        console.log("block");
        u1.style.display = "none";    //hide sign in button
        u2.style.display = "block";   //display sign out button
    } else {
        console.log("none");
        u1.style.display = "block";     //display sign in button
        u2.style.display = "none";      //hide sign out button
    }
}

function logout(){
    if (confirm("Do you want to log out?")){
        localStorage["login_status"]=0;    //when log out, reset local storage
        localStorage["username"]=null;
        setTimeout(function(){
            window.location.href = "index.html";
        },600);
    }else{
        localStorage["login_status"]=1;  
        
    }
    
    
}
