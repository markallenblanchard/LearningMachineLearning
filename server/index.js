const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const compression = require('compression');
const app = express();

app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// compression middleware
app.use(compression());

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.use(function(err, req, res, next) {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function() {
	console.log('Knock, knock');
	console.log("Who's there?");
	console.log(`Your server, listening on port ${port}`);
});
