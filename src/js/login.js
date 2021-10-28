
window.onload=function(){
var register_btn = document.getElementById("register");
let login = 0; // login status default is 0


register_btn.addEventListener("click",function(){
	var user_email = document.getElementById("reg_email").value;
	var user_password = document.getElementById("reg_password").value;
    var user_name = document.getElementById("reg_name").value;
	

	
    
	//detect empty input
	if(user_name.length == 0 ){
		alert("Please enter a username!");
	}
	
	else if(user_email.length == 0){
		alert("Please enter an Email address!");
	}
	
	else if(user_password.length == 0){
		alert("Please enter a password!");
	}
	
	else{
		$.ajax({
			method: "post",
			url : "php/register.php",
			data : {
				username : user_name,
                email: user_email,
				password : user_password,
                
			},
			success : function(result){
				var res = JSON.parse(result); //get result back from php
				if (res.code==0){
					alert("fail to connect database");
				} else if (res.code==4) {
					alert("Username exists");	
				} else if (res.code==1){
					alert("Email is already registered"); 
				} else {
					confirm("Sign up success");
					setTimeout(function(){
						sign_in();
					},600);
				}
						
			},
			error : function(msg){
				console.log(msg);
			}
		})


	};


})
var login_btn = document.getElementById("signin");

	
login_btn.addEventListener("click",function(){
	
	var user_name = document.getElementById("signin_name").value;
	var user_password = document.getElementById("signin_password").value;
	
	
	//detect empty input
	if(user_name.length == 0){
		alert("Please enter a username!");
	}
	
	else if(user_password.length == 0){
		alert("Please enter a password!");
	}

	else{
		$.ajax({
			method: "post",
			url : "php/login.php",
			data : {
				username : user_name,
				password : user_password,
			},
			success : function(result){
				var res = JSON.parse(result);
				if (res.code==0){
					alert("fail to connect database");
				} else if (res.code==1) {
					alert("Wrong password");	
					console.log(login);

				} else {
					confirm("Login success");
					login=1; //login status set to 1
					setTimeout(function(){
						window.location.href = "index.html";
					},600);
					console.log(login);
					//store the login in information to local when login success
					localStorage.setItem("username",user_name);
					localStorage.setItem("login_status",login);
					
				}
				
				
						
			},
			error : function(msg){
				console.log(msg);
			}
		})


	};
})


	
}