$(function () { 
	var MAX_BGIMAGES = 4;
	$.backstretch("img/bg"+randInt(MAX_BGIMAGES)+".jpg");
});

randInt = function(end) {
   return (Math.floor(Math.random()*end)+1);
}