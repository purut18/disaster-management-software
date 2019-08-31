<?php
    require_once './dbconn.php';
    require_once './encrypt.php';

    $_POST = json_decode(file_get_contents("php://input"),true);

    $token = mysqli_real_escape_string($con,$_POST['token']);
    $token = my_simple_crypt($token, "d");
    $idArray = explode("???INCURY???", $token);

    $id = $idArray[1];

    $message = mysqli_real_escape_string($con, $_POST['msg']);
    $msg_for = mysqli_real_escape_string($con, $_POST['msgTo']);

    $query = "INSERT INTO staffMsg (message, msg_from, msg_for) VALUES('{$message}', '{$id}', '{$msg_for}');";
    mysqli_query($con, $query);
?>