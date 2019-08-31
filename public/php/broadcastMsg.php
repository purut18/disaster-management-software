<?php
    require_once './dbconn.php';

    $_POST = json_decode(file_get_contents("php://input"),true);

    $query = "INSERT INTO msgs (msg_owner, msg, loc, msg_to) VALUES('1', '{$_POST['msg']}', '{$_POST['loc']}', '{$_POST['to']}');";
    mysqli_query($con, $query);
?>