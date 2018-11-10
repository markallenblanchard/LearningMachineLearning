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
	randomize() {
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				this.data[i][j] = Math.floor(Math.random() * 8);
			}
		}
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

	scalarply(n) {
		//scalar product
		let result = new Matrix(this.rows, this.cols);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				result.data[i][j] = n * this.data[i][j];
			}
		}
		return result;
	}

	transpose() {
		const result = new Matrix(this.cols, this.rows);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				result.data[j][i] = this.data[i][j];
			}
		}
		return result;
	}

	print() {
		console.table(this.data);
	}

	map(func) {
		//scalar add
		let result = new Matrix(this.rows, this.cols);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				result.data[i][j] = func(result.data[i][j]);
			}
		}
	}
}

Matrix.prototype.multiply = (a, b) => {
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
};
