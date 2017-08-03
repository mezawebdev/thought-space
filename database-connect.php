<?php
//-------------------------------
//	Database Connection Local
//-------------------------------
$mysqli_connect = mysqli_connect("localhost", "root", "root", "thought_space");

if (mysqli_connect_error()) {
	echo "<div id='database-connection-error'>There was an error connecting to the database.</div>";
}

//-------------------------------
//	Database Connection Online
//-------------------------------
/*$mysqli_connect = mysqli_connect("107.180.41.45", "alex_meza", "gunsgunS1", "thought_space");

if (mysqli_connect_error()) {
	echo "<div id='database-connection-error'>There was an error connecting to the database.</div>";
}*/

?>