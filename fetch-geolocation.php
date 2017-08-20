<?php
@include "database-connect.php";
$id = $_POST["id"];

$query_string = "SELECT geolocation FROM thoughts WHERE ThoughtID = $id";

$geolocation = mysqli_fetch_row(mysqli_query($mysqli_connect, $query_string));

echo json_encode($geolocation);


?>