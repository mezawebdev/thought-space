var onlineThoughtCounter = 0;
var thoughtCounter = 0;
var mobile = false;
var animationFrame = 0;
var thoughtCreationInterval;
var thoughtKillInterval;
var killTimeout;
if (/Mobi/.test(navigator.userAgent)) {
    	mobile = true; // mobile!
}
var thoughtCount = 0;
var maxNumThoughtsDesktop = 32;
var maxNumThoughtsMobile = 32;
var globalID;

//*	This method opens the thought
//*
//* 
function openThought(thought) {
	// Open/Close Animations
	markThoughtAsRead(thought);
	$("#main-game-content").animate({
		opacity: 0
	}, 100);
	setTimeout(function() {
		$("#main-game-content").css("display", "none");
	}, 100),
	$("#dark-overlay").css("display", "block");
	$(".cancel-button").css("display", "block");
	$("#dark-overlay").animate({
		opacity: 1
	}, 100);
	$("#thought-read-screen").css("display", "block");
	$("#thought-read-screen").animate({
		opacity: 1
	}, 100);

	// Construct Thought 
	// Fetch # of likes from Database
	var thoughtID = parseInt($(thought).attr("id"));
	globalID = thoughtID;
	var color = $("#" + thoughtID + " div").css("background-color");
	var boxShadow = $("#" + thoughtID + " div").css("box-shadow");
	var geoLocation;
	var fontSize;
	var font;
	fetchLikes(thoughtID);
	var likes = fetchLikes(thoughtID);
	var thought = $("#" + thoughtID + " div textarea").val();
	$("#read-thought").css({
		"background": color,
		"box-shadow": boxShadow
	});
	$("#read-thought textarea").html(thought);
	console.log(color + ", " + thought + ", " + boxShadow);
}

function fetchLikes(id) {
	$.ajax({
		url: "fetch_likes.php",
		type: "POST",
		data: "id=" + id,
		dataType: "json",
		success: function(likes) {
			console.log(likes);
			if (likes == 0) {
				$(".total-likes").html("");
			} else {
				$(".total-likes").html(likes);
			}
		}
	});
}

function like(button, id) {
	$(button).css("color", "#C10000");
	$.ajax({
		url: "like.php",
		data: "id=" + id,
		dataType: "json",
		type: "POST",
		success: function(likes) {
			$(".total-likes").html(likes);
		}
	});
}


function startThinking() {
	console.log("Clicked!");
	$("#loading-screen").fadeIn(1000);
	clearInterval(thoughtCreationInterval);
	thoughtCreationInterval = 0;
	clearInterval(thoughtKillInterval);
	thoughtKillInterval = 0;
	clearTimeout(killTimeout);
	setTimeout(function() {
		$("#main-content").css({
			"display": "none",
			"opacity": "0"
		});
		$("#main-game-content").css({
			"display": "block",
			"opacity": "1"
		});
		$("#background-graphic").html("");
		think(false, true, mobile);
		$("#loading-screen").fadeOut(1000);
	}, 1000);
}

function fetchThought() {
	// Starting position on screen is always random
	var randomLeft = Math.random() * 100;
	var randomTop = Math.random() * 100;
	// Size is  based on thoght distance from your geoLocation
	//var randomSize = ((Math.floor(Math.random() * 10)) / 2) + 3;
	var randomSize = ((Math.floor(Math.random() * 10)) / 2) + 6;
	// Color is set by user on thought creation.
	// Must use AJAX to retrieve color values from database.
	var randomColor = getRandomColor();
	$.ajax({
		url: "stream-get-thought-info.php",
		type: "POST",
		dataType: "json",
		success: function(thought) {
			//console.log(thought);
			/*console.log(
				"Thought Color: " + thought[0] +
				"\nGeoLocation: " + thought[1] +
				"\nSubmitted: " + thought[2] +
				"\nThought: " + thought[3] +
				"\nFont Size: " + thought[4] +
				"\nFont: " + thought[5] +
				"\nFont Color: " + thought[6]
				);*/
			generateOnlineThought(thought[0], thought[1], thought[2], thought[3], thought[4], thought[5], thought[6], thought[7], thought[8], thought[9], randomLeft, randomTop, randomSize);
		},
		error: function (xhr, ajaxOptions, thrownError) {
           console.log(xhr.status);
           console.log(xhr.responseText);
           console.log(thrownError);
       }
	});
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function generateThought(currentThought) {
	var randomLeft = Math.random() * 100;
	//var randomSize = ((Math.floor(Math.random() * 10)) / 2) + 3;
	var randomSize = ((Math.floor(Math.random() * 10)) / 2) + 5;
	var randomColor = getRandomColor();
	/*console.log("Random Size: " + randomSize);
	console.log("Random Color: " + randomColor); */
	//$("#background-graphic a:nth-child(" + currentThought + ")").toggleClass("thought-wrapper");
	$("#background-graphic").append("<a href='#' onclick='preventDefault();' id='thought" + thoughtCounter + "' class='thought-wrapper' style='left: " + randomLeft + "%;'><div onclick='stopHoverAnimation(this);' style='box-shadow: 0px 0px 20px " + randomColor + "; background: " + randomColor + "; width: " + randomSize + "px; height: " + randomSize + "px;' class='thought'></div></a>");
	//thoughtArray[thoughtCounter] = $("#thought" + thoughtCounter);
	/*console.log(thoughtArray[thoughtCounter]);
	$(thoughtArray[thoughtCounter]).on("click", function(element) {
		$(element).css("display", "none");
	});*/
	thoughtCounter++;
	if (thoughtCounter === 65) {
		thoughtCounter = 0;
	} else if (mobile && thoughtCounter === 33) {
		thoughtCounter = 0;
	}	
}

function markThoughtAsRead(thought) {

}

function generateOnlineThought(id, color, geolocation, submitted, user, thought, fontSize, font, fontColor, likes, left, top, size) {
	if (mobile && thoughtCount <= maxNumThoughtsMobile) {
		console.log(thoughtCount);
		$("#background-graphic").append("<a href='#' onclick='openThought(this); markThoughtAsRead(this);' id='" + id + "' class='thought-wrapper' style='opacity: 0; animation-name: onlineThoughtAnim; animation-duration: 5s; animation-direction: alternate; animation-iteration-count: infinite; top: " + top + "%; left: " + left + "%;'><div style='box-shadow: 0px 0px 20px " + color + "; background: " + color + "; width: " + size + "px; height: " + size + "px;' class='thought'><textarea readonly>" + thought + "</textarea></div></a>");
		$("#" + id).animate({
			opacity: 1
		}, 700);
		onlineThoughtCounter++;
		thoughtCount++;
		if (onlineThoughtCounter === maxNumThoughtsDesktop) {
			onlineThoughtCounter = 0;
		} else if (mobile && onlineThoughtCounter === maxNumThoughtsMobile) {
			onlineThoughtCounter = 0;
		}
	}

	if (mobile === false && thoughtCount <= maxNumThoughtsDesktop) {
		console.log(thoughtCount);
		$("#background-graphic").append("<a href='#' onclick='openThought(this); markThoughtAsRead(this);' id='" + id + "' class='thought-wrapper' style='opacity: 0; animation-name: onlineThoughtAnim; animation-duration: 5s; animation-direction: alternate; animation-iteration-count: infinite; top: " + top + "%; left: " + left + "%;'><div style='box-shadow: 0px 0px 20px " + color + "; background: " + color + "; width: " + size + "px; height: " + size + "px;' class='thought'><textarea readonly>" + thought + "</textarea></div></a>");
		$("#" + id).animate({
			opacity: 1
		}, 700);
		onlineThoughtCounter++;
		thoughtCount++;
		if (onlineThoughtCounter === maxNumThoughtsDesktop) {
			onlineThoughtCounter = 0;
		} else if (mobile && onlineThoughtCounter === maxNumThoughtsMobile) {
			onlineThoughtCounter = 0;
		}
	}
}

function killThought(thought) {
	$(thought).animate({
		opacity: 0
	}, 100);
	setTimeout(function() {
		$(thought).remove();
	}, 100);
}

function killOnlineThought(thought) {
	if (mobile && thoughtCount < maxNumThoughtsMobile) {
		$(thought).animate({
			opacity: 0
		}, 100);
		setTimeout(function() {
			$(thought).remove();
		}, 100);
	}
	if (mobile === false && thoughtCount < maxNumThoughtsDesktop) {
		$(thought).animate({
			opacity: 0
		}, 100);
		setTimeout(function() {
			$(thought).remove();
		}, 100);
	}
}

function startKilling() {

}

function think(offline, online, mobile) {
	//* 3. Offline Thought Space Generator
	if (offline === true) {
		if (mobile) {
			console.log("Mobile enabled.");
			var thought = $(".thought");
			var thoughtUpdateTime = 1000;
			var thoughtsCreated = 0;
			var thoughtsKilled = 0;
			var thoughtsAlive = 0;
			var thoughtKilledDelay = 32000;
			thoughtCreationInterval = setInterval(function() {
				generateThought(thoughtsCreated);
				thoughtsCreated++;
				thoughtsAlive++;
				if (thoughtsCreated === 33) {
					thoughtsCreated = 0;
				}
				//thought = $(".thought");
				/*console.log("Creating thought... \nSuccess. \nThoughts created: " + thoughtsCreated);
				console.log("Total thoughts alive: " + thoughtsAlive);*/
			}, thoughtUpdateTime);

			killTimeout = setTimeout(function() {
				thoughtKillInterval = setInterval(function() {
					killThought($("#background-graphic .thought-wrapper:nth-child(1)"));
					thoughtsKilled++
					thoughtsAlive--;
					//thought = $(".thought");
					/*console.log("Killing thought... \nSuccess. \nThoughts killed: " + thoughtsKilled);
					console.log("Total thoughts alive: " + thoughtsAlive);*/
				}, thoughtUpdateTime);
			}, thoughtKilledDelay);
		}
		else {
			console.log("Desktop enabled.");
			var thought = $(".thought");
			var thoughtUpdateTime = 1000;
			var thoughtsCreated = 0;
			var thoughtsKilled = 0;
			var thoughtsAlive = 0;
			var thoughtKilledDelay = 32000;
			thoughtCreationInterval = setInterval(function() {	
				generateThought();
				thoughtsCreated++;
				thoughtsAlive++;
				//thought = $(".thought");
				/*console.log("Creating thought... \nSuccess. \nThoughts created: " + thoughtsCreated);
				console.log("Total thoughts alive: " + thoughtsAlive);*/
			}, thoughtUpdateTime);

			killTimeout = setTimeout(function() {
				thoughtKillInterval = setInterval(function() {
					killThought($("#background-graphic .thought-wrapper:nth-child(1)"));
					console.log("Offline Thought Killed.");
					thoughtsKilled++
					thoughtsAlive--;
					//thought = $(".thought");
					/*console.log("Killing thought... \nSuccess. \nThoughts killed: " + thoughtsKilled);
					console.log("Total thoughts alive: " + thoughtsAlive);*/
				}, thoughtUpdateTime);
			}, thoughtKilledDelay);
		}
	}

	//* 4. Online Thought Generator
	if (online === true) {
		// ONLINE-MOBILE
		if (mobile) {
			console.log("Mobile enabled.");
			var thought = $(".thought");
			var thoughtUpdateTime = 100;
			var thoughtsCreated = 0;
			var thoughtsKilled = 0;
			var thoughtsAlive = 0;
			var thoughtKilledDelay = 32000;
			thoughtCreationInterval = setInterval(function() {
				fetchThought();
				thoughtsCreated++;
				thoughtsAlive++;
				thought = $(".thought");
				/*console.log("Creating thought... \nSuccess. \nThoughts created: " + thoughtsCreated);
				console.log("Total thoughts alive: " + thoughtsAlive);*/
			}, thoughtUpdateTime);

			killTimeout = setTimeout(function() {
				thoughtKillInterval = setInterval(function() {
					killOnlineThought($("#background-graphic .thought-wrapper:nth-child(1)"));
					thoughtsKilled++
					thoughtsAlive--;
					thought = $(".thought");
					/*console.log("Killing thought... \nSuccess. \nThoughts killed: " + thoughtsKilled);
					console.log("Total thoughts alive: " + thoughtsAlive);*/
				}, thoughtUpdateTime);
			}, thoughtKilledDelay);
		}
		else {
		// ONLINE-DESKTOP
			console.log("Desktop enabled.");
			var thought = $(".thought");
			var thoughtUpdateTime = 100;
			var thoughtsCreated = 0;
			var thoughtsKilled = 0;
			var thoughtsAlive = 0;
			var thoughtKilledDelay = 64000;
			thoughtCreationInterval = setInterval(function() {
				fetchThought();
				thoughtsCreated++;
				thoughtsAlive++;
				thought = $(".thought");
				/*console.log("Creating thought... \nSuccess. \nThoughts created: " + thoughtsCreated);
				console.log("Total thoughts alive: " + thoughtsAlive);*/
			}, thoughtUpdateTime);

			killTimeout = setTimeout(function() {
				thoughtKillInterval = setInterval(function() {
					killOnlineThought($("#background-graphic .thought-wrapper:nth-child(1)"));
					console.log("Online Thought Killed.");
					thoughtsKilled++
					thoughtsAlive--;
					thought = $(".thought");
					/*console.log("Killing thought... \nSuccess. \nThoughts killed: " + thoughtsKilled);
					console.log("Total thoughts alive: " + thoughtsAlive);*/
				}, thoughtUpdateTime);
			}, thoughtKilledDelay);
		}
	}

}

function invokeThought(thought) {
	console.log("Thought Displayed");
	$(thought).animate({
		opacity: 1
	}, 400);
}


function markAsSaved(button) {
	$(button).css("color", "#05C10F")
}

think(true, false, mobile);


