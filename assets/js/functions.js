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
	}, 1000);
}

function setDisplayBlock(element) {
	$(element).css("display", "block");
}

function compactDiv(data, height, follower) {
	console.log("haha");
	$(data).animate({
		height: "-=" + height + "px"
	}, 1000);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function animateCenter(element) {
	var thought = $(".thought");
	alert("haha!");
	$(element).addClass(".center");
}

function generateThought() {
	var randomLeft = Math.random() * 100;
	var randomSize = ((Math.floor(Math.random() * 10)) / 2) + 3;
	var randomColor = getRandomColor();
	/*console.log("Random Size: " + randomSize);
	console.log("Random Color: " + randomColor); */
	$("#background-graphic").append("<div id='thought-" + thoughtNumber + "' class='thought-wrapper' style='left: " + randomLeft + "%;'><div style='box-shadow: 0px 0px 20px " + randomColor + "; background: " + randomColor + "; width: " + randomSize + "px; height: " + randomSize + "px;' class='thought'></div></div>");
	thoughtNumber++;
	if (thoughtNumber === 65) {
		thoughtNumber = 0;
	} else if (isMobile && thoughtNumber === 34) {
		thoughtNumber = 0;
	}
}

function killThought(thought) {
	$(thought).remove()
}


function thoughtEditorSetColor(color) {
	$("#new-thought").css({
		"background": color,
		"box-shadow": "0px 0px 30px " + color
	});
}

function thoughtEditorSetFontColor(color) {
	$("#new-thought #new-thought-text-container textarea").css("color", color);
}