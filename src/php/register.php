<?php

header('content-type"text/html;charset="utf-8"');

$email = $_POST['email'];
$password = $_POST['password'];
$username = $_POST['username'];


$link = mysqli_connect("localhost","root","","3801account");

if(!$link){
    $respond['code']=0;
    $respond['message']="fail to connect database";
    echo jason_encode($respond);
    exit;
}

mysqli_query($link,"set names 'utf8'");


$sql2 = "SELECT * FROM users WHERE username= '{$username}'";
$res2 = $link->query($sql2);

if ($res2->num_rows > 0){
    $respond['code']=4;
    $respond['message']="Username exists";
    echo json_encode($respond);
    exit;
}


$sql = "SELECT * FROM users WHERE email= '{$email}'";
$res = $link->query($sql);

if ($res->num_rows > 0){
    $respond['code']=1;
    $respond['message']="Email is aleady registered";
    echo json_encode($respond);
    exit;
}




$sql1 =" INSERT INTO users(email,password,username) VALUES('{$email}','{$password}','{$username}')";
$res1 = mysqli_query($link, $sql1);


if (!$res1){
    $respond['code'] = 2 ;
    $respond['message']="fail sign up";
    echo json_encode($respond);
    exit;

}else{
    $respond['code']=3;
    $respond['message']="sign up success";
    echo json_encode($respond);
    exit;
}
mysqli_close($link);



?>