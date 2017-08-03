<?php 
	@include "database-connect.php";

	$userName = $_POST["login-username"];
	$password = md5(md5($_POST["login-username"]).$_POST["login-password"]);
	$query = "SELECT * FROM users WHERE username = '" . $userName . "' AND password = '" . $password . "';";

	$fetchUserInfo = mysqli_query($mysqli_connect, $query);
	$userInfoArray = mysqli_fetch_row($fetchUserInfo);

	$_SESSION["id"] = $userInfoArray[0];
	$_SESSION["username"] = $userName;
	$_SESSION["password"] = $password;
	echo json_encode($userInfoArray);

?>
	