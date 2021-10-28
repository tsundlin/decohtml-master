
<?php

$score = $_POST['score'];
$username = $_POST['username'];




$link = mysqli_connect("mysql","php","php","cloud_computing");

if(!$link){
    $respond['code']=0;
    $respond['message']="fail to connect database";
    echo jason_encode($respond);
    exit;
}

mysqli_query($link,"set names 'utf8'");



//get user's score
$sql1 ="UPDATE users set score='{$score}' WHERE username='{$username}'";
$res1 = $link->query($sql1);


if ($res1== 0){
    $respond['code'] = 1 ;
    
    $respond['message']="no update"; //if user does not exists
    echo json_encode($respond);
    exit;

}else{
    $respond['code']=2;
    $respond['message']="update success";
    echo json_encode($respond);
    exit;
}

mysqli_close($link);



?>