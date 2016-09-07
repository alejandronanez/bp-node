import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

const jsonData = { count: 12, message: 'hey' };

app.get('/', (req, res) => {
	const route = path.join(__dirname, '/index.html');
	res.sendFile(route, (err) => {
		if (err) {
			res.status(500).send(err);
		}
	});
});

app.get('/data', (req, res) => {
	res.json(jsonData);
});

app.listen(PORT, () => {
	console.log('listening on port 3000');
});
