<?php
@include "database-connect.php";
$id = $_POST["id"];

$query_string = "SELECT likes FROM thoughts WHERE ThoughtID = $id";

$likes = mysqli_fetch_row(mysqli_query($mysqli_connect, $query_string));

echo json_encode($likes);

?>