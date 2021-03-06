import express, { Application } from 'express';
import gstAPI from './routes/gst';

const app: Application = express();
const port = 5000;

app.use(express.static(__dirname + '/public'));

//template engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/view');

//json-parser
app.use(express.json());

//handler for :gst api
app.use('/gst', gstAPI);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Running on port ${port}`));
