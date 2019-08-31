<?php
    require_once './dbconn.php';
    require_once './encrypt.php';

    $_POST = json_decode(file_get_contents("php://input"),true);

    $token = mysqli_real_escape_string($con,$_POST['token']);
    $token = my_simple_crypt($token, "d");
    $idArray = explode("???INCURY???", $token);
    
    $id = $idArray[1];

    $staff = array();

    $query = "SELECT staff_id, name, position, email FROM staff WHERE dept='{$id}';";
    $result = mysqli_query($con, $query) or die("There was an error retrieving data, please try again later");

    if(mysqli_num_rows($result) == 0) {
        echo "nores";
    } else {
        while($staffRes = mysqli_fetch_array($result)) {
            $staff[$staffRes['staff_id']] = array(
                                            "id"=>$staffRes['staff_id'],
                                            "name"=>$staffRes['name'],
                                            "position"=>$staffRes['position'],
                                            "email"=>$staffRes['email']
                                        );

        }
        echo json_encode($staff);
    }
    
?>