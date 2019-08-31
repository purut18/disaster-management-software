<?php
    require_once './dbconn.php';
    require_once './encrypt.php';

    $_POST = json_decode(file_get_contents("php://input"),true);

    $token = mysqli_real_escape_string($con, $_POST['token']);
    $token = my_simple_crypt($token, "d");
    $idArray = explode("???INCURY???", $token);

    $id = $idArray[1];

    $infos = array();

    $query = "SELECT * FROM msgs WHERE msg_to = '{$id}' ORDER BY msg_id DESC LIMIT 3;";
    $result = mysqli_query($con, $query) or die("There was an error retrieving data, please try again later");

    if(mysqli_num_rows($result) == 0) {
        echo "nores";
    } else {
        while($infosRes = mysqli_fetch_array($result)) {

            $query_two = "SELECT org_name FROM organisations WHERE id = '{$infosRes['msg_owner']}' LIMIT 1;";
            $result_two = mysqli_query($con, $query_two) or die("There was an error retrieving data, please try again later");
            if(mysqli_num_rows($result) == 0) {
                $task_owner = "Unknowm";
            } else {
                while($ownerRes = mysqli_fetch_array($result_two)) {
                    $msg_owner = $ownerRes['org_name'];
                }
            }

            $infos[$infosRes['msg_id']] = array(
                                                        "id"=>$infosRes['msg_id'],
                                                        "info"=>$infosRes['msg'],
                                                        "to"=>$infosRes['msg_to'],
                                                        "location"=>$infosRes['loc'],
                                                        "by"=>$msg_owner
                                                        );
                                                        
            // $tempArray = array("{$infosRes['task_id']}"=>);
            // $tasks = array_merge($tasks, $tempArray);
        }
        echo json_encode($infos);
    }
    
?>