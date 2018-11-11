function sigmoid(x) {
	return 1 / (1 + Math.exp(-x));
}

function dSigmoid(y) {
	return y * (1 - y);
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

		this.learningRate = 0.1;
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

	train(inputArr, targetArr) {
		// Generating the Hidden Outputs
		let inputs = Matrix.fromArray(inputArr);
		let hidden = Matrix.multiply(this.weightsIH, inputs);
		hidden.add(this.biasHidden);
		//activation function
		hidden.map(sigmoid);

		// Generating the output's output
		let outputs = Matrix.multiply(this.weightsHO, hidden);
		outputs.add(this.biasOutput);
		outputs.map(sigmoid);

		//convert arrays to Matrix
		let targets = Matrix.fromArray(targetArr);

		//Calculate the error: ERROR =  TARGETS - OUTPUTS
		let outputErrors = Matrix.subtract(targets, outputs);

		// let gradient = outputs * (1-outputs)
		// Calculate gradient
		let gradients = Matrix.map(outputs, dSigmoid);
		gradients.multiply(outputErrors);
		gradients.multiply(this.learningRate);

		// Calculate deltas
		let hiddenTranspose = Matrix.transpose(hidden);
		let weightsHO_deltas = Matrix.multiply(gradients, hiddenTranspose);

		// Adjust the weights by deltas
		this.weightsHO.add(weightsHO_deltas);
		//Adjust the bias by its deltas (i.e. the gradients)
		this.biasOutput.add(gradients);

		//Calculate the hidden layer errors
		let weightsHOT = Matrix.transpose(this.weightsHO); //HOT for Hidden Output Transpose
		let hiddenErrors = Matrix.multiply(weightsHOT, outputErrors);

		// calculate hidden gradient
		let hiddenGradients = Matrix.map(hidden, dSigmoid);
		hiddenGradients.multiply(hiddenErrors);
		hiddenGradients.multiply(this.learningRate);

		//calculate input->hidden deltas
		let inputsTranspose = Matrix.transpose(inputs);
		let weightsIH_deltas = Matrix.multiply(hiddenGradients, inputsTranspose);

		// Adjust the weights by deltas
		this.weightsIH.add(weightsIH_deltas);
		//Adjust the hidden bias by its deltas (i.e. the gradients)
		this.biasHidden.add(hiddenGradients);
		//Finding delta descent
		// outputs.print();
		// targets.print();
		// outputErrors.print();
	}
}
