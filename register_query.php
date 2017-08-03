<?php 
	@include "database-connect.php";
	
	$username = $_POST["username"];
	$password = md5(md5($username).$_POST["password"]); 
	//$password_repeat = $_POST["password-repeat"]; //md5($_POST["password"];
	$email = $_POST["email"];
	$register_query = "INSERT INTO users (username, email, password, registered) VALUES ('".$username."', '".$email."', '".$password."', now());";
	$errors = array(0, 0, 0, 0);

	function checkUsername($username) {
		if (strlen($username) < 3) {
			//echo "<div class='register-username-error'>Your username must be at least 3 characters</div>";
			$errors[0] = 1;
			return false;
		} else {
			$errors[0] = 0;
			return true;
		}
	}

	function checkEmail($email) {
 		if ($email = "") {
 			//echo "<div class='register-email-error'>Please type your email</div>";
 			$errors[1] = 1; 
 			return false;
 		} else {
 			$errors[1] = 0;
 			return true;
 		}
	}

	function checkPassword($password) {
		if (strlen($password) < 8) {
			//echo "<div class='register-password-error'>Your password must be at least 8 characters</div>";
			$errors[2] = 1;
			return false;
		} else {
			$errors[2] = 0;
			return true;
		}
	}

	function checkPasswordRepeat($password, $password_repeat) {
		if ($password = $password_repeat) {
			$errors[3] = 0;
			return true;
		} else {
			//echo "<div class='register-password-repeat-error'>Passwords do not match</div>";
			$errors[3] = 1;
			return false;
		}
	}

	/*checkUsername($username);
	checkEmail($email);
	checkPassword($_POST["password"]);
	checkPasswordRepeat($_POST["password"], $_POST["password-repeat"]);
	*/

 	mysqli_query($mysqli_connect, $register_query);

	if (checkUsername($username) && checkEmail($email) && checkPassword($_POST["password"]) && checkPasswordRepeat($_POST["password"], $_POST["password-repeat"])) {
		mysqli_query($mysqli_connect, $register_query);
	}

	echo json_encode();

	//echo "Full name: ".$full_name."\n First name: ".$first_name."\n Last name: ".$last_name."\n Username: ".$username."\n Password: ".$password."\n Query: ".$register_query;

	/*if (mysqli_query($mysqli_connect, $register_query)) {
		//echo "it workded bith!!!!";
	}
	else {
		echo "Damn, this sucks :/";
	}*/
?>