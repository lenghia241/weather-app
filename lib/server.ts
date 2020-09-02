import app from './config/app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log('Express server listening on port ' + PORT);
});
