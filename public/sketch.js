function setup() {
	let a = new Matrix(2, 3);
	let b = new Matrix(2, 3);
	a.randomize();
	b.randomize();
	console.table(a.data);
	console.table(b.data);
	let e = Matrix.multiply(a, b);
	console.table(e.data);
	// console.table(b.matrix);
	// let d = a.transpose();

	// let c = a.multiply(b);
	// console.table(c.matrix);
}
