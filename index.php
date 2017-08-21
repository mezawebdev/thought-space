<?php
// Start Session
session_start();
$_SESSION["id"] = "mezawebdev";
?>
<!doctype html>
<html lang="en">
<head>
	<title>Thought Space</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge />">
	<meta http-equiv="content-type" content="text/html" charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="author" content="Alex Meza" />
	<meta name="keywords" content="HTML, CSS, JavaScript, jQuery, jQueryUI, Bootstrap" />
	<meta name="prototype" content="0" />
	<meta name="date" content="" />
	<meta name="description" content="" />
	<link rel="stylesheet" href="assets/css/bootstrap.min.css" />
	<link rel="stylesheet" href="assets/css/main.css" />
	<link rel="stylesheet" href="assets/css/jquery-ui.min.css">
	<link rel='stylesheet' href='assets/css/spectrum.css' />
	<link rel='stylesheet' href="assets/css/font-awesome.min.css" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/manifest.json">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="theme-color" content="#ffffff">
</head>
<body>
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/thought-handlers.js"></script>
	<!-- wrapper start -->
	<div id="loading-screen"></div>
	<div id="top-bar-error"><p>Lost connection to server<p></div>
	<!--<div id="video-bg" data-vide-bg="mp4: assets/images/forrest-bg.mp4, poster: assets/images/forrest-bg-poster-2.jpg" data-vide-options="posterType: jpg, loop: true, muted: true, position: 0% 0%"></div>-->
	<canvas id="background-canvas"></canvas>
	<div id="background-graphic">
	</div>
	<div id="dark-overlay"></div>
	<div id="feedback-screen">
		<div id="new-thought-success">
			<span class="glyphicon glyphicon-ok"></span>
			<h1>Success!</h1>
			<button><span class="glyphicon glyphicon-remove"></span></button>
		</div>
		<div id="new-thought-failed">
		</div>
	</div>
	<div id="new-thought-container">
		<h1>New Thought</h1>
		<div id="new-thought">
			<div id="new-thought-text-container">
				<textarea name="thought"></textarea>
			</div>
		</div>
		<input type="text" id="color-picker" value="ffffff" />

		<select class="font-select">
			<option selected>Font</option>
			<option>Yo!</option>
		</select>
		<select class="font-size-select">
			<option selected>Font Size</option>
			<option>24</option>
			<option>32</option>
		</select>
		<button class="send-button"><span class="glyphicon glyphicon-send"></span> Share</button>
		<button class="cancel-button"><span class="glyphicon glyphicon-remove"></span> Cancel</button>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-lg-1" id="main-content">
				<h1 style="margin-top: 0px;" class="intro-title">Thought Space<br /></h1>
				<div class="spinner"></div>
				<!--<hr class="divider" />-->
				<div class="preview-content">
					<h4><em>A space for thought.</em></h4>
					<p>Want to share a <em>thought</em> with the world? <br /> With <strong><em>Thought Space</em></strong>, you can do just that. Just drop your thought into the <em>Infinite Stream of Thought</em> and let the world know &mdash; without your name involved!</p>
					<em><h6>100% anonymous. 100% fun.<h6></em>
					<button>Coming Soon!</button>
				</div>
				<div class="intro-content">
					<!--<h1 class="lead">Welcome to <br />Thought Space</h1>-->
					<div class="intro-content-info">
						<h4><em>A space for thought.</em></h4>
						<br /><br />
						<h5>How does it work?</h5>
						<div class="col-xs-4">
							<span class="glyphicon glyphicon-cloud"></span>
							<p>Think of something to say</p>
						</div>
						<div class="col-xs-4">
							<span class="glyphicon glyphicon-edit"></span>
							<p>Design your thought</p>
						</div>
						<div class="col-xs-4">
							<span class="glyphicon glyphicon-send"></span>
							<p>Share it<br /> with the world!</p>
						</div>
						<span class="glyphicon glyphicon-arrow-right arrow-1"></span>
						<span class="glyphicon glyphicon-arrow-right arrow-2"></span>
						<button id="sign-up-button">Sign Up</button>
						<button id="log-in-button">Log In</button>
					</div>
				</div>
				<div class="login-content">
					<!--<h1 class="lead">Welcome to <br />Thought Space</h1>-->
					<form method="post">
						<div class="form-group">
							<input type="name" required="required" class="login-username form-control" name="login-username" placeholder="Username"></input>
						</div>
						<div class="form-group">
							<input type="password" required="required" class="login-password form-control" name="login-password" placeholder="Password"></input>
						</div>
						<input class="btn btn-default login-submit form-control" value="Log In" type="submit"></input><div class="spinner"></div>
						<!--<div class="login-username-error">Invalid Username</div>
						<div class="login-password-error">Invalid Password</div>-->
						<hr />
						<a href="#"><em>Don't have an account?</em></a>
					</form>
				</div>
				<div class="login-success"></div>
				<div class="register-content"> 
					<h1 style="margin-top: 0;" class='lead'>Hey there!<br />Who are you?</h1>
					<form method='post'>
						<div class="form-group">
							<input type='name' required="required" class="username form-control" name='full-name' placeholder='User Name'></input>
						</div>
						<div class="form-group">
							<input type='email' required="required" class="email form-control" name='username' placeholder='E-mail'></input>
						</div>
						<div class="form-group">
							<input type='password' required="required" class="password form-control" name='password' placeholder='Password'></input>
						</div>
						<div class="form-group">
							<input type='password' required="required" class="password-repeat form-control" name='password-repeat' placeholder='Retype Password'></input>
						</div>
						<input id='submit-button' class='btn btn-default' type='submit' value="Sign Up" name='submit'></input>
					</form>
					<hr />
					<a href='#' class='go-back'><em>Already have an account?</em></a>
				</div>
				<div class="register-success"></div>

			</div>
			<div id="main-game-content">
				<a href="#" id="settings-button"><i class="fa fa-user" aria-hidden="true"></i></a>
				<a href="#" class="new-thought-button"><span class="glyphicon glyphicon-pencil"></span></a>
			</div>
			<div id="settings-screen">
				<h1>User</h1>
				<button class="cancel-button"><span class="glyphicon glyphicon-remove"></span></button>
			</div>
			<div id="thought-read-screen">
				<div id="read-thought">
					<div id="read-thought-text-container">
						<textarea readonly name="thought"></textarea>
					</div>
				</div>
				<div id="read-thought-miles-away">
					<p></p>
				</div>
				<div id="read-thought-menu">
					<ul>
						<li><button onclick="showComments(this);" class="comment-button"><i class="fa fa-commenting" aria-hidden="true"></i></button></li>
						<li><button onclick="markAsSaved(this);" class="save-button"><i class="fa fa-plus" aria-hidden="true"></i></button></li>
						<li><button onclick="like(this, globalID);" class="like-button"><i class="fa fa-heart" aria-hidden="true"><p class="total-likes">1</p></i></button></li>
					</ul>
				</div>
				<button id="mark-as-read" onclick="markThoughtAsRead();" class="cancel-button"><span class="glyphicon glyphicon-remove"></span></button>
			</div>
		</div>
	</div>
	<!-- wrapper ends -->
	<script src="assets/js/jquery-ui.min.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script src="assets/js/granim.min.js"></script>
	<script src="assets/js/gradient-canvas.js"></script>
	<script src='assets/js/spectrum.js'></script>
	<script src="assets/js/main.js"></script>
</body>
</html>
