var score = 5;
var username=localStorage.getItem("username");

function upload(){
    $.ajax({
        method: "post",
        url : "php/score.php",
        data : {
            score : score,
            username : username,
            
        },
        success : function(result){
            var res = JSON.parse(result);
            if (res.code==0){
                alert("fail to connect database");
            } else {
                confirm("upload mark successful");
                setTimeout(function(){
                    window.location.href = "simulation.html";
                },600);
            }
                    
        },
        error : function(msg){
            console.log(msg);
        }
    })
}