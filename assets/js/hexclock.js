function ttHex()
{
 	var d = new Date()
 	var h = d.getHours();
 	var m = d.getMinutes();
 	var s = d.getSeconds();

 	if (h<=9) {h = '0'+h};
 	if (m<=9) {m = '0'+m};
	if (s<=9) {s = '0'+s};

 	return '#'+h+m+s;
}

function updateHex() {
	document.getElementById('hexClock').innerHTML = ttHex();
}
setInterval(updateHex, 1000);
