const express = require('express');
const app = express();

const port = 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/', require("./router/router.js"))

app.listen(port,()=>console.log(`The server is connected to port :: ${port}`));