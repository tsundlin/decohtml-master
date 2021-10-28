var mark =localStorage.getItem("score");

var score = parseInt(mark) + 2;
var username=localStorage.getItem("username"); //get current user's information

function upload(){
    $.ajax({
        method: "post",
        url : "php/score.php",
        data : {
            score : score,
            username : username,
            
        },
        success : function(result){
            var res = JSON.parse(result); //get result back from php
            if (res.code==0){
                alert("fail to connect database");
            } else {
                confirm("upload mark successful");
                setTimeout(function(){
                    window.location.href = "simulation.html";
                },600);
                localStorage.setItem("score",score);
            }
                    
        },
        error : function(msg){
            console.log(msg);
        }
    })
}