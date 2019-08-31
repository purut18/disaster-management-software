<?php
    require_once './dbconn.php';
    require_once './encrypt.php';

    $_POST = json_decode(file_get_contents("php://input"),true);

    $token = mysqli_real_escape_string($con,$_POST['token']);
    $token = my_simple_crypt($token, "d");
    $idArray = explode("???INCURY???", $token);

    $id = $idArray[1];

    $staffMsgs = array();

    $query = "SELECT id, date, message, msg_for FROM staffMsg WHERE msg_from = '{$id}';";
    $result = mysqli_query($con, $query) or die("There was an error retrieving data, please try again later");

    if(mysqli_num_rows($result) == 0) {
        echo "nores";
    } else {
        while($staffRes = mysqli_fetch_array($result)) {

            $query_two = "SELECT name FROM staff WHERE staff_id = '{$staffRes['msg_for']}' LIMIT 1;";
            $result_two = mysqli_query($con, $query_two) or die("There was an error retrieving data, please try again later");
            if(mysqli_num_rows($result) == 0) {
                $msg_to = "Unknown";
            } else {
                while($ownerRes = mysqli_fetch_array($result_two)) {
                    $msg_to = $ownerRes['name'];
                }
            }

            $staffMsgs[$staffRes['id']] = array(
                                            "id"=>$staffRes['id'],
                                            "date"=>$staffRes['date'],
                                            "message"=>$staffRes['message'],
                                            "to"=>$msg_to
                                        );
                                                        
            // $tempArray = array("{$staffRes['task_id']}"=>);
            // $tasks = array_merge($tasks, $tempArray);
        }
        echo json_encode($staffMsgs);
    }
    
?>