function setup() {
	let a = new Matrix(2, 3);
	let b = new Matrix(2, 3);
	a.randomize();
	b.randomize();
	console.table(a.matrix);
	console.table(b.matrix);
	let e = a.add(b);
	console.table(e.matrix);
	// console.table(b.matrix);
	// let d = a.transpose();

	// let c = a.multiply(b);
	// console.table(c.matrix);
}
