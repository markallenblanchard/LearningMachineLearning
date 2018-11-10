function sigmoid(x) {
	return 1 / (1 + Math.exp(-x));
}

class NeuralNetwork {
	constructor(inputNodes, hiddenNodes, outputNodes) {
		this.inputNodes = inputNodes;
		this.hiddenNodes = hiddenNodes;
		this.outputNodes = outputNodes;

		this.weightsIH = new Matrix(this.hiddenNodes, this.inputNodes); //weights btwn input&hidden
		this.weightsHO = new Matrix(this.outputNodes, this.hiddenNodes); //weights btwn input&hidden
		this.weightsIH.randomize();
		this.weightsHO.randomize();

		this.biasHidden = new Matrix(this.hiddenNodes, 1);
		this.biasOutput = new Matrix(this.outputNodes, 1);
	}

	feedforward(inputArr) {
		// Generating the Hidden Outputs
		let inputs = Matrix.fromArray(inputArr);
		let hidden = Matrix.multiply(this.weightsIH, inputs);
		hidden.add(this.biasHidden);
		//activation function
		hidden.map(sigmoid);

		// Generating the output's output
		let output = Matrix.multiply(this.weightsHO, hidden);
		output.add(this.biasOutput);
		output.map(sigmoid);

		// sending back to caller
		return output.toArray();
	}

	// train() {

	// }
}
