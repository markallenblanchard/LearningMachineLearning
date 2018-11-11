class Matrix {
	constructor(rows, cols) {
		this.rows = rows;
		this.cols = cols;
		this.data = [];

		for (let i = 0; i < this.rows; i++) {
			this.data[i] = [];
			for (let j = 0; j < cols; j++) {
				this.data[i][j] = 0;
			}
		}
	}
	static fromArray(arr) {
		let m = new Matrix(arr.length, 1);
		for (let i = 0; i < arr.length; i++) {
			m.data[i][0] = arr[i];
		}
		return m;
	}

	toArray() {
		let arr = [];
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				arr.push(this.data[i][j]);
			}
		}
		return arr;
	}
	randomize() {
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				this.data[i][j] = Math.random() * 2 - 1;
			}
		}
	}

	// Subtracts one matrix from another
	static subtract(a, b) {
		let result = new Matrix(a.rows, a.cols);
		for (let i = 0; i < result.rows; i++) {
			for (let j = 0; j < result.cols; j++) {
				result.data[i][j] = a.data[i][j] - b.data[i][j];
			}
		}
		return result;
	}

	add(n) {
		let result = new Matrix(this.rows, this.cols);
		//element-wise add
		if (n instanceof Matrix) {
			for (let i = 0; i < this.rows; i++) {
				for (let j = 0; j < this.cols; j++) {
					result.data[i][j] += n.data[i][j] + this.data[i][j];
				}
			}
		} else {
			//scalar add
			for (let i = 0; i < this.rows; i++) {
				for (let j = 0; j < this.cols; j++) {
					result.data[i][j] += n;
				}
			}
		}
		return result;
	}

	static multiply(a, b) {
		//Matrix product
		if (a.cols !== b.rows) {
			console.log('columns of A must match rows of B');
			return undefined;
		}
		let result = new Matrix(a.rows, b.cols);

		for (let i = 0; i < result.rows; i++) {
			for (let j = 0; j < result.cols; j++) {
				//dot product of values in cols
				let sum = 0;
				for (let k = 0; k < a.cols; k++) {
					sum += a.data[i][k] * b.data[k][j];
				}
				result.data[i][j] = sum;
			}
			return result;
		}
	}
	multiply(n) {
		let result = new Matrix(this.rows, this.cols);
		if (n instanceof Matrix) {
			// hadamard product
			for (let i = 0; i < this.rows; i++) {
				for (let j = 0; j < this.cols; j++) {
					result.data[i][j] = n.data[i][j] * this.data[i][j];
				}
			}
		} else {
			//scalar product
			for (let i = 0; i < this.rows; i++) {
				for (let j = 0; j < this.cols; j++) {
					result.data[i][j] = n * this.data[i][j];
				}
			}
		}
		return result;
	}

	static transpose(matrix) {
		const result = new Matrix(matrix.cols, matrix.rows);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				result.data[j][i] = matrix.data[i][j];
			}
		}
		return result;
	}

	print() {
		console.table(this.data);
	}

	map(func) {
		let result = new Matrix(this.rows, this.cols);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				this.data[i][j] = func(this.data[i][j]);
			}
		}
	}
	static map(matrix, func) {
		// apply a function to every element of the matrix
		let result = new Matrix(matrix.rows, matrix.cols);
		for (let i = 0; i < result.rows; i++) {
			for (let j = 0; j < result.cols; j++) {
				result.data[i][j] = func(matrix.data[i][j]);
			}
		}
		return result;
	}
}
