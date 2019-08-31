<?php
    require_once './dbconn.php';

    $orgs = array();

    $query = "SELECT id, org_name, org_email, location FROM organisations;";
    $result = mysqli_query($con, $query) or die("There was an error retrieving data, please try again later");

    if(mysqli_num_rows($result) == 0) {
        echo "nores";
    } else {
        while($orgRes = mysqli_fetch_array($result)) {
            $orgs[$orgRes['id']] = array(
                                            "id"=>$orgRes['id'],
                                            "name"=>$orgRes['org_name'],
                                            "location"=>$orgRes['location'],
                                            "email"=>$orgRes['org_email']
                                        );
                                                        
            // $tempArray = array("{$orgRes['task_id']}"=>);
            // $tasks = array_merge($tasks, $tempArray);
        }
        echo json_encode($orgs);
    }
    
?>