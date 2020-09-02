import app from './config/app';
import env from './environment';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(process.env.PORT);
	console.log('Express server listening on port ' + PORT);
});
