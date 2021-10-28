window.onload=function(){
var register_btn = document.getElementById("register");

	
register_btn.addEventListener("click",function(){
	var user_email = document.getElementById("reg_email").value;
	var user_password = document.getElementById("reg_password").value;
    var user_name = document.getElementById("reg_name").value;
    console.log(user_email);
    console.log(user_password);
    console.log(user_name);

	
    
	
	if(user_email.length == 0 && user_password.length == 0){
		alert("Email address and Password are empty!");
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
                
				password : user_password,
                
			},
			success : function(result){
				var res = JSON.parse(result);
				if (res.code==0){
					alert("fail to connect database");
				} else if (res.code==1) {
					alert("username exists");	
				} else {
					confirm("sign up success");
				}
						
			},
			error : function(msg){
				console.log(msg);
			}
		})


	};


})
}
