<?php
    require_once './dbconn.php';
    require_once './encrypt.php';

    $_POST = json_decode(file_get_contents("php://input"),true);

    $token = mysqli_real_escape_string($con, $_POST['token']);
    $token = my_simple_crypt($token, "d");
    $idArray = explode("???INCURY???", $token);

    $id = $idArray[1];

    $tasks = array();

    $query = "SELECT * FROM tasks WHERE task_owner = '{$id}' ORDER BY task_id DESC LIMIT {$_POST['startFrom']}, {$_POST['noOfTasks']};";
    $result = mysqli_query($con, $query) or die("There was an error retrieving data, please try again later");

    if(mysqli_num_rows($result) == 0) {
        echo "nores";
    } else {
        while($tasksRes = mysqli_fetch_array($result)) {

            $query_two = "SELECT org_name FROM organisations WHERE id = '{$tasksRes['task_owner']}' LIMIT 1;";
            $result_two = mysqli_query($con, $query_two) or die("There was an error retrieving data, please try again later");
            if(mysqli_num_rows($result) == 0) {
                $task_owner = "Unknowm";
            } else {
                while($ownerRes = mysqli_fetch_array($result_two)) {
                    $task_owner = $ownerRes['org_name'];
                }
            }

            $tasks[$tasksRes['task_id']] = array(
                                                        "id"=>$tasksRes['task_id'],
                                                        "task"=>$tasksRes['task'],
                                                        "progress"=>$tasksRes['task_progress'],
                                                        "priority"=>$tasksRes['task_priority'],
                                                        "dept"=>$tasksRes['task_dept'],
                                                        "byDept"=>$task_owner
                                                        );
                                                        
            // $tempArray = array("{$tasksRes['task_id']}"=>);
            // $tasks = array_merge($tasks, $tempArray);
        }
        echo json_encode($tasks);
    }
    
?>