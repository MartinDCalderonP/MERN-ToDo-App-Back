const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./connection');

app.set('port', process.env.PORT || 8888);

app.use(morgan('dev'));
app.use(express.json());

const tasksRoutes = require('./routes/tasks_routes');
app.use('/API/tasks', tasksRoutes);

app.listen(app.get('port'), () => {
	console.log(`Listening on port ${app.get('port')}.`);
});
