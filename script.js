var polygons = [];
var current = [];

var position;

window.onload = function() {
	let grid = document.getElementById('grid');
	position = document.getElementById('position');
	for (let j = 0; j < 64; j++) {
		for (let i = 0; i < 64; i++) {
			grid.appendChild(getNode(i, j));
		}
	}
}

function shortcut(e) {
	switch (e.key) {
		case 'z':
			current.pop();
			draw();
			break;
		case 'n':
			polygons.push(current);
			current = [];
			draw();
			break;
		default: return;
	}
	e.preventDefault();
}

function getNode(i, j) {
	let node = document.createElement('div');
	node.classList.add('node');
	node.onclick = function() {
		current.push({i: i, j: j});
		draw();
	};
	node.onmouseover = function() {
		draw({i: i, j: j});
		position.innerText = `(${i}, ${j})`;
	}
	return node;
}

function draw(preview) {
	let svg = document.getElementById('svg');
	let scale = 64 * 8;
	svg.innerHTML = 
			`<svg height="${scale}" width="${scale}" viewBox="-.5 -.5 64 64" xmlns="http://www.w3.org/2000/svg" class="svg">`
			+ polygons.map(p => getSvg(getPoints(p))).join('') + getSvg(getPoints(current, preview))
			+ '</svg>';
}

function getSvg(points) {
	return `<polygon points="${points}" fill="red" stroke-width="0" />`;
}

function getPoints(points, preview) {
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