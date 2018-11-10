class neuralNetwork {
	constructor(inputNodes, hiddenNodes, outputNodes) {
		this.inputNodes = inputNodes;
		this.hiddenNodes = hiddenNodes;
		this.outputNodes = outputNodes;
	}
}

function setup() {
	let a = new Matrix(2, 3);
	let b = new Matrix(3, 2);
	a.randomize();
	b.randomize();
	let d = a.transpose();
	console.table(a.matrix);
	console.table(d.matrix);
	// console.table(b.matrix);

	// let c = a.multiply(b);
	// console.table(c.matrix);
}
