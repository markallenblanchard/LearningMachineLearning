let trainingData = [
	//XOr Problem
	{
		inputs: [ 0, 1 ],
		target: [ 1 ]
	},
	{
		inputs: [ 1, 1 ],
		target: [ 0 ]
	},
	{
		inputs: [ 1, 0 ],
		target: [ 1 ]
	},
	{
		inputs: [ 0, 0 ],
		target: [ 0 ]
	}
];

function setup() {
	let nn = new NeuralNetwork(2, 2, 1);

	for (let i = 0; i < 10000; i++) {
		let data = trainingData[Math.floor(Math.random() * trainingData.length)];
		nn.train(data.inputs, data.target);
	}

	console.log(nn.feedforward([ 0, 1 ]));
	console.log(nn.feedforward([ 1, 1 ]));
	console.log(nn.feedforward([ 1, 0 ]));
	console.log(nn.feedforward([ 0, 0 ]));
}
