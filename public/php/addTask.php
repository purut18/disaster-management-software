<?php
    require_once './dbconn.php';
    require_once './encrypt.php';

    $_POST = json_decode(file_get_contents("php://input"),true);

    $token = mysqli_real_escape_string($con, $_POST['token']);
    $token = my_simple_crypt($token, "d");
    $idArray = explode("???INCURY???", $token);

    $id = $idArray[1];
    $task = mysqli_real_escape_string($con, $_POST['task']);
    $priority = mysqli_real_escape_string($con, $_POST['priority']);
    $task_for = mysqli_real_escape_string($con, $_POST['task_for']);

    $query = "INSERT INTO tasks (task_owner, task, task_dept, task_priority) VALUES('{$id}', '{$task}', '{$task_for}', '{$priority}');";
    mysqli_query($con, $query);
?>