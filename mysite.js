document.addEventListener("DOMContentLoaded", function(event) { 
	var ben = document.getElementById("ben");
	var stacey = document.getElementById("stacey");
	var gridbox = document.getElementById("gridbox");
// TweenLite.from(stacey, 0.7,  { y: -140 });
// TweenLite.from(ben, 0.3,  { y: -99 });

// draw grid


	for (var i = 0; i < 240; i ++) {
		var a = document.createElement("div");
		a.setAttribute("class", "cell");
		gridbox.appendChild(a)
	}

	// TweenLite.from(a, 1, { opacity: 0 });
	TweenMax.staggerFrom(".cell", 1, {transform: "scale(0.01)"}, 0.02);










});
