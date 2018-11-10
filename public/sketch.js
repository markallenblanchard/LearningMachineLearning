function setup() {
	// let a = new Matrix(2, 3);
	// let b = new Matrix(3, 2);
	// a.randomize();
	// b.randomize();
	// console.table(a.data);
	// console.table(b.data);
	// let e = Matrix.multiply(a, b);
	// console.table(e.data);
	// console.table(b.matrix);
	// let d = a.transpose();

	// let c = a.multiply(b);
	// console.table(c.matrix);

	let nn = new NeuralNetwork(2, 2, 1);

	let input = [ 1, 0 ];

	let output = nn.feedforward(input);
	console.log(output);
}
