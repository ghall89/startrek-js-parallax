const enterprise = document.querySelector('#enterprise_layer');
const entScale = 50;
const planet = document.querySelector('#planet_layer');
const planetScale = 90;
const background = document.querySelector('#background');
const bgScale = 140;

document.addEventListener('mousemove', e => {
	const x = e.clientX;
	const y = e.clientY;
	console.log([x, y]);

	enterprise.style.transform = `translate(${(0 - x) / entScale}px, ${
		(0 - y) / entScale
	}px)`;
	planet.style.transform = `translate(${(0 - x) / planetScale}px, ${
		(0 - y) / planetScale
	}px)`;
	background.style.transform = `translate(${(0 - x) / bgScale}px, ${
		(0 - y) / bgScale
	}px)`;
});
