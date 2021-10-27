// show the sign up box
function sign_up(){
	let container = document.getElementById('container');
	container.classList.add("right-panel-active");
}
//show the sign in box
function sign_in(){
	let container = document.getElementById('container');
	container.classList.remove("right-panel-active");
}
