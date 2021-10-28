var mark = 0;
var score =localStorage.getItem("score");
var username=localStorage.getItem("username");
// the questions str
const questions = "When passing through pedestrian crossing, what is the correct precautionary action to be done to reduce risk?!Slow down! accelerate! make a complete stop! maintain current speed&.Driving in a crowded area, which is the most important hazard to be looked out for!Vehicles! traffic lights! pedestrians! traffic signs&. If you receive a phone call while driving, what should you do?!Pick up the phone and answer the call! stop the car in a safe place then pick up the call! look at the phone and press the hang up button! text the person instead&.When you are travelling through a merge lane, what's the right action to merge safely?!Maintain speed and adjust as needed! accelerate! reduce speed! make a complete stop&.In a round about, when should you give way?!When there is a car to your left! when there is a car to your right! when there is no car! when there a pedestrian waiting&.When driving in a completely dark night, when is the correct time to turn on high beams?!When there is a car ahead! when there is a car coming from the opposite direction! when there are no cars around you! whenever you want&. There is a car with extremely bright lights travelling from the opposing lane, what should you do?! Look at the lights! do no action! try to avoid the lights by avoiding direct contact! close your eyes&.If there is an ambulance behind you, with the siren on. You are waiting for the traffic lights to turn green. What's the correct action?!Wait for the lights to turn green then give way to the ambulance! go through the traffic lights regardless to give way to the ambulance! do nothing! reverse the vehicle to give way even though you may crash into other traffic ";
//split questions and options
var q_list = questions.split("&.");
var q_list1 = q_list.map(x => x.split("!"));
var index = 0;
var indexx = 0;
// store if question done
var question_done = [0,0,0,0,0,0,0,0]
var element, buttons, elements, options;

// check if the option is right
function check(indexx){
    element = document.querySelector("#question_topic");
    buttons = element.getElementsByTagName("button");
    elements = document.querySelector("#exercise_options");
    options = elements.getElementsByTagName("h2");
    
    if(question_done[index]==0){
        //correct
        if(options[indexx].classList.contains("correct")){
            mark = mark+1;
            buttons[index].classList.add("exercise_done_correct");
            alert("You are correct! \nnow you have " + mark + " marks \nnow move to next one.");
        }
        //not correct
        else{
            buttons[index].classList.add("exercise_done_wrong");
            alert("Sorry that is not correct, \nnow you have " + mark + "marks");
        }
        question_done[index] = 1;
    }  
    // all question done
    if(!(question_done.includes(0))){
        var newscore=parseInt(score)+mark;
        alert("You have all 8 exercise done! \nYou have " + mark + " marks");
        console.log(mark);
        console.log(username);
        $.ajax({
			method: "post",
			url : "php/score.php",
			data : {
				score : newscore,
                username : username,
                
			},
			success : function(result){
				var res = JSON.parse(result);
				if (res.code==0){
					alert("fail to connect database");
				} else {
                    alert("upload mark successful");
                        setTimeout(function(){
                            window.location.href = "index.html";
                        },600);
                        localStorage.setItem("score",newscore);
				}
						
			},
			error : function(msg){
				console.log(msg);
			}
		})
    }
    // if not done find next question
    else{
        index = (index < 7 && question_done[index+1] ==0) ? index+1 :question_done.findIndex(item => item === 0);
    index = index<0 ? index = 0: index;
    get_question(index);
    }   
}


// make the elements show the question content
function get_question(index1) {
    let starts = document.querySelector("#start_exercise");
    starts.style.visibility = "hidden";
    index = index1;
    element = document.querySelector("#question_topic");
    buttons = element.getElementsByTagName("button");

    // give current class
    for(i=0 ; i<8 ;i++){
        buttons[i].classList.remove("current");
    }
    
    buttons[index].classList.add("current");

    document.querySelector("#exercise_question").innerHTML = q_list1[index][0];
    document.querySelector("#exercise_option1").innerHTML = q_list1[index][1];
    document.querySelector("#exercise_option2").innerHTML = q_list1[index][2];
    document.querySelector("#exercise_option3").innerHTML = q_list1[index][3];
    document.querySelector("#exercise_option4").innerHTML = q_list1[index][4];
    let name = "url(images/exercisen.jpg)";
    name = name.replace("n", index.toString());
    document.querySelector("#exercise_image").style.backgroundImage = name;

    // give the correct option the correct class
    for(i=1 ; i<5 ;i++){
        name = "#exercise_option!";
        name = name.replace("!", i.toString());
        element = document.querySelector(name);
        element.classList.remove("correct");
    }

    let a = [0,3], b = [2,4,7] ,c = [1,5,6];
    if(a.includes(index)){
        document.querySelector("#exercise_option1").classList.add("correct");
    }
    else if(b.includes(index)){
        document.querySelector("#exercise_option2").classList.add("correct");
    }
    else if (c.includes(index)){
        document.querySelector("#exercise_option3").classList.add("correct");
    }
    else{
        document.querySelector("#exercise_option4").classList.add("correct");
    }
    for(i=1 ; i<5 ;i++){
        name = "#exercise_option!";
        name = name.replace("!", i.toString());
        element = document.querySelector(name);
        name ="check(!)";
        name = name.replace("!", (i-1).toString());
        element.setAttribute("onclick",name);
    }
    
}

