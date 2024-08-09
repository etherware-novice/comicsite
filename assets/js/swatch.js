function getSwatch(showCenti = true) {
	var date = new Date();
	var hours = date.getUTCHours();
	var minutes = date.getUTCMinutes();
	var seconds = date.getUTCSeconds();
	var ms = date.getUTCMilliseconds();

	hours = hours == 23 ? 0 : hours + 1;

	var timeMS = ((hours * 60 + minutes) * 60 + seconds) * 1000 + ms;
	var trueSwatch = Math.abs(timeMS / 86400);

	if (showCenti) {
		return trueSwatch.toFixed(2);
	}
	else {
		return Math.floor(trueSwatch);
	}
}

var disp = document.getElementById('swatchClock');
function updateSwatch() {
	disp.innerHTML = '@' + getSwatch();
}
setInterval(updateSwatch, 864);
