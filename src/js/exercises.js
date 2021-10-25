var mark = 0;

var questions = "When passing through pedestrian crossing, what is the correct precautionary action to be done to reduce risk?!Slow down! accelerate! make a complete stop! maintain current speed&.Driving in a crowded area, which is the most important hazard to be looked out for!Vehicles! traffic lights! pedestrians! traffic signs&. If you receive a phone call while driving, what should you do?!Pick up the phone and answer the call! stop the car in a safe place then pick up the call! look at the phone and press the hang up button! text the person instead&.When you are travelling through a merge lane, what's the right action to merge safely?!Maintain speed and adjust as needed! accelerate! reduce speed! make a complete stop&.In a round about, when should you give way?!When there is a car to your left! when there is a car to your right! when there is no car! when there a pedestrian waiting&.When driving in a completely dark night, when is the correct time to turn on high beams?!When there is a car ahead! when there is a car coming from the opposite direction! when there are no cars around you! whenever you want&. There is a car with extremely bright lights travelling from the opposing lane, what should you do?! Look at the lights! do no action! try to avoid the lights by avoiding direct contact! close your eyes&.If there is an ambulance behind you, with the siren on. You are waiting for the traffic lights to turn green. What's the correct action?!Wait for the lights to turn green then give way to the ambulance! go through the traffic lights regardless to give way to the ambulance! do nothing! reverse the vehicle to give way even though you may crash into other traffic ";
var q_list = questions.split("&.");
var q_list1 = q_list.map(x => x.split("!"));

function correct(){
    mark = mark+1;
    alert("you are correct! \nplus one mark! \nnow you have " + mark + "marks");

}

function uncorrect(){
    alert("try again! \nnow you have " + mark + "marks");
}


function get_question(index) {
    let element = document.querySelector("#question_topic");
    let buttons = element.getElementsByTagName("button");
    for(i=0 ; i<8 ;i++){
        buttons[i].classList.remove("current");
    }
    buttons[index].className = "current";

    document.querySelector("#exercise_question").innerHTML = q_list1[index][0];
    document.querySelector("#exercise_option1").innerHTML = q_list1[index][1];
    document.querySelector("#exercise_option2").innerHTML = q_list1[index][2];
    document.querySelector("#exercise_option3").innerHTML = q_list1[index][3];
    document.querySelector("#exercise_option4").innerHTML = q_list1[index][4];
    let name = "url(images/exercisen.jpg)";
    name = name.replace("n", index.toString());
    document.querySelector("#exercise_image").style.backgroundImage = name;

    for(i=1 ; i<5 ;i++){
        name = "#exercise_option!";
        name = name.replace("!", i.toString());
        let element = document.querySelector(name);
        element.classList.remove("correct");
    }

    let a = [0], b = [2,4,7] ,c = [1,5,6];
    if(index in a){
        document.querySelector("#exercise_option1").className = "correct";
    }
    else if(index in b){
        document.querySelector("#exercise_option2").className = "correct";
    }
    else if (index in c){
        document.querySelector("#exercise_option3").className = "correct";
    }
    else{
        document.querySelector("#exercise_option4").className = "correct";
    }
    for(i=1 ; i<5 ;i++){
        name = "#exercise_option!";
        name = name.replace("!", i.toString());
        let element = document.querySelector(name);
        if(element.classList.contains("correct")){
            element.setAttribute("onclick","correct()")
        }
        else{
            element.setAttribute("onclick","uncorrect()")
        }
    }
    
}

