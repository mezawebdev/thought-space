<?php 

@include "database-connect.php";

$id = $_POST["id"];

$update_query = "UPDATE thoughts SET likes = likes + 1 WHERE ThoughtID = $id";

mysqli_query($mysqli_connect, $update_query);

$likes = mysqli_fetch_row(mysqli_query($mysqli_connect, "SELECT likes FROM thoughts WHERE thoughtID = $id"));

echo json_encode($likes);

?>