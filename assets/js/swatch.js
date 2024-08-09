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

function hueSwatch() {
	let swatchPercent = getSwatch() / 1000;
	let degree = Math.floor(360 * swatchPercent);

	return degree;
}

function updateSwatch() {
	document.getElementById('swatchClock').innerHTML = '@' + getSwatch();
}
setInterval(updateSwatch, 864);

