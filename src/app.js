require('dotenv').config();
const express = require('express');

const port = process.env.PORT;
const router = require('./routes');
const { errorHandler } = require('./middlewares');

const app = express();
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(port, () => console.log(`server running on port ${port}`));
