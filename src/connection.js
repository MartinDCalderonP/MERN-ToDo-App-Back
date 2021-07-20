const mongoose = require('mongoose');

const URI =
	'mongodb+srv://mdcp:Xq9Ga9AzLvb8abr@cluster0.mnqn4.mongodb.net/mern-todo-app-database?retryWrites=true&w=majority';

mongoose
	.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((db) => console.log('Database connected.'))
	.catch((err) => console.log(err));

module.exports = mongoose;
