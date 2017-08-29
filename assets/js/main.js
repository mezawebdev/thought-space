/**************************************/
/*		Thought Space Source Code     */
/*		Year: 2017 					  */
/*		Author: Alex Meza			  */
/**************************************/

$(document).ready(function() {

	/* Console/Developer Code */
	// Must be deleted prior to release
	var displayIntroScreen = true;
	var displayThoughtEditorScreen = false;
	var displayIntroBackgroundThoughts = true;
	var displayDarkOverlay = false;
	var displayFeedbackScreen = false;
	var displayMainScreen = false;
	var displayPreviewScreen = false;
	var displayLoginScreen = true;
	var displayOnlineBackgroundThoughts = false;
	var latitude;
	var longitude;

	if (displayIntroScreen === false) {
		$("#main-content").css("display", "none");
	} else {
		$("#main-content").css("display", "block");
	}

	if (displayThoughtEditorScreen === false) {
		$("#new-thought-container").css("display", "none");
	} else {
		$("#new-thought-container").css("display", "block");
	}

	if (displayDarkOverlay === false) {
		$("#dark-overlay").css("display", "none");
	} else {
		$("#dark-overlay").css("display", "block");
	}
	
	/*if (displayFeedbackScreen === false) {
		$("#feedback-screen").css("display", "none");
	} else {
		$("#feedback-screen").css("display", "block");
	}*/

	if (displayMainScreen === false) {
		$("#main-game-content").css("display", "none");
	} else {
		$("#main-game-content").css("display", "block");
	}

	if (displayPreviewScreen === false) {
		$(".preview-content").css("display", "none");
	} else {
		$(".preview-content").css("display", "block");
	}

	if (displayLoginScreen === false) {
		$(".intro-content").css("display", "none");
		/*$(".login-content").css("display", "none");*/
	} else {
		$(".intro-content").css("display", "block");
		/*$(".login-content").css("display", "block");*/
	}

	/******************************/
	/****** GLOBAL VARIBLES *******/
	/******************************/
	// Global isMobile Check
	var isMobile = false;
	if (/Mobi/.test(navigator.userAgent)) {
    	isMobile = true; // mobile!
	}
	var thoughtCounter = 0;
	var onlineThoughtCounter = 0;
	var introAnimationDuration = 250;
	var thoughtArray = [];
	var windowSizeTransitionSpeed = 500;


	// -----------------------------
	//	Functions
	// -----------------------------

	function expandVertically(element, amount) {
		$(element).animate({
			height: "+=" + amount + "px"
		});
	}

	function contractVertically(element, amount) {
		$(element).animate({
			height: "-=" + amount + "px"
		});
	}

	function raiseOpacity(data, follower) {
		$(data).animate({
			opacity: 1
		}, 500, function() {
			raiseOpacity(follower);
		});
	}

	function lowerOpacity(data, follower) {
		$(data).animate({
			opacity: 0
		}, 500);
	}

	function setDisplayNone(element) {
		setTimeout(function() {
			$(element).css("display", "none");
		}, 300);
	}

	function setDisplayBlock(element) {
		setTimeout(function() {
			$(element).css("display", "block");
		}, 0);
	}

	function setWidthHeight (element, width, height) {
		$(element).css({
			"width": width + "px",
			"height": height + "px"
		});
	}

	function compactDiv(data, height, follower) {
		//console.log("haha");
		$(data).animate({
			height: "-=" + height + "px"
		}, 1000);
	}

	function shrinkDiv(element, width, height) {
		$(element).animate({
			width: "-=" + width + "px",
			height: "-=" + height + "px"
		}, 1000);
	}

	function expandDiv(element, width, height) {
		$(element).animate({
			width: "+=" + width + "px",
			height: "+=" + height + "px"
		});
	}

	function moveOffScreen(element, direction) {
		if (direction === "top") {
			$(element).animate({
				top: "-50vh"
			}, 1000);
		} else if (direction === "bottom") {
			$(element).animate({
				top: "100vh"
			}, 1000);
		}
	}

	function setTop(element, top) {
		$(element).css("top", top);
	}

	function thoughtEditorSetColor(color) {
		$("#new-thought").css({
			"background": color,
			"box-shadow": "0px 0px 25px " + color
		});
	}

	function thoughtEditorSetFontColor(color) {
		$("#new-thought #new-thought-text-container textarea").css("color", color);
	}

	function decreaseHeightAnimated(element, amount) {
		$(element).animate({
			height: "-=80px"
		});
	}

	function setBackgroundColor(element, color) {
		$(element).css("background", color);
	}

	function setBoxShadow(element, color) {
		$(element).css("box-shadow", "0px 0px 30px " + color);
	}



	// -----------------------------
	//	Online Functions
	// -----------------------------
	function signUp() {
		var userName = $(".register-content form input.username").val();
		var password = $(".register-content form input.password").val();
		var passwordRepeat = $(".register-content form input.password-repeat").val();
		var email = $(".register-content form input.email").val();
		var dataString = "username=" +  userName + "&password=" + password + "&password-repeat=" + passwordRepeat + "&email=" + email;
		//console.log(dataString);
		$.ajax({
			type: "POST",
			url: "register_query.php",
			dataType: "json",
			data: dataString,
			success: function(data) {
				$(".register-success").html("<span class='glyphicon glyphicon-ok'></span><h2>All set!</h2><br /><button onclick='startThinking();'>Start Thinking</button>");
				//console.log(data);
			}
		});
	}
	
	
	function login() {
		var userName = $(".login-content form input.login-username").val();
		var password = $(".login-content form input.login-password").val();
		var dataString = "login-username=" + userName + "&login-password=" + password;
		//console.log(dataString);
		$.ajax({
			type: "POST",
			url: "login_query.php",
			dataType: "json",
			data: dataString,
			success: function(data) {
				//console.log(data);
				if (data == null) {
					$(".spinner").css("opacity", "0");
				} else {
					startThinking();
				}
			}
		});
	}


	function submitNewThought() {
		// Stores current time in new String
		var currentTime = new Date();
		var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

        // RGB To HEX
        function rgb2hex(rgb) {
			rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		}

		function hex(x) {
		 	return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
		}

		// Fetches thought settings from Front-End
		var color = rgb2hex($("#new-thought").css("background-color"));
		var geoLocation = latitude + "," + longitude;
		var submitted = currentTime.toString();
		var thought = $("#new-thought-text-container textarea").val();
		var fontSize = $("#new-thought-text-container textarea").css("font-size");
		var font = $("#new-thought-text-container textarea").css("font-family");
		var fontColor = rgb2hex($("#new-thought-text-container textarea").css("color"));
		/*console.log(
			"\nColor: " + color +
			"\ngeoLocation: " + geoLocation +
			"\nsubmitted: " + submitted +
			"\nthought: " + thought +
			"\nfontSize: " + fontSize +
			"\nfont: " + font +
			"\nfontColor: " + fontColor
			);*/
		var dataString = "color=" + color + "&geolocation=" + geoLocation + "&thought=" + thought + "&font-size=" + fontSize + "&font=" + font + "&font-color=" + fontColor;
		//console.log(dataString);
		$.ajax({
			url: "stream-submit-new-thought.php",
			type: "POST",
			data: dataString,
			success: function() {
						shrinkDiv("#new-thought", 150, 150);
						setTimeout(function() {
							moveOffScreen($("#new-thought"), "top");
						}, 1000);
						setTimeout(function() {
							lowerOpacity($("#new-thought-container"));
							setDisplayNone($("#new-thought-container"));
						}, 2000);
						setTimeout(function() {
							setDisplayBlock($("#feedback-screen"));
							raiseOpacity($("#feedback-screen"));
							setDisplayBlock($("#new-thought-success"));
							raiseOpacity($("#new-thought-success"));
						}, 2500);
					}
		});
	}

	function checkIfLoggedIn() {
		$.ajax({
			url: "check_login.php",
			type: "json",
			success: function(loggedIn) {
				//console.log(loggedIn);
				if (loggedIn) {
					$(".spinner").hide();
					startThinking();
				}
				else {
					$(".spinner").hide();
					$("#main-content").delay(introAnimationDuration).animate({
						height: "+=200px"
					}, 1000, function() {
						raiseOpacity($(".intro-content-info"));
					});
				}
			}
		});
	}

	function displaySessionId() {
		$.ajax({
			url: "fetch-session-id.php",
			dataType: "json",
			type: "POST",
			success: function(id) {
				$("#settings-screen h1").html(id); 
			}
		});
	}

	// -----------------------------
	//	GeoLocation Functions
	// -----------------------------
	function fetchPosition() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(processPosition, failedPosition);
		} else {
			document.getElementById("top-bar-error").innerHTML = "Please update your browser";
			document.getElementById("top-bar-error").style.display = "block";
		}
	}

	function processPosition(position) {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;
		//console.log("Latitude: " + latitude + "\nLongitude: " + longitude);
	}

	function updateStream(position) {

	}

	function failedPosition(position) {
		document.getElementById("top-bar-error").innerHTML = "Could not find position";
		document.getElementById("top-bar-error").style.display = "block";
	}

	/******************************/
	/***** GLOBAL ANIMATIONS ******/
	/******************************/

	//* 1. IF MOBILE CHECK

	//* 2. FADE OUT LOADING SCREEN ANIMATION
	$("#loading-screen").fadeOut(1500, function() {
		raiseOpacity($(".login-content h1"));
		checkIfLoggedIn();
	});



	//* 5. Cancel Button 
	$("button.cancel-button").on("click", function(element) {
		/*lowerOpacity($("#new-thought-container"));
		lowerOpacity($("#dark-overlay"));
		lowerOpacity($("#settings-screen"));
		lowerOpacity($("#thought-read-screen"));
		setDisplayNone($("#thought-read-screen"));
		setDisplayNone($("#settings-screen"));
		setDisplayNone(element);
		setDisplayNone($("#new-thought-container"));
		setDisplayNone($("#dark-overlay"));*/
		$("#new-thought-container").hide();
		$("#dark-overlay").hide();
		$("#settings-screen").hide();
		$("#thought-read-screen").hide();
		$(element).hide();
		$("#main-game-content").show();
		setDisplayBlock($("#main-game-content"));
		raiseOpacity($("#main-game-content"));

	});


	//* 6. Set Thoughts
	/*if (isMobile) {
		var thoughtArray = [];
		for (var i = 0; i < 33; i++) {
			thoughtArray.push($("#background-graphic .thought-wrapper:nth-child(" + i + ")"));
		}
		setInterval(function() {
			for (var i = 0; i < 33; i++) {
				thoughtArray[i] = $("#background-graphic .thought-wrapper:nth-child(" + i + ")");	
			}
			//console.log(thoughtArray[4]);
		}, 1000);
	} else if (!isMobile) {
		var thoughtArray = [];
		for (var i = 0; i < 65; i++) {
			thoughtArray.push($("#thought" + i));
		}
		setInterval(function() {
			for (var i = 0; i < 65; i++) {
				thoughtArray[i] = $("#thought" + i);
			}
		}, 1000);
	}

	$(thoughtArray[0]).on("click", function() {
		alert("hi!");
	});

	$(thoughtArray[1]).on("click", function() {
		alert("hi!");
	});*/

	/******************************/
	/******** INTRO SCREEN ********/
	/******************************/

	//* 1. Sign Up Button Handler
	$("#sign-up-button").on("click", function() {
		lowerOpacity($(".intro-content"));
		lowerOpacity($("#main-content h1"));
		setDisplayNone("#main-content h1");
		setDisplayNone($(".intro-content"));
		lowerOpacity($("#main-content h1.intro-title"));
		setDisplayNone($("#main-content h1.intro-title"));
		$(".register-content").css("display", "block");
		$("#main-content").delay(300).animate({
			height: "+=90px"
		}, windowSizeTransitionSpeed, function() {
			// Callback call to next frame
			setTimeout(function() {
				$(".register-content").animate({
					opacity: 1
				}, 500);
				setDisplayBlock($(".register-content h1"));
				raiseOpacity($(".register-content h1"));
			}, 500);
		});
	});

	//* 2. Log In Button Handler
	$("#log-in-button").on("click", function() {
		lowerOpacity($(".intro-content"));
		setDisplayNone($(".intro-content"));
		setDisplayBlock($(".login-content"));
		raiseOpacity($(".login-content"));
		setTimeout(function() {
			raiseOpacity($(".login-content form"))
		}, 1000);
	});


	/******************************/
	/******** LOGIN SCREEN ********/
	/******************************/

	//* 1. LOGIN SCREEN AJAX FORM
	$(".login-content form input.login-submit").on("click", function(data) {
		$(".spinner").css("opacity", "1");
		var isValidate = $(".login-content form")[0].checkValidity();
		if (isValidate) {
			data.preventDefault();
			login();
		} else {
			$(".spinner").css("opacity", "0");
		}
	});


	//* 2. "Don't have an account?" BUTTON
	$(".login-content a").on("click", function(data) {
		lowerOpacity($(".login-content"));
		lowerOpacity($("#main-content h1.intro-title"));
		raiseOpacity($(".register-content h1"));
		setDisplayBlock($(".register-content h1"));
		$(".register-content").css("display", "block");
		$("#main-content").delay(500).animate({
			height: "+=90px"
		}, 1000, function() {
			setTimeout(function() {
			$(".register-content").animate({
				opacity: 1
			}, 500);
		}, 400);
		});
		setTimeout(function() {
			$(".login-content").css("display", "none");
			setDisplayNone($("#main-content h1.intro-title"));
		}, 500);
	});

	//* 3. DELETE ERROR OVERLAY ON CLICK
	$(".login-content input.login-username").on("click", function() {
		$(".login-username-error").remove();
	});
	$(".login-content input.login-password").on("click", function() {
		$(".login-password-error").remove();
	});


	/******************************/
	/******* SIGN UP SCREEN *******/
	/******************************/

	//* 1. Sign Up screen AJAX Form handler
	$(".register-content form #submit-button").on("click", function(element) {
		var isValidate = $(".register-content form")[0].checkValidity();
		if (isValidate) {
			element.preventDefault();
			signUp();
			lowerOpacity($(".register-content"));
			$(".register-content").delay(1000).css("display", "none");
		}
	});

	//* 2. Click "go back" button on sign up page
	$(".register-content .go-back").on("click", function(data) {
		lowerOpacity(".register-content");
		setTimeout(function() {
			$(".register-content").css("display", "none");
		}, 1000);
		$("#main-content").delay(1000).animate({
			height: "-=90px"
		}, 1000, function() {
			$(".login-content").css("display", "block");
			raiseOpacity($(".login-content"));
			raiseOpacity($("#main-content h1.intro-title"));
			raiseOpacity($(".login-content form"));
			setDisplayBlock($("#main-content h1.intro-title"));
			raiseOpacity($(".login-content"));
		});
	});

	// Register Success Screen
	//* 3. "Start Thinking" Button
	/*$(startThinking).on("click", function() {
		//console.log("clicked");
		$("#loading-screen").fadeIn(1500);
	});*/

	/******************************/
	/****** MAIN GAME SCREEN ******/
	/******************************/
	var settingsButtonClicked = false;

	//* 1. New Thought Button
	$(".new-thought-button").on("click", function(element) {
		setDisplayNone($("#settings-screen"));
		lowerOpacity($("#settings-screen"));
		lowerOpacity($("#main-game-content"));
		setDisplayNone($("#main-game-content"));
		raiseOpacity($("#new-thought-container"));
		raiseOpacity($("#dark-overlay"));
		setDisplayBlock($("#new-thought-container"));
		setTop($("#new-thought"), "50%");
		if ($(window).width() <= 480) {
			setWidthHeight($("#new-thought"), 200, 200);
		} else {
			setWidthHeight($("#new-thought"), 250, 250);
		}
		setDisplayBlock($("#dark-overlay"));
		setDisplayBlock($("#new-thought-container button"));
		raiseOpacity($("#new-thought-container button"));
	});

	//* 2. Settings Button
	$("#settings-button").on("click", function() {
		$("#main-game-content").hide();
		displaySessionId();
		setDisplayBlock($("#dark-overlay"));
		raiseOpacity($("#dark-overlay"));
		setDisplayBlock($("#settings-screen"));
		raiseOpacity($("#settings-screen"));
		raiseOpacity($("#settings-screen button"));
		setDisplayBlock($("#settings-screen button"));

	});


	/******************************/
	/* NEW THOUGHT EDITOR SCREEN  */
	/******************************/

	//* 1. COLOR PICKER EVENTS
	$("#color-picker").spectrum();
	$("#font-color-picker").spectrum();
	$(".sp-choose, .sp-val").on("click", function() {
		var colorString = $(".sp-preview-inner").css("background-color");
		//console.log(colorString);
		setBackgroundColor($("#new-thought"), colorString);
		setBoxShadow($("#new-thought"), colorString);
	});

	//2. Share Button Events
	$("#new-thought-container .send-button").on("click", function(element) {
		$(".cancel-button").css("display", "none");
		submitNewThought();
	});

	// Feedback Screen
	//* 3. Success
	$("#new-thought-success button").on("click", function() {
		lowerOpacity($("#dark-overlay"));
		lowerOpacity($("#feedback-screen"));
		setDisplayNone($("#dark-overlay"));
		setDisplayNone($("#feedback-screen"));
		setDisplayBlock($("#main-game-content"));
		raiseOpacity($("#main-game-content"));
	});



	//----------------
	//	Settings Screen
	//---------------- 

	//* 1. 

	setInterval(function() {
		$(".thought-wrapper").on("click", function() {
			//console.log("yo!");
		});
	}, 1100);

	$("#dark-overlay").on("click", function(element) {
		lowerOpacity($("#new-thought-container"));
		lowerOpacity($("#dark-overlay"));
		lowerOpacity($("#settings-screen"));
		lowerOpacity($("#thought-read-screen"));
		setDisplayNone($("#thought-read-screen"));
		setDisplayNone($("#settings-screen"));
		setDisplayNone(element);
		setDisplayNone($("#new-thought-container"));
		setDisplayNone($("#dark-overlay"));
		setDisplayBlock($("#main-game-content"));
		raiseOpacity($("#main-game-content"));
	});

//-----------------------
//	Thought Read Screen
//-----------------------

// 1. Click On Animations









});