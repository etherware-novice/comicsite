async function fetchFortune(file) {
	/*
	 * i am a fking idiot
	let dat = await fetch(`${file}.dat`)
	if (!dat.ok)
		{ throw new Error(`HTTP error: ${dat.status}`); }

	var bytes = await dat.arrayBuffer();
	bytes = new DataView(bytes);

	// bytes 4-8 are # of strings in file
	let arrLen = bytes.getUint32(4, false);
	let arrInd = Math.floor(Math.random() * arrLen);

	// starting at 24, each 4 bytes are another entry
	let strInd = bytes.getUint32(24 + (arrInd * 4), false);
	*/

	let subdat = await fetch(file);
	if (!subdat.ok)
		{ throw new Error(`HTTP error: ${subdat.status}`); }

	bytes = await subdat.text();
	//bytes = bytes.substring(strInd).split("%");
	bytes = bytes.split("%");
	bytes = bytes[Math.floor(Math.random() * bytes.length)];
	return bytes.slice(0,-1);;
}

async function updateFortune(elem, file) {
	let ft = await fetchFortune(file);
	elem.innerHTML = ft;
}
