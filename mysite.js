document.addEventListener("DOMContentLoaded", function(event) { 
	var ben = document.getElementById("ben");
	var stacey = document.getElementById("stacey");
	var gridbox = document.getElementById("gridbox");

	for (var i = 0; i < 240; i ++) {
		var a = document.createElement("div");
		a.setAttribute("class", "cell");
		gridbox.appendChild(a)
	}

	TweenMax.staggerFrom(".cell", 1, {transform: "scale(0.01)"}, 0.005);
});
