window.onload = function() {
	let grid = document.getElementById('grid');
	for (let j = 0; j < 64; j++) {
		for (let i = 0; i < 64; i++) {
			grid.appendChild(getNode(i, j));
		}
	}
}

var polygons = [];

var points = [];

function getNode(i, j) {
	let node = document.createElement('div');
	node.classList.add('node');
	node.onclick = function() {
		points.push({i: i, j: j});
		draw();
	};
	node.onmouseover = function() {
		draw({i: i, j: j});
	}
	return node;
}

function draw(preview) {
	let svg = document.getElementById('svg');
	let scale = 64 * 8;
	svg.innerHTML = 
	`<svg height="${scale}" width="${scale}" viewBox="-.5 -.5 64 64" xmlns="http://www.w3.org/2000/svg" class="svg">
		<polygon points="${getPoints(preview)}" fill="red" stroke-width="0" />
	</svg>`;
}

function getPoints(preview) {
	let result = points.map(format).join(' ');
	if (preview) {
		result += ' ' + format(preview);
	}
	return result;
}

function format(point) {
	return `${point.i},${point.j}`;
}

function zoom(scale) {
	
}