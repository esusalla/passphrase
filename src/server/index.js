import express from 'express';
import path from 'path';

const app = express();
app.disable('x-powered-by');

if (process.env.NODE_ENV === 'development') {
  app.use(express.static(path.join(__dirname, 'public')));
}

app.listen(8080);
