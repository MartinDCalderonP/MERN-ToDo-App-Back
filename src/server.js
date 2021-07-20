const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./connection');

app.set('port', process.env.PORT || 8888);

app.use(morgan('dev'));
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'https://mern-to-do-app.netlify.app',
    allowedHeaders: ['Access-Control-Allow-Origin', 'Content-Type'],
}));

const tasksRoutes = require('./routes/tasks_routes');
app.use('/API/tasks', tasksRoutes);

app.listen(app.get('port'), () => {
	console.log(`Listening on port ${app.get('port')}.`);
});
