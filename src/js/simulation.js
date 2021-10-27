

function trainGameSelector(){
    let upload_button =  document.getElementById("upload_button");
    upload_button.style.visibility = "visible";
    let start_sim =  document.getElementById("start_sim");
    start_sim.style.visibility = "hidden";
    const iframe = document.createElement("iframe");
    iframe.id = "train_game";
    iframe.src = "https://i.simmer.io/@flysilence/game4";
    iframe.style = "width: 1366px;height: 768px;";

    
    var gameSection = document.getElementById("sim_game");
    if(gameSection.innerHTML == ""){ //If no games are launched
        gameSection.append(iframe);
    }

    else if(document.getElementById("ambulance_game") != null){ //If ambulance game is already launched
        const previousGame = document.getElementById("ambulance_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("sign_game") != null){ //If sign game is already lanched
        const previousGame = document.getElementById("sign_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("crossing_game") != null){ //If crossing game is already lanched
        const previousGame = document.getElementById("crossing_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("roundabout_game") != null){ //If roundabout game is already launched
        const previousGame = document.getElementById("roundabout_game");
        previousGame.remove();
        gameSection.append(iframe);
    }

}

function ambulanceGameSelector(){
    let upload_button =  document.getElementById("upload_button");
    upload_button.style.visibility = "visible";
    let start_sim =  document.getElementById("start_sim");
    start_sim.style.visibility = "hidden";
    const iframe = document.createElement("iframe");
    
    iframe.id = "ambulance_game";
    iframe.src = "https://i.simmer.io/@flysilence/game2"
    iframe.style = "width: 1366px;height: 768px;";
    var gameSection = document.getElementById("sim_game");

    if(gameSection.innerHTML == ""){ //If no games are launched
        gameSection.append(iframe);
    }
    else if(document.getElementById("train_game") != null){ //If train game is already launched
        const previousGame = document.getElementById("train_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("sign_game") != null){ //If sign game is already launched
        const previousGame = document.getElementById("sign_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("crossing_game") != null){ //If crossing game is already lanched
        const previousGame = document.getElementById("crossing_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("roundabout_game") != null){ //If roundabout game is already launched
        const previousGame = document.getElementById("roundabout_game");
        previousGame.remove();
        gameSection.append(iframe);
    }

}

function signGameSelector(){
    let upload_button =  document.getElementById("upload_button");
    upload_button.style.visibility = "visible";
    let start_sim =  document.getElementById("start_sim");
    start_sim.style.visibility = "hidden";
    const iframe = document.createElement("iframe");
    iframe.id = "sign_game";
    iframe.src = "https://i.simmer.io/@flysilence/game1"
    iframe.style = "width: 1366px;height: 768px;";
    var gameSection = document.getElementById("sim_game");
    if(gameSection.innerHTML == ""){ //If no games are launched
        gameSection.append(iframe);
    }
    else if(document.getElementById("train_game") != null){ //If train game is already launched
        const previousGame = document.getElementById("train_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("ambulance_game") != null){ //If ambulance game is already launched
        const previousGame = document.getElementById("ambulance_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("crossing_game") != null){ //If crossing game is already lanched
        const previousGame = document.getElementById("crossing_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("roundabout_game") != null){ //If roundabout game is already launched
        const previousGame = document.getElementById("roundabout_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
}

function crossingGameSelector(){
    let upload_button =  document.getElementById("upload_button");
    upload_button.style.visibility = "visible";
    let start_sim =  document.getElementById("start_sim");
    start_sim.style.visibility = "hidden";
    const iframe = document.createElement("iframe");
    iframe.id = "crossing_game";
    iframe.src = "https://i.simmer.io/@flysilence/game0"
    iframe.style = "width: 1366px;height: 768px;";
    var gameSection = document.getElementById("sim_game");
    if(gameSection.innerHTML == ""){ //If no games are launched
        gameSection.append(iframe);
    }
    else if(document.getElementById("train_game") != null){ //If train game is already launched
        const previousGame = document.getElementById("train_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("ambulance_game") != null){ //If ambulance game is already launched
        const previousGame = document.getElementById("ambulance_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("sign_game") != null){ //If sign game is already launched
        const previousGame = document.getElementById("sign_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("roundabout_game") != null){ //If roundabout game is already launched
        const previousGame = document.getElementById("roundabout_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    
}

function roundaboutGameSelector(){
    let upload_button =  document.getElementById("upload_button");
    upload_button.style.visibility = "visible";
    let start_sim =  document.getElementById("start_sim");
    start_sim.style.visibility = "hidden";
    const iframe = document.createElement("iframe");
    iframe.id = "roundabout_game";
    iframe.src = "https://i.simmer.io/@flysilence/game3"
    iframe.style = "width: 1366px;height: 768px;";
    var gameSection = document.getElementById("sim_game");
    if(gameSection.innerHTML == ""){ //If no games are launched
        gameSection.append(iframe);
    }
    else if(document.getElementById("train_game") != null){ //If train game is already launched
        const previousGame = document.getElementById("train_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("ambulance_game") != null){ //If ambulance game is already launched
        const previousGame = document.getElementById("ambulance_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("sign_game") != null){ //If sign game is already launched
        const previousGame = document.getElementById("sign_game");
        previousGame.remove();
        gameSection.append(iframe);
    }
    else if(document.getElementById("crossing_game") != null){ //If crossing game is already lanched
        const previousGame = document.getElementById("crossing_game");
        previousGame.remove();
        gameSection.append(iframe);
    }


}