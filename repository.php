<?php
    $response = array(
        array("id" => 7, "path" => "/repository/007_square_small.jpg", "title" => "Image 7"),
        array("id" => 8, "path" => "/repository/008_square_small.jpg", "title" => "Image 8"),
        array("id" => 9, "path" => "/repository/009_square_small.jpg", "title" => "Image 9"),
    );
    header('Content-type: application/json');
    echo json_encode($response) ;
?>