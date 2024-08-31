const lineSize = 30;
const lineCount = Math.ceil(window.innerHeight / lineSize);
const topScr = document.createElement("div");

const slideAnim = [
	{ translate: "0 0" },
	{ translate: "200vw 0" },
];

const slideTiming = {
	duration: (2000 / lineCount),
	iterations: 1,
	fill: "both",
};


for (let i = 0; i < lineCount; i++) {
	let currentLine = document.createElement("div");
	topScr.appendChild(currentLine);

	setTimeout( 
		() => { currentLine.animate(slideAnim, slideTiming); },
		i * slideTiming.duration
	);
}

topScr.id = "typeboot";
document.body.appendChild(topScr);
