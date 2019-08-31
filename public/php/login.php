<?php

    require_once './dbconn.php';
    require_once './encrypt.php';

    $_POST = json_decode(file_get_contents("php://input"),true);

    $email = mysqli_real_escape_string($con, $_POST['email']);
    $pass = mysqli_real_escape_string($con, $_POST['pass']);

    $query = "SELECT id, permission FROM organisations WHERE org_email='{$email}' AND org_pass='{$pass}';";
    $result = mysqli_query($con, $query) or die($query . " Error");

    if(mysqli_num_rows($result) !== 1) {
        echo "authfail";
    } else {
        while($authInfo = mysqli_fetch_array($result)) {
            $org_id = $authInfo['id'];
            $token = my_simple_crypt(rand(100000,999999) . "???INCURY???" . $org_id);
            $authData = array("token"=>$token);
        }
        echo json_encode($authData);
    }

?>