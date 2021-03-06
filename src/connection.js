const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

mongoose
	.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((db) => console.log('Database connected.'))
	.catch((err) => console.log(err));

module.exports = mongoose;
