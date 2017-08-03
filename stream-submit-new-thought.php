<?php
//-----------------------
//	Database Connection 
//-----------------------
@include "database-connect.php";

//-----------------------
// Get Thought Settings
//-----------------------
$color = $_POST["color"];
$geolocation = $_POST["geolocation"];
$submitted;
$user = "alexmeza";
$thought = $_POST["thought"];
$font_size = $_POST["font-size"];
$font = $_POST["font"];
$font_color = $_POST["font-color"];

//-------------------------------
//	Add new thought to Database
//-------------------------------
$store_to_database_query = "INSERT INTO thoughts (color, geolocation, submitted, user, thought, font_size, font, font_color) VALUES ('" . $color . "', '" . $geolocation . "', now(), '" . $user . "', '" . $thought . "', '" . $font_size . "', '" . $font . "', '" . $font_color . "');";

mysqli_query($mysqli_connect, $store_to_database_query);

?>