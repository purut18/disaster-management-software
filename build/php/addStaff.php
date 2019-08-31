<?php
    require_once './dbconn.php';
    require_once './encrypt.php';

    $_POST = json_decode(file_get_contents("php://input"),true);

    $token = mysqli_real_escape_string($con,$_POST['token']);
    $token = my_simple_crypt($token, "d");
    $idArray = explode("???INCURY???", $token);

    $id = $idArray[1];
    $email = mysqli_real_escape_string($con,$_POST['email']);
    $name = mysqli_real_escape_string($con,$_POST['name']);
    $position = mysqli_real_escape_string($con,$_POST['position']);

    $query = "INSERT INTO staff (name, position, email, dept) VALUES('{$name}', '{$position}', '{$email}', '{$id}');";
    mysqli_query($con, $query);
?>