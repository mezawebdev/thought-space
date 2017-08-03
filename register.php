<?php 
	echo "<h1 class='lead'>Welcome.<br />Who are you?</h1>";
	echo "<form method='post'><input type='name' name='full-name' placeholder='Full name'></input><input type='name' name='username' placeholder='Your Username'></input><input type='password' name='password' placeholder='Password'></input><input type='password' name='password-repeat' placeholder='Retype Password'></input><input id='submit-button' onclick='preventDefault();' class='btn btn-default' type='submit' name='submit'></input></form><hr /><a href='#' class='go-back' onclick='compactDiv('this', 100);'><em>Go back</em></a>";
?>