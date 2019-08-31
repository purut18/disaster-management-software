<?php

    require_once './dbconn.php';
    require_once './encrypt.php';

    $_POST = json_decode(file_get_contents("php://input"),true);

    $token = mysqli_real_escape_string($con,$_POST['token']);
    $token = my_simple_crypt($token, "d");
    $idArray = explode("???INCURY???", $token);

    $id = $idArray[1];

    $query = "SELECT permission from organisations WHERE id='{$id}';";
    $result = mysqli_query($con, $query) or die("Error");
    
    while($perm = mysqli_fetch_array($result)) {
        $user_perm = $perm['permission'];
    }

    $user_perm_2 = $user_perm - 1;

    $orgs_query = "SELECT id, org_name FROM organisations WHERE permission >= {$user_perm_2} ORDER BY permission ASC;";
    $result_orgs = mysqli_query($con, $orgs_query) or die("Error");

    $orgsList = array();

    while($orgs = mysqli_fetch_array($result_orgs)) {
        $orgsList[$orgs['id']] = array(
                                    "id"=>$orgs['id'],
                                    "name"=>$orgs['org_name']
                                );
    }

    echo json_encode($orgsList);

?>