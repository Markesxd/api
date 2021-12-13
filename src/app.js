require('dotenv').config();
const express = require('express');
const cors = require('cors');

const port = process.env.PORT;
const router = require('./routes');
const { errorHandler } = require('./middlewares');
const createTables = require('./database/createTables');

createTables();
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(port, () => console.log(`server running on port ${port}`));
