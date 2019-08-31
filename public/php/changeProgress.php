<?php
    require_once './dbconn.php';

    $_POST = json_decode(file_get_contents("php://input"),true);

    $query = "UPDATE tasks SET task_progress = '{$_POST['newProgress']}' WHERE task_id = '{$_POST['task_id']}';";
    mysqli_query($con, $query) or die($query);

?>